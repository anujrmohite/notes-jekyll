#!/bin/bash
set -e

# Strip image metadata before building
echo "Stripping image metadata..."
bash "$(dirname "$0")/strip-metadata.sh"

rm -rf _site
bundle exec jekyll build

echo "Build complete: _site/"
