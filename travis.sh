#!/usr/bin/expect

set timeout -1
spawn rsync -azP --exclude '.DS_Store' build/ mattailes@mattailes.net:build
expect "password:"
send $1
expect eof
