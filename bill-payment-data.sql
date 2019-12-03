-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: bill-payment
-- ------------------------------------------------------
-- Server version	5.7.10-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `bill`
--

LOCK TABLES `bill` WRITE;
/*!40000 ALTER TABLE `bill` DISABLE KEYS */;
INSERT INTO `bill` VALUES (1,200,'123',4,1),(2,400,'456',5,2),(3,200,'123',5,1),(4,6200,'789',5,5),(5,2000,'789',5,6),(6,2465,'789',5,7);
/*!40000 ALTER TABLE `bill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'USER'),(2,'ADMIN'),(3,'VENDOR');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (6,'$2a$10$MqKclgR1BnMoJ5T40Q7n4u/jOFz4d4xA4v98x4lvN2qPxQbU1K84K',NULL,'ue1','q','456',45,456,'male','456','user1'),(5,'$2a$10$5XcOJDNfXKpLeh4TiiKEy.G8W.7WgWtkoX6rJLSqTBBib.hcA.Y.q',NULL,'user','user','12',12,123,'male','123','user'),(4,'$2a$10$dwVrrxg/2YRtpprdIdS92ekQQMwoksXlnNexlhcUE3nPsqC37FWtu',NULL,'akash','a','123',12,123,'male','123','akash'),(8,'$2a$10$uETP32J9bhwmzPw0OKo/v.zwzURIjiBuUMbLJzBE7bdKdsuIdraKW',NULL,'admin','admin','123',25,987654321,'male','456','admin');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES (1,1,1),(2,2,2),(3,1,3),(4,1,4),(5,1,5),(6,1,6),(7,2,8);
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `vendor`
--

LOCK TABLES `vendor` WRITE;
/*!40000 ALTER TABLE `vendor` DISABLE KEYS */;
INSERT INTO `vendor` VALUES (1,'123','2622-02-06','2017-12-31',123,'india','vendor','Credit/Debit Card','1234','haryan','123','Electricity','123',62,'$2a$10$Z.2q2iOywmtZTDcxOtn7zufyLHBbHn8kWtqHSJgVCbJbcI51HsqVm','vendor'),(2,'123','2322-12-31','2000-12-31',123,'123','vendor2','Internet Banking','123','123','123','Telephone','123',123,'$2a$10$vrtFqSkWiARBjpzLwTeWFefH6TboNs6d2r//Tp//8mdTpiXmARZEC','vendor2'),(3,'xyz Building','1997-02-06','2021-02-06',9790702718,'India','Southern Power','Internet Banking','SP9521XY','Telangana','south@power.com','Electricity','www.southpower.com',1997,'$2a$10$4BRBjFukHV5pQyRzSPDIcuV0PJuGEyvEZjazA122HzKjx5/aZjZ6m','southpower'),(4,'Airtel Office','2001-02-06','2025-02-05',123456,'India','Airtel','Credit/Debit Card','AA32564','Delhi','Airtel@airtel.com','DTH','www.airtel.com',2000,'$2a$10$mdOEMNYr9opb.pNpDMnU/u6THzyfPbvYHGwSurUdlkqlCwdDnLKPe','Airtel'),(5,'tax','2001-02-01','2008-02-22',987654321,'india','tax','PayTm','tax123','haryana','tax@tax.com','Tax','www.tax.com',2006,'$2a$10$BFMUAcM8TZqVxzWZjRn9C.EvpP.VXIlmm2l80XgCZF4I0ux4boR5G','tax'),(6,'Insurance Building','1234-04-04','2008-02-05',9874561230,'India','Insurance','Google Pay','II4532HJ','delhi','insurance@insurance.com','Insurance','www.ins.com',2005,'$2a$10$zTulemr5RP4Xi3MtYi8.Eebfes/GoADQwg9b33cKv.NRQEZx0JTdS','insurance'),(7,'GHJ','2005-02-15','2008-02-22',4561237890,'india','Loan ','E-wallet','LO67AN','delhi','loan@loan.com','Loan','www.loan.com',2001,'$2a$10$i0gxreMKw05R4lk2kJlLaO3F7KfUhcA.Y5rPG0IPP3iLrCX6BBBjm','Loan');
/*!40000 ALTER TABLE `vendor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `vendor_role`
--

LOCK TABLES `vendor_role` WRITE;
/*!40000 ALTER TABLE `vendor_role` DISABLE KEYS */;
INSERT INTO `vendor_role` VALUES (4,3,1),(3,3,2),(5,3,3),(6,3,4),(7,3,5),(8,3,6),(9,3,7);
/*!40000 ALTER TABLE `vendor_role` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-02 14:21:27
