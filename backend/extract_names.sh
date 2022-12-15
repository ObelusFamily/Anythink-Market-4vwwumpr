#!/bin/sh

echo "Please enter your filename:"
read filename
while read line;
do echo -e "$line\n" >> Newfile.txt;
done < $filename