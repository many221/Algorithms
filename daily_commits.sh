#!/bin/bash 
 # runs add and commit for 3 files GitHub

echo Please chose 3 files  and message to comimitto add and commit

echo file 1

read  var1 
 
echo message 1

read m1

git add $var1

git commit $var1 -m “ $m1”

echo file 2

read  var2
 
echo message 2

read m2

git add $var2

git commit $var2 -m “ $m2”

echo file 3

read  var3
 
echo message 3

read m3

git add $var3

git commit $var3 -m “ $m3”

echo Congratulations you have /done your daily commits
