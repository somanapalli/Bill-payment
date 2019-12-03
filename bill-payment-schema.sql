-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema bill-payment
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bill-payment
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bill-payment` DEFAULT CHARACTER SET utf8 ;
USE `bill-payment` ;

-- -----------------------------------------------------
-- Table `bill-payment`.`bill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bill-payment`.`bill` (
  `bill_id` INT(11) NOT NULL AUTO_INCREMENT,
  `amt` INT(11) NOT NULL,
  `consumer_id` VARCHAR(255) NOT NULL,
  `user_us_id` INT(11) NULL DEFAULT NULL,
  `vendor_vr_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`bill_id`),
  INDEX `FK2mbqhdvakof21awq9yv81eoo3` (`user_us_id` ASC),
  INDEX `FKddndg72b8598v3j2jd6gd223n` (`vendor_vr_id` ASC))
ENGINE = MyISAM
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bill-payment`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bill-payment`.`role` (
  `ro_id` INT(11) NOT NULL AUTO_INCREMENT,
  `ro_name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`ro_id`))
ENGINE = MyISAM
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bill-payment`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bill-payment`.`user` (
  `us_id` INT(11) NOT NULL AUTO_INCREMENT,
  `us_password` VARCHAR(255) NULL DEFAULT NULL,
  `us_username` VARCHAR(255) NULL DEFAULT NULL,
  `us_firstname` VARCHAR(255) NOT NULL,
  `us_lastname` VARCHAR(255) NOT NULL,
  `us_aadhar` VARCHAR(255) NOT NULL,
  `us_age` INT(11) NOT NULL,
  `us_contact` INT(11) NOT NULL,
  `us_gender` VARCHAR(255) NOT NULL,
  `us_pan` VARCHAR(255) NOT NULL,
  `us_userid` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`us_id`))
ENGINE = MyISAM
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bill-payment`.`user_role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bill-payment`.`user_role` (
  `ur_id` INT(11) NOT NULL AUTO_INCREMENT,
  `ur_ro_id` INT(11) NOT NULL,
  `ur_us_id` INT(11) NOT NULL,
  PRIMARY KEY (`ur_id`),
  INDEX `FKjia4161ecu6h4p0egc2oc04lt` (`ur_ro_id` ASC),
  INDEX `FK1t65ha4bv531fmav53vlu66fg` (`ur_us_id` ASC))
ENGINE = MyISAM
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bill-payment`.`vendor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bill-payment`.`vendor` (
  `vr_id` INT(11) NOT NULL AUTO_INCREMENT,
  `vr_address` VARCHAR(255) NOT NULL,
  `vr_cert_issue_date` DATE NOT NULL,
  `vr_cert_validity_date` DATE NOT NULL,
  `vr_contact` BIGINT(20) NOT NULL,
  `vr_country` VARCHAR(255) NOT NULL,
  `vr_name` VARCHAR(255) NOT NULL,
  `vr_payment` VARCHAR(255) NOT NULL,
  `vr_reg_no` VARCHAR(255) NOT NULL,
  `vr_state` VARCHAR(255) NOT NULL,
  `vr_email` VARCHAR(255) NOT NULL,
  `vr_type` VARCHAR(255) NOT NULL,
  `vr_website` VARCHAR(255) NOT NULL,
  `vr_year` INT(11) NOT NULL,
  `vr_password` VARCHAR(255) NOT NULL,
  `vr_uname` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`vr_id`))
ENGINE = MyISAM
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bill-payment`.`vendor_role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bill-payment`.`vendor_role` (
  `vrr_id` INT(3) NOT NULL AUTO_INCREMENT,
  `vrr_ro_id` INT(11) NOT NULL,
  `vrr_vr_id` INT(11) NOT NULL,
  PRIMARY KEY (`vrr_id`),
  INDEX `FKny5k7lysgxnrctlsv4ajbgsp0` (`vrr_ro_id` ASC),
  INDEX `FKdy31uvmp9jtkpy3owd4ui81wi` (`vrr_vr_id` ASC))
ENGINE = MyISAM
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
