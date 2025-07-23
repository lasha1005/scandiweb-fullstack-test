-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: switchback.proxy.rlwy.net    Database: railway
-- ------------------------------------------------------
-- Server version	9.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attribute_items`
--

DROP TABLE IF EXISTS `attribute_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attribute_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `attribute_id` int DEFAULT NULL,
  `display_value` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `item_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `attribute_id` (`attribute_id`),
  CONSTRAINT `attribute_items_ibfk_1` FOREIGN KEY (`attribute_id`) REFERENCES `attributes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attribute_items`
--

LOCK TABLES `attribute_items` WRITE;
/*!40000 ALTER TABLE `attribute_items` DISABLE KEYS */;
INSERT INTO `attribute_items` VALUES (1,1,'40','40','40'),(2,1,'41','41','41'),(3,1,'42','42','42'),(4,1,'43','43','43'),(5,2,'Small','S','Small'),(6,2,'Medium','M','Medium'),(7,2,'Large','L','Large'),(8,2,'Extra Large','XL','Extra Large'),(9,3,'Green','#44FF03','Green'),(10,3,'Cyan','#03FFF7','Cyan'),(11,3,'Blue','#030BFF','Blue'),(12,3,'Black','#000000','Black'),(13,3,'White','#FFFFFF','White'),(14,4,'512G','512G','512G'),(15,4,'1T','1T','1T'),(16,5,'Green','#44FF03','Green'),(17,5,'Cyan','#03FFF7','Cyan'),(18,5,'Blue','#030BFF','Blue'),(19,5,'Black','#000000','Black'),(20,5,'White','#FFFFFF','White'),(21,6,'512G','512G','512G'),(22,6,'1T','1T','1T'),(23,7,'256GB','256GB','256GB'),(24,7,'512GB','512GB','512GB'),(25,8,'Yes','Yes','Yes'),(26,8,'No','No','No'),(27,9,'Yes','Yes','Yes'),(28,9,'No','No','No'),(29,10,'512G','512G','512G'),(30,10,'1T','1T','1T'),(31,11,'Green','#44FF03','Green'),(32,11,'Cyan','#03FFF7','Cyan'),(33,11,'Blue','#030BFF','Blue'),(34,11,'Black','#000000','Black'),(35,11,'White','#FFFFFF','White');
/*!40000 ALTER TABLE `attribute_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `attributes`
--

DROP TABLE IF EXISTS `attributes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attributes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `attributes_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attributes`
--

LOCK TABLES `attributes` WRITE;
/*!40000 ALTER TABLE `attributes` DISABLE KEYS */;
INSERT INTO `attributes` VALUES (1,'huarache-x-stussy-le','Size','text'),(2,'jacket-canada-goosee','Size','text'),(3,'ps-5','Color','swatch'),(4,'ps-5','Capacity','text'),(5,'xbox-series-s','Color','swatch'),(6,'xbox-series-s','Capacity','text'),(7,'apple-imac-2021','Capacity','text'),(8,'apple-imac-2021','With USB 3 ports','text'),(9,'apple-imac-2021','Touch ID in keyboard','text'),(10,'apple-iphone-12-pro','Capacity','text'),(11,'apple-iphone-12-pro','Color','swatch');
/*!40000 ALTER TABLE `attributes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'all'),(2,'clothes'),(3,'tech');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `currencies`
--

DROP TABLE IF EXISTS `currencies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `currencies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `label` varchar(10) DEFAULT NULL,
  `symbol` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `label` (`label`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `currencies`
--

LOCK TABLES `currencies` WRITE;
/*!40000 ALTER TABLE `currencies` DISABLE KEYS */;
INSERT INTO `currencies` VALUES (1,'USD','$');
/*!40000 ALTER TABLE `currencies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `galleries`
--

DROP TABLE IF EXISTS `galleries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `galleries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` varchar(255) DEFAULT NULL,
  `image_url` text,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `galleries_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `galleries`
--

LOCK TABLES `galleries` WRITE;
/*!40000 ALTER TABLE `galleries` DISABLE KEYS */;
INSERT INTO `galleries` VALUES (1,'huarache-x-stussy-le','https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087'),(2,'huarache-x-stussy-le','https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087'),(3,'huarache-x-stussy-le','https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087'),(4,'huarache-x-stussy-le','https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087'),(5,'huarache-x-stussy-le','https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087'),(6,'jacket-canada-goosee','https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg'),(7,'jacket-canada-goosee','https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg'),(8,'jacket-canada-goosee','https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg'),(9,'jacket-canada-goosee','https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg'),(10,'jacket-canada-goosee','https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg'),(11,'jacket-canada-goosee','https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png'),(12,'jacket-canada-goosee','https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png'),(13,'ps-5','https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg'),(14,'ps-5','https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg'),(15,'ps-5','https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg'),(16,'ps-5','https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg'),(17,'ps-5','https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg'),(18,'xbox-series-s','https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg'),(19,'xbox-series-s','https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg'),(20,'xbox-series-s','https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg'),(21,'xbox-series-s','https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg'),(22,'xbox-series-s','https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg'),(23,'apple-imac-2021','https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000'),(24,'apple-iphone-12-pro','https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000'),(25,'apple-airpods-pro','https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000'),(26,'apple-airtag','https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000');
/*!40000 ALTER TABLE `galleries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item_attributes`
--

DROP TABLE IF EXISTS `order_item_attributes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_item_attributes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_item_id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `value` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_item_id` (`order_item_id`),
  CONSTRAINT `order_item_attributes_ibfk_1` FOREIGN KEY (`order_item_id`) REFERENCES `order_items` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item_attributes`
--

LOCK TABLES `order_item_attributes` WRITE;
/*!40000 ALTER TABLE `order_item_attributes` DISABLE KEYS */;
INSERT INTO `order_item_attributes` VALUES (1,1,'Color','Green'),(2,1,'Capacity','512G'),(3,2,'Size','42'),(4,3,'Color','Black'),(5,3,'Capacity','1T'),(6,4,'Capacity','256GB'),(7,4,'With USB 3 ports','Yes'),(8,4,'Touch ID in keyboard','Yes'),(9,6,'Capacity','256GB'),(10,6,'With USB 3 ports','Yes'),(11,6,'Touch ID in keyboard','Yes'),(12,8,'Color','Green'),(13,8,'Capacity','512G'),(14,9,'Size','Small'),(15,10,'Color','Blue'),(16,10,'Capacity','1T'),(17,11,'Size','Medium'),(18,12,'Capacity','1T'),(19,12,'Color','Black'),(20,16,'Size','Small'),(21,17,'Color','Green'),(22,17,'Capacity','512G'),(23,18,'Color','Green'),(24,18,'Capacity','512G'),(25,20,'Color','White'),(26,20,'Capacity','1T'),(27,21,'Size','Small'),(28,22,'Color','Green'),(29,22,'Capacity','512G'),(30,23,'Capacity','512G'),(31,23,'Color','Black'),(32,24,'Capacity','1T'),(33,24,'Color','Blue'),(34,26,'Capacity','256GB'),(35,26,'With USB 3 ports','Yes'),(36,26,'Touch ID in keyboard','Yes'),(37,27,'Color','Black'),(38,27,'Capacity','1T'),(39,28,'Capacity','256GB'),(40,28,'With USB 3 ports','Yes'),(41,28,'Touch ID in keyboard','Yes'),(42,29,'Color','Green'),(43,29,'Capacity','1T'),(44,30,'Color','Black'),(45,30,'Capacity','1T'),(46,31,'Capacity','1T'),(47,31,'Color','White'),(48,32,'Capacity','1T'),(49,32,'Color','Blue'),(50,33,'Capacity','256GB'),(51,33,'With USB 3 ports','Yes'),(52,33,'Touch ID in keyboard','Yes'),(53,34,'Capacity','512G'),(54,34,'Color','Cyan'),(55,35,'Capacity','512G'),(56,35,'Color','White'),(57,36,'Capacity','256GB'),(58,36,'With USB 3 ports','Yes'),(59,36,'Touch ID in keyboard','Yes'),(60,37,'Color','Green'),(61,37,'Capacity','512G'),(62,38,'Capacity','1T'),(63,38,'Color','Cyan'),(64,39,'Size','40'),(65,40,'Color','Green'),(66,40,'Capacity','512G'),(67,41,'Capacity','512G'),(68,41,'Color','Green'),(69,42,'Capacity','1T'),(70,42,'Color','Cyan'),(71,43,'Color','Cyan'),(72,43,'Capacity','512G'),(73,44,'Color','Cyan'),(74,44,'Capacity','1T'),(75,45,'Size','Small'),(76,46,'Size','40'),(77,47,'Capacity','512G'),(78,47,'Color','Green'),(79,48,'Capacity','256GB'),(80,48,'With USB 3 ports','Yes'),(81,48,'Touch ID in keyboard','Yes');
/*!40000 ALTER TABLE `order_item_attributes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `product_id` varchar(100) NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (1,1,'ps-5',5),(2,1,'huarache-x-stussy-le',1),(3,1,'apple-iphone-12-pro',1),(4,2,'apple-imac-2021',1),(5,3,'apple-airtag',2),(6,3,'apple-imac-2021',1),(7,4,'apple-airtag',1),(8,5,'ps-5',2),(9,5,'jacket-canada-goosee',3),(10,6,'apple-iphone-12-pro',3),(11,6,'jacket-canada-goosee',1),(12,6,'ps-5',1),(13,7,'apple-airtag',1),(14,8,'apple-airtag',1),(15,9,'apple-airtag',1),(16,9,'jacket-canada-goosee',3),(17,9,'ps-5',1),(18,10,'ps-5',1),(19,11,'apple-airtag',1),(20,11,'ps-5',1),(21,12,'jacket-canada-goosee',3),(22,12,'ps-5',5),(23,12,'ps-5',1),(24,12,'apple-iphone-12-pro',1),(25,13,'apple-airtag',1),(26,14,'apple-imac-2021',2),(27,15,'apple-iphone-12-pro',1),(28,16,'apple-imac-2021',1),(29,16,'ps-5',1),(30,17,'ps-5',5),(31,17,'ps-5',3),(32,17,'ps-5',1),(33,18,'apple-imac-2021',1),(34,18,'ps-5',2),(35,18,'ps-5',1),(36,19,'apple-imac-2021',1),(37,20,'ps-5',3),(38,21,'ps-5',1),(39,22,'huarache-x-stussy-le',1),(40,22,'ps-5',1),(41,22,'apple-iphone-12-pro',1),(42,23,'ps-5',4),(43,23,'ps-5',2),(44,24,'ps-5',1),(45,24,'jacket-canada-goosee',1),(46,24,'huarache-x-stussy-le',1),(47,24,'apple-iphone-12-pro',1),(48,24,'apple-imac-2021',1);
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`%`*/ /*!50003 TRIGGER `update_order_totals` AFTER INSERT ON `order_items` FOR EACH ROW BEGIN
	UPDATE orders
    SET
		items_quantity = (
			SELECT SUM(quantity) FROM order_items WHERE order_id = NEW.order_id
        ),
        full_amount = (
			SELECT SUM(oi.quantity * amount)
            FROM order_items oi
            JOIN products p ON oi.product_id = p.id
            JOIN prices on p.id = prices.product_id
            WHERE oi.order_id = NEW.order_id
        )
	WHERE id = NEW.order_id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `items_quantity` int DEFAULT '0',
  `full_amount` decimal(10,2) DEFAULT '0.00',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,7,5365.55,'2025-07-02 14:36:56'),(2,1,1688.03,'2025-07-02 14:49:22'),(3,3,1929.17,'2025-07-02 14:53:37'),(4,1,120.57,'2025-07-03 13:28:15'),(5,5,3243.45,'2025-07-03 13:28:24'),(6,5,4364.77,'2025-07-03 13:37:28'),(7,1,120.57,'2025-07-03 18:48:18'),(8,1,120.57,'2025-07-04 09:15:15'),(9,5,2520.00,'2025-07-04 09:16:54'),(10,1,844.02,'2025-07-04 11:48:07'),(11,2,964.59,'2025-07-04 11:48:39'),(12,10,7620.29,'2025-07-04 11:49:55'),(13,1,120.57,'2025-07-05 18:01:44'),(14,2,3376.06,'2025-07-07 12:47:45'),(15,1,1000.76,'2025-07-09 09:15:43'),(16,2,2532.05,'2025-07-21 11:14:09'),(17,9,7596.18,'2025-07-21 21:18:24'),(18,4,4220.09,'2025-07-21 21:20:07'),(19,1,1688.03,'2025-07-22 12:23:55'),(20,3,2532.06,'2025-07-22 19:43:59'),(21,1,844.02,'2025-07-22 20:15:18'),(22,3,1989.47,'2025-07-22 20:15:29'),(23,6,5064.12,'2025-07-23 13:16:51'),(24,5,4195.97,'2025-07-23 15:35:13');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prices`
--

DROP TABLE IF EXISTS `prices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prices` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` varchar(255) DEFAULT NULL,
  `currency_id` int DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `currency_id` (`currency_id`),
  CONSTRAINT `prices_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `prices_ibfk_2` FOREIGN KEY (`currency_id`) REFERENCES `currencies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prices`
--

LOCK TABLES `prices` WRITE;
/*!40000 ALTER TABLE `prices` DISABLE KEYS */;
INSERT INTO `prices` VALUES (1,'huarache-x-stussy-le',1,144.69),(2,'jacket-canada-goosee',1,518.47),(3,'ps-5',1,844.02),(4,'xbox-series-s',1,333.99),(5,'apple-imac-2021',1,1688.03),(6,'apple-iphone-12-pro',1,1000.76),(7,'apple-airpods-pro',1,300.23),(8,'apple-airtag',1,120.57);
/*!40000 ALTER TABLE `prices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `in_stock` tinyint(1) DEFAULT NULL,
  `description` text,
  `category_id` int DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('apple-airpods-pro','AirPods Pro',0,'\n<h3>Magic like you’ve never heard</h3>\n<p>AirPods Pro have been designed to deliver Active Noise Cancellation for immersive sound, Transparency mode so you can hear your surroundings, and a customizable fit for all-day comfort. Just like AirPods, AirPods Pro connect magically to your iPhone or Apple Watch. And they’re ready to use right out of the case.\n\n<h3>Active Noise Cancellation</h3>\n<p>Incredibly light noise-cancelling headphones, AirPods Pro block out your environment so you can focus on what you’re listening to. AirPods Pro use two microphones, an outward-facing microphone and an inward-facing microphone, to create superior noise cancellation. By continuously adapting to the geometry of your ear and the fit of the ear tips, Active Noise Cancellation silences the world to keep you fully tuned in to your music, podcasts, and calls.\n\n<h3>Transparency mode</h3>\n<p>Switch to Transparency mode and AirPods Pro let the outside sound in, allowing you to hear and connect to your surroundings. Outward- and inward-facing microphones enable AirPods Pro to undo the sound-isolating effect of the silicone tips so things sound and feel natural, like when you’re talking to people around you.</p>\n\n<h3>All-new design</h3>\n<p>AirPods Pro offer a more customizable fit with three sizes of flexible silicone tips to choose from. With an internal taper, they conform to the shape of your ear, securing your AirPods Pro in place and creating an exceptional seal for superior noise cancellation.</p>\n\n<h3>Amazing audio quality</h3>\n<p>A custom-built high-excursion, low-distortion driver delivers powerful bass. A superefficient high dynamic range amplifier produces pure, incredibly clear sound while also extending battery life. And Adaptive EQ automatically tunes music to suit the shape of your ear for a rich, consistent listening experience.</p>\n\n<h3>Even more magical</h3>\n<p>The Apple-designed H1 chip delivers incredibly low audio latency. A force sensor on the stem makes it easy to control music and calls and switch between Active Noise Cancellation and Transparency mode. Announce Messages with Siri gives you the option to have Siri read your messages through your AirPods. And with Audio Sharing, you and a friend can share the same audio stream on two sets of AirPods — so you can play a game, watch a movie, or listen to a song together.</p>\n',3,'Apple'),('apple-airtag','AirTag',1,'\n<h1>Lose your knack for losing things.</h1>\n<p>AirTag is an easy way to keep track of your stuff. Attach one to your keys, slip another one in your backpack. And just like that, they’re on your radar in the Find My app. AirTag has your back.</p>\n',3,'Apple'),('apple-imac-2021','iMac 2021',1,'The new iMac!',3,'Apple'),('apple-iphone-12-pro','iPhone 12 Pro',1,'This is iPhone 12. Nothing else to say.',3,'Apple'),('huarache-x-stussy-le','Nike Air Huarache Le',1,'<p>Great sneakers for everyday use!</p>',2,'Nike x Stussy'),('jacket-canada-goosee','Jacket',1,'<p>Awesome winter jacket</p>',2,'Canada Goose'),('ps-5','PlayStation 5',1,'<p>A good gaming console. Plays games of PS4! Enjoy if you can buy it mwahahahaha</p>',3,'Sony'),('xbox-series-s','Xbox Series S 512GB',0,'\n<div>\n    <ul>\n        <li><span>Hardware-beschleunigtes Raytracing macht dein Spiel noch realistischer</span></li>\n        <li><span>Spiele Games mit bis zu 120 Bilder pro Sekunde</span></li>\n        <li><span>Minimiere Ladezeiten mit einer speziell entwickelten 512GB NVMe SSD und wechsle mit Quick Resume nahtlos zwischen mehreren Spielen.</span></li>\n        <li><span>Xbox Smart Delivery stellt sicher, dass du die beste Version deines Spiels spielst, egal, auf welcher Konsole du spielst</span></li>\n        <li><span>Spiele deine Xbox One-Spiele auf deiner Xbox Series S weiter. Deine Fortschritte, Erfolge und Freundesliste werden automatisch auf das neue System übertragen.</span></li>\n        <li><span>Erwecke deine Spiele und Filme mit innovativem 3D Raumklang zum Leben</span></li>\n        <li><span>Der brandneue Xbox Wireless Controller zeichnet sich durch höchste Präzision, eine neue Share-Taste und verbesserte Ergonomie aus</span></li>\n        <li><span>Ultra-niedrige Latenz verbessert die Reaktionszeit von Controller zum Fernseher</span></li>\n        <li><span>Verwende dein Xbox One-Gaming-Zubehör -einschließlich Controller, Headsets und mehr</span></li>\n        <li><span>Erweitere deinen Speicher mit der Seagate 1 TB-Erweiterungskarte für Xbox Series X (separat erhältlich) und streame 4K-Videos von Disney+, Netflix, Amazon, Microsoft Movies &amp; TV und mehr</span></li>\n    </ul>\n</div>',3,'Microsoft');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-23 20:20:07
