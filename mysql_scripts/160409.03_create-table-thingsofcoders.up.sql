CREATE TABLE `sandworms`.`things_of_coders` (
  `id` INT NOT NULL,
  `coder_id` INT NULL,
  `thing_id` INT NULL,
  `status` VARCHAR(10) NULL COMMENT 'wip, doing, done',
  `work_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP COMMENT '由于任务会切分成当日可以完成的粒度，所以这里只记录领取的时间。',
  `close_time` TIMESTAMP,
  PRIMARY KEY (`id`));
