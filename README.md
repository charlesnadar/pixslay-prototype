# PixSlay Investor Demo Prototype

## Overview
A single-file PWA (`index.html`) that simulates the PixSlay user journey for investor demos. Five personas, two journey types.

---

## Journey Flows (LOCKED — do not change routing without explicit approval)

### New Users — Kavitha, Vishal, Beulah
```
Journey card tap on entry screen
  → startJourney() sets globals (activeJourney, otpDest, taggingOpenTab)
  → Invite screen (notification shade / iMessage / Instagram DM)
  → go('*-install')           ← NO splash here, app not installed yet
  → Play Store screen
  → Tap Install → progress bar fills (2.2s)
  → openApp('varun-reg')      ← splash fires HERE, after install
  → Registration screen (varun-reg) — shared
  → OTP screen (varun-otp)
  → Album listing with join CTA
```

| User   | Invite Screen   | Install Screen      | After Install  | OTP Dest     |
|--------|-----------------|---------------------|----------------|--------------|
| Kavitha | kavitha-scene (Samsung One UI notification shade) | kavitha-install (Play Store) | varun-reg → varun-otp | kavitha-home |
| Vishal  | vishal-scene (iMessage SMS)                        | vishal-install (Play Store)  | varun-reg → varun-otp | vishal-home  |
| Beulah  | beulah-scene (Instagram DM)                        | beulah-install (Play Store)  | varun-reg → varun-otp | varun-profile |

### Existing Users — Mayank, Anand
```
Journey card tap on entry screen
  → Chat invite screen (WhatsApp group / WhatsApp DM)
  → openApp('*-home')         ← splash fires immediately, app already installed
  → Album listing with CTA
```

| User   | Invite Screen              | After Link Tap   |
|--------|----------------------------|------------------|
| Mayank | mayank-scene (WA group)    | mayank-home      |
| Anand  | anand-scene (WA DM)        | anand-home       |

---

## Key Rules
- **`openApp(dest)`** — for existing users only. Shows PixSlay blue splash (1.6s) then navigates. Also used post-install in `playStoreScreen`.
- **`go(dest)`** — direct navigation, no splash.
- **`startJourney(user, firstScreen, opts)`** — sets all globals before any screen renders.
- **`playStoreScreen(journey, nextScreen)`** — shared Play Store UI. Calls `openApp(nextScreen)` after install progress bar. Do NOT add journey-specific globals here — use `startJourney` opts instead.
- **`fillPhone()`** — tap-to-fill shortcut on phone input (fills 9876543210, routes to varun-otp after 500ms).
- **`fillOtp()`** — tap-to-fill shortcut on OTP input.

---

## File Structure
```
pixslay-prototype/
  index.html          ← local dev server (localhost:4444)
  service-worker.js   ← local SW
  photos/             ← demo photos (k1.jpg … k19.JPG)
  pixslay-prototype/  ← git repo (push from here)
    index.html
    service-worker.js
    photos/
    README.md
    SCREENS.md
```

**Both `index.html` files must always be kept in sync.**

---

## Versioning
Bump `CACHE_VERSION` in `service-worker.js` on every push.
Current: `pixslay-v38`

---

## Screen Registry (SCREENS map)
Key screens and their render functions:

| Screen Key         | Function              |
|--------------------|-----------------------|
| entry              | screenEntry           |
| kavitha-scene      | screenKavithaScene    |
| kavitha-install    | screenKavithaInstall  |
| kavitha-home       | screenAlbumListing    |
| vishal-scene       | screenVishalScene     |
| vishal-install     | screenVishalInstall   |
| vishal-home        | screenAlbumListing    |
| beulah-scene       | screenBeulahScene     |
| beulah-install     | screenBeulahInstall   |
| beulah-home        | screenAlbumListing    |
| mayank-scene       | screenMayankScene     |
| mayank-home        | screenAlbumListing    |
| anand-scene        | screenAnandScene      |
| anand-home         | screenAlbumListing    |
| varun-reg          | screenVarunReg        |
| varun-otp          | screenVarunOtp        |
| varun-profile      | screenVarunProfile    |
| varun-tagging      | screenVarunTagging    |
