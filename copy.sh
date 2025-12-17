#!/bin/bash

# Define the target directory (current directory if not specified)
TARGET_DIR="${1:-.}"
OUTPUT_FILE="output.txt"

# Clear the output file if it exists
echo "" > "$OUTPUT_FILE"

# Find all files excluding ignored directories and files
find "$TARGET_DIR" -type f \
    ! -path "*/env/*" \
    ! -path "*/logs/*" \
    ! -path "*/myenv/*" \
    ! -path "*/training/*" \
    ! -path "*/pages/*" \
    ! -path "*/models/*" \
    ! -path "*/assets/*" \
    ! -path "*/_posts/*" \
    ! -path "*/_site/*" \
    ! -path "*/vendor/*" \
    ! -path "*/.git/*" \
    ! -name "Gemfile.lock" \
    ! -name "$OUTPUT_FILE" | while read -r file; do

    echo "===== FILE: $file =====" >> "$OUTPUT_FILE"
    cat "$file" >> "$OUTPUT_FILE"
    echo -e "\n" >> "$OUTPUT_FILE"
done

echo "All text copied to $OUTPUT_FILE"
