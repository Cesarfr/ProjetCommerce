CREATE DATABASE COMMERCE DEFAULT CHARACTER SET utf8;
use COMMERCE;

CREATE TABLE USER(id_user int PRIMARY KEY auto_increment, n_user varchar(100) NOT NULL, password varchar(50) NOT NULL, prenom varchar(100) NOT NULL,
 nom varchar(100) NOT NULL)ENGINE=INNODB;

CREATE TABLE CATEGORIE(id_categorie int primary key auto_increment, nom_cat varchar(100) NOT NULL)ENGINE=INNODB;

CREATE TABLE SUBCATEG(id_subcat int PRIMARY KEY auto_increment, nom_subcat varchar(100)  NOT NULL, id_categorie int, 
	FOREIGN KEY(id_categorie) REFERENCES CATEGORIE(id_categorie) ON DELETE CASCADE ON UPDATE CASCADE)ENGINE=INNODB;

CREATE TABLE PRODUCT(id_product int primary key auto_increment, nom_prod varchar(100) NOT NULL, 
	ref varchar(10) NOT NULL, description text NOT NULL, image varchar(100) NOT NULL)ENGINE=INNODB;

CREATE TABLE CATEG_PROD(id_cp int auto_increment, id_categorie int, id_product int, PRIMARY KEY(id_cp, id_categorie, id_product), 
	FOREIGN KEY(id_categorie) REFERENCES CATEGORIE(id_categorie)ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY(id_product) REFERENCES PRODUCT(id_product)ON DELETE CASCADE ON UPDATE CASCADE)ENGINE=INNODB;

CREATE TABLE SUB_PROD(id_sp int auto_increment, id_subcat int, id_product int, PRIMARY KEY(id_sp, id_subcat, id_product), 
	FOREIGN KEY(id_subcat) REFERENCES SUBCATEG(id_subcat)ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY(id_product) REFERENCES PRODUCT(id_product)ON DELETE CASCADE ON UPDATE CASCADE)ENGINE=INNODB;

CREATE TABLE INFO(id_info int PRIMARY KEY auto_increment, description text NOT NULL)ENGINE=INNODB;
CREATE TABLE MOME(id_mome int PRIMARY KEY auto_increment, description text NOT NULL)ENGINE=INNODB;
CREATE TABLE EDITO(id_edito int PRIMARY KEY auto_increment, description text NOT NULL)ENGINE=INNODB;
CREATE TABLE PROPOS(id_propos int PRIMARY KEY auto_increment, description text NOT NULL)ENGINE=INNODB;

CREATE TABLE CONTACT(id_contact int PRIMARY KEY auto_increment, nom varchar(100) NOT NULL, prenom varchar(100) NOT NULL, 
	email varchar(100) NOT NULL, tel bigint(12) NOT NULL, mob bigint(12) NOT NULL)ENGINE=INNODB;


INSERT INTO CATEGORIE (nom_cat) VALUES ("Beaute & Bien-etre");
INSERT INTO CATEGORIE (nom_cat) VALUES ("Mode & Bijoux");
INSERT INTO CATEGORIE (nom_cat) VALUES ("Nutrition & Recettes");
INSERT INTO CATEGORIE (nom_cat) VALUES ("Others");

INSERT INTO SUBCATEG (nom_subcat, id_categorie) VALUES ("Aromatherapie", 1);
INSERT INTO SUBCATEG (nom_subcat, id_categorie) VALUES ("Minceur", 1);
INSERT INTO SUBCATEG (nom_subcat, id_categorie) VALUES ("Soin du corps", 1);
INSERT INTO SUBCATEG (nom_subcat, id_categorie) VALUES ("OTRa", 2);
INSERT INTO SUBCATEG (nom_subcat, id_categorie) VALUES ("Rawwr", 4);

INSERT INTO PRODUCT (nom_prod, ref, description, image) VALUES ("Lorem Ipsum","530044b1","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	"vig_produit1.png");
INSERT INTO PRODUCT (nom_prod, ref, description, image) VALUES ("Consectetur","530044b2","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	"vig_produit2.png");
INSERT INTO PRODUCT (nom_prod, ref, description, image) VALUES ("Sed do eiusmod","530044b3","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	"vig_produit3.png");
INSERT INTO PRODUCT (nom_prod, ref, description, image) VALUES ("Ut labore","530044b4","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	"vig_produit4.png");

INSERT INTO CATEG_PROD (id_categorie, id_product) VALUES(1,1);
INSERT INTO CATEG_PROD (id_categorie, id_product) VALUES(2,1);
INSERT INTO CATEG_PROD (id_categorie, id_product) VALUES(3,1);
INSERT INTO CATEG_PROD (id_categorie, id_product) VALUES(4,1);
INSERT INTO CATEG_PROD (id_categorie, id_product) VALUES(1,2);
INSERT INTO CATEG_PROD (id_categorie, id_product) VALUES(3,3);
INSERT INTO CATEG_PROD (id_categorie, id_product) VALUES(4,4);

INSERT INTO SUB_PROD (id_subcat, id_product) VALUES(1,1);
INSERT INTO SUB_PROD (id_subcat, id_product) VALUES(2,1);
INSERT INTO SUB_PROD (id_subcat, id_product) VALUES(3,1);
INSERT INTO SUB_PROD (id_subcat, id_product) VALUES(4,1);
INSERT INTO SUB_PROD (id_subcat, id_product) VALUES(1,2);
INSERT INTO SUB_PROD (id_subcat, id_product) VALUES(3,3);
INSERT INTO SUB_PROD (id_subcat, id_product) VALUES(4,4);

INSERT INTO USER (n_user, password, prenom, nom) VALUES('admin', '827ccb0eea8a706c4c34a16891f84e7b', 'Cesar', 'HERNANDEZ');