#!/bin/sh

echo "Please enter your filename:"
read filename
while read line;
do echo -e "$line\n" >> output_names.txt;
done < $filename