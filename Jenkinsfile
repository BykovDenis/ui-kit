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
                        dir("${datepickerPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Datepicker install packages'
                                        sh 'npm i --legacy-peer-deps'
                                    }
                            }
                        }
                        dir("${dividerPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Divider install packages'
                                        sh 'npm i --legacy-peer-deps'
                                    }
                            }
                        }
                        dir("${inputPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Input install packages'
                                        sh 'npm i --legacy-peer-deps'
                                    }
                            }
                        }
                        dir("${labelPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Label install packages'
                                        sh 'npm i --legacy-peer-deps'
                                    }
                            }
                        }
                        dir("${listPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'List install packages'
                                        sh 'npm i --legacy-peer-deps'
                                    }
                            }
                        }
                        dir("${listItemPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'List item install packages'
                                        sh 'npm i --legacy-peer-deps'
                                    }
                            }
                        }
                        dir("${radioPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Radio install packages'
                                        sh 'npm i --legacy-peer-deps'
                                    }
                            }
                        }
                        dir("${selectPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Select install packages'
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
                        dir("${warningPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Warning panel install packages'
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
                        dir("${buttonPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Button build packages'
                                        sh 'npm run build'
                                    }
                            }
                        }
                        dir("${checkboxPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Checkbox build packages'
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
                        dir("${dividerPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Divider build packages'
                                        sh 'npm run build'
                                    }
                            }
                        }
                        dir("${inputPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Input build packages'
                                        sh 'npm run build'
                                    }
                            }
                        }
                        dir("${labelPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Label build packages'
                                        sh 'npm run build'
                                    }
                            }
                        }
                        dir("${listPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'List build packages'
                                        sh 'npm run build'
                                    }
                            }
                        }
                        dir("${listItemPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'List item build packages'
                                        sh 'npm run build'
                                    }
                            }
                        }
                        dir("${radioPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Radio build packages'
                                        sh 'npm run build'
                                    }
                            }
                        }
                        dir("${selectPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Select build packages'
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
                        dir("${warningPath}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                                    script {
                                        echo 'Warning panel build packages'
                                        sh 'npm run build'
                                    }
                            }
                        }
                    }
                }
            }
        }
        stage("The packages publish") {
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
            cleanWs disableDeferredWipeout: true, deleteDirs: true //Очистка workspace Подробнее https://jenkins.io/doc/pipeline/steps/ws-cleanup/
        }
    }
}
