def rootPath = './icon'
def uiKitIconPath = './icon/'

pipeline {
    agent {
        node {
            label 'rhel8&&!delta4' // Clean builder agent //Сборка должна происходить на централизованных агентах из пула Linux_Default
        }
    }

    environment {
        PROJECT_NAME = 'Risks react UI Icon'
        OWNER_NAME = 'Denis Bykov'
    }
    options { timeout(time: 60, unit: 'MINUTES') }
    stages {
        stage('Root packages installing') {
            tools
            {
                nodejs 'node-v20.9.0-linux-x64'
            }
            steps {
                nodejs('node-v20.9.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        sh 'npm -v'
                        sh 'node -v'
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${rootPath}") {
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
        stage("UI Icon PUBLISH") {
            tools
            {
                nodejs 'node-v20.9.0-linux-x64'
            }
            steps {
                script {

                    def IS_PUBLISH = input(
                    message: 'Publish library UI KIt?',
                    ok: 'Yes',
                    no: 'No',
                    parameters: [
                      string(name: 'IS_PUBLISH', defaultValue: 'No', description: 'Publish library UI KIt?')
                    ]
                    )
                    if (IS_PUBLISH == 'Yes' || IS_PUBLISH == 'yes') {

                          nodejs('node-v20.9.0-linux-x64') {
                            withCredentials([file(credentialsId: 'npmrc_publish', variable: 'NPMRC_CONFIG_PUBLISH')]) {
                                dir("${uiKitIconPath}") {
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