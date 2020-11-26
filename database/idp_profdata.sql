-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 14, 2020 at 05:29 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `idp_profdata`
--

-- --------------------------------------------------------

--
-- Table structure for table `profdata`
--

DROP TABLE IF EXISTS `profdata`;
CREATE TABLE IF NOT EXISTS `profdata` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `role` varchar(30) DEFAULT NULL,
  `nickname` varchar(30) DEFAULT NULL,
  `avatar` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `profdata`
--

INSERT INTO `profdata` (`id`, `name`, `role`, `nickname`, `avatar`) VALUES
(1, 'Justin', 'coordinator', 'nitsurj', 'Justin.jpg'),
(2, 'Joe', 'prof', 'Teddy Bear', 'Joe.jpg'),
(3, 'John', 'Super Chill Prof', 'Just John', 'John.jpg'),
(4, 'Pan', 'Code Ninja', 'Spider Pan', 'Pan.jpg'),
(5, 'Jarrod', 'prof', 'super-prof', 'jarrod.jpg'),
(6, 'Trevor', 'prof', 'authoring', 'trevor.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
