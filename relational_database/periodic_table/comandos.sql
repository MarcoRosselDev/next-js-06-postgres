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