def rootPath = './core'
def uiKitPath = './core/packages/'
def buttonPath = './core/packages/button'
def iconButtonPath = './core/packages/icon-button'
def checkboxPath = './core/packages/checkbox'
def datepickerPath = './core/packages/datepicker'
def dividerPath = './core/packages/divider'
def inputPath = './core/packages/input'
def labelPath = './core/packages/label'
def labelInteractivePath = './core/packages/label-interactive'
def listPath = './core/packages/list'
def listItemPath = './core/packages/list-item'
def radioPath = './core/packages/radio'
def selectPath = './core/packages/select'
def textFieldPath = './core/packages/textfield'
def warningPath = './core/packages/warning-panel'
def switcherPath = './core/packages/switcher';
def stylesPath = './core/packages/styles';
def typographyPath = './core/packages/typography';
def formControlPath = './core/packages/form-control';
def tablePath = './core/packages/table';
def tableHeadPath = './core/packages/table-head';
def tableBodyPath = './core/packages/table-body';
def tableRowPath = './core/packages/table-row';
def tableCellPath = './core/packages/table-cell';
def tableColumnsVisiblePath = './core/packages/table-columns-visible';
def progressBarPath = './core/packages/progress-bar';
def multiSelectPath = './core/packages/multi-select';
def stickyBottomPanelPath = './core/packages/sticky-bottom-panel';
def tabsPath = './core/packages/tabs';
def tabPath = './core/packages/tab';
def flexContainerPath = './core/packages/flex-container';
def gridContainerPath = './core/packages/grid-container'
def npmrc_name = '.npmrc'
def npmrc_content = ''


def jenkins_secrets_path = 'CI00747472_CI00756401/A/LOANPRIC/JEN/SECRET/KV'
def secman_configuration = [ vaultUrl: 'https://ift.secrets.sigma.sbrf.ru', vaultCredentialId: 'secman_jenkins_approle', engineVersion: 1, skipSslVerification: true, timeout: 60]

def secrets = [
    [path: "${jenkins_secrets_path}/CI_TUZ_NEXUS3", engineVersion: 1, secretValues: [
        [vaultKey: 'nexus_name_token_base64', envVar: 'NEXUS3_TOKEN_BASE64']]]
]

pipeline {
    agent {
        node {
            label 'rhel8' // Clean builder agent
        }
    }

    environment {
        PROJECT_NAME = 'Risks react UI Kit'
        OWNER_NAME = 'Denis Bykov'
    }
    options { timeout(time: 60, unit: 'MINUTES') }
    stages {
        stage('Core packages installing') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets){
                        sh 'npm -v'
                        sh 'node -v'
                        dir("${uiKitPath}") {
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
                            echo 'Core packages installing'
                            sh 'npm ci'
                            }
                        }
                    }
                }
            }
        }
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
                                writeFile(file: npmrc_name, text: npmrc_content)
                                echo 'Root packages installing'
                                sh 'npm ci'
                            }
                        }                    
                    }
                }
            }
        }
        stage('Styles theme deploy') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets){
                        dir("${stylesPath}") {
                            script {
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
        stage('Typography deploy') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets){
                        dir("${typographyPath}") {
                            script {
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
       stage("UI Kit PUBLISH") {
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
                            withVault(configuration: secman_configuration, vaultSecrets: secrets){
                                dir("${uiKitPath}") {
                                writeFile(file: npmrc_name, text: npmrc_content)
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
    post {
        always {
            cleanWs disableDeferredWipeout: true, deleteDirs: true
        }
    }
}