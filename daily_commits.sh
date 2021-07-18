#!/bin/bash 
 # runs add and commit for 3 files GitHub

echo Please chose 3 files  and message to comimitto add and commit

echo file 1

read  var1 
 
echo message 1

read m1

git add $var1

git commit $var1 -m “ $m1”

echo Congratulations you have /done your daily commits
