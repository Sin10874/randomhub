# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**RandomHub** - A clean and elegant Random Word Generator website that allows users to generate random English words based on custom filters (type, letter constraints, word size). Includes navigation to future random tools (name, city, letter generators).

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Data**: Local mock JSON word list (replaceable with API later)

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture Overview

### Page Structure
- **`/`** (Homepage): Main random word generator with settings panel and results area
- **`/privacy`**: Privacy policy page (placeholder)
- **`/tools/name-generator`**: Random name generator (placeholder)
- **`/tools/city-generator`**: Random city generator (placeholder)
- **`/tools/letter-generator`**: Random letter generator (placeholder)

### Core Components
- **Navbar**: Site branding (RandomHub) and Privacy link
- **WordGeneratorPanel**: Main feature with two areas:
  - **Settings Area**: Filter controls (word type, starts/ends with, size by syllables or letters)
  - **Result Area**: Displays generated word(s), regenerate button, copy-to-clipboard
- **PopularTools**: Grid of tool cards linking to other generators

### Word Generation Logic
- **Filters**:
  - Word Type: `All`, `Noun`, `Verb`, `Adjective`, `Extended` (default: `All`)
  - Starts With: optional first letter filter
  - Ends With: optional last letter filter
  - Word Size: either syllable count or letter count with comparators (`=`, `>`, `<`)
- Filter logic applies all constraints sequentially to word list
- Random selection from filtered results

### Data Structure
Local JSON file containing words with metadata:
```typescript
{
  word: string,
  type: 'noun' | 'verb' | 'adjective' | 'extended',
  syllables: number,
  length: number
}
```

## UI Design Guidelines

- **Gradient background**: Soft, fresh, bright color scheme
- **Layout**: Clean, modern, responsive with rounded panels
- **Typography**: Readable fonts with appropriate hierarchy
- **Visual effects**: Subtle shadows for depth
- **Spacing**: Generous whitespace for breathability

## Implementation Notes

- Use Next.js App Router (not Pages Router)
- Keep state management simple (useState for filters, generation results)
- Abstract word filtering logic for potential API replacement
- All tool pages beyond word generator are placeholders for now
- Ensure mobile responsiveness across all breakpoints
