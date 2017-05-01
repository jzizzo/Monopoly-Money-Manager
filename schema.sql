DROP DATABASE IF EXISTS mmm;

CREATE DATABASE mmm;

USE mmm;

CREATE TABLE players (
  id int NOT NULL AUTO_INCREMENT,
  token varchar(20) NOT NULL,
  tokenImg varchar(500) NOT NULL,
  balance int NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO players (token, tokenImg, balance) VALUES ('Fred', 'https://emoji.slack-edge.com/T4LT5QJT0/fred/1ba7e7f11e4185cc.png', 150000);
INSERT INTO players (token, tokenImg, balance) VALUES ('Hat', 'http://icons.iconarchive.com/icons/rob-sanders/hat/128/Hat-bowler-icon.png', 1500);
INSERT INTO players (token, tokenImg, balance) VALUES ('Trex', 'https://static-s.aa-cdn.net/img/gp/20600004620273/jq1i1nFKtLmxQI70ss58AfAwZi0Ef44ie62bthVndVBeHrPL04Ea46560tm-Pdki7phe=w300?v=1', 1500);