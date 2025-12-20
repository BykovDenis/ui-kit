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

pipeline {
  agent any
  tools {
    nodejs 'NodeJS 22.20.0' // имя, которое ты задал в Manage Jenkins → Tools → NodeJS installations
  }

  environment {
      PROJECT_NAME = 'UI Kit'
      OWNER_NAME = 'Denis Bykov'
  }
  options { timeout(time: 60, unit: 'MINUTES') }
  stages {
        stage('Core packages installing') {
            steps {
                ansiColor('xterm') {
                    dir("${uiKitPath}") {
                        script {
                            echo 'Core packages installing'
                            sh 'npm i'
                        }
                    }
                }
            }
        }
        stage('Root packages installing') {
            steps {
                ansiColor('xterm') {
                    dir("${rootPath}") {
                        script {
                            echo 'Root packages installing'
                            sh 'npm i --legacy-peer-deps'
                        }
                    }
                }
            }
        }
        stage('Unit tests running') {
            steps {
                ansiColor('xterm') {
                    dir("${rootPath}") {
                        script {
                          echo 'Unit tests running'
                          sh 'npm test'
                       }
                    }
                }
            }
        }
        stage('E2E tests (Headless Chrome)') {
          agent {
            docker {
              image 'cypress/browsers:node22.0.0-chrome124'
              args '--shm-size=1g'
            }
          }
          steps {
            ansiColor('xterm') {
              dir("${rootPath}") {
                script {
                  echo 'E2E tests running (Headless Chrome)'
                  sh 'npx cypress run --browser chrome'
                }
              }
            }
          }
        }
        stage('Styles theme deploy') {
            steps {
                ansiColor('xterm') {
                    dir("${stylesPath}") {
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
        stage('Typography deploy') {
            steps {
                ansiColor('xterm') {
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
        stage('Popup deploy') {
            steps {
                ansiColor('xterm') {
                    dir("${popupPath}") {
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
        stage('Datepicker deploy') {
            steps {
                ansiColor('xterm') {
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
        stage('Checkbox deploy') {
            steps {
                ansiColor('xterm') {
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
        stage('Radio deploy') {
            steps {
                ansiColor('xterm') {
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
        stage('Button deploy') {
            steps {
                ansiColor('xterm') {
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
        stage('IconButton deploy') {
            steps {
                ansiColor('xterm') {
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
        stage('Input deploy') {
            steps {
                ansiColor('xterm') {
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
                          echo 'Building'
                          sh 'npm run build'
                          echo 'Clean'
                          sh 'npm run clean-node-modules'
                       }
                    }
                }
            }
        }
        stage('Select deploy') {
            steps {
                ansiColor('xterm') {
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
        stage('Switcher deploy') {
            steps {
                ansiColor('xterm') {
                    dir("${switcherPath}") {
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
        stage('Label deploy') {
            steps {
                ansiColor('xterm') {
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
        stage('FormControl deploy') {
            steps {
                ansiColor('xterm') {
                    dir("${formControlPath}") {
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
        stage('FlexContainer deploy') {
            steps {
                ansiColor('xterm') {
                    dir("${flexContainerPath}") {
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
        stage('GridContainer deploy') {
            steps {
                ansiColor('xterm') {
                    dir("${gridContainerPath}") {
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
        stage('List deploy') {
            steps {
                ansiColor('xterm') {
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
        stage('ListItem deploy') {
            steps {
                ansiColor('xterm') {
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
        stage('TableColumnsVisible deploy') {
            steps {
                ansiColor('xterm') {
                    dir("${tableColumnsVisiblePath}") {
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
        stage('ProgressBar deploy') {
            steps {
                ansiColor('xterm') {
                    dir("${progressBarPath}") {
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
        stage('MultiSelect deploy') {
            steps {
                ansiColor('xterm') {
                    dir("${multiSelectPath}") {
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
        stage('StickyBottomPanel deploy') {
            steps {
                ansiColor('xterm') {
                    dir("${stickyBottomPanelPath}") {
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
        stage('Tabs deploy') {
            steps {
                ansiColor('xterm') {
                    dir("${tabsPath}") {
                        script {
                          echo 'Building'
                          sh 'npm run build'
                          echo 'Clean'
                          sh 'npm run clean-node-modules'
                       }
                    }
                    dir("${tabPath}") {
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
        stage('Divider deploy') {
            steps {
                ansiColor('xterm') {
                    dir("${dividerPath}") {
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
        stage('Table deploy') {
            steps {
                ansiColor('xterm') {
                    dir("${tablePath}") {
                        script {
                          echo 'Building'
                          sh 'npm run build'
                          echo 'Clean'
                          sh 'npm run clean-node-modules'
                       }
                    }
                    dir("${tableHeadPath}") {
                        script {
                          echo 'Building'
                          sh 'npm run build'
                          echo 'Clean'
                          sh 'npm run clean-node-modules'
                       }
                    }
                    dir("${tableBodyPath}") {
                        script {
                          echo 'Building'
                          sh 'npm run build'
                          echo 'Clean'
                          sh 'npm run clean-node-modules'
                       }
                    }
                    dir("${tableRowPath}") {
                        script {
                          echo 'Building'
                          sh 'npm run build'
                          echo 'Clean'
                          sh 'npm run clean-node-modules'
                       }
                    }
                    dir("${tableCellPath}") {
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
        stage("UI Kit PUBLISH") {
            steps {
               ansiColor('xterm') {
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
                            withCredentials([string(credentialsId: 'NPM_TOKEN', variable: 'NPM_TOKEN')]) {
                                dir("${uiKitPath}") {
                                sh 'npm -v'
                                sh 'node -v'
                                writeFile file: '.npmrc', text: "//registry.npmjs.org/:_authToken=${NPM_TOKEN}"
                                sh 'npm whoami || echo "Not logged in"'
                                sh 'npm publish'
                                }
                            }
                        }
                    }
                 }
            }
        }
    /*
    stage('🚀 Publish npm package') {
      steps {
        ansiColor('xterm') {
          script {
            // Write .npmrc file for authentication
            writeFile file: '.npmrc', text: '''
            //registry.npmjs.org/:_authToken=${NPM_TOKEN}
            '''
            // Login to npm (if needed)
            sh 'npm whoami || npm login --token=$NPM_TOKEN'
            // Publish the package
            sh 'npm publish'
          }
        }
      }
    }
    */
  }
}