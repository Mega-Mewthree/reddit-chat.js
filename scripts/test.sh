#!/bin/bash

set -e

if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
  echo -e "Testing Pull Request #${TRAVIS_PULL_REQUEST}."
else
  echo -e "Testing Branch ${TRAVIS_BRANCH}."
fi

npm test
