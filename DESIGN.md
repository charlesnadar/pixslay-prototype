[DESIGN.md](https://github.com/user-attachments/files/27370897/DESIGN.md)
# PixSlay — DESIGN.md
*Design system for Claude Design. Load this into Design System setup before building any screens.*

---

## Brand Identity

**Product name:** Pixslay
**Wordmark:** Plus Jakarta Sans 800 weight. The letter 'x' is #1B4FD8 blue. All other letters are #1A1917 near-black.
**Logo icon:** 44x44px square 12px radius. Background #1B4FD8. Inside — photo frame rect with corner brackets, white stroke 2px. Center — circle with inner dot, white stroke. The x in the wordmark IS the brand monogram — a camera viewfinder locking onto a face.
**Tagline:** Your photos from every gathering. Finally where they belong.
**Personality:** Warm friend. Confident. Human. Never corporate. Never explains itself.

---

## Visual Personality

**5 words that describe PixSlay visually:**
Warm. Clean. Photo-first. Confident. Human.

**5 things PixSlay never looks like:**
Corporate SaaS. Dark mode default. Gradient heavy. Instagram clone. WhatsApp copy.

**The one design rule above all others:**
Every UI decision asks — does this serve the photo or compete with it? The photo is always the hero. The UI disappears so memories can speak.

**Reference products for feel:**
- Google Photos for photo grid organisation
- Splitwise for clean utility and warm copy
- Instagram for photo-first white space
- Uber for effortless one-tap flows

---

## Colour Palette

### Primary Action
| Token | Hex | Usage |
|---|---|---|
| Action Blue | #1B4FD8 | Primary buttons, active states, face chips, CTAs, links, FAB |
| Blue Hover | #2960F5 | Pressed and hover states |
| Blue Tint | #EEF2FD | Chip backgrounds, permission cards, selected states |
| Blue Border | #C7D4FB | Chip outlines, tint borders |
| Blue Dark | #0C447C | Text on blue tint backgrounds |
| Blue Deep | #185FA5 | Secondary blue text on tint surfaces |

### Backgrounds
| Token | Hex | Usage |
|---|---|---|
| Primary | #FFFFFF | Photo surfaces, cards, screen backgrounds |
| Warm White | #F8F7F5 | App screen background, search bars, inactive surfaces |
| Subtle | #F0EEEB | Dividers, inactive borders, skeleton states |

### Text
| Token | Hex | Usage |
|---|---|---|
| Primary text | #1A1917 | Headlines, names, labels. Near black. Never pure #000000 |
| Secondary text | #6B6864 | Dates, captions, supporting copy |
| Tertiary text | #A8A49F | Hints, timestamps, placeholders, inactive labels |
| Disabled text | #D4D1CC | Disabled elements |

### Semantic
| Token | Hex | Usage |
|---|---|---|
| Success | #0F9E6E | Download complete, share sent, saved toasts |
| Alert | #E8490F | Destructive actions, important nudges |
| Amber | #F5A623 | Premium moments, hi-res prompts, warnings |

### Photo Overlays
| Token | Value | Usage |
|---|---|---|
| Dark overlay | rgba(0,0,0,0.45) | Over photos for readable white text |
| Light sheet | rgba(255,255,255,0.92) | Action panels over photos |
| Blue chip | rgba(27,79,216,0.90) | Face chips on photo surface |

---

## Typography

**Font family: Plus Jakarta Sans only. Import from Google Fonts. No other typefaces anywhere.**

```
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
font-family: 'Plus Jakarta Sans', sans-serif;
```

| Style | Size | Weight | Tracking | Colour | Usage |
|---|---|---|---|---|---|
| Display | 28px | 800 | -0.5px | #1A1917 | Tagline on empty states |
| Headline Large | 24px | 800 | -0.5px | #1A1917 | Screen headlines, onboarding |
| Headline Medium | 20px | 700 | -0.3px | #1A1917 | Card titles, modal headlines |
| Title | 16px | 700 | 0px | #1A1917 | Top bar screen titles |
| Body Large | 15px | 600 | 0px | #FFFFFF | Primary button labels |
| Body | 13px | 400 | 0px | #6B6864 | Supporting text, descriptions |
| Caption | 11px | 500 | 0.04em | #A8A49F | Section labels, hints |
| Micro | 9px | 500 | 0px | #A8A49F | Navigation labels |
| OTP digits | 24px | 800 | 0px | #1B4FD8 | OTP filled boxes |

**Typography rule:** The jump between headline and body must be dramatic. 24px 800 weight headline. 13px 400 weight body. Never the same visual volume.

---

## Spacing System

**Base unit: 8px. Every spacing value is a multiple of 8.**

| Token | Value | Usage |
|---|---|---|
| xs | 4px | Internal component gaps, marker offsets |
| sm | 8px | Between related elements, chip gaps |
| md | 16px | Screen margins, card padding, field gaps |
| lg | 24px | Section gaps, card internal padding |
| xl | 32px | Major section separations |
| xxl | 48px | Hero zone spacing |

**Screen margins:** 16px left and right on all screens without exception.

---

## Component Library

### Floating Label Input Field
**Used on every text input. No static labels above fields. No exceptions.**

The floating label physically interrupts the border line. Label background is white so the border gap appears behind the label text.

```
Empty state:
- Height: 52px
- Border: 0.5px solid #F0EEEB
- Radius: 10px
- Watermark: 14px 400 #A8A49F centered vertically

Focus state:
- Border: 1px solid #1B4FD8
- Label animates up: 11px 600 #1B4FD8
- Label sits cutting the top border line
- White background 4px padding behind label text

Filled state:
- Border: 0.5px solid #C7D4FB
- Label stays up: 11px #A8A49F
- Content: 14px 400 #1A1917

Error state:
- Border: 1px solid #E8490F
- Label: 11px #E8490F
- Error message 4px below field: 12px 400 #E8490F

Disabled:
- Background: #F8F7F5
- Border: 0.5px #F0EEEB
- Text: #D4D1CC
```

### Primary Button
```
Background: #1B4FD8 — always, never another colour for primary actions
Text: 15px Plus Jakarta Sans 600 weight #FFFFFF centered
Height: 50px
Radius: 12px
Width: 100% minus 32px (16px margin each side)
Disabled: background #F0EEEB text #A8A49F
Pressed: background #2960F5 scale 0.98 transition 100ms
Activates only when required field has valid input
```

### Secondary Button
```
Background: #FFFFFF
Border: 0.5px #C7D4FB
Text: 13px 600 #1B4FD8 centered
Height: 44px
Radius: 12px
```

### Ghost Button
```
Background: transparent
Border: none
Text: 13px 500 #6B6864 centered
Height: 44px
CRITICAL: Always same size as adjacent primary/secondary button
The app never guilt-trips the user — skip is always as visible as confirm
```

### Destructive Action Pattern
**All delete, remove, or irreversible actions framed around what the user loses — not confirming the action.**

```
Popup structure:
- Headline: 18px 800 #1A1917 — what the user stands to lose
- Copy: 13px 400 #6B6864 — one sentence of consequence
- Left button: destructive action label — #E8490F coral
- Right button: safe action label — #1B4FD8 blue

Example:
Headline: "This photo will be gone from your Karjat album."
Copy: "Others who received it will still have their copy."
Left CTA: "Remove it"
Right CTA: "Keep it"
```

### Face Chip
```
Unidentified:
- Background: #F0EEEB
- Height: 36px, radius: 20px, padding: 8px 14px
- Left: grey silhouette avatar 20px circle #D4D1CC
- Right: '?' 13px 500 #A8A49F
- Count badge: 12px 600 #1A1917

Identified:
- Background: #1B4FD8
- Left: initials avatar 20px circle white background
- Right: name #FFFFFF 13px 600
- Count badge: white 12px 600

Own chip (You):
- Background: #1B4FD8
- Always first in row
- Label: "VR — You" format

Active/selected chip:
- White ring border 2px outside chip
- Scale: 1.02
```

### Bottom Navigation Bar
```
Height: 56px + device safe area
Background: #FFFFFF
Top border: 0.5px #F0EEEB
Items: Home (left), FAB (center floating), Profile (right)
Active icon: 22px Lucide outlined, stroke 1.5px, #1B4FD8
Active label: 9px 500 #1B4FD8, 3px below icon
Inactive icon: 22px Lucide outlined, stroke 1.5px, #A8A49F
Inactive label: 9px 500 #A8A49F
Home icon: Lucide 'home'
Profile icon: Lucide 'user'
```

### Floating Action Button (FAB)
```
Size: 52px circle
Background: #1B4FD8
Icon: Lucide 'plus' 22px stroke 2px #FFFFFF
Position: Centered, bottom edge 8px above nav bar top
Border: 3px solid #FFFFFF (lift effect)
Shadow: 0 4px 12px rgba(27,79,216,0.25)
No label — icon only
Always creates a new group — single purpose, never changes
```

### Bottom Sheet
```
Top radius: 20px top-left and top-right only
Handle: 40px wide 4px tall #F0EEEB radius 2px, centered, 8px margin top
Background: #FFFFFF
Overlay: rgba(0,0,0,0.45) flat not blurred
Animation: slides up 280ms ease-out
Dismiss: swipe down or tap overlay
```

### Toast Notification
```
Position: slides down from top, 16px from edge, 16px side margins
Height: 48px
Radius: 12px
Success: background #0F9E6E, text 13px 600 #FFFFFF, Lucide 'check' 16px left
Alert: background #E8490F, text 13px 600 #FFFFFF, Lucide 'alert-circle' 16px left
Duration: 3 seconds, slides back up automatically
```

### Top Bar
```
Height: 44px
Background: #FFFFFF
Back arrow: Lucide 'arrow-left' 20px stroke 1.5px #1B4FD8, tappable 44x44px
Title: 16px 700 #1A1917 centered
Right icons: 20px Lucide #1A1917, tappable 44x44px each
Bottom border: none by default, 0.5px #F0EEEB appears on scroll
```

### OTP Input
```
6 boxes in a row, gap 8px between
Each box: 40px wide, 52px tall
Default: border 0.5px #F0EEEB, radius 10px
Active: border 1px #1B4FD8, cursor blinking
Filled: background #EEF2FD, border 0.5px #C7D4FB, digit 24px 800 #1B4FD8
Auto-advance after each digit
Auto-submit after 6th digit — no button needed
```

### Photo Grid — My Photos Tab
```
Layout: 3 equal columns
Gap: 2px horizontal and vertical
Each photo: square aspect ratio, radius 0px
Photos touch edge to edge — camera roll feel

State markers (bottom-right of photo, 4px from edges):
- Shared to group: white checkmark in #1B4FD8 circle 18px
- Shared to individual: white person icon in #6B6864 circle 18px
- Saved to PixSlay: 8px solid circle #0F9E6E
- Downloaded hi-res: 8px solid circle #1B4FD8
- No marker: private, not yet shared
```

### Photo Grid — Group Pool / With Me Tab
```
Layout: masonry — mixed orientations
Landscape photos: span full width (1:1.5 ratio)
Portrait photos: two per row (2:3 ratio)
Square photos: three per row
Gap: 2px
Radius: 0px
Same state markers as My Photos tab
```

### Filter Bar — Sticky Chip System
```
Position: sticky to top when scrolling, snaps back on scroll up
Category chips row (always visible):
- Chips: People, Scene, Format, Time
- Unselected: background #F0EEEB, text #6B6864, height 32px, radius 16px, padding 8px 14px
- Active category: background #1B4FD8, text #FFFFFF

Sub-filter chips row (appears below on category tap):
- Slides in smoothly 200ms
- Same chip dimensions as category chips
- Disappears when category chip tapped again
- Multiple categories can be active simultaneously

Sub-filter options:
People: face chips with initials and photo count
Scene: Beach, Food, Night out, Group shot, Selfie, Outdoors, Travel, Bonfire, Waterfall, Starry sky
Format: Selfie, Group shot, Portrait, Landscape, Video
Time: Morning, Afternoon, Evening, Night, Day 1 (Sat), Day 2 (Sun)

Filter behaviour:
- Photos reflow instantly on any filter selection
- Non-matching photos fade to 20% opacity (not hidden — context preserved)
- Matching photos remain full opacity
- Reflow animation: 300ms smooth
- Active filters shown with blue category chip
- Tap active sub-filter chip to deselect
- Tap active category chip to collapse sub-row and clear that category's filters
```

### Action Tabs (below filter bar, above photo grid)
```
Tabs: All | Shared | Received | Saved | Downloaded
Active tab: 13px 600 #1A1917, 2px #1B4FD8 underline
Inactive tab: 13px 400 #A8A49F, no underline
Default: All tab active
Content filters work within any tab
Swipe horizontally to change tabs
```

### Hotspot Pulse
```
After 4 seconds of inactivity on any screen:
All primary tappable elements pulse once with subtle blue ripple
Not repeated — one pulse only
Especially important on face chips (novel UI)
```

### Switch Journey Pill (prototype navigation only)
```
Position: top center of every screen, above status bar
Appearance: white background, 0.5px #1B4FD8 border, radius 20px
Text: "Switch journey" 10px 500 #1B4FD8
Padding: 4px 12px
Z-index: highest — appears above all sheets and overlays
Never hidden by any UI element
Tapping returns to Screen 1 entry point from anywhere
Visual treatment signals it is outside the app — prototype control not product UI
```

### Scene-Setter Card (prototype context only)
```
Used to explain scenarios that cannot be simulated (phone off, WhatsApp notification received)
Full white screen
PixSlay logo centered top
Context text: 16px 400 #6B6864 centered — describes the real-world moment
Example: "It's Sunday morning. Your phone was off during dinner last night."
Single blue primary button below: "Open PixSlay" or "Continue"
```

### Share Action Sheet — External Sharing
```
After PixSlay share confirmed — secondary prompt appears:
"Share outside PixSlay too?"
App icons in a horizontal row:
- WhatsApp: green icon
- Instagram Stories: gradient icon
- Instagram Feed: gradient icon
- Copy link: chain icon #1B4FD8
- More: system share icon

Watermark rule:
All external shares carry "Shared via Pixslay" watermark
Position: bottom-right of photo, 9px #FFFFFF 40% opacity
Non-intrusive. Always present on external shares.
```

### Dummy Photos — Illustration Style
```
Style: flat vector illustrations in warm colours
Inspired by: group of people looking up at camera from above
Scenes to include for Karjat overnight trip (34 photos total):
- 8 group shots: people looking up together, warm colours
- 6 nature/forest scenes: green trees, paths, waterfalls
- 5 night/bonfire scenes: orange flames, dark backgrounds, stars
- 5 lakeside/water scenes: blue water, reflections
- 4 food scenes: colourful dishes on tables
- 3 waterfall scenes: blue-green water, mist
- 3 starry sky scenes: dark purple sky, stars

Colour palette for illustrations:
Greens: #2D5A27, #3D7A32, #4A8A3F
Blues: #1B3A6B, #1E5799, #2D7DD2
Ambers: #F5A623, #D4A96A, #8B6914
Night: #0D1B0D, #5B3A8B, #1A0A05
Warm: #D2691E, #8B4513, #FF6B35

Each photo has a face chip marker (bottom-right) showing who is in it
Format mix: 60% square, 25% landscape, 15% portrait
```

### Popup — Standard Format
```
Overlay: rgba(0,0,0,0.45) full screen
Card: white, radius 16px, padding 24px, width 280px, centered
Headline: 18px 800 #1A1917
Copy: 13px 400 #6B6864, margin top 8px
Button row: margin top 20px, two buttons side by side, 8px gap
Left button: destructive — coral #E8490F text, white background, 0.5px coral border
Right button: safe — #1B4FD8 background, white text
Both buttons: height 44px, radius 10px, equal width
```

---

## Prototype-Specific Rules

**1. Every button and tappable element must have an action. No dead ends anywhere.**

**2. Switch Journey pill appears on every screen — top center above status bar.**

**3. Scene-setter cards are used for:**
- Mayank's phone-off scenario
- Beulah's WhatsApp notification receipt
- Vishal's delayed install scenario

**4. Journey completion state:**
After finishing a journey — returning to Screen 1 shows a green checkmark on the completed journey card. Encourages trying other journeys.

**5. Build order:**
Shared components first → Varun's journey → Beulah's journey → Mayank's journey → Kavitha's journey → Vishal's journey.

**6. Self-review after each journey:**
Before starting next journey — navigate every screen in completed journey. Verify no dead ends. Verify all 25 gaps addressed. Report findings.

**7. Reuse components:**
Registration screens, OTP, nav bar, face chips, bottom sheets, toasts, photo grid, filter bar, action sheets — build once, reference everywhere. Do not rebuild shared components for each journey.

**8. Fallback navigation:**
Any screen with undefined next state navigates to home screen. Never let user feel stuck.

---

## Status Bar
```
Height: 44px on notch devices
Background: matches screen background
Left: time 13px 600 #1A1917
Right: signal, wifi, battery — system icons
```

---

## Animation Defaults
```
Screen transitions: slide left/right 280ms ease-out
Bottom sheet: slide up 280ms ease-out
Toast: slide down 200ms ease-out, slide up 200ms ease-in after 3s
Filter reflow: 300ms smooth
Photo fade (non-matching): opacity 0.2, 200ms
Face chip turn blue: 150ms ease
Progress bar: linear animation matching described duration
```
