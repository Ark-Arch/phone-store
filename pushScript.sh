#!/bin/bash

if [ -z "$1" ]; then
    echo "Error: Commit message is required!"
    echo "Usage: ./commit.sh \"Your commit message\""
    exit 1
fi

git add /workspace/phone-store
git commit -m "$1"
git push origin main
clear

