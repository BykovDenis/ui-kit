
def frontend_file = './packages/'

pipeline {
    agent {
        node {
            label 'Linux_Default' //Сборка должна происходить на централизованных агентах из пула Linux_Default
        }
    }
    options {
        timestamps()
        timeout(time: 1, unit: 'HOURS')
//         buildDiscarder(logRotator(artifactDaysToKeepStr: '7', artifactNumToKeepStr: '10', daysToKeepStr: '7', numToKeepStr: '50'))
    }
//     environment {
//         yarnHome = tool name: 'v16.3.0-linux-x64', type: 'com.cloudbees.jenkins.plugins.customtools.CustomTool'
//     }
    stages {
        stage("NPM package install") {
            steps {
                nodejs('v16.3.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        dir("${frontend_file}") {
                            withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {

                                    script {
                                        sh "echo ${NPMRC_CONFIG}"
                                        sh 'npm whoami'
                                        sh 'npm i --legacy-peer-deps --registry https://nexus.sigma.sbrf.ru/nexus/content/repositories/npm-corp/'
                                    }
                            }
                        }
                    }
                }
            }
        }
        stage("NPM package deploy with npm") {
            steps {
                nodejs('v16.3.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        dir("${frontend_file}") {
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

//         stage("NPM package deploy with yarn") {
//             steps {
//                 nodejs('v10.15.3-linux-x64') {
//                     withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
//                         withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
//                             sh """
//                                 ${yarnHome}/bin/yarn version --new-version ${BUILD_VERSION}
//                                 ${yarnHome}/bin/yarn publish
//                             """
//                         }
//                     }
//                 }
//             }
//         }
    }
    post {
        always {
            cleanWs disableDeferredWipeout: true, deleteDirs: true //Очистка workspace Подробнее https://jenkins.io/doc/pipeline/steps/ws-cleanup/
        }
    }
}
