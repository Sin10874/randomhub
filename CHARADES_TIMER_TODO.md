# Charades Timer Feature - Future Implementation

## Overview
Add an optional countdown timer feature to the Charades Generator to enhance gameplay experience.

## Planned Features

### 1. Timer Settings
- [ ] Add timer toggle in settings panel (on/off)
- [ ] Timer duration options: 30s, 60s, 90s, 120s
- [ ] Default: 60 seconds

### 2. Timer UI Component
- [ ] Create Timer component with countdown display
- [ ] Large, visible countdown (e.g., "0:45" format)
- [ ] Progress bar or circular progress indicator
- [ ] Start/Pause/Reset buttons

### 3. Timer Behavior
- [ ] Auto-start when word is revealed
- [ ] Visual/audio warning at 10 seconds remaining
- [ ] Timer stops when time runs out
- [ ] Option to manually start/stop timer

### 4. Integration Points
- [ ] Add timer section to CharadesGeneratorPanel
- [ ] Integrate with reveal/hide functionality
- [ ] Add timer state management (useState/useReducer)
- [ ] Position timer prominently during gameplay

### 5. Visual Design
- [ ] Match Swiss design system
- [ ] Color changes based on time remaining:
  - Green: >30 seconds
  - Yellow/Orange: 10-30 seconds
  - Red: <10 seconds
- [ ] Pulse animation when time is running out

### 6. Optional Enhancements (Nice to Have)
- [ ] Sound effect when timer ends (toggle on/off)
- [ ] Keep track of average time per guess
- [ ] Score tracking with time bonuses
- [ ] Team timer mode (alternate between teams)

## Technical Implementation Notes

```typescript
// Example state structure
const [timerEnabled, setTimerEnabled] = useState(false);
const [timerDuration, setTimerDuration] = useState(60);
const [timeRemaining, setTimeRemaining] = useState(60);
const [isTimerRunning, setIsTimerRunning] = useState(false);
```

## Dependencies
- No new dependencies needed
- Use React built-in hooks (useState, useEffect, useRef)
- Optional: react-countdown-circle-timer for circular progress

## Estimated Effort
- Basic timer: ~2-3 hours
- With all enhancements: ~4-5 hours
