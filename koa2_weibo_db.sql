/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50730
Source Host           : localhost:3306
Source Database       : koa2_weibo_db

Target Server Type    : MYSQL
Target Server Version : 50730
File Encoding         : 65001

Date: 2021-06-06 10:46:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for atrelations
-- ----------------------------
DROP TABLE IF EXISTS `atrelations`;
CREATE TABLE `atrelations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL COMMENT '用户 Id',
  `blogId` int(11) NOT NULL COMMENT '微博 Id',
  `isRead` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否已读',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `blogId` (`blogId`),
  CONSTRAINT `atrelations_ibfk_1` FOREIGN KEY (`blogId`) REFERENCES `blogs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of atrelations
-- ----------------------------
INSERT INTO `atrelations` VALUES ('1', '2', '7', '1', '2021-06-06 02:43:44', '2021-06-06 02:45:52');
INSERT INTO `atrelations` VALUES ('2', '2', '8', '1', '2021-06-06 02:45:50', '2021-06-06 02:45:52');

-- ----------------------------
-- Table structure for blogs
-- ----------------------------
DROP TABLE IF EXISTS `blogs`;
CREATE TABLE `blogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL COMMENT '用户 ID',
  `content` text NOT NULL COMMENT '微博内容',
  `image` varchar(255) DEFAULT NULL COMMENT '图片地址',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `blogs_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blogs
-- ----------------------------
INSERT INTO `blogs` VALUES ('1', '1', '碧蓝如洗的晴空下，是一片连绵不断的青山绿树，各种不知名的野花在丛林间争相盛开，绽放着如云霞般绚烂的色彩。', null, '2021-06-06 02:39:55', '2021-06-06 02:39:55');
INSERT INTO `blogs` VALUES ('2', '2', '曲曲弯弯的石径一直通往树林茂密的山沟里，粉的桃花，红的杏花，白的梨花满山遍野，早已解了冻的小河流淌着，峥峥作响。', null, '2021-06-06 02:41:03', '2021-06-06 02:41:03');
INSERT INTO `blogs` VALUES ('3', '1', '南方的八月间，骄阳似火。中午时分，太阳把树叶都晒得卷缩起来。知了扯着长声聒个不停，给闷热的天气更添上一层烦燥。', null, '2021-06-06 02:41:27', '2021-06-06 02:41:27');
INSERT INTO `blogs` VALUES ('4', '1', '在喜鹊的鸣叫声中，河岸边的杨柳绽开一溜鹅黄，田野里的油菜花开放得一片灿烂，而竹林幽幽，菜花黄黄，天地便陡然亮丽了起来。', null, '2021-06-06 02:41:40', '2021-06-06 02:41:40');
INSERT INTO `blogs` VALUES ('5', '2', '冬天虽然没有春天那么生机勃勃;没有夏天那么炎热;没有秋天那么凉爽，但它有着自己的风格，自己的美丽。但是我任然爱着这美丽的冬天。', null, '2021-06-06 02:41:56', '2021-06-06 02:41:56');
INSERT INTO `blogs` VALUES ('6', '2', '雁阵。一群排成人字形的大雁，徐徐地朝南飞去。太阳赤灿灿，雁阵渐渐地融进那耀眼的光芒里。一首生命的诗，在蓝空中吟唱。他呆了。他也呆了。', null, '2021-06-06 02:42:25', '2021-06-06 02:42:25');
INSERT INTO `blogs` VALUES ('7', '1', '@lu - lu 你好呀！！！！我是浩浩', null, '2021-06-06 02:43:44', '2021-06-06 02:43:44');
INSERT INTO `blogs` VALUES ('8', '2', '你好，很高兴认识你！！！@lu - lu 你好呀！！！！我是浩浩', null, '2021-06-06 02:45:50', '2021-06-06 02:45:50');

-- ----------------------------
-- Table structure for userrelations
-- ----------------------------
DROP TABLE IF EXISTS `userrelations`;
CREATE TABLE `userrelations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL COMMENT '用户ID',
  `followerId` int(11) NOT NULL COMMENT '被关注的用户ID',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `followerId` (`followerId`),
  CONSTRAINT `userrelations_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `userrelations_ibfk_2` FOREIGN KEY (`followerId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userrelations
-- ----------------------------
INSERT INTO `userrelations` VALUES ('1', '1', '1', '2021-06-06 02:39:05', '2021-06-06 02:39:05');
INSERT INTO `userrelations` VALUES ('2', '2', '2', '2021-06-06 02:40:42', '2021-06-06 02:40:42');
INSERT INTO `userrelations` VALUES ('3', '1', '2', '2021-06-06 02:43:22', '2021-06-06 02:43:22');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL COMMENT '用户名，唯一',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `nickName` varchar(255) NOT NULL COMMENT '昵称',
  `gender` decimal(10,0) NOT NULL DEFAULT '3' COMMENT '性别（1男性，2女性，3保密）',
  `picture` varchar(255) DEFAULT NULL COMMENT '头像，图片地址',
  `city` varchar(255) DEFAULT NULL COMMENT '城市',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userName` (`userName`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'haohao', 'ee9b0d25be91dd51d400b8f3d5c34a5f', '浩浩', '1', 'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/30adcbef76094b36c896219ba1cc7cd98d109dbb.jpg', '汕头', '2021-06-06 02:39:04', '2021-06-06 02:43:02');
INSERT INTO `users` VALUES ('2', 'lu', 'ee9b0d25be91dd51d400b8f3d5c34a5f', 'lu', '2', null, null, '2021-06-06 02:40:41', '2021-06-06 02:40:41');
