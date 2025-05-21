def rootPath = './icon'
def uiKitIconPath = './icon/'
def uiKitStylesPath = './icon/styles/'

def vault_namespace = 'CI00747472_CI04634153'

// Основная папка с секретами
def jenkins_secrets_path = "${vault_namespace}/A/CI02196403/JEN/MAIN/KV"

// Путь до ТУЗа в secman (смотреть на DevOps портал)
def vault_tuz_path = "${vault_namespace}/AD/delta.sbrf.ru/creds/cab-sa-dvo09147"

def secman_configuration = [
    vaultUrl: 'https://t.secrets.delta.sbrf.ru',
    vaultCredentialId: 'cab-sa-dvo09147_CI00747472_CI04634153',
    vaultNamespace: vault_namespace,
    engineVersion: 1,
    skipSslVerification: true,
    timeout: 60]

def secrets = [
    [path: "$jenkins_secrets_path/CI_TUZ_NEXUS3", engineVersion: 1, secretValues: [
        [vaultKey: 'uikit_publish_token_base64', envVar: 'NEXUS3_TOKEN_BASE64'],
        [vaultKey: 'uikit_publish_token_base64', envVar: 'UIKIT_PUBLISH_TOKEN_BASE64']]]
]

pipeline {
    agent {
        node {
            label 'clearAgent&&rhel8'
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
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                     withVault(configuration: secman_configuration, vaultSecrets: secrets){
                        sh 'npm -v'
                        sh 'node -v'
                        dir("${rootPath}") {
                            script {

                              npmrc_content = """\
//nexus-ci.delta.sbrf.ru/repository/npm-release:_auth=${NEXUS3_TOKEN_BASE64}
//nexus-ci.delta.sbrf.ru/repository/npm-all/:_auth=${NEXUS3_TOKEN_BASE64}
audit=false
always-auth=true
fetch-retries=5
strict-ssl=false
save-exact=true
legacy-peer-deps=true
"""

                              writeFile(file: npmrc_name, text: npmrc_content)
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
        stage('Styles packages installing') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets){
                        sh 'npm -v'
                        sh 'node -v'
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            script {
                              npmrc_content = """\
//nexus-ci.delta.sbrf.ru/repository/npm-release:_auth=${NEXUS3_TOKEN_BASE64}
//nexus-ci.delta.sbrf.ru/repository/npm-all/:_auth=${NEXUS3_TOKEN_BASE64}
audit=false
always-auth=true
fetch-retries=5
strict-ssl=false
save-exact=true
legacy-peer-deps=true
"""
                              writeFile(file: npmrc_name, text: npmrc_content)
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
        stage("UI Icon PUBLISH") {
            tools
            {
                nodejs 'node-22.5.1'
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

                          nodejs('node-22.5.1') {
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