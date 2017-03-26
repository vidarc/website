#!/bin/bash

export RSYNC_PASSWORD=$1
rsync -azP --exclude '.DS_Store' build/ mattailes@mattailes.net:build

if [ "$?" -eq "0" ]; then
  return 0
else
  return 1
