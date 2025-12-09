#!/bin/bash

# Download Pokemon official artwork images to local public folder
# This will download the first 151 Pokemon (Generation 1) as a start

TOTAL=151
OUTPUT_DIR="../public/images/pokemon"

# Create output directory
mkdir -p "$OUTPUT_DIR"

echo "Downloading Pokemon images to $OUTPUT_DIR"
echo "Total: $TOTAL Pokemon"

for i in $(seq 1 $TOTAL); do
  URL="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png"
  OUTPUT_FILE="$OUTPUT_DIR/${i}.png"

  if [ -f "$OUTPUT_FILE" ]; then
    echo "[$i/$TOTAL] Already exists: ${i}.png"
  else
    echo "[$i/$TOTAL] Downloading: ${i}.png"
    curl -s -o "$OUTPUT_FILE" "$URL"

    if [ $? -eq 0 ]; then
      echo "[$i/$TOTAL] ✓ Downloaded: ${i}.png"
    else
      echo "[$i/$TOTAL] ✗ Failed: ${i}.png"
    fi
  fi
done

echo ""
echo "✓ Download complete!"
echo "Total files: $(ls -1 $OUTPUT_DIR | wc -l)"
echo "Total size: $(du -sh $OUTPUT_DIR | cut -f1)"
