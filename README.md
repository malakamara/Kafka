 – Intégration Kafka, MongoDB et Node.js -

##Description

Ce projet démontre l'intégration entre Apache Kafka, MongoDB et Node.js.  
Un producteur Kafka envoie des messages à un topic, un consommateur les lit et les insère dans une base MongoDB.

---

##Technologies utilisées

- **Apache Kafka**
- **Zookeeper**
- **MongoDB**
- **Node.js**
- **KafkaJS**
- **Docker & Docker Compose**

## Structure des fichiers
.
├── docker-compose.yml
├── producer.js
├── consumer.js
└── README.md
##Lancer les services avec Docker :
docker-compose up -d
##Lancer le producteur Kafka :
node producer.js
##Lancer le consommateur Kafka :
node consumer.js
Topic Kafka : test-topic
