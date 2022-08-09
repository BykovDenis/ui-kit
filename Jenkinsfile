def rootPath = '.'
def uiKitPath = './packages/'
def buttonPath = './packages/button'
def iconButtonPath = './packages/icon-button'
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
            label 'tkles-jenci0057' //Сборка должна происходить на централизованных агентах из пула Linux_Default
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
            steps {
                nodejs('v16.3.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        sh 'npm -v'
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${rootPath}") {
                                script {
                                    echo 'Root packages installing'
                                    sh 'npm i'
                                }
                            }
                            dir("${uiKitPath}") {
                                script {
                                    echo 'Core packages installing'
                                    sh 'npm i'
                                }
                            }
                        }
                    }
                }
            }
        }
        stage('Styles theme deploy') {
            tools
            {
                nodejs 'v16.3.0-linux-x64'
            }
            steps {
                nodejs('v16.3.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
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
            }
        }
        stage("UI Kit PUBLISH") {
            tools
            {
                nodejs 'v16.3.0-linux-x64'
            }
            steps {
                nodejs('v16.3.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        dir("${uiKitPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                sh """
                                    npm publish --registry https://nexus.sigma.sbrf.ru/nexus/content/repositories/npm-corp/
                                """
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
