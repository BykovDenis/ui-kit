def corePath = './core'
def uiKitPath = './core/packages'
def demoAppPath = './demo-app'
def iconPath = './icon'
def iconStylesPath = './icon/styles'
// --prefer-offline reuses the agent's npm cache, --no-audit/--no-fund cut
// pointless network round-trips on every build
def npmFlags = '--legacy-peer-deps --prefer-offline --no-audit --no-fund'

pipeline {
  agent any
  tools {
    nodejs 'NodeJS 24.14.1'
  }

  environment {
    PROJECT_NAME = 'UI Kit'
    OWNER_NAME = 'Denis Bykov'
  }
  options { timeout(time: 60, unit: 'MINUTES') }

  stages {
    stage('Install') {
      steps {
        ansiColor('xterm') {
          dir("${uiKitPath}") {
            sh "npm i ${npmFlags}"
          }
          dir("${corePath}") {
            sh "npm ci ${npmFlags}"
          }
          dir("${demoAppPath}") {
            sh "npm ci ${npmFlags}"
          }
        }
      }
    }

    stage('Unit tests') {
      steps {
        ansiColor('xterm') {
          dir("${corePath}") {
            sh 'npm test'
          }
        }
      }
    }

    stage('Build packages') {
      // one stage instead of ~30 sequential per-component copies: build.sh
      // already builds every package in order, and the publish stage needs
      // the freshly built dist anyway
      steps {
        ansiColor('xterm') {
          dir("${corePath}") {
            sh 'npm run build-packages'
          }
          dir("${iconPath}") {
            sh "npm ci ${npmFlags}"
            sh 'npm run build'
          }
          // no install here on purpose: styles has no deps of its own
          // and builds with the icon toolchain via module resolution;
          // a local node_modules with a second rollup breaks the build
          dir("${iconStylesPath}") {
            sh 'npm run build'
          }
        }
      }
    }

    stage('E2E tests (Cypress)') {
      steps {
        ansiColor('xterm') {
          dir("${corePath}") {
            sh '''
              set -e
              # e2e must test the code from this build, not the registry:
              # otherwise a release that changes component behavior can never
              # pass e2e before it is published. Pack both tarballs and
              # overlay them into demo-app (--no-save keeps the lockfile).
              TARBALL_DIR=$(mktemp -d)
              cd ../core/packages
              npm pack --pack-destination "$TARBALL_DIR"
              cd ../../icon
              npm pack --pack-destination "$TARBALL_DIR"
              cd ../demo-app
              npm i --no-save --legacy-peer-deps "$TARBALL_DIR"/dbykov-ui-kit-*.tgz
              npm run start -- --host 0.0.0.0 --port 3030 > /tmp/demo-app.log 2>&1 &
              DEMO_PID=$!
              cd ../core

              cleanup() {
                kill "$DEMO_PID" 2>/dev/null || true
                wait "$DEMO_PID" 2>/dev/null || true
              }
              trap cleanup EXIT

              i=0
              until curl -sf http://localhost:3030 >/dev/null; do
                i=$((i + 1))
                if [ "$i" -ge 60 ]; then
                  echo "Demo app did not start on http://localhost:3030"
                  cat /tmp/demo-app.log || true
                  exit 1
                fi
                sleep 2
              done

              npx cypress run --browser chromium --headless
            '''
          }
        }
      }
    }

    stage('Publish') {
      steps {
        ansiColor('xterm') {
          script {
            def isPublish = false
            try {
              // do not hold the executor forever waiting for a human
              timeout(time: 15, unit: 'MINUTES') {
                def answer = input(
                  message: 'Publish @dbykov-ui-kit/core and @dbykov-ui-kit/icon to npm?',
                  ok: 'Yes',
                  parameters: [
                    string(name: 'IS_PUBLISH', defaultValue: 'No', description: 'Type Yes to publish')
                  ]
                )
                isPublish = answer?.toLowerCase() == 'yes'
              }
            } catch (err) {
              echo 'Publish skipped (no confirmation within 15 minutes)'
            }
            if (isPublish) {
              withCredentials([string(credentialsId: 'NPM_TOKEN', variable: 'NPM_TOKEN')]) {
                dir("${uiKitPath}") {
                  sh 'npm -v && node -v'
                  writeFile file: '.npmrc', text: "//registry.npmjs.org/:_authToken=${NPM_TOKEN}"
                  sh 'npm whoami'
                  // idempotent: a version that is already in the registry is
                  // skipped instead of failing the stage
                  sh '''
                    VERSION=$(node -p "require('./package.json').version")
                    if npm view "@dbykov-ui-kit/core@$VERSION" version >/dev/null 2>&1; then
                      echo "core@$VERSION already published, skipping"
                    else
                      npm publish --access public
                    fi
                  '''
                  // a stale token file here later shadows the developer's
                  // own auth and breaks manual publishes with a 404
                  sh 'rm -f .npmrc'
                }
                // icon dist is already built by the Build packages stage
                dir("${iconPath}") {
                  writeFile file: '.npmrc', text: "//registry.npmjs.org/:_authToken=${NPM_TOKEN}"
                  sh '''
                    VERSION=$(node -p "require('./package.json').version")
                    if npm view "@dbykov-ui-kit/icon@$VERSION" version >/dev/null 2>&1; then
                      echo "icon@$VERSION already published, skipping"
                    else
                      npm publish --access public
                    fi
                  '''
                  sh 'rm -f .npmrc'
                }
              }
            }
          }
        }
      }
    }
  }
}
