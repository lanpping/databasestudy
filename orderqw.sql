/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80023
Source Host           : localhost:3306
Source Database       : cloudservers

Target Server Type    : MYSQL
Target Server Version : 80023
File Encoding         : 65001

Date: 2021-03-25 16:18:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `orderqw`
-- ----------------------------
DROP TABLE IF EXISTS `orderqw`;
CREATE TABLE `orderqw` (
  `O_ID` int NOT NULL COMMENT '订单ID',
  `NAME` varchar(20) NOT NULL COMMENT '订单名称',
  `NUM` int NOT NULL COMMENT '数量',
  `PRICE` decimal(10,0) NOT NULL COMMENT '价格',
  `USER_NAME` varchar(20) NOT NULL COMMENT '买家姓名',
  `USER_NOTE` varchar(255) DEFAULT NULL COMMENT '买家备注',
  `ORDER_TIME` datetime NOT NULL COMMENT '下单时间',
  `PAY_STATUS` int NOT NULL COMMENT '支付状态',
  `SALLER_NOTE` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '卖家备注',
  `S_ID` int NOT NULL COMMENT '客服ID',
  `USER_ADREE` varchar(255) NOT NULL,
  `USER_TEL` int NOT NULL,
  PRIMARY KEY (`O_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of orderqw
-- ----------------------------
INSERT INTO `orderqw` VALUES ('1', '苹果', '5', '10', '小张', '要新鲜', '2020-01-26 14:00:19', '0', null, '1002', '', '0');
INSERT INTO `orderqw` VALUES ('2', '花生', '15', '100', '李四', '粒大', '2020-04-26 14:06:06', '0', null, '1003', '', '0');
INSERT INTO `orderqw` VALUES ('3', '葡萄', '50', '200', '李武', '新鲜', '2020-06-16 13:00:19', '0', null, '1005', '', '0');
INSERT INTO `orderqw` VALUES ('4', '李子', '66', '160', '王武', null, '2020-01-06 16:00:19', '1', null, '1006', '', '0');
INSERT INTO `orderqw` VALUES ('5', '栗子', '5', '190', '张三', '新鲜', '2020-01-23 18:00:19', '1', null, '1003', '', '0');
INSERT INTO `orderqw` VALUES ('6', '牛奶', '35', '510', '李六', '新鲜', '2020-01-26 15:00:19', '1', null, '1002', '', '0');
INSERT INTO `orderqw` VALUES ('7', '饼干', '5', '109', '陈七', null, '2020-01-27 14:20:19', '0', null, '1005', '', '0');
INSERT INTO `orderqw` VALUES ('8', '曲奇', '65', '300', '里斯', null, '2020-01-16 14:30:19', '0', null, '1006', '', '0');
INSERT INTO `orderqw` VALUES ('9', '糖', '75', '190', '五五', null, '2020-05-26 14:07:19', '1', null, '1003', '', '0');
INSERT INTO `orderqw` VALUES ('10', '水果干', '25', '100', '小明', null, '2020-10-26 14:08:19', '0', null, '1002', '', '0');
