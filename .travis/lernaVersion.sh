#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
  git remote add with-credentials https://${GITHUB_TOKEN}@github.com/vidarc/website.git
}

version() {
  lerna version patch --yes --no-commit-hooks --git-remote with-credentials
}

setup_git
version