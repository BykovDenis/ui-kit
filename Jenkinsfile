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

pipeline {
    agent {
        node {
            label 'Linux_Default' //Сборка должна происходить на централизованных агентах из пула Linux_Default
        }
    }
    options { timeout(time: 60, unit: 'MINUTES') }
    stages {
        stage('Root project npm install') {
            tools
            {
                nodejs 'v16.3.0-linux-x64'
            }
            steps {
                sh 'npm -v'
                nodejs('v16.3.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        dir("${rootPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {

                                    script {
                                        sh "echo ${NPMRC_CONFIG}"
                                        sh 'npm i --legacy-peer-deps'
                                    }
                            }
                        }
                    }
                }
            }
        }
        stage('Ui-kit project npm install') {
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
                        dir("${buttonPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Button install packages'
                                        sh 'npm i --legacy-peer-deps'
                                    }
                            }
                        }
                        dir("${checkboxPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Checkbox install packages'
                                        sh 'npm i --legacy-peer-deps'
                                    }
                            }
                        }
                    }
                }
            }
        }
        stage('Ui-kit project npm build') {
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
                                    sh 'npm run build'
                                }
                            }
                        }
                        dir("${buttonPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                script {
                                    sh 'npm run build'
                                }
                            }
                        }
                    }
                }
            }
        }
//         stage("NPM package deploy with npm") {
//             tools
//             {
//                 nodejs 'v16.3.0-linux-x64'
//             }
//             steps {
//                 nodejs('v16.3.0-linux-x64') {
//                     withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
//                         dir("${uiKitPath}") {
//                             withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
//                                 sh """
//                                     npm publish --registry https://nexus.sigma.sbrf.ru/nexus/content/repositories/npm-corp/
//                                 """
//                             }
//                         }
//                     }
//                 }
//             }
//         }
    }
//     post {
//         always {
//             cleanWs disableDeferredWipeout: true, deleteDirs: true //Очистка workspace Подробнее https://jenkins.io/doc/pipeline/steps/ws-cleanup/
//         }
//     }
}
