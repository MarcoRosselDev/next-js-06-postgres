## pg

```postgresql
<!-- crear ----------------------------------------- -->
<!-- crecar una base de datos -->
CREATE DATABASE random_name;

<!-- crear una tabla -->
CREATE TABLE table_name();

<!-- crear una tabla con clumnas al toke -->
CREATE TABLE table_name(column_name DATATYPE CONSTRAINTS);

<!-- ejempolo crear tabla con clumnas al toke -->
CERATE TABLE person(
  id int,
  name varchar(20),
  date TIMESTAMP,
);

<!-- agregar columna a una tabla -->
ALTER TABLE table_name ADD COLUMN column_name DATATYPE;

<!-- agregar restricion unique a columna excistente -->
ALTER TABLE description
ADD UNIQUE (name);

<!-- agregar columna, con restriccion no nullo -->
ALTER TABLE table_name ADD COLUMN column_name DATATYPE NOT NULL;
ALTER TABLE more_info  alter column character_id set NOT NULL;
alter table sounds add column filename varchar(40) not null unique;

<!-- agregar columna con restriccion unico -->
ALTER TABLE table_name ADD UNIQUE(column_name);

<!-- agregar columna primary key -->
ALTER TABLE table_name ADD PRIMARY KEY(column_name);

<!-- agregar una clave foranea -->
ALTER TABLE table_name ADD COLUMN column_name DATATYPE REFERENCES referenced_table_name(referenced_column_name);
ALTER TABLE more_info  ADD COLUMN character_id INT REFERENCES characters(character_id);

<!-- agregar una clave foranes one to many -->
ALTER TABLE table_name ADD COLUMN column_name DATATYPE CONSTRAINT REFERENCES referenced_table_name(referenced_column_name);

<!-- alterar una excistente para que sea una llave foranea -->
ALTER TABLE character_actions ADD FORAIGN KEY(character_id) REFERENCES characters(character_id);


<!-- renombrar----------------------------------------- -->
<!-- renombrear el nombre de una columna -->
ALTER TABLE table_name RENAME COLUMN column_name TO new_name;

<!-- renombrar una db -->
ALTER DATABASE database_name RENAME TO new_database_name;




<!-- agregar----------------------------------------- -->
<!-- agregar registro -->
INSERT INTO table_name(column_1, column_2) VALUES(value1, value2);

INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1981-07-09', 155, 64.5, 1);

<!-- ejemplo de agregar varios registros a la vez -->
INSERT INTO characters(name, homeland, favorite_color)
VALUES('Mario', 'Mushroom Kingdom', 'Red'),
('Luigi', 'Mushroom Kingdom', 'Green'),
('Peach', 'Mushroom Kingdom', 'Pink');



<!-- eliminar----------------------------------------- -->
<!-- eliminar registro (con condicion)  -->
DELETE FROM table_name WHERE condition;

<!-- eliminar una base de datos -->
DROP DATABASE "MyDatabase";

<!-- eliminar columna a una tabla -->
ALTER TABLE table_name DROP COLUMN column_name;

<!-- eliminar una restrincion -->
ALTER TABLE table_name DROP CONSTRAINT constraint_name;
ALTER TABLE table_name DROP CONSTRAINT characters_pkey; // elimina la restriccion primary key de una columna





<!-- update -->
<!-- actualizar un registro -->
UPDATE table_name SET column_name=new_value WHERE condition;

<!-- actualizar un registro con una condicion (id mas antiguo = menor) -->
UPDATE table_name 
SET name = 'Mario' 
WHERE id = (SELECT MIN(id) FROM table_name WHERE name = 'NombreActual');





<!-- querys ---------------------------------------------->
<!-- seleccionar columnas de tabla por ordern de columna -->
SELECT columns FROM table_name ORDER BY column_name;


<!-- monstrar los todos los registros de una tabla -->
SELECT columns FROM table_name;

<!-- join query de dos tablas con clave foranea -->
SELECT columns FROM table_1 FULL JOIN table_2 ON table_1.primary_key_column = table_2.foreign_key_column;

<!-- ejemplo de query de 3 tablas con claves foraneas -->
SELECT columns FROM junction_table
FULL JOIN table_1 ON junction_table.foreign_key_column = table_1.primary_key_column
FULL JOIN table_2 ON junction_table.foreign_key_column = table_2.primary_key_column;

```

## comandos
```terminal
<!-- muestra por consola la lista de db -->

\l


<!-- comando para conectar a una db -->

\c nombre_db


<!-- mostrar lista de tablas (dentro de un db) -->

\d


<!-- mostrar contanido de una db -->
\d nombre_db;

```

## data type

```postgresql
<!-- type text (nesecita el numero maximo de caracteres) -->
VARCHAR(30)

<!-- autoincrement -->
SERIAL

<!-- requerido, forzar su incorporacion o lanzar error -->
NOT NULL

```