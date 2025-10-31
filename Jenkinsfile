def rootPath = './core'
def uiKitPath = './core/packages/'
def buttonPath = './core/packages/button'
def iconButtonPath = './core/packages/icon-button'
def checkboxPath = './core/packages/checkbox'
def datepickerPath = './core/packages/datepicker'
def dividerPath = './core/packages/divider'
def inputPath = './core/packages/input'
def labelPath = './core/packages/label'
def labelInteractivePath = './core/packages/label-interactive'
def listPath = './core/packages/list'
def listItemPath = './core/packages/list-item'
def radioPath = './core/packages/radio'
def selectPath = './core/packages/select'
def popupPath = './core/packages/popup'
def textFieldPath = './core/packages/textfield'
def warningPath = './core/packages/warning-panel'
def switcherPath = './core/packages/switcher';
def stylesPath = './core/packages/styles';
def typographyPath = './core/packages/typography';
def formControlPath = './core/packages/form-control';
def tablePath = './core/packages/table';
def tableHeadPath = './core/packages/table-head';
def tableBodyPath = './core/packages/table-body';
def tableRowPath = './core/packages/table-row';
def tableCellPath = './core/packages/table-cell';
def tableColumnsVisiblePath = './core/packages/table-columns-visible';
def progressBarPath = './core/packages/progress-bar';
def multiSelectPath = './core/packages/multi-select';
def stickyBottomPanelPath = './core/packages/sticky-bottom-panel';
def tabsPath = './core/packages/tabs';
def tabPath = './core/packages/tab';
def flexContainerPath = './core/packages/flex-container';
def gridContainerPath = './core/packages/grid-container'
def npmrc_name = '.npmrc'
def npmrc_content = ''

pipeline {
  agent any
  tools {
    nodejs 'NodeJS 22.20.0' // имя, которое ты задал в Manage Jenkins → Tools → NodeJS installations
  }

  environment {
      PROJECT_NAME = 'UI Kit'
      OWNER_NAME = 'Denis Bykov'
  }
  options { timeout(time: 60, unit: 'MINUTES') }
  stages {
      stage('Core packages installing') {
          steps {
              ansiColor('xterm') {
                  dir("${uiKitPath}") {
                      script {
                        echo 'Core packages installing'
                        sh 'npm i'
                     }
                  }
              }
          }
      }
      stage('Root packages installing') {
          steps {
              ansiColor('xterm') {
                  dir("${rootPath}") {
                      script {
                        echo 'Root packages installing'
                        sh 'npm i --legacy-peer-deps'
                     }
                  }
              }
          }
      }
        stage('Styles theme deploy') {
            steps {
                ansiColor('xterm') {
                    dir("${stylesPath}") {
                        script {
                          echo 'Packages installing'
                          sh 'npm i'
                          echo 'Building'
                          sh 'npm run build'
                          echo 'Clean'
                          sh 'npm run clean-node-modules'
                       }
                    }
                }
            }
        }
        stage('Typography deploy') {
            steps {
                ansiColor('xterm') {
                    dir("${typographyPath}") {
                        script {
                          echo 'Packages installing'
                          sh 'npm i'
                          echo 'Building'
                          sh 'npm run build'
                          echo 'Clean'
                          sh 'npm run clean-node-modules'
                       }
                    }
                }
            }
        }
        stage('Popup deploy') {
            steps {
                ansiColor('xterm') {
                    dir("${popupPath}") {
                        script {
                          echo 'Packages installing'
                          sh 'npm i'
                          echo 'Building'
                          sh 'npm run build'
                          echo 'Clean'
                          sh 'npm run clean-node-modules'
                       }
                    }
                }
            }
        }
        stage('Datepicker deploy') {
            steps {
                ansiColor('xterm') {
                    dir("${datepickerPath}") {
                        script {
                          echo 'Packages installing'
                          sh 'npm i'
                          echo 'Building'
                          sh 'npm run build'
                          echo 'Clean'
                          sh 'npm run clean-node-modules'
                       }
                    }
                }
            }
        }
        stage('Checkbox deploy') {
            steps {
                ansiColor('xterm') {
                    dir("${checkboxPath}") {
                        script {
                          echo 'Packages installing'
                          sh 'npm i'
                          echo 'Building'
                          sh 'npm run build'
                          echo 'Clean'
                          sh 'npm run clean-node-modules'
                       }
                    }
                }
            }
        }
        stage('Button deploy') {
            steps {
                ansiColor('xterm') {
                    dir("${buttonPath}") {
                        script {
                          echo 'Packages installing'
                          sh 'npm i'
                          echo 'Building'
                          sh 'npm run build'
                          echo 'Clean'
                          sh 'npm run clean-node-modules'
                       }
                    }
                }
            }
        }
        stage('IconButton deploy') {
            steps {
                ansiColor('xterm') {
                    dir("${iconButtonPath}") {
                        script {
                          echo 'Packages installing'
                          sh 'npm i'
                          echo 'Building'
                          sh 'npm run build'
                          echo 'Clean'
                          sh 'npm run clean-node-modules'
                       }
                    }
                }
            }
        }

//     stage('🧾 Install dependencies') {
//       steps {
//         ansiColor('xterm') {
//           sh 'npm ci'
//         }
//       }
//     }
//
//     stage('🧪 Run tests') {
//       steps {
//         ansiColor('xterm') {
//           sh 'npm test'
//         }
//       }
//     }
//
//     stage('🏗️ Build project') {
//       steps {
//         ansiColor('xterm') {
//           sh 'npm run build'
//         }
//       }
//     }
//
//     stage('📦 Archive artifacts') {
//       steps {
//         ansiColor('xterm') {
//           script {
//             def dirName = fileExists('dist') ? 'dist' : 'build'
//             sh '''
//               raw_path="jenkins_home/jobs/MyBit money frontend/branches/$BRANCH_NAME/builds/$BUILD_NUMBER/"
//               safe_path=$(echo "$raw_path" | sed 's/ /\\\\ /g')
//               echo ""
//               echo "cd $safe_path"
//               echo ""
//             '''
//             archiveArtifacts artifacts: "${dirName}/**", fingerprint: true
//           }
//         }
//       }
//     }

    /*
    stage('🚀 Publish npm package') {
      steps {
        ansiColor('xterm') {
          script {
            // Write .npmrc file for authentication
            writeFile file: '.npmrc', text: '''
            //registry.npmjs.org/:_authToken=${NPM_TOKEN}
            '''
            // Login to npm (if needed)
            sh 'npm whoami || npm login --token=$NPM_TOKEN'
            // Publish the package
            sh 'npm publish'
          }
        }
      }
    }
    */
  }
}