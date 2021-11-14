CREATE TABLE celebs (
	id INTEGER,
	name TEXT,
	age INTEGER
);

INSERT INTO celebs (id, name, age)
VALUES (1, 'Justin Bieber', 21);
SELECT * FROM celebs;
SELECT name FROM celebs;

UPDATE celebs
SET age = 22
WHERE id = 1;

SELECT * FROM celebs;

ALTER TABLE celebs ADD COLUMN
twitter_handle TEXT; // Adds a TEXT column labeled 'twitter_handle' filled with null

SELECT * FROM celebs;


UPDATE celebs
SET twitter_handle = '@taylorswift13'
WHERE id = 4; // Update any of the table where the id = 4 with this twitter_handle
				// Could have used WHERE name = 'Taylor Swift'

DELETE FROM celebs WHERE twitter_handle
IS NULL;

SELECT * FROM celebs; // Display all from celebs table (Minus those that were just deleted, leaves only 'Taylor Swift'


CREATE TABLE celebs (
   id INTEGER PRIMARY KEY, // PRIMARY KEY columns can be used to uniquely identify the row. A constriant violation will be thrown if you attempt to insert a row with an identical value to a row already in the table
   name TEXT UNIQUE, // UNIQUE columns have a different value for ever row - similar to PRIMARY KEY but a talbe can have many different UNIQUE columns
   date_of_birth TEXT NOT NULL, // Must be not NULL, otherwise the row will not be inserted
   date_of_death TEXT DEFAULT 'Not Applicable',
);

SELECT * FROM movies
WHERE name LIKE 'Se_en'; // _ wildcard, would display both Seven and Se7en 
WHERE name LIKE '%man%'; // % wildcard, would display Iron Man 3, Pretty Woman, etc.
WHERE name BETWEEN 'D' AND 'G'; // Displays all movies beginning with 'D', 'E', 'F', NOT 'G'
WHERE year