# PixSlay — SCREENS.md
*Screen-by-screen reference. Reflects current built state as of v90.*

---

## Status Legend

| Symbol | Meaning |
|--------|---------|
| ✅ BUILT | Screen is live in the prototype |
| 🔧 PARTIAL | Built but some states missing |
| 📋 PLANNED | Designed, not yet built |

---

## MASTER RULES — READ FIRST

1. Every colour, font, spacing, and component follows DESIGN.md exactly.
2. Read CONTEXT.md before building. Understand the product and the journeys.
3. Every screen has a Switch Journey pill — top center, above status bar, white background, blue border, "Switch journey" 10px — tapping returns to entry from anywhere.
4. Every button and tappable element must have an action. No dead ends.
5. Ghost CTAs are always the same size and weight as primary CTAs. Never guilt-trip.
6. The prototype is exported as standalone HTML hosted on Vercel.

---

## SHARED COMPONENTS ✅ BUILT

- Splash screen (PixSlay blue, logo + tagline, 1.6s)
- 5-slide onboarding (WA / Drive / Photos / AirDrop / PixSlay — white bg + badge design)
- Entry screen (2 active journey cards: Varun, Anand)
- Phone registration screen (floating label, +91 prefix, numeric keyboard)
- 4-digit OTP screen (auto-advance, auto-submit)
- Profile setup screen (avatar, name, email)
- Bottom navigation bar (`navBar(active, bg)` — optional bg param for seamless warm bg)
- Top bar (`screenHeader(title, backDest, rightAction)` — supports raw JS expressions as backDest)
- Face chip row (horizontal scroll, blue identified, grey unidentified)
- Photo grid — My Photos (3-column square, state markers)
- Photo grid — Group pool (masonry mixed orientation)
- Share action sheet
- Sync reassurance bottom sheet (4-field datetime grid, pre-filled from group data)
- Gallery permission bottom sheet
- Standard popup (headline, copy, two buttons)
- Toast notification (success green, alert coral, 3s)
- Bottom sheet template (20px radius, handle, overlay)
- Switch Journey pill (every screen)

---

## SCREEN 0 — ENTRY ✅ BUILT

**Purpose:** Pick a journey. Prototype starts here.

**Layout:**
- PixSlay logo centered, 60px from top
- "Interactive simulation" pill — #EEF2FD bg, #0C447C text
- Headline: "An overnight trip to Iceland. Five people. Five stories."
- Subhead: "Pick someone and see PixSlay through their eyes."
- Journey cards (2 active, others commented out)

**Active cards:**
- **VR — Varun** → `startJourney('varun', 'varun-reg', { otpDest:'varun-home', splash:true })`
- **AN — Anand** → `startJourney('anand', 'anand-home', { taggingOpenTab:'group', splash:true })`

**Bottom:** Share Experience ghost button — copies prototype URL + opens share sheet.

---

## SCREEN 1 — SPLASH ✅ BUILT

Shown before onboarding. PixSlay blue full-screen. Logo + tagline centered. 1.6s then navigates to `splashDest` (always `'onboarding'`).

---

## SCREEN 2 — ONBOARDING ✅ BUILT

5 slides. Auto-advances every 3s. Swipeable. Skip pill top-right.

| Slide | Platform | Headline | Subhead |
|-------|---------|---------|---------|
| 1 | WhatsApp | Great trip. Blurry photos. Buried in group chat. | WhatsApp compresses every photo before your friend opens it. Buried under reactions by morning. |
| 2 | Google Drive | Shared the link. Half the group never got in. | Built for spreadsheets, not memories. No gallery, no reactions, no reason to ever go back. |
| 3 | Google Photos | Your best photos are on someone else's phone. | Face recognition only works on your own phone. Every candid someone else clicked — gone. |
| 4 | AirDrop | iPhone only. Stand closer. Pray they tap Accept. | Only works on iPhone. Only works if you're standing right next to each other. |
| 5 | PixSlay | One link. Tap your face. Get your photos. | Works on any phone. No compression. No folders. No asking. |

**Visual design (v90):** White background on all pain screens (1-4). Platform colour only in 80×80 badge. PixSlay screen stays brand blue (intentional contrast as solution screen).

**Navigation:** Progress dots bottom. "Skip" pill top-right. Last slide "Get started" → `onboardingDone()` → `journeyDest`.

---

## VARUN'S JOURNEY

### V1 — Phone Registration ✅ BUILT (`varun-reg`)
- Logo centered, 60px top
- Headline: "Your photos from every gathering." 24px 800
- Subhead: "Start with your number. We'll send a quick code."
- Phone field: floating label, +91 prefix, numeric keyboard
- "Fill in" shortcut tap: fills 9876543210, routes to OTP after 500ms
- Continue → `varun-otp`

### V2 — OTP Verification ✅ BUILT (`varun-otp`)
- 4 boxes. Auto-advance. Auto-submit on 4th digit.
- Any 4 digits → navigates to `otpDest`
- "Fill OTP" shortcut tap fills instantly
- Resend countdown 0:30. Tappable after 30s.

### V3 — Profile Setup ✅ BUILT (`varun-profile`)
- Avatar circle (tap to fill dummy photo)
- Name field: pre-filled "Varun"
- Email field: optional
- Continue → `varun-home`

### V4 — Home ✅ BUILT (`varun-home`)
**Two states in one function, controlled by `groupCreated` global:**

**Empty state** (`groupCreated = false`):
- Hero card with stacked photos illustration
- Headline: "Your photos from every gathering. All in one place."
- "Create a group" blue CTA → `varun-create-group`
- FAB → `varun-create-group`
- navBar on warm background (`navBar('home', T.bgWarm)`)

**Populated state** (`groupCreated = true`):
- "Iceland · Northern Lights" album card (tap → varun-tagging, Group tab)
- LIVE badge (green dot)
- "Add memories" + "Invite friends" below card
- navBar on warm background

### V5 — Create Group ✅ BUILT (`varun-create-group`)
- Group name: pre-filled "Iceland · Northern Lights"
- Destination: pre-filled "Iceland"
- Date range: pre-filled 10–20 Aug 2025
- Who's coming: contact chips row (horizontal scroll)
- Create group → sets `groupCreated = true` → `varun-sync`
- **Back arrow / Skip → `varun-home`** (empty state if !groupCreated)

### V6 — Photo Sync ✅ BUILT (`varun-sync`)
- Top bar: **Back → `goSyncBack()`** → varun-tagging (My Photos tab)
- Sync info card with progress bar animation
- Photo permission flow → sync reassurance sheet → sync progress
- Photo preview strip (5 thumbnails + "+27")
- Primary CTA: "Sync trip photos from gallery" → `showPhotoPermissionSheet()`
- Ghost CTA: "I'll add photos later" → `taggingOpenTab='my-photos'; go('varun-tagging')`

**Navigation note:** Both the back button and "I'll add photos later" land on varun-tagging with My Photos tab. This is intentional — sync screen is a step inside the tagging flow.

### V7 — Tagging & Sharing ✅ BUILT (`varun-tagging`)
- Background: T.bgWarm
- Face chips row (horizontal scroll)
- Category pills row (Bonfire, Forest, Lake, Night, Waterfall, Food, Selfies, Travel, Group)
- Action tabs: Group | Saved | Downloaded | My Photos
- Default tab: My Photos (or overridden by `taggingOpenTab` global)
- 34 real trip photos in 3-column grid
- Identification sheet (tap face avatar → "Who's this?" sheet with name chips)
- Long press → selection mode → share FAB
- Share sheet → "Share with everyone" → `doShareWithGroup()`
- After share: flashes photos, updates Group tab count, toast, → `varun-home`

**My Photos empty state** (`hasSynced = false`):
- "No trip photos yet" message
- "Sync trip photos from gallery" CTA → `showPhotoPermissionSheet()`

**Tab: Group** (`groupPhotosUnlocked = false` for Varun):
- Shows placeholder/locked state until photos are shared

---

## ANAND'S JOURNEY

### A1 — Album Listing ✅ BUILT (`anand-home`)
Uses `screenAlbumListing` — the shared populated album view.
- Opens with Group tab active (set via `taggingOpenTab = 'group'` in startJourney)
- Shows Iceland · Northern Lights group pool
- Full tagging/sharing functionality available

---

## PLANNED JOURNEYS (not yet built)

### Beulah — The Surprised Recipient 📋 PLANNED
- Scene-setter: WhatsApp DM with PixSlay link
- Web preview page (browser simulation)
- Registration → OTP → straight to "14 photos of you waiting"
- With Me tab active by default (no uploads yet)
- Magic moment: receiving photos without asking

### Kavitha — The Enthusiastic Early Adopter 📋 PLANNED
- No scene-setter, starts directly at registration
- Gallery permission asked immediately after profile (joining existing group)
- Sync runs silently in background
- Photos appear progressively on return

### Mayank — The Returning User 📋 PLANNED
- Scene-setter: iOS push notification
- Already identified globally — no Moment A, no Moment B
- Photos syncing automatically in background
- Zero friction — contrast with Varun's first-time flow

### Vishal — The Reluctant Late Adopter 📋 PLANNED
- Scene-setter: WhatsApp nudge from Mayank
- Same magic moment as Beulah — 8 waiting photos
- Demonstrates nudge mechanic from Mayank journey

---

## SUPPLEMENTARY SCREENS 🔧 PARTIAL / PLANNED

### Full Screen Photo View
- Photo fills screen edge to edge
- Transparent top bar: back + "N of 34" + three-dot
- Face chips row above bottom bar (tappable — filters grid)
- Bottom bar: Download · Bookmark · Share · More
- Swipe left/right to navigate within current filter
- Double tap to zoom

### Varun Profile Screen 📋 PLANNED
- Avatar + name + mobile + email + DOB (all editable)
- Friends row (count: 5)
- My Events row
- Subscription row (Free plan · Upgrade)
- Notifications toggle
- Logout

### Group Member List (from three-dot menu)
- Bottom sheet
- Each member: avatar + name + photo count
- Uninvited: "Invited" amber + "Nudge" button → toast

### Varun Memories Screen 📋 PLANNED
- Search bar (placeholder: "Search trips, people, places...")
- Face chip filters
- Iceland · Northern Lights card
- "More trips appear here as you create them."

---

## HOW TO USE THESE DOCS IN A NEW BUILD SESSION

1. Read CONTEXT.md — understand the product and journeys.
2. Load DESIGN.md — all colours, fonts, components.
3. Read README.md — understand routing, globals, current screen map.
4. Read SCREENS.md (this file) — understand what's built and what to build.
5. Build shared components first. Then journey screens in order.
6. After each screen: verify no dead ends. Every button must have an action.
7. After all screens: export as standalone HTML → deploy to Vercel.
