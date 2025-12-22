#!/bin/bash
# Strip EXIF metadata from all images in assets/images
# This removes location data, camera info, and other private metadata

set -e

ASSETS_DIR="$(dirname "$0")/../assets/images"

if ! command -v exiftool &> /dev/null; then
    echo "Error: exiftool is not installed. Install with: sudo apt install libimage-exiftool-perl"
    exit 1
fi

if [ -d "$ASSETS_DIR" ]; then
    echo "Stripping metadata from images in $ASSETS_DIR..."
    
    # Find and strip metadata from all image files
    find "$ASSETS_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.webp" \) -exec exiftool -all= -overwrite_original {} \;
    
    echo "Done! Metadata stripped from all images."
else
    echo "No assets/images directory found."
fi
