#!/bin/sh

VERSION=patch

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
  git remote add with-credentials https://${GITHUB_TOKEN}@github.com/vidarc/website.git
}

getVersionBump() {
  if [[ $TRAVIS_COMMIT_MESSAGE == *'[patch]'* ]]; then
    echo patch
  elif [[ $TRAVIS_COMMIT_MESSAGE == *'[minor]'* ]]; then
    echo minor
  elif [[ $TRAVIS_COMMIT_MESSAGE == *'[major]'* ]]; then
    echo major
  fi
}

version() {
  git fetch with-credentials
  git checkout master
  lerna version $1 --yes --no-commit-hooks --git-remote with-credentials
}

setup_git
VERSION=$(getVersionBump)
echo doing a $VERSION bump
version
