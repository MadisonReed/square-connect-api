#!/bin/bash

WATCHERS=(
	"password\s*=\s*.+"
	"PASSWORD\S*=\s*.+"
	"secret\s*=\s*.+"
	"SECRET\S*=\s*.+"
	"authtoken\s*=\s*.+"
	"authToken\s*=\s*.+"
	"AUTHTOKEN\s*=\s*.+"
)

for i in "${WATCHERS[@]}"
do
	echo "adding $i to git secrets"
	git secrets --add $i
done
