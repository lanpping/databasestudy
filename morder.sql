/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80023
Source Host           : localhost:3306
Source Database       : zy

Target Server Type    : MYSQL
Target Server Version : 80023
File Encoding         : 65001

Date: 2021-04-23 09:25:06
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `morder`
-- ----------------------------
DROP TABLE IF EXISTS `morder`;
CREATE TABLE `morder` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `ordername` varchar(255) NOT NULL,
  `customer` varchar(255) NOT NULL,
  `ordertime` datetime DEFAULT NULL,
  `note` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of morder
-- ----------------------------
INSERT INTO `morder` VALUES ('1', '苹果', '小王', '2021-04-22 08:50:57', '甜');
INSERT INTO `morder` VALUES ('2', '香蕉', '小胡', '2021-04-06 08:51:32', '新鲜');
INSERT INTO `morder` VALUES ('3', '梨子', '小刘', '2021-04-08 08:52:02', '甜');
