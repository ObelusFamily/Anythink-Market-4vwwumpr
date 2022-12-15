#!/bin/sh

read filename
while read line;
do echo -e "$line\n" >> output_names.txt;
done < $filename