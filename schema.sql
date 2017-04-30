DROP DATABASE IF EXISTS mmm;

CREATE DATABASE mmm;

USE mmm;

CREATE TABLE players (
  id int NOT NULL AUTO_INCREMENT,
  token varchar(20) NOT NULL,
  tokenImg varchar(20) NOT NULL,
  balance int NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO players (token, tokenImg, balance) VALUES ('bank', 'bank', 150000);
INSERT INTO players (token, tokenImg, balance) VALUES ('hat', 'hat', 1500);
INSERT INTO players (token, tokenImg, balance) VALUES ('trex', 'trex', 1500);