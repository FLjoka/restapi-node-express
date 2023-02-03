CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employed( 
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
)

DESCRIBE employed

INSERT INTO employed VALUES
(1, 'Joe', 1000),
(2, 'Henry', 2000),
(3, 'Sam', 2500),
(4, 'Max', 1500);

 SELECT * FROM employed;

 SELECT * FROM employed WHERE id = 1;

 DELETE FROM employed WHERE id = 2;

 UPDATE employed SET name = franco, salary = 3000: