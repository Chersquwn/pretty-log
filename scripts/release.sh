#!/bin/bash
set -e

if [[ -z $1 ]]; then
  echo "Enter new version: "
  read -r VERSION
else
  VERSION=$1
fi

read -p "Releasing $VERSION - are you sure? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "Releasing $VERSION ..."

  if [[ -z $SKIP_TESTS ]]; then
    npm run lint
  fi

  # Sauce Labs tests has a decent chance of failing
  # so we usually manually run them before running the release script.

  # if [[ -z $SKIP_SAUCE ]]; then
  #   export SAUCE_BUILD_ID=$VERSION:`date +"%s"`
  #   npm run test:sauce
  # fi

  # build
  VERSION=$VERSION npm run build

  # commit
  git add -A
  git add -f \
    lib/**/*.js
  git commit -m "build: build $VERSION"
  # tag version
  npm version "$VERSION" --message "build: release $VERSION"

  # generate release note
  npm run changelog
  git add -A

  # publish
  git push origin refs/tags/v"$VERSION"
  git push
  if [[ -z $RELEASE_TAG ]]; then
    npm publish --access public
  else
    npm publish --access public --tag "$RELEASE_TAG"
  fi
fi
