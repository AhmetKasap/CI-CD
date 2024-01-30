pipeline {
    agent any
    

    stages {
        stage('Build') {
            steps {
                script {
                    sh 'docker-compose build'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Docker Compose up
                    sh 'docker-compose up'
                }
            }
        }
    }
}
