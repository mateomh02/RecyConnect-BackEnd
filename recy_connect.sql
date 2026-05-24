-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: localhost    Database: recy_connect
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `localities`
--

DROP TABLE IF EXISTS `localities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `localities` (
  `id` int NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `latitud` decimal(10,8) NOT NULL,
  `longitud` decimal(11,8) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `localities`
--

LOCK TABLES `localities` WRITE;
/*!40000 ALTER TABLE `localities` DISABLE KEYS */;
INSERT INTO `localities` VALUES (1,'USAQUEN',4.74202488,-74.02775062),(2,'CHAPINERO',4.64516384,-74.03703279),(3,'SANTA FE',4.59401040,-74.03632429),(4,'SAN CRISTOBAL',4.54886528,-74.06608945),(5,'USME',4.39007638,-74.14283883),(6,'TUNJUELITO',4.57497145,-74.13600864),(7,'BOSA',4.62163766,-74.19453425),(8,'KENNEDY',4.63034375,-74.15270521),(9,'FONTIBON',4.67826853,-74.14029075),(10,'ENGATIVA',4.70102898,-74.11320819),(11,'SUBA',4.76303896,-74.07596303),(12,'BARRIOS UNIDOS',4.66956143,-74.07384904),(13,'TEUSAQUILLO',4.64126902,-74.08581886),(14,'LOS MARTIRES',4.60718932,-74.08831294),(15,'ANTONIO NARIÑO',4.58875556,-74.10322336),(16,'PUENTE ARANDA',4.61633722,-74.11131023),(17,'CANDELARIA',4.59659772,-74.07215229),(18,'RAFAEL URIBE URIBE',4.56650501,-74.11341749),(19,'CIUDAD BOLIVAR',4.48247751,-74.16190432),(20,'SUMAPAZ',4.03660325,-74.25700575);
/*!40000 ALTER TABLE `localities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rol_name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `rol_name` (`rol_name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Ciudadano'),(2,'Reciclador');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles_routes`
--

DROP TABLE IF EXISTS `roles_routes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles_routes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_id` int NOT NULL,
  `route_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `role_id` (`role_id`,`route_id`),
  KEY `route_id` (`route_id`),
  CONSTRAINT `roles_routes_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `roles_routes_ibfk_2` FOREIGN KEY (`route_id`) REFERENCES `routes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles_routes`
--

LOCK TABLES `roles_routes` WRITE;
/*!40000 ALTER TABLE `roles_routes` DISABLE KEYS */;
INSERT INTO `roles_routes` VALUES (1,1,2),(3,1,3),(2,2,1),(4,2,3);
/*!40000 ALTER TABLE `roles_routes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `routes`
--

DROP TABLE IF EXISTS `routes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `routes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `path` varchar(100) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `component` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `path` (`path`),
  UNIQUE KEY `component` (`component`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `routes`
--

LOCK TABLES `routes` WRITE;
/*!40000 ALTER TABLE `routes` DISABLE KEYS */;
INSERT INTO `routes` VALUES (1,'/recyclers','Programar tu ruta','recyclers'),(2,'/citizens','Ver rutas de recicladores','citizens'),(3,'/','Inicio','home');
/*!40000 ALTER TABLE `routes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `routesrecyclers`
--

DROP TABLE IF EXISTS `routesrecyclers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `routesrecyclers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `routeName` varchar(100) NOT NULL,
  `locality_id` int NOT NULL,
  `day` date NOT NULL,
  `hour` time NOT NULL,
  `user_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_routes_localities` (`locality_id`),
  KEY `FK_routes_users` (`user_id`),
  CONSTRAINT `FK_routes_localities` FOREIGN KEY (`locality_id`) REFERENCES `localities` (`id`),
  CONSTRAINT `FK_routes_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `routesrecyclers`
--

LOCK TABLES `routesrecyclers` WRITE;
/*!40000 ALTER TABLE `routesrecyclers` DISABLE KEYS */;
INSERT INTO `routesrecyclers` VALUES (1,'Nombre de la ruta',2,'2026-05-14','01:00:00',1,'2026-05-24 03:39:30'),(2,'Nombre de la ruta',2,'2026-05-14','13:30:00',1,'2026-05-24 03:39:56'),(4,'Esta es nueva ubiucacion',4,'2026-05-23','15:00:00',1,'2026-05-24 04:29:35'),(7,'Es x ruta',5,'2026-05-30','02:00:00',1,'2026-05-24 04:59:43'),(8,'Es x ruta',6,'2026-05-30','02:00:00',1,'2026-05-24 04:59:56'),(9,'Es otra ruta',6,'2026-04-24','02:00:00',1,'2026-05-24 05:32:50'),(10,'Es otra ruta',6,'2026-04-24','02:00:00',1,'2026-05-24 05:33:09'),(11,'Es otra ruta',6,'2026-04-24','02:00:00',1,'2026-05-24 05:33:18'),(12,'Es otra ruta',6,'2026-05-26','02:00:00',1,'2026-05-24 05:34:14'),(13,'Ruta para el dia 24',5,'2026-04-24','21:30:00',1,'2026-05-24 13:31:53'),(14,'Ruta para usuario 3',4,'2026-05-15','01:30:00',4,'2026-05-24 13:34:22');
/*!40000 ALTER TABLE `routesrecyclers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Uusario 1','usuario1@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$W9tmIKDAZk8I1Y6uV6AwqA$TFBioS829w+C9fm7ZIyFKoB0dBOVh2I1SHTmcsBMung',2),(2,'Usuario 2','usuario2@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$Mnc8MYZj5RvavNmQVr1FWA$Rct1aPuvVVohQFIji7WUBuFYWL8t1d4XdvO+HCz5Huc',1),(3,'Marlon Mateo Hernandez Patiño','mateo@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$TTm3lCS0QLRnF2St47YfKw$49BjApVIkOEVzuOD8wkTMQoTcmPpeNgGWNcy8pYfk10',2),(4,'ususario 3','usuario3@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$YjW+e7viMcZReh2MhNBSdg$mtPO5avaul4mPZ9PPauJethnMOQBu8PubmtEgfLRIFk',2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-05-24  9:02:17
