def rootPath = './icons'
def uiIconsPath = './icons/packages'
def chevronDownIconPath = './icons/chevron-down-icon'
def firstPagePath = './icons/first-page-icon'
def lastPagePath = './icons/last-page-icon'
def keyboardArrowLeftIconPath = './icons/keyboard-arrow-left-icon'
def keyboardArrowRightIconPath = './icons/keyboard-arrow-right-icon'

pipeline {
    agent {
        node {
            label 'Linux_Default' //Сборка должна происходить на централизованных агентах из пула Linux_Default tkles-jenci0057
        }
    }

    environment {
        PROJECT_NAME = 'Risks react UI icons'
        OWNER_NAME = 'Denis Bykov'
    }
    options { timeout(time: 60, unit: 'MINUTES') }
    stages {
        stage('Root packages installing') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        sh 'npm -v'
                        sh 'node -v'
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${rootPath}") {
                                script {
                                    echo 'Root packages installing'
                                    sh 'npm i'
                                }
                            }
                            dir("${uiIconsPath}") {
                                script {
                                    echo 'Icons packages installing'
                                    sh 'npm i'
                                }
                            }
                        }
                    }
                }
            }
        }
        stage('Root icons deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${uiIconsPath}") {
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
            }
        }
        stage('Icons deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            echo 'ChevronDownIcon'
                            dir("${chevronDownIconPath}") {
                                script {
                                    echo 'Packages installing'
                                    sh 'npm i'
                                    echo 'Building'
                                    sh 'npm run build'
                                    echo 'Clean'
                                    sh 'npm run clean-node-modules'
                                }
                            }
                            echo 'FirstPageIcon'
                            dir("${firstPagePath}") {
                                script {
                                    echo 'Packages installing'
                                    sh 'npm i'
                                    echo 'Building'
                                    sh 'npm run build'
                                    echo 'Clean'
                                    sh 'npm run clean-node-modules'
                                }
                            }
                            echo 'LastPageIcon'
                            dir("${lastPagePath}") {
                                script {
                                    echo 'Packages installing'
                                    sh 'npm i'
                                    echo 'Building'
                                    sh 'npm run build'
                                    echo 'Clean'
                                    sh 'npm run clean-node-modules'
                                }
                            }
                            echo 'KeyboardArrowLeftIcon'
                            dir("${keyboardArrowLeftIconPath}") {
                                script {
                                    echo 'Packages installing'
                                    sh 'npm i'
                                    echo 'Building'
                                    sh 'npm run build'
                                    echo 'Clean'
                                    sh 'npm run clean-node-modules'
                                }
                            }
                            echo 'KeyboardArrowRightIcon'
                            dir("${keyboardArrowRightIconPath}") {
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
            }
        }
         stage("UI Icons PUBLISH") {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                script {

                  def IS_PUBLISH = input(
                    message: 'Publish library UI Icons?',
                    ok: 'Yes',
                    no: 'No',
                    parameters: [
                      string(name: 'IS_PUBLISH', defaultValue: 'No', description: 'Publish library UI Icons?')
                    ]
                  )
                  if (IS_PUBLISH == 'Yes') {
                      nodejs('node-v17.5.0-linux-x64') {
                          withCredentials([file(credentialsId: 'npmrc_publish', variable: 'NPMRC_CONFIG_PUBLISH')]) {
                              dir("${uiIconsPath}") {
                                  withEnv(["npm_config_userconfig=${NPMRC_CONFIG_PUBLISH}"]) {
                                      sh """
                                          npm publish --registry https://nexus-ci.delta.sbrf.ru/repository/npm-release/
                                      """
                                  }
                              }
                          }
                      }
                   }
                }
            }
        }
    }
    post {
        always {
            cleanWs disableDeferredWipeout: true, deleteDirs: true
        }
    }
}
