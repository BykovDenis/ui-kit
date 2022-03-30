
def frontend_file = './packages/'

pipeline {
    agent {
        node {
            label 'Linux_Default' //Сборка должна происходить на централизованных агентах из пула Linux_Default
        }
    }
    options { timeout(time: 60, unit: 'MINUTES') }
    stages {
        stage('NPM package install') {
            tools
            {
                nodejs 'v16.3.0-linux-x64'
            }
            steps {
                sh 'chmod a+x ./build.sh'
                sh 'npm -v'
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
//         stage("NPM package deploy with npm") {
//             steps {
//                 nodejs('v16.3.0-linux-x64') {
//                     withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
//                         dir("${frontend_file}") {
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
    post {
        always {
            cleanWs disableDeferredWipeout: true, deleteDirs: true //Очистка workspace Подробнее https://jenkins.io/doc/pipeline/steps/ws-cleanup/
        }
    }
}
