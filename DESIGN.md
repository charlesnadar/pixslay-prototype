# PixSlay — DESIGN.md
*Design system. Load this before building any screens.*

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
- Height: 46px  ← confirmed, do not change back to 52px
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

inputmode per field type:
- Phone fields (type="tel"): inputmode="numeric"
- Name fields (type="text"): inputmode="text"
- Email fields: type="text" inputmode="email" (avoid type="email" — triggers browser validation)
- All other text: inputmode="text"
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
Headline: "This photo will be gone from your Iceland album."
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
Background: #FFFFFF (or custom bg passed to navBar())
Top border: 0.5px #F0EEEB (transparent when custom bg passed)
Items: Home (left), FAB (center floating), Profile (right)
Active icon: 22px outlined SVG, stroke 1.5px, #1B4FD8
Active label: 9px 500 #1B4FD8, 3px below icon
Inactive icon: 22px outlined SVG, stroke 1.5px, #A8A49F
Inactive label: 9px 500 #A8A49F

navBar(active, bg) — optional bg param:
When bg is passed (e.g. T.bgWarm on varun-home), border becomes transparent
and nav background matches the screen — seamless, no floating-sheet look.
```

### Floating Action Button (FAB)
```
Size: 52px circle
Background: #1B4FD8
Icon: Plus sign 22px stroke 2px #FFFFFF
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
Success: background #0F9E6E, text 13px 600 #FFFFFF, check icon 16px left
Alert: background #E8490F, text 13px 600 #FFFFFF, alert icon 16px left
Duration: 3 seconds, slides back up automatically
```

### Top Bar
```
Height: 52px
Background: #FFFFFF
Back arrow: chevron-left SVG 18px stroke 2.5px #1A1917, in 34px circle #F0EEEB background
Title: 16px 700 #1A1917 absolutely centered
Right slot: 34px circle button or empty spacer div (keeps title centered)
```

### OTP Input
```
4 boxes in a row, gap 8px between  ← 4 digits, not 6
Each box: 44px wide, 52px tall
Default: border 0.5px #F0EEEB, radius 10px, background #FFFFFF
Active (focus): border 1.5px #1B4FD8
Filled: background #EEF2FD, border 0.5px #C7D4FB, digit 24px 800 #1B4FD8
Auto-advance after each digit
Auto-submit after 4th digit — no button needed
inputmode: numeric, type: tel
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
Time: Morning, Afternoon, Evening, Night, Day 1, Day 2

Filter behaviour:
- Photos reflow instantly on any filter selection
- Non-matching photos fade to 20% opacity (not hidden — context preserved)
- Matching photos remain full opacity
- Reflow animation: 300ms smooth
- Active filters shown with blue category chip
- Tap active sub-filter chip to deselect
- Tap active category chip to collapse sub-row and clear that category's filters
```

### Action Tabs
```
Tabs: Group | Saved | Downloaded | My Photos
Active tab: T.text color, fontWeight 700, 2px solid underline
Inactive tab: 13px 400 #A8A49F, no underline
Default: My Photos active (or overridden by taggingOpenTab global)
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
Tapping returns to entry screen from anywhere
Visual treatment signals it is outside the app — prototype control not product UI
```

### Onboarding Screens
```
5 slides. Consistent white background on pain screens (1-4).
Platform brand colour expressed ONLY through the badge — never the full background.
Solution screen (5) is brand blue — intentional contrast.

Layout (each slide):
- Background: #fff (screens 1-4) or T.blue (screen 5)
- Badge: 80×80px, border-radius 24px, platform colour bg, white icon
- Badge shadow: 0 8px 32px rgba(platform-colour, 0.25-0.30)
- Gap between elements: 24-28px
- Illustration: platform-specific, same visual weight across all screens
- Bottom tag: light-colored pill, platform accent text

Copy format: headline (18-20px 800) + subhead (13px 400) below illustration
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

### Sync Reassurance Sheet
```
Triggered after gallery permission is granted — NOT immediately on permission.
Never jump straight into sync. Always show this sheet first.

Purpose: Make the user feel in control before sync begins.
Tone: Warm, specific, trip-focused. Never "scan", "access", or "everything".

Headline: "Ready to find your trip photos?" — 20px 800
Copy: "We'll use this trip window to find photos related to [Group name]." — 13px 400 #6B6864
Primary CTA: "Allow access & continue" — blue filled 50px
Ghost CTA: "Cancel" — transparent 44px, same width as primary

4 fields always visible (2×2 grid, 8px gap):
  Row 1: "From date" | "From time"  (pre-filled from group creation data)
  Row 2: "To date"   | "To time"    (pre-filled from group creation data)
Helper text: "We'll only use this to find photos from the trip." — 11px #A8A49F centered

Rules:
NEVER use: "Scan all photos", "Access entire gallery", "Sync everything"
Skip/ghost CTA is always the same size and weight as the primary — no guilt-tripping
Tapping the overlay dismisses the sheet without starting sync
```

---

## Prototype-Specific Rules

**1. Every button and tappable element must have an action. No dead ends anywhere.**

**2. Switch Journey pill appears on every screen — top center above status bar.**

**3. Only one primary action should visually dominate a screen at a time.**
Never show two blue primary buttons simultaneously.
When a bottom sheet is open, the sheet's primary CTA is the only dominant action — the screen behind is dimmed.

**4. Ghost CTAs (transparent, #6B6864) are always present alongside the primary and are never hidden or greyed.**
The app never guilt-trips the user.

**5. No scrollbars on horizontal scroll rows.**
Always apply `class="hscroll"` to any overflow-x:auto container.
```css
.hscroll { -ms-overflow-style:none; scrollbar-width:none; }
.hscroll::-webkit-scrollbar { display:none; }
```
The last item in any horizontal row should be partially visible (clipped) to signal scrollability.

**6. No scrollbars on photo grids.**
Apply `class="pscroll"` to vertical photo grid containers.
```css
.pscroll { -ms-overflow-style:none; scrollbar-width:none;
           -webkit-overflow-scrolling:touch; }
.pscroll::-webkit-scrollbar { display:none; }
```
Do not apply `.pscroll` to form or content screens (registration, profile, OTP, sync, home).

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
