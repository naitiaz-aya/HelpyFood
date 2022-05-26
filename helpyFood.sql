CREATE TABLE produit (
    ID int NOT NULL,
    nom varchar(255) NOT NULL,
    Description varchar(255),
    prix int,
	 FOREIGN KEY (produit_id) REFERENCES produit(produitID)
	 FOREIGN KEY (category_id) REFERENCES category(categoryID)
    PRIMARY KEY (ID)
);
INSERT INTO `produit` (`id`, `category_id`, `nom`, `description`, `prix`) VALUES (NULL, '2', 'salade marocaine', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', '20');


CREATE TABLE paiement (
    ID int NOT NULL,
    nom varchar(255) NOT NULL,
    PRIMARY KEY (ID)
);
INSERT INTO `paiement` (`id`, `nom`) VALUES (NULL, 'Espece');


CREATE TABLE lignedecommande (
    ID int NOT NULL,
    quantité int,
    total int,
	 FOREIGN KEY (produit_id) REFERENCES produit(produitID)
    PRIMARY KEY (ID)
);
INSERT INTO `lignedecommande` (`id`, `produits_id`, `quantité`, `total`) VALUES (NULL, '7', '3', '60');

CREATE TABLE ingredient (
    ID int NOT NULL,
    nom varchar(255) NOT NULL,
	 FOREIGN KEY (produit_id) REFERENCES produit(produitID)
    PRIMARY KEY (ID)
);

INSERT INTO `ingredient` (`id`, `nom`, `produit_id`) VALUES (NULL, 'viande hachée', '2');


CREATE TABLE famille (
    ID int NOT NULL,
    nom varchar(255) NOT NULL,
    PRIMARY KEY (ID)
);
INSERT INTO `famille` (`id`, `nom`) VALUES (NULL, 'Entree');


CREATE TABLE categorie (
	ID int NOT NULL,
	status varchar(255) NOT NULL,
	date datetime NOT NULL,
	tel int NOT NULL,
	total int NOT NULL,
	FOREIGN KEY (paiement_id) REFERENCES paiement(paiementID),
	FOREIGN KEY (adress_id) REFERENCES adress(adressID),
	PRIMARY KEY (ID),
);
INSERT INTO `commande` (`id`, `adress_id`, `paiement_id`, `status`, `date`, `tel`, `total`) VALUES (NULL, '1', '3', 'validee', '2022-05-26 15:28:32.000000', '1223456789', '60');

CREATE TABLE produit (
    ID int NOT NULL,
    nom varchar(255) NOT NULL,
    rue varchar(255),
    ville varchar(255),
    code_postal int,
	 FOREIGN KEY (user_id) REFERENCES user(userID)
    PRIMARY KEY (ID)
);
INSERT INTO `adress` (`id`, `user_id`, `nom`, `rue`, `code_postal`, `ville`) VALUES (NULL, '12', '5 IMM Chefchaouen', 'Izdihar', '40000', 'Marrakech');