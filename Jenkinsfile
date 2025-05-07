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
def popupPath = './core/packages/popup'
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
        stage('Popup deploy') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets){
                        dir("${popupPath}") {
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
        stage('Datepicker deploy') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets){
                        dir("${datepickerPath}") {
                            script {
                                writeFile(file: npmrc_name, text: npmrc_content)
                                echo 'Packages installing'
                                sh 'npm i'
                            }
                        }
                        dir("${datepickerPath}") {
                            script {
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
        stage('Checkbox deploy') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets){
                        dir("${checkboxPath}") {
                            script {
                                writeFile(file: npmrc_name, text: npmrc_content)
                                echo 'Packages installing'
                                sh 'npm i'
                            }
                        }
                        dir("${checkboxPath}") {
                            script {
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
        stage('Button deploy') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets) {
                        dir("${buttonPath}") {
                            script {
                                writeFile(file: npmrc_name, text: npmrc_content)
                                echo 'Packages installing'
                                sh 'npm i'
                            }
                        }
                        dir("${buttonPath}") {
                            script {
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
        stage('IconButton  deploy') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets) {
                        dir("${iconButtonPath}") {
                            script {
                                writeFile(file: npmrc_name, text: npmrc_content)
                                echo 'Packages installing'
                                sh 'npm i'
                            }
                        }
                        dir("${iconButtonPath}") {
                            script {
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
        stage('Input, TextField  deploy') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets) {
                        dir("${inputPath}") {
                            script {
                                writeFile(file: npmrc_name, text: npmrc_content)
                                echo 'Packages installing'
                                sh 'npm i'
                            }
                        }
                        dir("${inputPath}") {
                            script {
                                echo 'Building'
                                sh 'npm run build'
                                echo 'Clean'
                                sh 'npm run clean-node-modules'
                            }
                        }
                        dir("${textFieldPath}") {
                            script {
                                writeFile(file: npmrc_name, text: npmrc_content)
                                echo 'Packages installing'
                                sh 'npm i'
                            }
                        }
                        dir("${textFieldPath}") {
                            script {
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
        stage('Label, Label interactive  deploy') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets) {
                        dir("${labelPath}") {
                            script {
                                writeFile(file: npmrc_name, text: npmrc_content)
                                echo 'Packages installing'
                                sh 'npm i'
                            }
                        }
                        dir("${labelPath}") {
                            script {
                                echo 'Building'
                                sh 'npm run build'
                                echo 'Clean'
                                sh 'npm run clean-node-modules'
                            }
                        }
                        dir("${labelInteractivePath}") {
                            script {
                                writeFile(file: npmrc_name, text: npmrc_content)
                                echo 'Packages installing'
                                sh 'npm i'
                            }
                        }
                        dir("${labelInteractivePath}") {
                            script {
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
        stage('ListItem  deploy') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets) {
                        dir("${listItemPath}") {
                            script {
                                writeFile(file: npmrc_name, text: npmrc_content)
                                echo 'Packages installing'
                                sh 'npm i'
                            }
                        }
                        dir("${listItemPath}") {
                            script {
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
        stage('List  deploy') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets) {
                        dir("${listPath}") {
                            script {
                                writeFile(file: npmrc_name, text: npmrc_content)
                                echo 'Packages installing'
                                sh 'npm i'
                            }
                        }
                        dir("${listPath}") {
                            script {
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
        stage('Radio  deploy') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets) {
                        dir("${radioPath}") {
                            script {
                                writeFile(file: npmrc_name, text: npmrc_content)
                                echo 'Packages installing'
                                sh 'npm i'
                            }
                        }
                        dir("${radioPath}") {
                            script {
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
        stage('Select  deploy') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets) {
                        dir("${selectPath}") {
                            script {
                                writeFile(file: npmrc_name, text: npmrc_content)
                                echo 'Packages installing'
                                sh 'npm i'
                            }
                        }
                        dir("${selectPath}") {
                            script {
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
        stage('Switcher  deploy') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets) {
                        dir("${switcherPath}") {
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
        stage('FormControl  deploy') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets) {
                        dir("${formControlPath}") {
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
        stage('FlexContainer  deploy') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets) {
                        dir("${flexContainerPath}") {
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
        stage('GridContainer  deploy') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets) {
                        dir("${gridContainerPath}") {
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
        stage('TableColumnsVisible  deploy') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets) {
                        dir("${tableColumnsVisiblePath}") {
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
        stage('ProgressBar  deploy') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets) {
                        dir("${progressBarPath}") {
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
        stage('MultiSelect  deploy') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets) {
                        dir("${multiSelectPath}") {
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
        stage('StickyBottomPanel  deploy') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets) {
                        dir("${stickyBottomPanelPath}") {
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
        stage('Tabs  deploy') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets) {
                        dir("${tabsPath}") {
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
        stage('Tab  deploy') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets) {
                        dir("${tabPath}") {
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
        stage('Divider  deploy') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets) {
                        dir("${dividerPath}") {
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
        stage('Table  deploy') {
            tools
            {
                nodejs 'node-22.5.1'
            }
            steps {
                nodejs('node-22.5.1') {
                    withVault(configuration: secman_configuration, vaultSecrets: secrets) {
                        dir("${tablePath}") {
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
                        dir("${tableHeadPath}") {
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
                        dir("${tableBodyPath}") {
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
                        dir("${tableRowPath}") {
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
                        dir("${tableCellPath}") {
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

                    if (IS_PUBLISH == 'Yes' || IS_PUBLISH == 'yes' || IS_PUBLISH == 'YES') {

                        nodejs('node-22.5.1') {
                             withCredentials([file(credentialsId: 'npmrc_publish', variable: 'NPMRC_CONFIG_PUBLISH')]) {
                                dir("${uiKitPath}") {
                                    withEnv(["npm_config_userconfig=${NPMRC_CONFIG_PUBLISH}"]) {
                                        sh 'npm -v'
                                        sh 'node -v'
                                        sh """
                                        npm publish
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