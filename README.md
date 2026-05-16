# PixSlay Prototype — Developer Reference

## Overview
Single-file PWA (`index.html`) for investor demos and user testing.
Two active journeys. Five personas planned (3 commented out, coming soon).

**Current version:** v90

---

## Active Journeys

| Journey | Entry Card | Flow |
|---------|-----------|------|
| **Varun** | "Varun" on entry screen | Splash → Onboarding → Reg → OTP → Profile → Home → Create Group → Sync → Tagging |
| **Anand** | "Anand" on entry screen | Splash → Onboarding → Album listing (Group tab open) |

Journeys commented out (planned): Mayank, Vishal, Kavitha, Beulah.

---

## Routing Architecture

### `startJourney(journey, dest, opts)`
Sets all globals and kicks off a journey. Always call this from entry card taps.

```javascript
// Varun — new user, full registration flow
startJourney('varun', 'varun-reg', { otpDest: 'varun-home', splash: true })

// Anand — existing user, lands on album listing with group tab
startJourney('anand', 'anand-home', { taggingOpenTab: 'group', splash: true })
```

When `opts.splash: true`:
- Sets `journeyDest = dest`
- Sets `splashDest = 'onboarding'`
- Navigates: `splash` → `onboarding` → `journeyDest`

### `go(screenKey)`
Direct navigation, no splash.

### `onboardingDone()`
Called at end of onboarding. Navigates to `journeyDest`.

---

## Global State

```javascript
var splashDest           = 'onboarding'; // always onboarding
var journeyDest          = 'varun-home'; // set by startJourney, read by onboardingDone()
var otpDest              = 'varun-home'; // where OTP success navigates to
var activeJourney        = 'varun';      // current journey name string
var groupCreated         = false;        // controls varun-home empty vs populated state
var hasSynced            = false;        // controls My Photos empty state on varun-tagging
var photoPermJustGranted = false;        // true = auto-open reassurance sheet on varun-sync postRender
var taggingOpenTab       = null;         // overrides default tab on next varun-tagging render
```

---

## Screen Registry

```javascript
var SCREEN_MAP = {
  'onboarding':          screenOnboarding,
  'splash':              screenSplash,
  'entry':               screenEntry,
  'varun-reg':           screenVarunReg,
  'varun-otp':           screenVarunOtp,
  'varun-profile':       screenVarunProfile,
  'varun-home':          screenVarunHome,        // empty (!groupCreated) or populated (groupCreated)
  'varun-empty-home':    screenVarunEmptyHome,   // kept for reference, not used in main flow
  'varun-create-group':  screenVarunCreateGroup,
  'varun-sync':          screenVarunSync,
  'varun-tagging':       screenVarunTagging,
  'anand-home':          screenAlbumListing,
};
```

---

## Key Functions Reference

| Function | Purpose |
|----------|---------|
| `startJourney(j, dest, opts)` | Sets all globals, handles splash + onboarding routing |
| `go(dest)` | Navigate to any screen in SCREEN_MAP |
| `handleBack()` | Back from unknown state — returns to entry |
| `goSyncBack()` | Back from varun-sync — sets My Photos tab and goes to varun-tagging |
| `onboardingDone()` | End of onboarding — navigates to journeyDest |
| `navBar(active, bg)` | Bottom nav bar. Optional `bg` param — when passed, border becomes transparent and bg matches (used on varun-home warm bg) |
| `screenHeader(title, backDest, rightAction)` | Top bar. `backDest` accepts: screen key string, `'__back__'` for handleBack(), or any raw JS expression containing `(` |
| `showPhotoPermissionSheet()` | Opens gallery permission bottom sheet |
| `onPhotoPermAllow()` | On permission allow: if on varun-sync, opens reassurance sheet; else sets photoPermJustGranted and goes to varun-sync |
| `showSyncReassuranceSheet()` | Opens sync timing bottom sheet |

---

## Navigation Rules (important)

| From | Action | Goes to |
|------|--------|---------|
| varun-sync | Back button | varun-tagging (My Photos tab) via `goSyncBack()` |
| varun-sync | "I'll add photos later" | varun-tagging (My Photos tab) |
| varun-create-group | Back arrow | varun-home (empty if !groupCreated) |
| varun-create-group | Skip / "do later" | varun-home (empty if !groupCreated) |
| varun-otp | Success | `otpDest` (set by startJourney) |
| onboarding | Done / swipe through | `journeyDest` (set by startJourney) |

---

## Demo Trip

| Property | Value |
|----------|-------|
| Group name | Iceland · Northern Lights |
| Dates | 10 – 20 Aug 2025 |
| Photos | 34 |
| Creator | Varun |

---

## Onboarding Screens

5 slides. Pain screens (1-4) have white background — platform colour lives only in the badge. Solution screen (5) has brand blue background.

| # | Platform | Badge colour | Key visual |
|---|---------|-------------|------------|
| 1 | WhatsApp | #25D366 | Washed-out 2×2 photo grid · "70% QUALITY LOST" pill |
| 2 | Google Drive | Multicolour | "Request access" mock card |
| 3 | Google Photos | GP pinwheel | Face row with Unknown/Found labels |
| 4 | AirDrop | #007AFF | Two phones + "STAND CLOSER" |
| 5 | PixSlay | — (blue bg) | Face detection brackets + "34 photos found · Every device" |

---

## File Structure

```
pixslay-prototype/            ← outer dir (served locally on localhost:4444)
  index.html                  ← keep in sync with inner
  service-worker.js           ← keep in sync with inner
  photos/                     ← demo photos k1.jpg … k19.JPG
  pixslay-prototype/          ← git repo root (push from here)
    index.html                ← SOURCE OF TRUTH
    service-worker.js
    photos/
    README.md
    CONTEXT.md
    DESIGN.md
    SCREENS.md
```

**Both `index.html` files must be in sync before every git push.**
Sync command: `cp pixslay-prototype/index.html index.html && cp pixslay-prototype/service-worker.js service-worker.js`

---

## Versioning

On every significant push:
1. Bump `CACHE_VERSION` in `service-worker.js` → `pixslay-vNN`
2. Bump version label in `index.html` at **2 locations** (update toast text + footer label)
3. Sync outer files (cp command above)
4. `git add index.html service-worker.js && git commit && git push`

Current: `pixslay-v90`
