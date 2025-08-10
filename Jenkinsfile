pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    sh 'npm run test'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
        }
    }
}