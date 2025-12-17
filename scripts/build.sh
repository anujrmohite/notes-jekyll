#!/bin/bash
set -e

rm -rf _site
bundle exec jekyll build

echo "Build complete: _site/"
