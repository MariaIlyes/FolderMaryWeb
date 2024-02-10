CREATE DATABASE maria;

USE maria;

CREATE TABLE produse (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nume VARCHAR(255),
    descriere TEXT,
    pret DECIMAL(10, 2)
);

INSERT INTO produse (nume, descriere, pret) VALUES
('fasole', 'fasole tarcata de buzau', 10.99),
('mazare', 'de la Iasi', 20.49),
('Bere', 'Ciuc', 15.99);