ALTER TABLE `sandworms`.`things_of_coders` 
ADD COLUMN `catalog` VARCHAR(10) NULL DEFAULT 'task' COMMENT 'task: 任务\nbug: 产品问题\nbreak: 中断\nhelp: 帮助\nbonus: 加分' AFTER `complexity`;
