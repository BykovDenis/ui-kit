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
def formControlPath = './packages/form-control';

pipeline {
    agent {
        node {
            label 'tkles-jenci0057' //Сборка должна происходить на централизованных агентах из пула Linux_Default
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
                nodejs('v16.3.0-linux-x64') {
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
        stage('Datepicker deploy') {
            tools
            {
                nodejs 'v16.3.0-linux-x64'
            }
            steps {
                nodejs('v16.3.0-linux-x64') {
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
                nodejs 'v16.3.0-linux-x64'
            }
            steps {
                nodejs('v16.3.0-linux-x64') {
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
                nodejs 'v16.3.0-linux-x64'
            }
            steps {
                nodejs('v16.3.0-linux-x64') {
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
                nodejs 'v16.3.0-linux-x64'
            }
            steps {
                nodejs('v16.3.0-linux-x64') {
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
                nodejs 'v16.3.0-linux-x64'
            }
            steps {
                nodejs('v16.3.0-linux-x64') {
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
                nodejs 'v16.3.0-linux-x64'
            }
            steps {
                nodejs('v16.3.0-linux-x64') {
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
        stage('ListItem deploy') {
            tools
            {
                nodejs 'v16.3.0-linux-x64'
            }
            steps {
                nodejs('v16.3.0-linux-x64') {
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
                nodejs 'v16.3.0-linux-x64'
            }
            steps {
                nodejs('v16.3.0-linux-x64') {
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
                nodejs 'v16.3.0-linux-x64'
            }
            steps {
                nodejs('v16.3.0-linux-x64') {
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
                nodejs 'v16.3.0-linux-x64'
            }
            steps {
                nodejs('v16.3.0-linux-x64') {
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
                nodejs 'v16.3.0-linux-x64'
            }
            steps {
                nodejs('v16.3.0-linux-x64') {
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
                nodejs 'v16.3.0-linux-x64'
            }
            steps {
                nodejs('v16.3.0-linux-x64') {
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
                nodejs 'v16.3.0-linux-x64'
            }
            steps {
                nodejs('v16.3.0-linux-x64') {
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
        stage("UI Kit PUBLISH") {
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
            cleanWs disableDeferredWipeout: true, deleteDirs: true
        }
    }
}
