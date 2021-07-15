/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80023
Source Host           : localhost:3306
Source Database       : demo_weekly

Target Server Type    : MYSQL
Target Server Version : 80023
File Encoding         : 65001

Date: 2021-05-16 21:39:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `mysum`
-- ----------------------------
DROP TABLE IF EXISTS `mysum`;
CREATE TABLE `mysum` (
  `fwsID` int NOT NULL DEFAULT '0' COMMENT '用户id',
  `fwsName` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '用户名称',
  `kfNums` bigint NOT NULL DEFAULT '0',
  `orderNums` decimal(42,0) DEFAULT NULL,
  PRIMARY KEY (`fwsID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of mysum
-- ----------------------------
INSERT INTO `mysum` VALUES ('1004', 'fws1', '4', '9');
INSERT INTO `mysum` VALUES ('1008', 'fws2', '3', '6');
INSERT INTO `mysum` VALUES ('1012', 'fws3', '4', '2');
INSERT INTO `mysum` VALUES ('1015', 'fws4', '2', '0');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '用户名称',
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '用户密码',
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '用户邮箱',
  `type` int NOT NULL DEFAULT '2' COMMENT '鐢ㄦ埛绫诲瀷',
  `parent` int DEFAULT NULL COMMENT '閸掓稑缂撻弮鍫曟？',
  `tel` varchar(20) COLLATE utf8_unicode_ci NOT NULL COMMENT '鏇存柊鏃堕棿',
  `state` char(1) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '1' COMMENT '状态',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=1018 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1000', 'admin', 'de06091877ea209cff3c4b4a28194c8e', '1195997183@qq.com', '1', null, '12345678123', '1');
INSERT INTO `user` VALUES ('1001', 'kf1', 'e10adc3949ba59abbe56e057f20f883e', '12345678@qq.com', '3', '1004', '11911111234', '1');
INSERT INTO `user` VALUES ('1002', 'kf2', 'e10adc3949ba59abbe56e057f20f883e', '111111111@qq.com', '3', '1004', '11111112345', '1');
INSERT INTO `user` VALUES ('1003', 'kf3', 'e10adc3949ba59abbe56e057f20f883e', '232423451@qq.com', '3', '1008', '13456723456', '1');
INSERT INTO `user` VALUES ('1004', 'fws1', 'e10adc3949ba59abbe56e057f20f883e', '132487896@qq.com', '2', null, '12346892345', '1');
INSERT INTO `user` VALUES ('1005', 'kf4', 'e10adc3949ba59abbe56e057f20f883e', '143532614@qq.com', '3', '1008', '12356782345', '1');
INSERT INTO `user` VALUES ('1006', 'kf5', 'e10adc3949ba59abbe56e057f20f883e', '1435817268@qq.com', '3', '1004', '16782345701', '1');
INSERT INTO `user` VALUES ('1007', 'kf6', 'e10adc3949ba59abbe56e057f20f883e', '1849721967@163.com', '3', '1004', '13489023046', '1');
INSERT INTO `user` VALUES ('1008', 'fws2', 'e10adc3949ba59abbe56e057f20f883e', '13413538721@qq.com', '2', null, '12345671245', '1');
INSERT INTO `user` VALUES ('1009', 'kf7', 'e10adc3949ba59abbe56e057f20f883e', '124325613@163.com', '3', '1008', '12345678234', '1');
INSERT INTO `user` VALUES ('1010', 'kf8', 'e10adc3949ba59abbe56e057f20f883e', '124235663@qq.com', '3', '1012', '15678923402', '1');
INSERT INTO `user` VALUES ('1011', 'kf9', 'e10adc3949ba59abbe56e057f20f883e', '145267723@qq.com', '3', '1012', '12347892364', '1');
INSERT INTO `user` VALUES ('1012', 'fws3', 'e10adc3949ba59abbe56e057f20f883e', '1324325426@qq.com', '2', null, '16723409345', '1');
INSERT INTO `user` VALUES ('1013', 'kf10', 'e10adc3949ba59abbe56e057f20f883e', '111233536@qq.com', '3', '1015', '7419212349', '1');
INSERT INTO `user` VALUES ('1014', 'kf11', 'e10adc3949ba59abbe56e057f20f883e', '134563676@qq.com', '3', '1015', '12345213421', '1');
INSERT INTO `user` VALUES ('1015', 'fws4', 'e10adc3949ba59abbe56e057f20f883e', '145784376@qq.com', '2', null, '122334467853', '1');
INSERT INTO `user` VALUES ('1016', 'kf12', 'e10adc3949ba59abbe56e057f20f883e', '12332563@qq.com', '3', '1012', '135225678', '1');
INSERT INTO `user` VALUES ('1017', 'kf13', 'e10adc3949ba59abbe56e057f20f883e', '11234657776@qq.com', '3', '1012', '1432589432', '1');

-- ----------------------------
-- Table structure for `weekly`
-- ----------------------------
DROP TABLE IF EXISTS `weekly`;
CREATE TABLE `weekly` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '周报id',
  `userId` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `startTime` datetime NOT NULL COMMENT '閺夆晜鐟ラ幊鍡楊嚕閳ь剚鎱ㄧ€ｎ偅顦ч梻?',
  `title` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '今年的第几周',
  `state` char(1) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '1' COMMENT '状态',
  `buyer` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='周报表';

-- ----------------------------
-- Records of weekly
-- ----------------------------
INSERT INTO `weekly` VALUES ('1', '1001', '2017-12-11 00:00:00', '牛奶', '1', '莉莉');
INSERT INTO `weekly` VALUES ('2', '1000', '2021-05-14 00:00:00', '荔枝', '0', '沃六');
INSERT INTO `weekly` VALUES ('3', '1002', '2019-07-28 14:15:34', '花生', '1', '王五');
INSERT INTO `weekly` VALUES ('4', '1003', '2019-08-04 12:12:12', '梨子', '1', '张三');
INSERT INTO `weekly` VALUES ('5', '1005', '2019-08-11 08:03:12', '饼干', '1', '周周');
INSERT INTO `weekly` VALUES ('6', '1002', '2019-08-25 06:12:16', '山楂', '1', '成功');
INSERT INTO `weekly` VALUES ('7', '1005', '2019-09-01 11:13:16', '方便面', '1', '张三');
INSERT INTO `weekly` VALUES ('8', '1007', '2019-09-08 13:23:26', '水果', '1', '刘六');
INSERT INTO `weekly` VALUES ('9', '1001', '2019-09-22 14:15:42', '荔枝', '1', '李七');
INSERT INTO `weekly` VALUES ('10', '1007', '2019-09-29 14:18:19', '猕猴桃', '1', '顺利');
INSERT INTO `weekly` VALUES ('11', '1001', '2012-11-12 19:14:18', '成功', '1', '刘六');
INSERT INTO `weekly` VALUES ('12', '1002', '2021-11-16 17:19:11', '全部成功', '1', '王五');
INSERT INTO `weekly` VALUES ('13', '1003', '2021-01-23 10:23:45', '作业完成了', '1', '张三');
INSERT INTO `weekly` VALUES ('14', '1002', '2021-04-24 21:21:13', '可乐', '1', '里斯');
INSERT INTO `weekly` VALUES ('15', '1005', '2021-04-26 19:35:57', '面包', '1', '悠悠');
INSERT INTO `weekly` VALUES ('16', '1010', '2021-04-26 22:15:27', '矿泉水', '1', '优秀');
INSERT INTO `weekly` VALUES ('17', '1009', '2018-12-19 23:11:11', '农夫山泉', '1', '李娟');
INSERT INTO `weekly` VALUES ('18', '1011', '2016-06-16 16:14:13', '实验', '1', '鲁斯');
INSERT INTO `weekly` VALUES ('19', '1012', '2018-02-26 18:16:16', '葡萄', '1', '露丝');
INSERT INTO `weekly` VALUES ('41', '1000', '2019-12-11 12:12:11', 'pinggan', '1', 'shunli');
