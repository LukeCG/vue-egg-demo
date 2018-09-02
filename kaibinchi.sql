# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.22-log)
# Database: kaibinchi
# Generation Time: 2018-09-02 09:57:22 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table account
# ------------------------------------------------------------

DROP TABLE IF EXISTS `account`;

CREATE TABLE `account` (
  `user_id` varchar(32) NOT NULL DEFAULT '',
  `user_name` varchar(32) DEFAULT NULL,
  `user_password` varchar(32) DEFAULT NULL,
  `email` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id` (`user_id`),
  UNIQUE KEY `user_id_2` (`user_id`),
  UNIQUE KEY `user_name` (`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='CREATE TABLE `account` (\n  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;';

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;

INSERT INTO `account` (`user_id`, `user_name`, `user_password`, `email`)
VALUES
	('0025ed7392594726a58240e88e14c830','admin','e10adc3949ba59abbe56e057f20f883e','cheng765961445@gmail.com');

/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table makeuser
# ------------------------------------------------------------

DROP TABLE IF EXISTS `makeuser`;

CREATE TABLE `makeuser` (
  `UserId` varchar(32) NOT NULL,
  `UserName` varchar(255) DEFAULT NULL,
  `Mobile` varchar(11) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Createdate` datetime DEFAULT NULL,
  PRIMARY KEY (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `makeuser` WRITE;
/*!40000 ALTER TABLE `makeuser` DISABLE KEYS */;

INSERT INTO `makeuser` (`UserId`, `UserName`, `Mobile`, `Address`, `Createdate`)
VALUES
	('7f7b3d1ed43e46aeac1887844f3891c0','1111','13622773821','123123','2018-09-03 00:00:00'),
	('89a08793f6c14982b812f09a4647edeb','12333','13622773382','无服务范围而微微','2018-08-28 00:00:00'),
	('9d94301d9904470d87d5c0005ddb0707','万千瓦','13622883742','的水电费水电费地方','2018-10-10 00:00:00');

/*!40000 ALTER TABLE `makeuser` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
