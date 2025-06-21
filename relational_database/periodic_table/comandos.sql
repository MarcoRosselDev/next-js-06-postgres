/* lista de tablas:
 Schema |    Name    | Type  |    Owner     
--------+------------+-------+--------------
 public | elements   | table | freecodecamp
 public | properties | table | freecodecamp
(2 rows)

periodic_table=> \d elements
                        Table "public.elements"
    Column     |         Type          | Collation | Nullable | Default 
---------------+-----------------------+-----------+----------+---------
 atomic_number | integer               |           | not null | 
 symbol        | character varying(2)  |           |          | 
 name          | character varying(40) |           |          | 
Indexes:
    "elements_pkey" PRIMARY KEY, btree (atomic_number)
    "elements_atomic_number_key" UNIQUE CONSTRAINT, btree (atomic_number)

periodic_table=> \d properties
                       Table "public.properties"
    Column     |         Type          | Collation | Nullable | Default 
---------------+-----------------------+-----------+----------+---------
 atomic_number | integer               |           | not null | 
 type          | character varying(30) |           |          | 
 weight        | numeric(9,6)          |           | not null | 
 melting_point | numeric               |           |          | 
 boiling_point | numeric               |           |          | 
Indexes:
    "properties_pkey" PRIMARY KEY, btree (atomic_number)
    "properties_atomic_number_key" UNIQUE CONSTRAINT, btree (atomic_number)
 */
/* You should rename the weight column to atomic_mass ---> renombrar la columna weight a atomic_mass */
ALTER TABLE properties RENAME COLUMN weight TO atomic_mass;

/* You should rename the melting_point column to melting_point_celsius and the boiling_point column to boiling_point_celsius 
renombrar properties.melting_point a melting_point_celsius y properties.boiling_point a boiling_point_celsius
*/
ALTER TABLE properties RENAME COLUMN melting_point TO melting_point_celsius;
ALTER TABLE properties RENAME COLUMN boiling_point TO boiling_point_celsius;

/* Your melting_point_celsius and boiling_point_celsius columns should not accept null values */
ALTER TABLE properties ALTER COLUMN melting_point_celsius set NOT NULL;
ALTER TABLE properties ALTER COLUMN boiling_point_celsius set NOT NULL;
/* You should add the UNIQUE constraint to the symbol and name columns from the elements table */
ALTER TABLE elements ADD UNIQUE(symbol);
ALTER TABLE elements ADD UNIQUE(name);
/* Your symbol and name columns should have the NOT NULL constraint
symbol y name deven ser NOT NULL */
ALTER TABLE elements ALTER COLUMN symbol set NOT NULL;
ALTER TABLE elements ALTER COLUMN name set NOT NULL;
/*You should set the atomic_number column from the properties table as a foreign key that references the column of the same name in the elements table  
agregar una llave foranea de atomic_number de properties a elements */
ALTER TABLE properties ADD FOREIGN KEY(atomic_number) REFERENCES elements(atomic_number);
/* You should create a types table that will store the three types of elements
crear una tabla types con guarde los 3 tipos de elementos */
CREATE TABLE types(type_id INT PRIMARY KEY, type VARCHAR(50) NOT NULL);
/* You should add three rows to your types table whose values are the three different types from the properties table
agregar 3 registros a la tabla types que son los 3 de la tabla properties */
INSERT INTO types(type_id, type) VALUES(1, 'nonmetal'), (2, 'metal'), (3, 'metalloid');
/* Your properties table should have a type_id foreign key column that references the type_id column from the types table. It should be an INT with the NOT NULL constraint .
la tabla properties deve tenter una llave foranea en type_id con la tabla types.
tabmien deve ser INT y NOT NULL
*/
ALTER TABLE properties ADD COLUMN type_id INT;
UPDATE properties SET type_id='1' WHERE type='nonmetal';
UPDATE properties SET type_id='2' WHERE type='metal';
UPDATE properties SET type_id='3' WHERE type='metalloid';
ALTER TABLE properties  alter column type_id set NOT NULL;
ALTER TABLE properties ADD FOREIGN KEY(type_id) REFERENCES types(type_id);

/* You should capitalize the first letter of all the symbol values in the elements table. Be careful to only capitalize the letter and not change any others 
aplicar mayuscula a la primera letra de elements.symbol
*/
UPDATE elements SET symbol = INITCAP(symbol);

/* You should remove all the trailing zeros after the decimals from each row of the atomic_mass column. You may need to adjust a data type to DECIMAL for this. The final values they should be are in the atomic_mass.txt file.
 */

ALTER TABLE properties ALTER COLUMN atomic_mass TYPE REAL;
UPDATE properties SET atomic_mass='1.008' WHERE atomic_number='1';
UPDATE properties SET atomic_mass='4.0026' WHERE atomic_number='2';
UPDATE properties SET atomic_mass='6.94' WHERE atomic_number='3';
UPDATE properties SET atomic_mass='9.0122' WHERE atomic_number='4';
UPDATE properties SET atomic_mass='10.81' WHERE atomic_number='5';
UPDATE properties SET atomic_mass='12.011' WHERE atomic_number='6';
UPDATE properties SET atomic_mass='14.007' WHERE atomic_number='7';
UPDATE properties SET atomic_mass='15.999' WHERE atomic_number='8';
UPDATE properties SET atomic_mass='18.998' WHERE atomic_number='9';
UPDATE properties SET atomic_mass='20.18' WHERE atomic_number='10';

/* You should add the element with atomic number 9 to your database. Its name is Fluorine, symbol is F, mass is 18.998, melting point is -220, boiling point is -188.1, and it's a nonmetal 
ingresar  atomic number 9
*/
INSERT INTO elements(atomic_number, symbol, name) VALUES(9, 'F', 'Fluorine');
INSERT INTO properties(atomic_number, type, atomic_mass, melting_point_celsius, boiling_point_celsius, type_id) VALUES(9, 'nonmetal', 18.998, -220, -188.1, 1);

/* You should add the element with atomic number 10 to your database. Its name is Neon, symbol is Ne, mass is 20.18, melting point is -248.6, boiling point is -246.1, and it's a nonmetal */
INSERT INTO elements(atomic_number, symbol, name) VALUES(10, 'Ne', 'Neon');
INSERT INTO properties(atomic_number, type, atomic_mass, melting_point_celsius, boiling_point_celsius, type_id) VALUES(10, 'nonmetal', 20.18, -248.6, -246.1, 1);
/* psql -U postgres < periodic_table.sql */