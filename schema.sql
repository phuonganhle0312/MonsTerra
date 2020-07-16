DROP DATABASE IF EXISTS monsterra_db;

CREATE DATABASE monsterra_db;


CREATE TABLE forest (
  id int NOT NULL AUTO_INCREMENT,
  pet_name varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE water (
  id int NOT NULL AUTO_INCREMENT,
  pet_name varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE grass (
  id int NOT NULL AUTO_INCREMENT,
  pet_name varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE rocks (
  id int NOT NULL AUTO_INCREMENT,
  pet_name varchar(50) NOT NULL,
  PRIMARY KEY (id)
);