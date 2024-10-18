pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:22.5.1-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    ls -la
                    node --version
                    npm --version
                    npm set strict-ssl false
                    npm ci
                    ls -la
                '''
            }
        }
        stage('Test') { 
            agent {
                docker {
                    image 'node:22.5.1-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    npm test
                '''
            }
        }
        stage('Deploy') { 
            steps {
                sh '''
                    echo "npm run deploy"
                '''
            }
        }
    }

    post {
        always {
            junit 'test-result/junit.xml'
        }
    }
}