def uiKitPath = './packages/'
def buttonPath = './packages/button'
def checkboxPath = './packages/checkbox'
def datepickerPath = './packages/datepicker'
def dividerPath = './packages/divider'
def inputPath = './packages/input'
def labelPath = './packages/label'
def listPath = './packages/list'
def listItemPath = './packages/list-item'
def radioPath = './packages/radio'
def selectPath = './packages/select'
def textFieldPath = './packages/textfield'
def warningPath = './packages/warning-panel'

pipeline {
    agent {
        node {
            label 'sbt-oainr-0055' // 'Linux_Default' //Сборка должна происходить на централизованных агентах из пула Linux_Default
        }
    }

    environment {
        PROJECT_NAME = 'Riski react UI Kit'
        OWNER_NAME = 'Denis Bykov'
    }
    options { timeout(time: 60, unit: 'MINUTES') }
    stages {
        stage('The packages install') {
            tools
            {
                nodejs 'v16.3.0-linux-x64'
            }
            steps {
                sh 'npm -v'
                nodejs('v16.3.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        dir("${uiKitPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Root install packages'
                                        sh 'npm i --legacy-peer-deps'
                                    }
                            }
                        }
                        dir("${textFieldPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'TextField install packages'
                                        sh 'npm i --legacy-peer-deps'
                                    }
                            }
                        }
                        dir("${datepickerPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Datepicker install packages'
                                        sh 'npm i --legacy-peer-deps'
                                    }
                            }
                        }
                    }
                }
            }
        }
        stage('The packages build') {
            tools
            {
                nodejs 'v16.3.0-linux-x64'
            }
            steps {
                nodejs('v16.3.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        dir("${uiKitPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Root build packages'
                                        sh 'npm run build'
                                    }
                            }
                        }
                        dir("${textFieldPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'TextField build packages'
                                        sh 'npm run build'
                                    }
                            }
                        }
                        dir("${datepickerPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Datepicker build packages'
                                        sh 'npm run build'
                                    }
                            }
                        }
                    }
                }
            }
        }
        stage('The clean node_modules directories') {
            tools
            {
                nodejs 'v16.3.0-linux-x64'
            }
            steps {
                sh 'npm -v'
                nodejs('v16.3.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        dir("${uiKitPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Root clean node_modules'
                                        sh 'npm i --legacy-peer-deps'
                                    }
                            }
                        }
                        dir("${textFieldPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'TextField  clean node_modules'
                                        sh 'npm i --legacy-peer-deps'
                                    }
                            }
                        }
                        dir("${datepickerPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Datepicker clean node_modules'
                                        sh 'npm i --legacy-peer-deps'
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
