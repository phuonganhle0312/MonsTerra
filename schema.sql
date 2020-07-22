DROP DATABASE IF EXISTS associations_db;
CREATE DATABASE associations_db;

USE associations_db;
SELECT * FROM users;
SELECT * FROM pets;
SELECT * FROM collections;
SELECT * FROM dexes;
SELECT * FROM Monsters;
SELECT * FROM colors;

CREATE TABLE dex (
	id int NOT NULL AUTO_INCREMENT,
	dex_species VARCHAR(30) NOT NULL,
	dex_area VARCHAR(30) NOT NULL,
	dex_rarity VARCHAR(30) NOT NULL,
	dex_colors VARCHAR(30) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE Monsters (
	id int NOT NULL AUTO_INCREMENT,
	dex_species VARCHAR(30) NOT NULL,
	dex_area VARCHAR(30) NOT NULL,
	dex_rarity VARCHAR(30) NOT NULL,
    monster_id INTEGER NOT NULL,
	createdAt TIMESTAMP NOT NULL,
	updatedAt TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
	PRIMARY KEY (id)
);

INSERT INTO users (username, password, createdAt, updatedAt) VALUES ('coolkid', 'sweetpassword', NOW(), NOW());
INSERT INTO collections (name, CollectionId, UserId, createdAt, updatedAt) VALUES ('pets', 1, 1, NOW(), NOW());
INSERT INTO users (username, password, createdAt, updatedAt) VALUES ('coolkid', 'sweetpassword', NOW(), NOW());
INSERT INTO collections (name, CollectionId, UserId, createdAt, updatedAt) VALUES ('pets', 2, 2, NOW(), NOW());



INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Ghostfly', '1', 'common', '1', NOW(), NOW());
INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Woolie', '1', 'common', '2', NOW(), NOW());
INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Cro', '1', 'common', '3', NOW(), NOW());
INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Ferren', '1', 'uncommon', '4', NOW(), NOW());
INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Ribonnie', '1', 'uncommon', '5', NOW(), NOW());
INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Silky Strider', '1', 'uncommon', '6', NOW(), NOW());
INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Babbledog', '1', 'rare', '7', NOW(), NOW());
INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Hanana', '1', 'rare', '8', NOW(), NOW());



INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Pixci', '2', 'common', '9', NOW(), NOW());
INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Flitter', '2', 'common', '10', NOW(), NOW());
INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Mochi', '2', 'common', '11', NOW(), NOW());
INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Muna', '2', 'uncommon', '12', NOW(), NOW());
INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Stalker', '2', 'uncommon', '13', NOW(), NOW());
INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Kit Wyvern', '2', 'rare', '14', NOW(), NOW());
INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Stattik', '2', 'rare', '15', NOW(), NOW());



INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Pyrebird', '3', 'common', '16', NOW(), NOW());
INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Bighorn', '3', 'common', '17', NOW(), NOW());
INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Gekki', '3', 'common', '18', NOW(), NOW());
INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Chewii', '3', 'uncommon', '19', NOW(), NOW());
INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Devi', '3', 'uncommon', '20', NOW(), NOW());
INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Snap Raptor', '3', 'rare', '21', NOW(), NOW());
INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Snip Raptor', '3', 'rare', '22', NOW(), NOW());



INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Rock Guppy', '4', 'common', '23', NOW(), NOW());
INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Seabun', '4', 'common', '24', NOW(), NOW());
INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Isopaw', '4', 'uncommon', '25', NOW(), NOW());
INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Sailfin', '4', 'uncommon', '26', NOW(), NOW());
INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Gull Wyvern', '4', 'rare', '27', NOW(), NOW());
INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Snake Wyvern', '4', 'rare', '28', NOW(), NOW());

INSERT INTO Monsters (dex_species, dex_area, dex_rarity, monsterId, createdAt, updatedAt) VALUES ('Pom', '5', 'common', '29', NOW(), NOW());