CREATE DATABASE perntodo;

CREATE TABLE todo (
    todo_id BIGSERIAL NOT NULL PRIMARY KEY,
    description VARCHAR(255) NOT NULL
);

ALTER TABLE todo 
    ADD complete VARCHAR(50);