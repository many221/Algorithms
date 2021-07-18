#!/bin/bash 
 
# runs add and commit files GitHub

#echo Please chose a file and message to comimitto add and commit 

select file in "$search_dir"./*

do

echo You have chosen $file to add and commit.
 
echo What would you like to add as a note

read m1

git add $file

git commit $file -m "{$m1}"

echo Congratulations you have "done" your daily commits

done

read -p "Continue (y/n)?" CONT
if [ "$CONT" = "y" ]; then
  
else
  exit;
fi