#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

version() {
  lerna version minor --yes --no-commit-hooks
}

setup_git
version