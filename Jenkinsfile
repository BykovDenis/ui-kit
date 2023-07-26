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


pipeline {
    agent {
        node {
            label 'Linux_Default' //Сборка должна происходить на централизованных агентах из пула Linux_Default tkles-jenci0057
        }
    }

    environment {
        PROJECT_NAME = 'Risks react UI Kit'
        OWNER_NAME = 'Denis Bykov'
    }
    options { timeout(time: 60, unit: 'MINUTES') }
    stages {
        stage('Root packages installing') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        sh 'npm -v'
                        sh 'node -v'
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
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
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
        stage('Typography deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${typographyPath}") {
                                script {
                                    echo 'Packages installing'
                                    sh 'npm i'
                                }
                            }
                             dir("${rootPath}") {
                                 script {
                                     echo 'Testing'
                                     sh 'npm test /packages/typography/__tests__'
                                 }
                             }
                            dir("${typographyPath}") {
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
        }
        stage('Datepicker deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${datepickerPath}") {
                                script {
                                    echo 'Packages installing'
                                    sh 'npm i'
                                }
                            }
                             dir("${rootPath}") {
                                 script {
                                     echo 'Testing'
                                     sh 'npm test /packages/datepicker/__tests__'
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
        }
        stage('Checkbox deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${checkboxPath}") {
                                script {
                                    echo 'Packages installing'
                                    sh 'npm i'
                                }
                            }
                             dir("${rootPath}") {
                                 script {
                                     echo 'Testing'
                                     sh 'npm test /packages/checkbox/__tests__'
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
        }
        stage('Button deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${buttonPath}") {
                                script {
                                    echo 'Packages installing'
                                    sh 'npm i'
                                }
                            }
                             dir("${rootPath}") {
                                 script {
                                     echo 'Testing'
                                     sh 'npm test /packages/button/__tests__'
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
        }
        stage('IconButton deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${iconButtonPath}") {
                                script {
                                    echo 'Packages installing'
                                    sh 'npm i'
                                }
                            }
                             dir("${rootPath}") {
                                 script {
                                     echo 'Testing'
                                     sh 'npm test /packages/icon-button/__tests__'
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
        }
        stage('Input deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${inputPath}") {
                                script {
                                    echo 'Packages installing'
                                    sh 'npm i'
                                }
                            }
                             dir("${rootPath}") {
                                 script {
                                     echo 'Testing'
                                     sh 'npm test /packages/input/__tests__'
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
                        }
                    }
                }
            }
        }
        stage('Label deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${labelPath}") {
                                script {
                                    echo 'Packages installing'
                                    sh 'npm i'
                                }
                            }
                             dir("${rootPath}") {
                                 script {
                                     echo 'Testing'
                                     sh 'npm test /packages/label/__tests__'
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
                        }
                    }
                }
            }
        }
        stage('Label interactive deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${labelInteractivePath}") {
                                script {
                                    echo 'Packages installing'
                                    sh 'npm i'
                                }
                            }
                             dir("${rootPath}") {
                                 script {
                                     echo 'Testing'
                                     sh 'npm test /packages/label/__tests__'
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
        }
        stage('ListItem deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${listItemPath}") {
                                script {
                                    echo 'Packages installing'
                                    sh 'npm i'
                                }
                            }
                             dir("${rootPath}") {
                                 script {
                                     echo 'Testing'
                                     sh 'npm test /packages/list-item/__tests__'
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
        }
        stage('List deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${listPath}") {
                                script {
                                    echo 'Packages installing'
                                    sh 'npm i'
                                }
                            }
                             dir("${rootPath}") {
                                 script {
                                     echo 'Testing'
                                     sh 'npm test /packages/list/__tests__'
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
        }
        stage('Radio deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${radioPath}") {
                                script {
                                    echo 'Packages installing'
                                    sh 'npm i'
                                }
                            }
                             dir("${rootPath}") {
                                 script {
                                     echo 'Testing'
                                     sh 'npm test /packages/radio/__tests__'
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
        }
        stage('Select deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${selectPath}") {
                                script {
                                    echo 'Packages installing'
                                    sh 'npm i'
                                }
                            }
                             dir("${rootPath}") {
                                 script {
                                     echo 'Testing'
                                     sh 'npm test /packages/select/__tests__'
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
        }
        stage('Textfield deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${textFieldPath}") {
                                script {
                                    echo 'Packages installing'
                                    sh 'npm i'
                                }
                            }
                             dir("${rootPath}") {
                                 script {
                                     echo 'Testing'
                                     sh 'npm test /packages/switcher/__tests__'
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
        }
        stage('Switcher deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${switcherPath}") {
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
        stage('FormControl deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${formControlPath}") {
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
        stage('FlexContainer deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${flexContainerPath}") {
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
        stage('TableColumnsVisible deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${tableColumnsVisiblePath}") {
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
        stage('ProgressBar deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${progressBarPath}") {
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
        stage('MultiSelect deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${multiSelectPath}") {
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
        stage('StickyBottomPanel deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${stickyBottomPanelPath}") {
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
        stage('Tabs deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${tabsPath}") {
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
        stage('Tab deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${tabPath}") {
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
        stage('Divider deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${dividerPath}") {
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
        stage('Table deploy') {
            tools
            {
                nodejs 'node-v17.5.0-linux-x64'
            }
            steps {
                nodejs('node-v17.5.0-linux-x64') {
                    withCredentials([file(credentialsId: 'npmrc', variable: 'NPMRC_CONFIG')]) {
                        withEnv(["npm_config_userconfig=${NPMRC_CONFIG}"]) {
                            dir("${tablePath}") {
                                script {
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
                nodejs 'node-v17.5.0-linux-x64'
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
                  if (IS_PUBLISH == 'Yes') {
                      nodejs('node-v17.5.0-linux-x64') {
                          withCredentials([file(credentialsId: 'npmrc_publish', variable: 'NPMRC_CONFIG_PUBLISH')]) {
                              dir("${uiKitPath}") {
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
