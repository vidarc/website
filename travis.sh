#!/bin/bash

echo "Deploying build folder to my server"
sshpass -p $1 rsync -azP --exclude '.DS_Store' build/ mattailes@mattailes.net:build

exit $?
