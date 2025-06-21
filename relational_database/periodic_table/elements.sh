#! /bin/bash

PSQL="psql -X --username=freecodecamp --dbname=periodic_table -t --no-align -c"

if [[ $1 ]]
  then
    # query : atomic_number or symbol or name === $1
    # check si es un numero o string
    if [[ ! $1 =~ ^[0-9]+$ ]]
    then
      QUERY_STR=$($PSQL "SELECT * FROM elements FULL JOIN properties ON elements.atomic_number = properties.atomic_number WHERE elements.symbol='$1' OR elements.name='$1'")
      if [[ -z $QUERY_STR ]]
        then
          echo "I could not find that element in the database."
        else
          # format mesaje

          echo "$QUERY_STR"
        fi
    else
      QUERY_INT=$($PSQL "SELECT * FROM elements FULL JOIN properties USING(atomic_number) WHERE atomic_number='$1'")
      if [[ -z $QUERY_INT ]]
        then
          echo "I could not find that element in the database."
        else
          # format mesaje
          echo "$QUERY_INT"
        fi
    fi
    # if query 
    # output formateado con el string del test
    # else : esa wea no existe madafaca
  else
    echo -e "Please provide an element as an argument."
  fi