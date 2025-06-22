#!/bin/bash

echo "Enter your username:"
read USER_NAME
# if USER_NAME excist on database
echo "Welcome back, <username>! You have played <games_played> games, and your best game took <best_game> guesses."
# if not send
echo "Welcome, <username>! It looks like this is your first time here."


echo "Guess the secret number between 1 and 1000:"

psql --username=freecodecamp --dbname=number_guess