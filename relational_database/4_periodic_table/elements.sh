#! /bin/bash

PSQL="psql -X --username=freecodecamp --dbname=periodic_table -t --no-align -c"

if [[ $1 ]]
  then
    # query : atomic_number or symbol or name === $1
    # check si es un numero o string
    if [[ ! $1 =~ ^[0-9]+$ ]]
    then
      ATOMIC_NUMBER=$($PSQL "SELECT atomic_number FROM elements WHERE elements.symbol='$1' OR elements.name='$1'")
      if [[ -z $ATOMIC_NUMBER ]]
        then
          echo "I could not find that element in the database."
        else
          # format mesaje
          SYMBOL=$($PSQL "SELECT symbol FROM elements WHERE atomic_number='$ATOMIC_NUMBER' ")
          NAME=$($PSQL "SELECT name FROM elements WHERE atomic_number='$ATOMIC_NUMBER' ")
          ATOMIC_MASS=$($PSQL "SELECT atomic_mass FROM properties WHERE atomic_number='$ATOMIC_NUMBER' ")
          MELTING_POINT_CELCIUS=$($PSQL "SELECT melting_point_celsius FROM properties WHERE atomic_number='$ATOMIC_NUMBER' ")
          BOILING_POINT_CELSIUS=$($PSQL "SELECT boiling_point_celsius FROM properties WHERE atomic_number='$ATOMIC_NUMBER' ")
          TYPE_ID=$($PSQL "SELECT type_id FROM properties WHERE atomic_number='$ATOMIC_NUMBER' ")
          TYPE=$($PSQL "SELECT type FROM types WHERE type_id='$TYPE_ID' ")
          echo "The element with atomic number $ATOMIC_NUMBER is $NAME ($SYMBOL). It's a $TYPE, with a mass of $ATOMIC_MASS amu. $NAME has a melting point of $MELTING_POINT_CELCIUS celsius and a boiling point of $BOILING_POINT_CELSIUS celsius."
        fi
    else
      ATOMIC_NUMBER=$($PSQL "SELECT atomic_number FROM elements WHERE atomic_number='$1'")
      if [[ -z $ATOMIC_NUMBER ]]
        then
          echo "I could not find that element in the database."
        else
          # format mesaje
          SYMBOL=$($PSQL "SELECT symbol FROM elements WHERE atomic_number='$ATOMIC_NUMBER' ")
          NAME=$($PSQL "SELECT name FROM elements WHERE atomic_number='$ATOMIC_NUMBER' ")
          ATOMIC_MASS=$($PSQL "SELECT atomic_mass FROM properties WHERE atomic_number='$ATOMIC_NUMBER' ")
          MELTING_POINT_CELCIUS=$($PSQL "SELECT melting_point_celsius FROM properties WHERE atomic_number='$ATOMIC_NUMBER' ")
          BOILING_POINT_CELSIUS=$($PSQL "SELECT boiling_point_celsius FROM properties WHERE atomic_number='$ATOMIC_NUMBER' ")
          TYPE_ID=$($PSQL "SELECT type_id FROM properties WHERE atomic_number='$ATOMIC_NUMBER' ")
          TYPE=$($PSQL "SELECT type FROM types WHERE type_id='$TYPE_ID' ")
          echo "The element with atomic number $ATOMIC_NUMBER is $NAME ($SYMBOL). It's a $TYPE, with a mass of $ATOMIC_MASS amu. $NAME has a melting point of $MELTING_POINT_CELCIUS celsius and a boiling point of $BOILING_POINT_CELSIUS celsius."
        fi
    fi
  else
    echo -e "Please provide an element as an argument."
  fi