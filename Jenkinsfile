def rootPath = '.'
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
def switcherPath = './packages/switcher';
def stylesPath = './packages/styles';

pipeline {
    agent {
        node {
            label 'Linux_Default' //Сборка должна происходить на централизованных агентах из пула Linux_Default
        }
    }

    environment {
        PROJECT_NAME = 'Riski react UI Kit'
        OWNER_NAME = 'Denis Bykov'
    }
    options { timeout(time: 60, unit: 'MINUTES') }
    stages {
        stage('Root packages installing') {
            tools
            {
                nodejs 'v16.3.0-linux-x64'
            }
            dir("${rootPath}") {
                withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                        script {
                            echo 'Root install packages'
                            sh 'npm i --legacy-peer-deps'
                        }
                }
            }
            dir("${uiKitPath}") {
                withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                        script {
                            echo 'Root install packages'
                            sh 'npm i --legacy-peer-deps'
                        }
                }
            }
        }
        stage('Deploy Button component') {
            tools
            {
                nodejs 'v16.3.0-linux-x64'
            }
            steps {
                sh 'npm -v'
                nodejs('v16.3.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        dir("${buttonPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Packages installing'
                                        sh 'npm i --legacy-peer-deps'
                                    }
                            }
                        }
                        dir("${uiKitPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Component testing'
                                        sh 'npm run test -- --updateSnapshot'
                                    }
                            }
                        }
                        dir("${buttonPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Component building'
                                        sh 'npm run build'
                                    }
                            }
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Packages cleaning'
                                        sh 'npm run clean-node-modules'
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
