#!/bin/bash

# Script to add auto-scroll functionality to all generator panels

components=(
  "AdjectiveGeneratorPanel"
  "JobGeneratorPanel"
  "WordGeneratorPanel"
  "LetterGeneratorPanel"
  "WebsiteGeneratorPanel"
  "AnimalGeneratorPanel"
)

echo "Adding auto-scroll functionality to generator components..."

for component in "${components[@]}"; do
  file="app/components/${component}.tsx"

  if [ ! -f "$file" ]; then
    echo "Skipping $component - file not found"
    continue
  fi

  echo "Processing $component..."

  # Check if already has useRef in imports
  if ! grep -q "useRef" "$file"; then
    # Add useRef to imports
    sed -i '' 's/import { useState, useEffect, useCallback/import { useState, useEffect, useCallback, useRef/g' "$file"
    sed -i '' 's/import { useState, useEffect/import { useState, useEffect, useRef/g' "$file"
    sed -i '' 's/import { useState, useCallback/import { useState, useCallback, useRef/g' "$file"
    sed -i '' 's/import { useState/import { useState, useRef/g' "$file"
    echo "  ✓ Added useRef to imports"
  fi

done

echo "Done! Please manually add:"
echo "1. const outputRef = useRef<HTMLDivElement>(null);"
echo "2. useEffect for scrolling"
echo "3. ref={outputRef} to output div"
