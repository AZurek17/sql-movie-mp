DROP DATABASE IF EXISTS movies_mini_db;
CREATE DATABASE movies_mini_db;

USE movies_mini_db;

DROP TABLE IF EXISTS movies;
CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
    id INT NOT NULL AUTO_INCREMENT,
    review VARCHAR(255) NOT NULL,
    movies_id INT,
    FOREIGN KEY (movies_id)
    REFERENCES movies(id),
    PRIMARY KEY (id)
);
