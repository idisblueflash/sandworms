CREATE TABLE `sandworms`.`thing` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(255) NOT NULL,
  `catalog` VARCHAR(10) NULL COMMENT 'task: 任务\nbug: 产品问题\nbreak: 中断\nhelp: 帮助\nbonus: 加分',
  `level` INT NULL COMMENT 'catalog=task level=复杂度 1－3\ncatalog=bug level=严重程度 1－3\n其他为空',
  `notes` VARCHAR(255) NULL COMMENT 'catalog=bug notes=影响面\n其他为备注',
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`));
