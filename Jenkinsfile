pipeline {
    agent any

    environment {
        REMOTE_USER = 'ubuntu'
        REMOTE_HOST = 'ec2-52-201-74-186.compute-1.amazonaws.com'
    }

    stages {
        stage('Acessar Máquina Externa e Atualizar o Repositório') {
            steps {
                script {
                    sh"sudo ssh -i /home/ubuntu/key-2210.pem ${REMOTE_USER}@${REMOTE_HOST} 'cd /home/ubuntu/website/ && git pull'"
                    sh"sudo ssh -i /home/ubuntu/key-2210.pem ${REMOTE_USER}@${REMOTE_HOST} 'cd /home/ubuntu/chatBack/ && git pull'"
                }
            }
        }

        stage('Parallel Stages') {
            parallel {
                stage('Subindo o chat') {
                    steps {
                        script {
                            sh"sudo ssh -i /home/ubuntu/key-2210.pem ${REMOTE_USER}@${REMOTE_HOST} 'cd /home/ubuntu/chatBack/ && npm run dev'"
                        }
                    }
                }

                stage('Subindo o site') {
                    steps {
                        script {
                            sh"sudo ssh -i /home/ubuntu/key-2210.pem ${REMOTE_USER}@${REMOTE_HOST} 'cd /home/ubuntu/website/ && npm run dev'"
                        }
                    }
                }
            }
        }

        stage('Fazendo os testes') {
            steps {
                script {
                    echo "testando..."
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline bem-sucedido!'
        }
        failure {
            echo 'Pipeline falhou!'
        }
    }
}
