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

def secret_name = 'CREDIT_RISKS_CREDENTIALS'
def jenkins_secrets_path = 'CI00747472_CI00756401/A/LOANPRIC/JEN/SECRET/KV'
def vault_url = 'https://ift.secrets.sigma.sbrf.ru'
def secman_configuration = [ vaultUrl: vault_url, vaultCredentialId: 'secman_jenkins_approle', ngineVersion: 1, skipSslVerification: true, timeout: 60]
def secrets = [
        [path: "${jenkins_secrets_path}/CREDIT_RISKS_CREDENTIALS", engineVersion: 1, secretValues: [
            [vaultKey: 'Username', envVar: 'CORPORATE_NUGET_FEED_USR'],
            [vaultKey: 'Password', envVar: 'CORPORATE_NUGET_FEED_PSW']]],
        [path: "${jenkins_secrets_path}/CAB-SA-CI000101", engineVersion: 1, secretValues: [
            [vaultKey: 'username', envVar: 'CI_TUZ_USERNAME'],
            [vaultKey: 'password', envVar: 'CI_TUZ_PASSWORD']]],
        [path: "${jenkins_secrets_path}/CAB-SA-CI000101", engineVersion: 1, secretValues: [
            [vaultKey: 'username', envVar: 'CD_TUZ_USERNAME'],
            [vaultKey: 'password', envVar: 'CD_TUZ_PASSWORD']]],
        [path: "${jenkins_secrets_path}/SBER_OSC", engineVersion: 1, secretValues: [
            [vaultKey: 'username', envVar: 'SBER_OSC_USERNAME'],
            [vaultKey: 'token', envVar: 'SBER_OSC_TOKEN'],
            [vaultKey: 'token_base64', envVar: 'SBER_OSC_TOKEN_BASE64']]]


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
            steps {
                script {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets){

                        def npmrc_token = "${CI_TUZ_USERNAME}:${CI_TUZ_PASSWORD}".bytes.encodeBase64().toString()
                        def npmrc_name = 'NPMRC_CONFIG'

                        def npmrc_content = """\
//sberosc.sigma.sbrf.ru/repo/npm/:_authToken=${SBER_OSC_TOKEN_BASE64}
registry = https://sberosc.sigma.sbrf.ru/repo/npm/
@sber-riski-cib-ui:registry = https://nexus.sigma.sbrf.ru/nexus/content/repositories/npm-corp/
strict-ssl=false
always-auth=true
_auth=${npmrc_token}
"""

                        writeFile(file: npmrc_name, text: npmrc_content)
                        def npmrc_path = sh(returnStdout: true, script: "readlink -f ${npmrc_name}")
                        echo 'Packages installing'
                        sh 'npm i'
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
