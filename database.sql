
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
CREATE TABLE "user"(
"id" SERIAL PRIMARY KEY,
"username" varchar(20) NOT NULL,
"password" varchar(8) NOT NULL,
"is_admin" varchar(5) DEFAULT ('false')
);

INSERT INTO "user" ("username", "password")
VALUES ('wkromar', 'chungus');

CREATE TABLE "user_snacklist"(
	"id" SERIAL PRIMARY KEY,
	"user_snack_id" INT,
	"user_id" INT,
	snack_favorite varchar(5) DEFAULT ('false')
);

CREATE TABLE "snack_list"(
"id" SERIAL PRIMARY KEY,
"snack_name" varchar(100),
"snack_nutrition" 
)

CREATE TABLE "snack_categories" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR (100) NOT NULL);


-- MAKE MOST VALUES NOT NULL AFTER GETTING CONNECTIONS TO API SET UP
CREATE TABLE "snack_list"(
"id" SERIAL PRIMARY KEY,
"snack_name" VARCHAR(100) NOT NULL,
"snack_nutrition" VARCHAR(500),
"snack_image" VARCHAR (150),
"snack_id" INT,
"category_id" VARCHAR(100));

INSERT INTO "snack_list" ("snack_name","snack_nutrition", "snack_image","snack_id","category_id" ) 
VALUES ('Cheetos', '100% health', 'Image goes here', '1', '2');

INSERT INTO "snack_categories" ("name")
VALUES ('salty'), ('cheesey');