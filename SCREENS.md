[SCREENS.md](https://github.com/user-attachments/files/27471357/SCREENS.md)
[SCREENS.md](https://github.com/user-attachments/files/27370922/SCREENS.md)
# PixSlay — SCREENS.md
*Screen-by-screen prompts for Claude Design. Paste each section into Claude Design chat in order.*

---

## MASTER INSTRUCTION — READ FIRST
# PixSlay — SCREENS.md
*Screen-by-screen prompts for Claude Design. Paste each section into Claude Design chat in order.*

---

## MASTER INSTRUCTION — READ FIRST

Before building any screen:
1. You have loaded DESIGN.md as the design system. Every colour, font, spacing, component follows it exactly.
2. You have read CONTEXT.md and understand the product, the event, and the five users.
3. Build shared components first. Then build each journey in order.
4. After completing each journey — navigate every screen yourself. Verify no dead ends. Verify every button has an action. Report gaps before proceeding.
5. Reuse components across journeys. Do not rebuild registration, OTP, nav bar, face chips, bottom sheets, toasts, photo grid, or action sheets for each journey.
6. Every screen has a Switch Journey pill — top center, above status bar, white background, blue border, text "Switch journey" 10px — tapping returns to Screen 0 entry point.
7. This prototype will be exported as standalone HTML and hosted on Vercel. Optimise accordingly.

---

## STEP 1 — BUILD SHARED COMPONENT LIBRARY

Build these components as reusable elements before any screens:

- Phone registration screen template (floating label, phone field, continue button)
- OTP verification screen template (6 boxes, auto-advance, auto-submit)
- Profile setup screen template (avatar upload, name field, email field, continue)
- Bottom navigation bar (Home, FAB center, Profile — as specified in DESIGN.md)
- Face chip row (horizontal scroll, identified blue chips, unidentified grey chips)
- Filter bar (sticky category chips, expandable sub-chips, 200ms slide animation)
- Action tabs row (All, Shared, Received, Saved, Downloaded)
- Photo grid — My Photos version (3-column square, state markers)
- Photo grid — Group pool version (masonry mixed orientation, state markers)
- Share action sheet (PixSlay share + external share with app icons)
- Download bottom sheet (low-res free, hi-res ₹5, group subscription card)
- Standard popup (headline, copy, two buttons — destructive left, safe right)
- Toast notification (success green, alert coral, 3 second duration)
- Bottom sheet template (20px top radius, handle indicator, overlay)
- Top bar template (back arrow, title, right icons)
- Dummy photo set (34 flat vector illustrations for Karjat trip — see DESIGN.md photo specs)
- Scene-setter card template (context text + single CTA button)
- Switch Journey pill (top center every screen)
- Hotspot pulse (blue ripple on primary elements after 4 seconds inactivity)

---

## STEP 2 — SCREEN 0: ENTRY POINT

**Purpose:** Interactive simulation entry. User picks their role. Journey begins.

**Layout top to bottom:**
- Status bar (standard)
- Switch Journey pill (top center — on this screen it does nothing, already here)
- PixSlay logo — icon 28px + wordmark 22px 800 weight — centered, 60px from top
- "Interactive simulation" pill — #EEF2FD background, #0C447C text, 10px 600, radius 20px, centered
- Headline: "An overnight trip to Karjat. Five people. Five stories." — 22px 800 #1A1917 centered
- Subhead: "Pick someone and see PixSlay through their eyes." — 13px 400 #6B6864 centered
- Gap 24px
- Five user cards — full width minus 32px, 12px radius, border 0.5px #F0EEEB, padding 14px 16px

**Card contents (left to right):**
- Avatar circle 40px #1B4FD8 background, white initials 12px 700
- Name: 14px 600 #1A1917
- Description: 11px 400 #6B6864
- Chevron right: Lucide 'chevron-right' 16px #A8A49F

**Five cards:**
1. VR — Varun — "PixSlay user. Creates the group for the Karjat trip."
2. BE — Beulah — "New to PixSlay. Discovers it when her photos arrive Sunday morning."
3. KA — Kavitha — "New to PixSlay. Installs during the trip when Varun shows her."
4. MA — Mayank — "Existing PixSlay user. Joins the group automatically."
5. VI — Vishal — "New to PixSlay. Takes his time. Joins when Mayank nudges him."

**After completing a journey and returning here:**
- That user's card shows a green checkmark badge top-right corner
- Encourages trying other journeys

**Bottom:**
- Share Experience button — ghost style, Lucide 'share-2' icon left, text "Share this experience" 12px #A8A49F
- On tap: copies prototype URL to clipboard + opens native share sheet with message "Experience PixSlay before it launches — pick your role and see how it works."

**Card tap actions:**
- Varun → `go('varun-reg')` — starts registration flow (Screen 1). ✅ LINKED
- Beulah → Scene-setter card B1 then Beulah Screen 1
- Kavitha → Kavitha Screen 1 (no scene-setter needed)
- Mayank → Scene-setter card M1 then Mayank Screen 1
- Vishal → Scene-setter card Vi1 then Vishal Screen 1

---

## STEP 3 — VARUN'S JOURNEY

### Varun Scene-setter V1
Context card. White screen. PixSlay logo centered top.
Text: "It's Friday evening. You're heading to Karjat with friends for the weekend. You want to make sure everyone gets their photos this time — no WhatsApp chaos."
Button: "Open PixSlay" → Varun Screen 1

### Varun Screen 1 — Phone Registration
- Logo centered. 60px from top.
- Headline: "Your photos from every gathering." 24px 800 #1A1917 left aligned 16px margin
- Subhead: "Start with your number. We'll send a quick code." 13px 400 #6B6864
- Phone field: floating label. Watermark "Your phone number". Floating title "Phone number". Pre-filled with "+91" in #A8A49F. Numeric keyboard auto-focus.
- Continue button: disabled until 10 digits entered. #1B4FD8 when active.
- Hint: "We'll send a one-time code to verify." 11px #A8A49F centered.
- Resume state: if returning mid-registration, phone field pre-filled, subtle text below "Welcome back. Continue where you left off."
- Back: toast "Tap back again to exit." Second back closes prototype journey, returns to Screen 0.
- Continue tap → Varun Screen 2

### Varun Screen 2 — OTP Verification
- Logo centered top.
- Headline: "Enter the code we sent you." 24px 800 left
- Confirmation: "Sent to " grey + "+91 98765 43210" #1A1917 500 — tapping this number returns to Screen 1 pre-filled
- 6 OTP boxes centered. Auto-advance. Auto-submit on 6th digit.
- Simulate correct OTP: any 6 digits → navigate to Screen 3
- Incorrect simulation: show shake animation, clear boxes, error "That code didn't work. Try again." 12px #E8490F
- OTP expired state: after 10 seconds of inactivity, show "That code has expired. We've sent you a fresh one." New OTP auto-sent, countdown resets.
- Resend countdown from 0:30. After 30s "Resend code" becomes tappable blue.
- Back → Screen 1 pre-filled.

### Varun Screen 3 — Profile Setup
- Progress dots: 3 dots, step 2 active as blue pill 18px wide 6px tall
- Headline: "What do we call you?" 24px 800 left
- Subhead: "Just the basics. You can always add more later." 13px 400 #6B6864
- Avatar upload circle: 72px, #EEF2FD background, 1.5px dashed #C7D4FB border, Lucide 'user' icon 24px #C7D4FB centered. Tap → dummy photo fills circle. Edit badge appears: 20px circle #1B4FD8 with 'camera' icon 10px white bottom-right. Tapping edit badge shows action sheet: "Change photo" and "Remove photo."
- Hint below avatar: "Add a photo so friends recognise you" 11px #A8A49F centered
- Name field: floating label. Watermark "What do we call you?" Floating title "Full name". Pre-filled with "Varun" for prototype.
- Email field: floating label. Watermark "Your email (optional)". Floating title "Email". Optional.
- Continue: disabled until name has 2+ chars. Active #1B4FD8.
- Back → Screen 2. OTP cleared.
- Continue → Varun Screen 4

### Varun Screen 4 — Home ✅ BUILT
Journey closure state — shown after sharing is complete, and accessible via the Home nav button.

- Top bar: PixSlay logo left. Bell icon right (no badge). Background: T.bgWarm.
- Bottom nav bar: Home active (blue). FAB center. Profile inactive.

**Mumbai — Karjat LIVE album card** (only card shown — first-time user flow):
- Tappable card. Tap → opens varun-tagging with Group tab active by default.
- Card cover: 148px gradient (blue → teal). Scene thumbnail row (bonfire, forest, lake, night + +30 overflow chip). LIVE badge (top-right, green dot + "LIVE" text).
- Card footer: "Mumbai — Karjat" 15px 700. "34 photos · 5 people" 12px. Chevron right.

**Below card — "Keep the trip alive" section:**
- Title: "Keep the trip alive" 15px 700.
- Subcopy: "More memories will appear as everyone adds photos." 13px T.textS.
- Two side-by-side buttons:
  - "Add memories" (blue filled) → opens varun-tagging with My Photos tab active
  - "Invite friends" (ghost border) → placeholder (void)

### Varun Screen 5 — Create Group
- Top bar: back arrow #1B4FD8 left. "New group" title center. Empty right.
- Background: #FFFFFF. Scrollable.
- Cover photo circle: 56px at top center. Camera icon inside. Dashed border #C7D4FB. Optional. Tap → dummy photo fills circle.
- Group name field: floating label. Watermark "What are you calling this one?" Floating title "Group name". Auto-focus — keyboard opens. Pre-filled "Mumbai — Karjat" for prototype. Primary button activates when 1+ character.
- Destination field: floating label. Watermark "Where are you headed? (optional)". Floating title "Destination". Pre-filled "Karjat, Maharashtra".
- Date range: two fields side by side, 8px gap. From field pre-filled "Sat 24 May". To field pre-filled "Sun 25 May". Tap → native date picker. To date cannot be before From date — earlier dates greyed out.
- Accommodation field: floating label. Watermark "Resort, hotel or homestay (optional)". Floating title "Accommodation".
- Divider: 0.5px #F0EEEB full width.
- Section label: "Who's coming?" 11px 600 #A8A49F tracking 0.04em
- Contact chips row: horizontal scroll. 5 contacts: MA (Mayank — PixSlay user, blue x mark next to name), KA (Kavitha), BE (Beulah — "Invite via SMS" amber label), VI (Vishal — "Invite via SMS" amber), AN (Anand — "Invite via SMS" amber). Tap toggles selected (blue avatar + green checkmark badge) / unselected.
- Link card: #EEF2FD background, radius 10px, padding 12px 14px. Headline "Share a link instead" 12px 600 #0C447C. Sub "Anyone with this link can join the group." 11px #185FA5. Two buttons: "Copy link" #1B4FD8 filled. "Share on WhatsApp" white #1B4FD8 border. Copy link → toast "Link copied." WhatsApp → opens WhatsApp dummy with pre-filled message.
- Create group button: disabled when group name empty (#F0EEEB). Active #1B4FD8 as soon as 1+ character. Label "Create group".
- Back → Screen 4. No data saved.
- Create group (with friends selected) → Varun Screen 6
- Create group (no friends) → Varun Screen 6b Invite Friends

### Varun Screen 6 — Photo Sync
- Top bar: back arrow left. "Mumbai — Karjat" title center. Three-dot menu right.
- Background: #FFFFFF
- Sync info card — informational only, no inline CTAs. Content swaps in-place at each state:
  State A (initial):
    Title: "Your Karjat memories start here." 16px 700 #1A1917
    Subcopy: "We'll quietly collect photos from this trip." 13px 400 #6B6864
    Trip window: "Sat 24 May, 8:00 AM — Sun 25 May, 6:00 PM" 13px 500 #1A1917 (reads from state.syncTiming)
    Progress bar at 0%, counter "Ready to sync"
  State B/C (after permission):
    Title: "You're all set for Karjat."
    Subcopy: "Just enjoy the trip and keep clicking photos."
    Status line: "Looking from Sat 24 May, 8:00 AM to Sun 25 May, 6:00 PM" 11px #A8A49F
    Trip window line hidden. Progress bar animates.
  Connection lost (during sync): amber banner "Waiting for connection. Sync will resume automatically."
  Results (fades in at 100%):
    — Two-stat row: "34 / Trip photos" | "2 / Trip videos" (vertical divider between, 28px 800 numbers)
    — Contextual line: "Looking from [fromDate], [fromTime] → [toDate], [toTime]" 11px #A8A49F centered
    — Photo preview strip: 5 equal-width rounded thumbnails (10px radius) in a horizontal row.
      4 warm illustration thumbnails (forest green, amber/bonfire, deep blue, night sky) + "+27" grey pill.
      Thumbnails use gradient backgrounds with subtle SVG decorations suggesting trip scenes.
      Not scrollable — purely emotional/contextual, not a full gallery preview.
    — Privacy line: "These are in your private space. Nobody can see them yet." 12px #A8A49F centered
- Sticky bottom action area — three progressive states, swapped in-place without re-render:
  - State A (initial): Primary "Set up trip photos" blue + Ghost "I'll do this later"
  - State B (syncing): Primary "View my photos" disabled grey + Ghost "I'll do this later"
  - State C (done):    Primary "View my photos" active blue + Ghost "I'll do this later"
- "Set up trip photos" tap → opens sync reassurance bottom sheet:
  - Headline: "When should we look for trip photos?" 20px 800
  - Copy: "We'll only look within your trip window." 13px 400 #6B6864
  - 4 fields always visible, 2×2 grid: From date | From time / To date | To time
  - All pre-filled from state.syncTiming (group creation data). From time auto-focused.
  - Helper text: "We'll only use this to find photos from the trip." 11px #A8A49F centered
  - Primary: "Allow access & continue" → saves edits to state.syncTiming → closes sheet → card swaps to State B/C → sync starts
  - Ghost: "Cancel" → closes sheet, no sync, no save
  - Tap overlay → same as Cancel
- Three-dot menu → bottom sheet: "Edit group" / "Share invite link" / "Delete group"
- View my photos → Varun Screen 7
- I'll do this later → Varun Screen 4
- Back → Varun Screen 4, sync continues in background

### Varun Screen 6b — Invite Friends (if no friends selected in Screen 5)
- Top bar: back arrow. "Add people" title.
- Selected count bar: #EEF2FD, radius 10px. "0 people invited" left. Empty avatars right.
- Search bar: #F8F7F5, radius 10px, height 40px, Lucide 'search' icon left, placeholder "Search contacts".
- Contact list (alphabetical, 48px each):
  - Anand — "Invite via SMS" amber label — checkbox right
  - Beulah — "Invite via SMS" amber — checkbox
  - Kavitha — unselected initially — checkbox
  - Mayank — blue PixSlay x mark (already on PixSlay) — checkbox
  - Rey — "Invite via SMS" amber — checkbox
  - Vishal — "Invite via SMS" amber — checkbox
- Non-PixSlay contacts: amber "Invite via SMS" 11px below name. Get SMS link on invite.
- PixSlay contacts: small blue x mark 12px right of name. Get in-app notification.
- Tap contact → selects. Avatar turns blue. Checkbox fills #1B4FD8. Count bar updates dynamically.
- Link card: same as Screen 5.
- Done button: "Done — invite X people" dynamic label. Disabled at 0 selected.
- Back → Screen 5, selections preserved.
- Done → Varun Screen 6

### Varun Screen 7 — Tagging and Sharing (My Photos)  ✅ BUILT
- Background: #F8F7F5
- Photo grid renders immediately on load — no blocking identification step.
- Top bar (id="tagging-top-bar"): back → varun-sync. "Mumbai — Karjat" center. Search + three-dot right.
  - In selection mode: swaps to "Cancel" left + "X selected" center (in-place DOM mutation, no re-render).
- Face chips row (hscroll, 16px padding, 8px gap):
  - VR · You · 14 — blue identified chip
  - MA · 9 — grey (becomes blue after Moment B tagging)
  - KA · 7 — green ring
  - ? · 12 — purple ring
  - Unidentified: dashed ring, "Unknown" label. Tap → identification sheet.
  - Identified: solid ring, real name. Tap → toggles face filter.
- People row — ONE persistent row of 4 circular face avatars (56px each), hscroll:
  - VR (You — 14): blue gradient, solid blue ring. Tap → filter grid to VR photos.
  - MA (Unknown — 9): warm gradient, dashed orange ring. Tap → "Who's this?" sheet.
  - KA (Unknown — 7): green gradient, dashed green ring. Tap → "Who's this?" sheet.
  - ? (Unknown — 12): purple gradient, dashed purple ring. Tap → "Who's this?" sheet.
  - Active filter: circle gets inner glow ring. Others fade to 0.4 opacity.
- Category pills row — hscroll, icon-led colorful pills (height 34px, radius 20px):
  🔥 Bonfire | 🌲 Forest | 🏞 Lake | ✨ Night | 💦 Waterfall | 🍛 Food | 🤳 Selfies | 🚗 Travel | 👥 Group
  - Each pill: soft colored background + matching text color (NOT grey).
  - Tap → filters grid to matching scene type (non-matching: opacity 0.12). Tap again to clear.
  - Active pill: scale(1.06). Others: opacity 0.45.
- Action tabs (hscroll): Group (258) | Saved (14) | Downloaded (6) | My Photos (34)
  - My Photos active by default. Active: T.text color, fontWeight 700, 2px solid T.text border-bottom.
  - Group tab count (258) = total group pool across all members. Updates after sharing.
- Photo grid (id="tagging-grid"): 34 illustrated SVG photos in 3-column CSS grid, 2px gap. aspect-ratio:1 cells.
  - 9 scene types: bonfire (amber/orange), forest (deep green), lake (blue), night (dark purple),
    waterfall (teal), food (terracotta), selfie (magenta), travel (brown), group (coral red).
  - Each scene: gradient bg + minimal decorative SVG elements (flames, trees, waves, stars, etc.)
  - Group tab: shows "N photos shared with everyone" + same grid layout for pool photos.
- Identification flow — tap-triggered only (NO automatic popup):
  - Tap any unidentified avatar in people row → lightweight "Is this you?" bottom sheet.
  - Sheet: light overlay (rgba 0,0,0,.12), white sheet 24px top radius, soft shadow.
  - 72px face circle in person's saturated gradient (MA=amber, KA=green, unk=purple) + "?" emoji.
  - "Is this you?" 20px 800 — warm, personal, non-technical copy.
  - "Appears in N photos from the trip" 13px T.textS.
  - Name chips row (hscroll): Varun, Mayank, Kavitha, Beulah, Vishal. NO text input.
  - Tap chip → highlights blue, stores in identifySelectedName, enables Confirm.
  - Confirm (blue, enabled after chip tap) + "Not sure" (ghost skip).
  - Confirm: avatar name updates to identified state, ring becomes solid, tap re-wires to face filter. Toast: "[name] identified!".
  - Interaction fires only once per person (avatar tap is re-wired after confirm).
- Inline search — tap search icon in top bar:
  - Top bar swaps to: × button + animated search input (expands left, fades in).
  - Title hides. Input auto-focused. × collapses back to default top bar.
  - No new screen — all inline in top bar row.
- Selection mode — long press (600ms) — works on ALL tabs (Group, Saved, Downloaded, My Photos)
  - Long press any photo → taggingEnterSelect(id). First photo selected.
  - All photo checkboxes become visible (20px circles, top-left). Blue fill + checkmark when selected.
  - Top bar swaps to "Cancel" + "X selected" (in-place innerHTML mutation).
  - Tap photos to toggle selection.
  - Share FAB: pill button (height 48px, border-radius 24px), T.blue bg, share icon + "Share (N)" live label. Position absolute bottom:80px right:16px, z:200. Label updates on each selection change.
  - Cancel: exits select mode, hides checkboxes, restores top bar, hides FAB.
  - Group tab grid uses `taggingPhotoCell()` — same long-press + checkbox behaviour as My Photos.
- Share sheet (id=tag-share-sheet) — compact member-avatar sheet:
  - Opens on FAB tap. Light overlay, 24px top radius, soft shadow.
  - "Share N photos" 18px 800 + "Mumbai — Karjat · 6 members" 12px subhead.
  - Member avatars row (hscroll): VR, MA, KA, BE, VI, AN — 48px circles with colored gradients + name labels. All shown with green check badge (all selected by default).
  - Single "Share with everyone" blue CTA button → doShareWithGroup().
  - Tap outside or swipe to dismiss.
- Transfer + success — doShareWithGroup() (compressed, no dedicated screens):
  - Closes share sheet. Flashes selected photos (staggered opacity animation).
  - groupPoolCount += shared.length (capped at 34). groupDisplayCount += shared.length.
  - After flash: taggingExitSelect() → updates Group badge → taggingSetTab('group') → toast "N photos shared with the group ✓".
  - After 1600ms: go('varun-home') — journey closure. No dedicated success screen.
- Three-dot menu: Edit group / Share invite link / Delete group (T.alert). Standard overlay/sheet.
- Bottom nav: Home (active), FAB, Profile — all tappable.

### Varun Screen 8 — Full Screen Photo View
- Photo fills screen edge to edge. Radius 0.
- Top bar (transparent over photo): back arrow white left. "4 of 34" white center. Three-dot menu white right.
- Attribution: "Taken by Varun" 11px #FFFFFF 70% opacity, above bottom bar
- Face chips of people in this photo: horizontal row just above attribution. Tappable — tap navigates back to grid filtered by that face.
- Bottom action bar: white 56px strip
  - Download: Lucide 'download' 22px #6B6864 — tap → download sheet
  - Bookmark: Lucide 'bookmark' 22px #6B6864 — tap → saves, icon turns #0F9E6E filled
  - Share: Lucide 'share-2' 22px #1B4FD8 (primary, most prominent) — tap → share action sheet
  - More: Lucide 'more-horizontal' 22px #1A1917 — tap → action sheet: "Remove from my photos" #E8490F, "Report", "Photo info"
- Photo info tap: bottom sheet showing file size "4.2 MB", dimensions "4032 x 3024", taken by "Varun", timestamp "Sat 24 May, 3:42 PM"
- Swipe left/right: navigate to next/previous photo within current filter
- Double tap: zoom 2x. Double tap again: return to normal.
- Video photos: play button overlay centered. Tap plays (simulate with animated scrubber). Mute toggle top-right. Scrubber bar above action bar.
- Back → returns to photo grid at same scroll position

### Varun Home with Events (after creating group)
- Same as Screen 4 but with content
- Karjat event card: cover photo background, "Mumbai — Karjat" bold white over photo, "Sat 24 May — Sun 25 May" below, 6 member avatars stacked (max 5 + count), "34 photos" bottom-left, green "LIVE" dot top-right (trip is active)
- Bell badge: 1 notification. Tap → notification bottom sheet
  - Row 1: Mayank avatar. "Mayank just joined Mumbai — Karjat." "2m ago". Tap → enters Karjat event.
  - Row 2: System. "Your Karjat photos are ready to view." "5m ago". Tap → enters event.
  - Row 3: Beulah avatar. "Beulah joined Mumbai — Karjat." "1h ago". Tap → enters event.
- If 5+ events: show 3 cards then "See all 12 events" blue link → Memories screen
- FAB: creates new group → Screen 5

### Varun Memories Screen
- Top bar: back arrow. "Memories" title. Search icon right.
- Search bar: auto-focused. Placeholder "Search trips, people, places..."
- Face chips of frequent people: Mayank, Kavitha, Beulah, Vishal, Anand. Tap filters results.
- Filter selectors: Location dropdown, Date range, Event type. Side by side below face chips.
- Results: Karjat Trip card (full width, prominent). Below: "More trips appear here as you create them." grey line.
- Karjat Trip card: cover photo, event name, dates, member avatars, photo count.
- One year memory banner (if applicable): "6 months ago — Mumbai — Karjat" with "Relive" CTA.
- Empty search: magnifying glass illustration. "No trips found. Try a different name or date."
- Tap result card → enters that event.

### Varun Profile Screen
- Top bar: back arrow. "Profile" title.
- Avatar: 72px circle. Current photo. Blue edit badge. Tap → photo picker or Remove.
- Name: "Varun" 18px 700. Tap → inline edit. Save on blur.
- Mobile: "+91 98765 43210" with pencil icon. Tap → OTP verification flow → update number.
- Email: "varun@email.com" with pencil icon. Tap → inline edit.
- DOB: "12 Mar 1990" with pencil icon. Tap → date picker.
- Divider
- Friends row: Lucide 'users' icon left. "Friends" label. Count right "5". Chevron. Tap → Friends list screen.
- My Events row: Lucide 'calendar' icon. "My Events". Count "2". Tap → Memories screen.
- Subscription row: Lucide 'star' icon. "Free plan". "Upgrade" blue label right. Tap → Subscription screen.
- Divider
- Notifications toggle: label left, iOS-style toggle right. Toggleable.
- Help row: tap → placeholder help screen.
- Logout row: Lucide 'log-out' #E8490F icon. "Log out" #E8490F text. Tap → popup: "You'll lose quick access to all your trips and photos until you log back in." CTAs: "Log out" coral — "Stay logged in" blue.
- No friends yet state: inline below Friends row — "No friends yet. They'll appear here after your first shared event."

### Varun Friends List Screen
- Top bar: back arrow. "Friends" title.
- Search bar.
- Each friend row: avatar left, name center, shared events count right "3 trips". Tap → Friend Profile screen.
- Friend Profile screen: avatar + name top. Below — list of shared events. Each event tappable → enters event filtered to that friend's photos.

### Varun Group Member List (from three-dot menu inside event)
- Bottom sheet rises.
- Title: "Members" 16px 700 #1A1917
- Each member row 48px:
  - Avatar left (36px circle)
  - Name center 13px 500
  - Upload count right 12px #6B6864 ("12 photos") or amber "0 photos" if none
  - For uninvited: "Invited" amber label. "Nudge" button right — tap → toast "Reminder sent to Vishal."
- Close handle at top.
- Tap member → enters event filtered to that member's photos.

### SELF-REVIEW CHECKPOINT — VARUN
After building all Varun screens:
Navigate every screen from Screen 0 → Varun entry → registration → OTP → profile → home → create group → sync → tagging (all 3 moments) → full screen photo → home with events → memories → profile → friends.
Verify: every button has an action. No dead ends. All 25 gaps addressed for Varun. Report findings.

---

## STEP 4 — BEULAH'S JOURNEY

### Beulah Scene-setter B1
Context card. White screen. PixSlay logo top.
Show a dummy WhatsApp chat interface:
- Chat header: Varun's avatar + "Varun" + green online dot
- Message bubble (grey, from Varun): "Check out these Karjat photos — your pics are already there! [PixSlay link]"
- Below bubble: tappable blue link card showing PixSlay icon + "pixslay.app/karjat-varun-beulah"
Text above chat: "It's Sunday morning. Varun just sent you this."
Button: "Tap the link" → Beulah Screen 1 (web preview)

### Beulah Screen 1 — Web Preview (browser experience)
- Simulate mobile browser. URL bar shows "pixslay.app/mumbai-karjat"
- White page. No app nav bar. No footer.
- PixSlay logo centered top. Small.
- Headline: "Varun and Kavitha shared 14 photos of you from Mumbai — Karjat." 20px 700 #1A1917 centered
- Subhead: "3 of them are right here." 13px #6B6864 centered
- Three photo thumbnails: 100px square each. Slightly blurred overlay. Warm vector illustrations with Beulah's face chip visible. Horizontal row centered.
- "See all 14 photos" button: #1B4FD8, 50px height, full width minus 32px
- Tap: "Download PixSlay to see them all." App Store / Play Store button below.
- "Already have PixSlay?" ghost link below. Tap → "Open in PixSlay" button → skip to Beulah Screen 3
- Download PixSlay tap → Beulah Screen 2

### Beulah Screen 2 — Registration (Beulah version)
- PERSONALISED HEADLINE: "Varun and Kavitha shared 14 photos of you from Mumbai — Karjat." 22px 700 #1A1917 centered
- Three blurred photo previews below headline (same as web preview)
- "Sign up to see them all." 13px #6B6864 centered
- Phone field: floating label. Same as Varun's registration.
- Continue → OTP (same as Varun Screen 2)
- OTP → Beulah Screen 3 (skip profile setup for speed, or include minimal profile)
- Minimal profile: just name field. Avatar optional. "Skip for now" prominent.

### Beulah Screen 3 — Her Photos Waiting
- Skip empty home. Skip create group. Go directly here.
- One-time overlay: white card centered. "These are photos others took of you from Mumbai — Karjat. They're yours now." 15px 500 #1A1917. Dismiss button "Got it" #1B4FD8. Tap → overlay dismisses.
- Face identification: Moment A triggers — "Which one is you?" Beulah identifies herself.
- Then Moment B for others.
- Screen shows With Me tab active by default (not My Photos — Beulah has no uploads yet)
- 14 flat vector photos visible in masonry layout. All contain Beulah's face chip marker.
- Filter bar, action tabs, all functional same as Varun Screen 7.
- Full screen photo: same as Varun Screen 8 but attribution shows "Taken by Varun" or "Taken by Kavitha"
- Share button in full screen: Beulah can share externally. Same share sheet. PixSlay watermark applied.
- My Photos tab: empty state — "No photos yet. Add yours from the trip." with "Sync my photos" blue CTA.
- Sync my photos → gallery permission → sync screen → Beulah's photos appear

### SELF-REVIEW CHECKPOINT — BEULAH
Navigate Beulah's complete journey. Verify magic of receiving photos without asking is felt. Verify no dead ends.

---

## STEP 5 — MAYANK'S JOURNEY

### Mayank Scene-setter M1
Context card. White screen. PixSlay logo top.
Show a simulated phone notification:
- Dark notification banner at top (like iOS): PixSlay icon + "Mumbai — Karjat" + "Varun added you to the group. Your photos are syncing."
Text: "It's Saturday morning. Your phone was off during the trip planning last night. You woke up to this."
Button: "Tap the notification" → Mayank Screen 1

### Mayank Screen 1 — Home with Existing Events
- This is Mayank's home feed — he's an existing user
- Shows his PREVIOUS events (not Karjat yet showing prominently):
  - "Goa Trip — March 2025" card (past, slightly grey, no live dot) — 28 photos
  - "Office Lunch — April" card (past) — 12 photos
- NEW: Karjat banner at top: #EEF2FD background. "You were added to Mumbai — Karjat while you were away." Blue "View trip" CTA right.
- Bell badge: 1. Tap → notification: "Varun added you to Mumbai — Karjat. Sat 24 May." Tap → Mayank Screen 2.
- FAB: creates new group.

### Mayank Screen 2 — Karjat Event (Mayank's view)
- Enters event. His photos are syncing progressively.
- Mayank is an existing user — no reassurance sheet, no timing question. Sync starts automatically when he opens the group (he already approved permissions on his prior trip). No friction.
- My Photos tab: slim 3px blue progress bar at very top of grid. "Syncing your Karjat photos — 60% complete" in grey 11px below bar.
- Photos appear progressively with stagger animation (3 appear, then 3 more, etc.)
- Progress bar disappears when complete. Toast: "All your Karjat photos are here."
- Face chips: "MA — You" already blue identified (returning user, globally registered). Other chips also identified from previous events.
- NO Moment A — Mayank is already identified globally.
- NO Moment B — other faces already known from previous events.
- Goes straight to browsing. Zero friction demonstrated clearly.
- All filter, selection, sharing functionality same as Varun.
- This contrast with Varun's journey (reassurance sheet + timing question) demonstrates long-term product value: first-time friction is upfront and thoughtful; returning users get zero friction.

### SELF-REVIEW CHECKPOINT — MAYANK
Verify zero friction demonstrated. Verify progressive sync shown. Verify existing events visible on home.

---

## STEP 6 — KAVITHA'S JOURNEY

### Kavitha Screen 1 — Mid-trip Install
- No scene-setter needed. Start directly at registration.
- Registration same as Varun but headline: "Your photos from every gathering." (organic — she heard about it from Varun in person)
- After OTP and profile → gallery permission asked immediately (she's joining an existing group)
- Gallery permission card: #EEF2FD card. "Allow PixSlay to find your Karjat photos." Allow / Not now.
- Tap Allow → permission card fades → sync reassurance sheet opens (same pattern as Varun Screen 6).
  - All 4 fields pre-filled from group creation. "Start syncing" primary / "Cancel" ghost.
- "Start syncing" → saves timing → sync begins silently. She returns to the dinner. App collects photos in background.
- Home screen: Karjat event card appears with "Syncing..." indicator on card.
- Enters event → My Photos shows photos appearing progressively (same as Mayank progressive sync).
- With Me: photos Varun has shared with her already appear.
- Moment A triggers — identify herself.
- Moment B — identify others.
- Sharing before identification: "Choose specific people" option shows with grey overlay. Tap → "Identify people in your photos first. It takes less than a minute." "Identify now" blue CTA / "Skip" ghost.

### SELF-REVIEW CHECKPOINT — KAVITHA
Verify mid-trip install flow feels natural. Verify gallery permission asked at right moment.

---

## STEP 7 — VISHAL'S JOURNEY

### Vishal Scene-setter Vi1
Context card. White screen. PixSlay logo top.
Show dummy WhatsApp messages:
- From Varun (Saturday): "Bhai install PixSlay kar — sab photos wahan hain"
- From Mayank (Sunday): "Vishal seriously install kar — tera bhi bahut photos hain"
- Vishal (Sunday afternoon): "Ok ok installing now 😄"
Text: "It's Sunday afternoon. You finally gave in."
Button: "Tap the link" → Vishal Screen 1

### Vishal Screen 1 — Web Preview
- Same as Beulah Screen 1 but personalised:
- Headline: "Varun shared 8 photos of you from Mumbai — Karjat."
- Three blurred photos with Vishal's face chip.
- "See all 8 photos" button.
- Download PixSlay → registration

### Vishal Screen 2 — Registration
- Same flow as Beulah.
- After profile → straight to his 8 waiting photos.

### Vishal Screen 3 — His Photos Waiting
- Same as Beulah Screen 3.
- One-time overlay dismisses.
- 8 photos in With Me tab.
- Moment A — identify himself.
- Sync own photos offered — his 22 photos from the trip.
- Offline state: if simulated — show "You're offline. Your photos will be here when you reconnect." with grey waiting illustration.

### Nudge Screen (shown in Varun or Mayank journey as reference)
- Inside group member list — Vishal row shows "Invited" amber. "Nudge" button.
- Tap Nudge → toast "Reminder sent to Vishal."
- This is how Vishal received the nudge from Mayank — demonstrate in Mayank's journey.

### SELF-REVIEW CHECKPOINT — VISHAL
Verify delay and nudge concept communicated through scene-setter. Verify same magic moment as Beulah.

---

## STEP 8 — FINAL REVIEW

After all five journeys are built:

1. Navigate Screen 0. Verify all 5 cards present with correct descriptions.
2. Complete Varun's full journey. Return to Screen 0. Verify green checkmark on Varun's card.
3. Complete Beulah's journey. Verify green checkmark.
4. Complete Mayank's journey. Verify green checkmark.
5. Complete Kavitha's journey. Verify green checkmark.
6. Complete Vishal's journey. Verify green checkmark.
7. Verify Switch Journey pill present and functional on every screen.
8. Verify Share Experience button on Screen 0 works.
9. Verify no dead ends across any journey.
10. Verify all 25 gaps addressed:
    - Gap 1: Resume mid-registration ✓
    - Gap 2: OTP expired state ✓
    - Gap 3: Remove avatar option ✓
    - Gap 4: Back gesture on home ✓
    - Gap 5: Date validation ✓
    - Gap 6: Cover photo for group ✓
    - Gap 7: PixSlay vs non-PixSlay contacts ✓
    - Gap 8: Internet lost during sync ✓
    - Gap 9: No faces detected ✓
    - Gap 10: Wrong face identification correction ✓
    - Gap 11: Cross-tab selection conflict ✓
    - Gap 12: Video in full screen ✓
    - Gap 13: More than 5 events on home ✓
    - Gap 14: Empty search state ✓
    - Gap 15: Memories with one event ✓
    - Gap 16: Friend tapping to relationship view ✓
    - Gap 17: Zero photos member indicator ✓
    - Gap 18: Adaptive memory heading ✓
    - Gap 19: Beulah deep link if PixSlay installed ✓
    - Gap 20: Existing user Beulah skip to login ✓
    - Gap 21: Beulah external share ✓
    - Gap 22: Mayank phone off scenario ✓
    - Gap 23: Mayank progressive sync ✓
    - Gap 24: Kavitha sharing before identification ✓
    - Gap 25: Vishal offline state ✓
11. Export as standalone HTML.
12. Report completion.

---

## HOW TO USE THIS FILE IN CLAUDE DESIGN

**Step 1:** Go to claude.ai/design. Click "Set up design system." Upload DESIGN.md. Wait for design system to generate.

**Step 2:** Create a new prototype project. Name it "PixSlay Interactive Prototype."

**Step 3:** In the chat — paste CONTEXT.md content first. Say: "Read this product context before building anything."

**Step 4:** Paste the MASTER INSTRUCTION section from this file. Say: "These are your building rules. Confirm you understand."

**Step 5:** Paste STEP 1 (shared components). Say: "Build these shared components first. Do not start screens until components are ready."

**Step 6:** Paste STEP 2 (Screen 0). Build and verify.

**Step 7:** Paste STEP 3 (Varun's journey) in full. Say: "Build Varun's complete journey now. After building — navigate every screen yourself and report any gaps before proceeding."

**Step 8:** After Varun is verified — paste STEP 4 (Beulah). And so on.

**Step 9:** After all journeys complete — export as standalone HTML.

**Step 10:** Go to vercel.com. Click "Add New." Drag and drop the HTML file. Get your live URL. Share it.

Before building any screen:
1. You have loaded DESIGN.md as the design system. Every colour, font, spacing, component follows it exactly.
2. You have read CONTEXT.md and understand the product, the event, and the five users.
3. Build shared components first. Then build each journey in order.
4. After completing each journey — navigate every screen yourself. Verify no dead ends. Verify every button has an action. Report gaps before proceeding.
5. Reuse components across journeys. Do not rebuild registration, OTP, nav bar, face chips, bottom sheets, toasts, photo grid, or action sheets for each journey.
6. Every screen has a Switch Journey pill — top center, above status bar, white background, blue border, text "Switch journey" 10px — tapping returns to Screen 0 entry point.
7. This prototype will be exported as standalone HTML and hosted on Vercel. Optimise accordingly.

---

## STEP 1 — BUILD SHARED COMPONENT LIBRARY

Build these components as reusable elements before any screens:

- Phone registration screen template (floating label, phone field, continue button)
- OTP verification screen template (6 boxes, auto-advance, auto-submit)
- Profile setup screen template (avatar upload, name field, email field, continue)
- Bottom navigation bar (Home, FAB center, Profile — as specified in DESIGN.md)
- Face chip row (horizontal scroll, identified blue chips, unidentified grey chips)
- Filter bar (sticky category chips, expandable sub-chips, 200ms slide animation)
- Action tabs row (All, Shared, Received, Saved, Downloaded)
- Photo grid — My Photos version (3-column square, state markers)
- Photo grid — Group pool version (masonry mixed orientation, state markers)
- Share action sheet (PixSlay share + external share with app icons)
- Download bottom sheet (low-res free, hi-res ₹5, group subscription card)
- Standard popup (headline, copy, two buttons — destructive left, safe right)
- Toast notification (success green, alert coral, 3 second duration)
- Bottom sheet template (20px top radius, handle indicator, overlay)
- Top bar template (back arrow, title, right icons)
- Dummy photo set (34 flat vector illustrations for Karjat trip — see DESIGN.md photo specs)
- Scene-setter card template (context text + single CTA button)
- Switch Journey pill (top center every screen)
- Hotspot pulse (blue ripple on primary elements after 4 seconds inactivity)

---

## STEP 2 — SCREEN 0: ENTRY POINT

**Purpose:** Interactive simulation entry. User picks their role. Journey begins.

**Layout top to bottom:**
- Status bar (standard)
- Switch Journey pill (top center — on this screen it does nothing, already here)
- PixSlay logo — icon 28px + wordmark 22px 800 weight — centered, 60px from top
- "Interactive simulation" pill — #EEF2FD background, #0C447C text, 10px 600, radius 20px, centered
- Headline: "An overnight trip to Karjat. Five people. Five stories." — 22px 800 #1A1917 centered
- Subhead: "Pick someone and see PixSlay through their eyes." — 13px 400 #6B6864 centered
- Gap 24px
- Five user cards — full width minus 32px, 12px radius, border 0.5px #F0EEEB, padding 14px 16px

**Card contents (left to right):**
- Avatar circle 40px #1B4FD8 background, white initials 12px 700
- Name: 14px 600 #1A1917
- Description: 11px 400 #6B6864
- Chevron right: Lucide 'chevron-right' 16px #A8A49F

**Five cards:**
1. VR — Varun — "PixSlay user. Creates the group for the Karjat trip."
2. BE — Beulah — "New to PixSlay. Discovers it when her photos arrive Sunday morning."
3. KA — Kavitha — "New to PixSlay. Installs during the trip when Varun shows her."
4. MA — Mayank — "Existing PixSlay user. Joins the group automatically."
5. VI — Vishal — "New to PixSlay. Takes his time. Joins when Mayank nudges him."

**After completing a journey and returning here:**
- That user's card shows a green checkmark badge top-right corner
- Encourages trying other journeys

**Bottom:**
- Share Experience button — ghost style, Lucide 'share-2' icon left, text "Share this experience" 12px #A8A49F
- On tap: copies prototype URL to clipboard + opens native share sheet with message "Experience PixSlay before it launches — pick your role and see how it works."

**Card tap actions:**
- Varun → Scene-setter card V1 then Varun Screen 1
- Beulah → Scene-setter card B1 then Beulah Screen 1
- Kavitha → Kavitha Screen 1 (no scene-setter needed)
- Mayank → Scene-setter card M1 then Mayank Screen 1
- Vishal → Scene-setter card Vi1 then Vishal Screen 1

---

## STEP 3 — VARUN'S JOURNEY

### Varun Scene-setter V1
Context card. White screen. PixSlay logo centered top.
Text: "It's Friday evening. You're heading to Karjat with friends for the weekend. You want to make sure everyone gets their photos this time — no WhatsApp chaos."
Button: "Open PixSlay" → Varun Screen 1

### Varun Screen 1 — Phone Registration
- Logo centered. 60px from top.
- Headline: "Your photos from every gathering." 24px 800 #1A1917 left aligned 16px margin
- Subhead: "Start with your number. We'll send a quick code." 13px 400 #6B6864
- Phone field: floating label. Watermark "Your phone number". Floating title "Phone number". Pre-filled with "+91" in #A8A49F. Numeric keyboard auto-focus.
- Continue button: disabled until 10 digits entered. #1B4FD8 when active.
- Hint: "We'll send a one-time code to verify." 11px #A8A49F centered.
- Resume state: if returning mid-registration, phone field pre-filled, subtle text below "Welcome back. Continue where you left off."
- Back: toast "Tap back again to exit." Second back closes prototype journey, returns to Screen 0.
- Continue tap → Varun Screen 2

### Varun Screen 2 — OTP Verification
- Logo centered top.
- Headline: "Enter the code we sent you." 24px 800 left
- Confirmation: "Sent to " grey + "+91 98765 43210" #1A1917 500 — tapping this number returns to Screen 1 pre-filled
- 6 OTP boxes centered. Auto-advance. Auto-submit on 6th digit.
- Simulate correct OTP: any 6 digits → navigate to Screen 3
- Incorrect simulation: show shake animation, clear boxes, error "That code didn't work. Try again." 12px #E8490F
- OTP expired state: after 10 seconds of inactivity, show "That code has expired. We've sent you a fresh one." New OTP auto-sent, countdown resets.
- Resend countdown from 0:30. After 30s "Resend code" becomes tappable blue.
- Back → Screen 1 pre-filled.

### Varun Screen 3 — Profile Setup
- Progress dots: 3 dots, step 2 active as blue pill 18px wide 6px tall
- Headline: "What do we call you?" 24px 800 left
- Subhead: "Just the basics. You can always add more later." 13px 400 #6B6864
- Avatar upload circle: 72px, #EEF2FD background, 1.5px dashed #C7D4FB border, Lucide 'user' icon 24px #C7D4FB centered. Tap → dummy photo fills circle. Edit badge appears: 20px circle #1B4FD8 with 'camera' icon 10px white bottom-right. Tapping edit badge shows action sheet: "Change photo" and "Remove photo."
- Hint below avatar: "Add a photo so friends recognise you" 11px #A8A49F centered
- Name field: floating label. Watermark "What do we call you?" Floating title "Full name". Pre-filled with "Varun" for prototype.
- Email field: floating label. Watermark "Your email (optional)". Floating title "Email". Optional.
- Continue: disabled until name has 2+ chars. Active #1B4FD8.
- Back → Screen 2. OTP cleared.
- Continue → Varun Screen 4

### Varun Screen 4 — Empty Home
- Top bar: PixSlay logo left (icon 20px + wordmark 16px). Bell icon right Lucide 'bell' 22px #1A1917. No badge yet.
- Background: #F8F7F5
- Hero card: white, radius 16px, border 0.5px #F0EEEB, padding 24px, full width minus 32px
  - Three stacked photo cards illustration: back #C7D4FB rotated -8deg, middle #EEF2FD rotated +5deg, front #1B4FD8 with PixSlay x icon white centered. Height 88px total.
  - Headline: "Your photos from every gathering. All in one place." 20px 800 #1A1917 centered
  - Subhead: "Start by creating a group for your next trip or outing." 13px 400 #6B6864 centered
- Create a group button: #1B4FD8, always active, 24px below hero card
- Hint: "Takes less than a minute." 11px #A8A49F centered 10px below button
- Bottom nav bar: Home active blue. FAB centered. Profile inactive grey.
- Bell tap: no action (empty state). Bell stays static.
- Create a group or FAB tap → Varun Screen 5
- Profile tab tap → Varun Profile Screen
- Back gesture: toast "Tap back again to exit."

### Varun Screen 5 — Create Group
- Top bar: back arrow #1B4FD8 left. "New group" title center. Empty right.
- Background: #FFFFFF. Scrollable.
- Cover photo circle: 56px at top center. Camera icon inside. Dashed border #C7D4FB. Optional. Tap → dummy photo fills circle.
- Group name field: floating label. Watermark "What are you calling this one?" Floating title "Group name". Auto-focus — keyboard opens. Pre-filled "Mumbai — Karjat" for prototype. Primary button activates when 1+ character.
- Destination field: floating label. Watermark "Where are you headed? (optional)". Floating title "Destination". Pre-filled "Karjat, Maharashtra".
- Date range: two fields side by side, 8px gap. From field pre-filled "Sat 24 May". To field pre-filled "Sun 25 May". Tap → native date picker. To date cannot be before From date — earlier dates greyed out.
- Accommodation field: floating label. Watermark "Resort, hotel or homestay (optional)". Floating title "Accommodation".
- Divider: 0.5px #F0EEEB full width.
- Section label: "Who's coming?" 11px 600 #A8A49F tracking 0.04em
- Contact chips row: horizontal scroll. 5 contacts: MA (Mayank — PixSlay user, blue x mark next to name), KA (Kavitha), BE (Beulah — "Invite via SMS" amber label), VI (Vishal — "Invite via SMS" amber), AN (Anand — "Invite via SMS" amber). Tap toggles selected (blue avatar + green checkmark badge) / unselected.
- Link card: #EEF2FD background, radius 10px, padding 12px 14px. Headline "Share a link instead" 12px 600 #0C447C. Sub "Anyone with this link can join the group." 11px #185FA5. Two buttons: "Copy link" #1B4FD8 filled. "Share on WhatsApp" white #1B4FD8 border. Copy link → toast "Link copied." WhatsApp → opens WhatsApp dummy with pre-filled message.
- Create group button: disabled when group name empty (#F0EEEB). Active #1B4FD8 as soon as 1+ character. Label "Create group".
- Back → Screen 4. No data saved.
- Create group (with friends selected) → Varun Screen 6
- Create group (no friends) → Varun Screen 6b Invite Friends

### Varun Screen 6 — Photo Sync
- Top bar: back arrow left. "Mumbai — Karjat" title center. Three-dot menu right.
- Background: #FFFFFF
- Sync status card: white, border 0.5px #F0EEEB, radius 16px, padding 20px, full width minus 32px
  - Headline: "Finding your Karjat photos." 16px 700 #1A1917
  - Subtext: "We're looking at Sat 24 May 8:00am to Sun 25 May 6:00pm." 13px 400 #6B6864
  - Progress bar track: full width minus 40px, height 4px, #EEF2FD, radius 2px
  - Progress bar fill: #1B4FD8, animates from 0% to 100% over 3 seconds
  - Scanning label right-aligned below bar: "Scanning 847 photos..." count increments during animation
  - Connection lost simulation: after 1.5 seconds, progress pauses at 60%. Amber banner appears below card: "Waiting for connection. Sync will resume automatically." After 1 second, connection "restored", progress continues to 100%.
  - Results row (appears at 100%): three items equal width centered.
    - "34" 20px 800 #1A1917 / "Photos found" 11px #6B6864
    - "2" 20px 800 / "Videos found" 11px #6B6864
    - "Sat 8am — Sun 6pm" 13px 600 / "Time window" 11px #6B6864
  - Divider then privacy line: "These are in your private space. Nobody can see them yet." 13px #6B6864 centered
- Gallery permission card (show this — Varun is new user): #EEF2FD, radius 12px, padding 14px. Icon Lucide 'image' 20px #1B4FD8 left. Text "Allow access to your photos to sync automatically." 13px 500 #0C447C. "Allow" button right 11px 600 #1B4FD8. Tap Allow → permission granted, card dismisses, sync begins.
- "View my photos" button: disabled (grey) during progress. Activates at 100%.
- "I'll do this later" ghost button below.
- Three-dot menu tap → bottom sheet: "Edit group" / "Share invite link" / "Delete group". Delete group → standard popup: "Everyone loses access to Mumbai — Karjat." Copy: "34 photos and all memories from this trip will no longer be shared." CTAs: "Delete group" coral — "Keep the group" blue.
- View my photos → Varun Screen 7
- I'll do this later → Varun Screen 4 with group card visible
- Back → Varun Screen 4, sync continues

### Varun Screen 6b — Invite Friends (if no friends selected in Screen 5)
- Top bar: back arrow. "Add people" title.
- Selected count bar: #EEF2FD, radius 10px. "0 people invited" left. Empty avatars right.
- Search bar: #F8F7F5, radius 10px, height 40px, Lucide 'search' icon left, placeholder "Search contacts".
- Contact list (alphabetical, 48px each):
  - Anand — "Invite via SMS" amber label — checkbox right
  - Beulah — "Invite via SMS" amber — checkbox
  - Kavitha — unselected initially — checkbox
  - Mayank — blue PixSlay x mark (already on PixSlay) — checkbox
  - Rey — "Invite via SMS" amber — checkbox
  - Vishal — "Invite via SMS" amber — checkbox
- Non-PixSlay contacts: amber "Invite via SMS" 11px below name. Get SMS link on invite.
- PixSlay contacts: small blue x mark 12px right of name. Get in-app notification.
- Tap contact → selects. Avatar turns blue. Checkbox fills #1B4FD8. Count bar updates dynamically.
- Link card: same as Screen 5.
- Done button: "Done — invite X people" dynamic label. Disabled at 0 selected.
- Back → Screen 5, selections preserved.
- Done → Varun Screen 6

### Varun Screen 7 — Tagging and Sharing (My Photos)
- Background: #F8F7F5
- Top bar: back arrow left. "Mumbai — Karjat" center. Search icon + three-dot menu right.
- Face chips row: horizontal scroll, 16px left padding, 8px gap.
  - First chip: "VR — You" blue identified chip
  - Then: unidentified grey chips with '?' and counts: "?" 14 photos, "?" 9 photos, "?" 7 photos, "?" 6 photos
- Filter bar below chips:
  - Category chips: People, Scene, Format, Time
  - Tapping People: face chips row slides in below as sub-filters (same face chips)
  - Tapping Scene: Beach, Food, Night out, Group shot, Selfie, Outdoors, Bonfire, Waterfall, Starry sky
  - Tapping Format: Selfie, Group shot, Portrait, Landscape, Video
  - Tapping Time: Morning, Afternoon, Evening, Night, Day 1 (Sat), Day 2 (Sun)
  - Photo grid reflowing on any filter selection, non-matching fade to 20% opacity
- Action tabs: All | Shared | Received | Saved | Downloaded. All active by default.
- Photo grid: 34 dummy flat vector photos. My Photos tab = 3-column square grid.
- Moment A trigger: immediately on first open. Dark overlay rises. Bottom sheet slides up.
  - Sheet headline: "Which one is you?" 20px 800 #1A1917
  - Sheet sub: "Tap your face so we know who you are." 13px #6B6864
  - Face grid: 3 columns, 72px square chips, cropped dummy face circles from illustration photos
  - Tap a face: blue border 2px + checkmark badge appears. "That's me" activates.
  - "That's me" button: #1B4FD8, disabled until face tapped
  - "Skip for now" ghost: same size same weight as primary
  - That's me tap: overlay dismisses. VR chip confirmed. Proceed to Moment B after 1 second.
  - Skip tap: overlay dismisses. VR chip stays grey '?'. Will ask once more next open.
- Moment B trigger: 3 seconds after Moment A (simulate the 8-10 second browsing). Partial bottom sheet rises (60% height).
  - Face display: 96px circle, dummy face illustration, centered
  - Count: "This person appears in 9 of your photos." 13px #6B6864
  - Name input: floating label. Watermark "Who is this?" Floating title "Name". Auto-focused.
  - Suggestions row: MA, KA, BE, VI, AN chips — tap fills name field
  - "Confirm" #1B4FD8 50px, disabled until name entered
  - "Skip" ghost 44px, same size same weight — app never guilt-trips
  - Confirm → chip turns blue with name, next face shown after 1 second pause
  - Skip → stays grey, next face
  - All done → sheet dismisses
- Long press chip to edit: action sheet "Edit name" / "Remove identification"
- Moment C — selection mode: long press any photo → haptic feedback simulation (brief scale), checkboxes appear on all photos, top bar shows "X photos selected" with Cancel right.
  - Cross-tab selection: if tab tapped during selection → bottom sheet "Share selected photos" primary / "Switch tabs and clear selection" ghost
  - Share FAB: 52px circle #1B4FD8, Lucide 'share-2' 22px white, bottom-right above nav bar, appears when 1+ selected
  - Share FAB tap → share action sheet rises
    - Section label: "Share selected X photos with..." 11px 600 #A8A49F
    - Row 1: Lucide 'users' blue left. "Everyone in Mumbai — Karjat" 14px 500. "All 6 members will see these" 12px #6B6864. Chevron right.
    - Row 2: Lucide 'user' blue. "Choose specific people" 14px 500. "Only they will see these." 12px. Chevron.
    - Divider
    - Row 3: Lucide 'download' grey. "Download" 14px.
    - Row 4: Lucide 'bookmark' grey. "Save to PixSlay" 14px.
    - Divider
    - Row 5: Lucide 'trash-2' #E8490F. "Remove from my photos" 14px #E8490F.
  - Share to everyone: green toast "Shared with everyone." Checkmark marker on photos.
  - Share to specific people: sub-sheet with identified face chips as pills. "Share with [names]" dynamic blue button. On share → toast "Sent to Mayank and Kavitha." Person marker on photos.
  - External share prompt after PixSlay share: "Share outside PixSlay too?" Row of app icons: WhatsApp green, Instagram gradient, Copy link blue. PixSlay watermark note shown.
  - Download → download sheet: low-res free, hi-res ₹5 amber, group sub card #EEF2FD
  - Save to PixSlay → green dot marker, toast "Saved to PixSlay."
  - Remove from my photos → popup: "This photo will be gone from your Karjat album." Copy: "Others who received it will still have their copy." CTAs: "Remove it" coral — "Keep it" blue.
- No faces detected edge case: chips row shows grey chip with camera icon. Message: "Tag people manually by tapping any photo."
- Full screen photo: tap any photo → Varun Screen 8
- Bottom nav: Home tab, FAB, Profile tab all tappable

### Varun Screen 8 — Full Screen Photo View
- Photo fills screen edge to edge. Radius 0.
- Top bar (transparent over photo): back arrow white left. "4 of 34" white center. Three-dot menu white right.
- Attribution: "Taken by Varun" 11px #FFFFFF 70% opacity, above bottom bar
- Face chips of people in this photo: horizontal row just above attribution. Tappable — tap navigates back to grid filtered by that face.
- Bottom action bar: white 56px strip
  - Download: Lucide 'download' 22px #6B6864 — tap → download sheet
  - Bookmark: Lucide 'bookmark' 22px #6B6864 — tap → saves, icon turns #0F9E6E filled
  - Share: Lucide 'share-2' 22px #1B4FD8 (primary, most prominent) — tap → share action sheet
  - More: Lucide 'more-horizontal' 22px #1A1917 — tap → action sheet: "Remove from my photos" #E8490F, "Report", "Photo info"
- Photo info tap: bottom sheet showing file size "4.2 MB", dimensions "4032 x 3024", taken by "Varun", timestamp "Sat 24 May, 3:42 PM"
- Swipe left/right: navigate to next/previous photo within current filter
- Double tap: zoom 2x. Double tap again: return to normal.
- Video photos: play button overlay centered. Tap plays (simulate with animated scrubber). Mute toggle top-right. Scrubber bar above action bar.
- Back → returns to photo grid at same scroll position

### Varun Home with Events (after creating group)
- Same as Screen 4 but with content
- Karjat event card: cover photo background, "Mumbai — Karjat" bold white over photo, "Sat 24 May — Sun 25 May" below, 6 member avatars stacked (max 5 + count), "34 photos" bottom-left, green "LIVE" dot top-right (trip is active)
- Bell badge: 1 notification. Tap → notification bottom sheet
  - Row 1: Mayank avatar. "Mayank just joined Mumbai — Karjat." "2m ago". Tap → enters Karjat event.
  - Row 2: System. "Your Karjat photos are ready to view." "5m ago". Tap → enters event.
  - Row 3: Beulah avatar. "Beulah joined Mumbai — Karjat." "1h ago". Tap → enters event.
- If 5+ events: show 3 cards then "See all 12 events" blue link → Memories screen
- FAB: creates new group → Screen 5

### Varun Memories Screen
- Top bar: back arrow. "Memories" title. Search icon right.
- Search bar: auto-focused. Placeholder "Search trips, people, places..."
- Face chips of frequent people: Mayank, Kavitha, Beulah, Vishal, Anand. Tap filters results.
- Filter selectors: Location dropdown, Date range, Event type. Side by side below face chips.
- Results: Karjat Trip card (full width, prominent). Below: "More trips appear here as you create them." grey line.
- Karjat Trip card: cover photo, event name, dates, member avatars, photo count.
- One year memory banner (if applicable): "6 months ago — Mumbai — Karjat" with "Relive" CTA.
- Empty search: magnifying glass illustration. "No trips found. Try a different name or date."
- Tap result card → enters that event.

### Varun Profile Screen
- Top bar: back arrow. "Profile" title.
- Avatar: 72px circle. Current photo. Blue edit badge. Tap → photo picker or Remove.
- Name: "Varun" 18px 700. Tap → inline edit. Save on blur.
- Mobile: "+91 98765 43210" with pencil icon. Tap → OTP verification flow → update number.
- Email: "varun@email.com" with pencil icon. Tap → inline edit.
- DOB: "12 Mar 1990" with pencil icon. Tap → date picker.
- Divider
- Friends row: Lucide 'users' icon left. "Friends" label. Count right "5". Chevron. Tap → Friends list screen.
- My Events row: Lucide 'calendar' icon. "My Events". Count "2". Tap → Memories screen.
- Subscription row: Lucide 'star' icon. "Free plan". "Upgrade" blue label right. Tap → Subscription screen.
- Divider
- Notifications toggle: label left, iOS-style toggle right. Toggleable.
- Help row: tap → placeholder help screen.
- Logout row: Lucide 'log-out' #E8490F icon. "Log out" #E8490F text. Tap → popup: "You'll lose quick access to all your trips and photos until you log back in." CTAs: "Log out" coral — "Stay logged in" blue.
- No friends yet state: inline below Friends row — "No friends yet. They'll appear here after your first shared event."

### Varun Friends List Screen
- Top bar: back arrow. "Friends" title.
- Search bar.
- Each friend row: avatar left, name center, shared events count right "3 trips". Tap → Friend Profile screen.
- Friend Profile screen: avatar + name top. Below — list of shared events. Each event tappable → enters event filtered to that friend's photos.

### Varun Group Member List (from three-dot menu inside event)
- Bottom sheet rises.
- Title: "Members" 16px 700 #1A1917
- Each member row 48px:
  - Avatar left (36px circle)
  - Name center 13px 500
  - Upload count right 12px #6B6864 ("12 photos") or amber "0 photos" if none
  - For uninvited: "Invited" amber label. "Nudge" button right — tap → toast "Reminder sent to Vishal."
- Close handle at top.
- Tap member → enters event filtered to that member's photos.

### SELF-REVIEW CHECKPOINT — VARUN
After building all Varun screens:
Navigate every screen from Screen 0 → Varun entry → registration → OTP → profile → home → create group → sync → tagging (all 3 moments) → full screen photo → home with events → memories → profile → friends.
Verify: every button has an action. No dead ends. All 25 gaps addressed for Varun. Report findings.

---

## STEP 4 — BEULAH'S JOURNEY

### Beulah Scene-setter B1
Context card. White screen. PixSlay logo top.
Show a dummy WhatsApp chat interface:
- Chat header: Varun's avatar + "Varun" + green online dot
- Message bubble (grey, from Varun): "Check out these Karjat photos — your pics are already there! [PixSlay link]"
- Below bubble: tappable blue link card showing PixSlay icon + "pixslay.app/karjat-varun-beulah"
Text above chat: "It's Sunday morning. Varun just sent you this."
Button: "Tap the link" → Beulah Screen 1 (web preview)

### Beulah Screen 1 — Web Preview (browser experience)
- Simulate mobile browser. URL bar shows "pixslay.app/mumbai-karjat"
- White page. No app nav bar. No footer.
- PixSlay logo centered top. Small.
- Headline: "Varun and Kavitha shared 14 photos of you from Mumbai — Karjat." 20px 700 #1A1917 centered
- Subhead: "3 of them are right here." 13px #6B6864 centered
- Three photo thumbnails: 100px square each. Slightly blurred overlay. Warm vector illustrations with Beulah's face chip visible. Horizontal row centered.
- "See all 14 photos" button: #1B4FD8, 50px height, full width minus 32px
- Tap: "Download PixSlay to see them all." App Store / Play Store button below.
- "Already have PixSlay?" ghost link below. Tap → "Open in PixSlay" button → skip to Beulah Screen 3
- Download PixSlay tap → Beulah Screen 2

### Beulah Screen 2 — Registration (Beulah version)
- PERSONALISED HEADLINE: "Varun and Kavitha shared 14 photos of you from Mumbai — Karjat." 22px 700 #1A1917 centered
- Three blurred photo previews below headline (same as web preview)
- "Sign up to see them all." 13px #6B6864 centered
- Phone field: floating label. Same as Varun's registration.
- Continue → OTP (same as Varun Screen 2)
- OTP → Beulah Screen 3 (skip profile setup for speed, or include minimal profile)
- Minimal profile: just name field. Avatar optional. "Skip for now" prominent.

### Beulah Screen 3 — Her Photos Waiting
- Skip empty home. Skip create group. Go directly here.
- One-time overlay: white card centered. "These are photos others took of you from Mumbai — Karjat. They're yours now." 15px 500 #1A1917. Dismiss button "Got it" #1B4FD8. Tap → overlay dismisses.
- Face identification: Moment A triggers — "Which one is you?" Beulah identifies herself.
- Then Moment B for others.
- Screen shows With Me tab active by default (not My Photos — Beulah has no uploads yet)
- 14 flat vector photos visible in masonry layout. All contain Beulah's face chip marker.
- Filter bar, action tabs, all functional same as Varun Screen 7.
- Full screen photo: same as Varun Screen 8 but attribution shows "Taken by Varun" or "Taken by Kavitha"
- Share button in full screen: Beulah can share externally. Same share sheet. PixSlay watermark applied.
- My Photos tab: empty state — "No photos yet. Add yours from the trip." with "Sync my photos" blue CTA.
- Sync my photos → gallery permission → sync screen → Beulah's photos appear

### SELF-REVIEW CHECKPOINT — BEULAH
Navigate Beulah's complete journey. Verify magic of receiving photos without asking is felt. Verify no dead ends.

---

## STEP 5 — MAYANK'S JOURNEY

### Mayank Scene-setter M1
Context card. White screen. PixSlay logo top.
Show a simulated phone notification:
- Dark notification banner at top (like iOS): PixSlay icon + "Mumbai — Karjat" + "Varun added you to the group. Your photos are syncing."
Text: "It's Saturday morning. Your phone was off during the trip planning last night. You woke up to this."
Button: "Tap the notification" → Mayank Screen 1

### Mayank Screen 1 — Home with Existing Events
- This is Mayank's home feed — he's an existing user
- Shows his PREVIOUS events (not Karjat yet showing prominently):
  - "Goa Trip — March 2025" card (past, slightly grey, no live dot) — 28 photos
  - "Office Lunch — April" card (past) — 12 photos
- NEW: Karjat banner at top: #EEF2FD background. "You were added to Mumbai — Karjat while you were away." Blue "View trip" CTA right.
- Bell badge: 1. Tap → notification: "Varun added you to Mumbai — Karjat. Sat 24 May." Tap → Mayank Screen 2.
- FAB: creates new group.

### Mayank Screen 2 — Karjat Event (Mayank's view)
- Enters event. His photos are syncing progressively.
- My Photos tab: slim 3px blue progress bar at very top of grid. "Syncing your Karjat photos — 60% complete" in grey 11px below bar.
- Photos appear progressively with stagger animation (3 appear, then 3 more, etc.)
- Progress bar disappears when complete. Toast: "All your Karjat photos are here."
- Face chips: "MA — You" already blue identified (returning user, globally registered). Other chips also identified from previous events.
- NO Moment A — Mayank is already identified globally.
- NO Moment B — other faces already known from previous events.
- Goes straight to browsing. Zero friction demonstrated clearly.
- All filter, selection, sharing functionality same as Varun.
- This contrast with Varun's journey demonstrates long-term product value.

### SELF-REVIEW CHECKPOINT — MAYANK
Verify zero friction demonstrated. Verify progressive sync shown. Verify existing events visible on home.

---

## STEP 6 — KAVITHA'S JOURNEY

### Kavitha Screen 1 — Mid-trip Install
- No scene-setter needed. Start directly at registration.
- Registration same as Varun but headline: "Your photos from every gathering." (organic — she heard about it from Varun in person)
- After OTP and profile → gallery permission asked immediately (she's joining an existing group)
- Gallery permission screen: #EEF2FD card. "Allow PixSlay to find your Karjat photos automatically." Allow / Not now.
- Allow → sync begins silently. She returns to the dinner. App collects photos in background.
- Home screen: Karjat event card appears with "Syncing..." indicator on card.
- Enters event → My Photos shows photos appearing progressively (same as Mayank progressive sync).
- With Me: photos Varun has shared with her already appear.
- Moment A triggers — identify herself.
- Moment B — identify others.
- Sharing before identification: "Choose specific people" option shows with grey overlay. Tap → "Identify people in your photos first. It takes less than a minute." "Identify now" blue CTA / "Skip" ghost.

### SELF-REVIEW CHECKPOINT — KAVITHA
Verify mid-trip install flow feels natural. Verify gallery permission asked at right moment.

---

## STEP 7 — VISHAL'S JOURNEY

### Vishal Scene-setter Vi1
Context card. White screen. PixSlay logo top.
Show dummy WhatsApp messages:
- From Varun (Saturday): "Bhai install PixSlay kar — sab photos wahan hain"
- From Mayank (Sunday): "Vishal seriously install kar — tera bhi bahut photos hain"
- Vishal (Sunday afternoon): "Ok ok installing now 😄"
Text: "It's Sunday afternoon. You finally gave in."
Button: "Tap the link" → Vishal Screen 1

### Vishal Screen 1 — Web Preview
- Same as Beulah Screen 1 but personalised:
- Headline: "Varun shared 8 photos of you from Mumbai — Karjat."
- Three blurred photos with Vishal's face chip.
- "See all 8 photos" button.
- Download PixSlay → registration

### Vishal Screen 2 — Registration
- Same flow as Beulah.
- After profile → straight to his 8 waiting photos.

### Vishal Screen 3 — His Photos Waiting
- Same as Beulah Screen 3.
- One-time overlay dismisses.
- 8 photos in With Me tab.
- Moment A — identify himself.
- Sync own photos offered — his 22 photos from the trip.
- Offline state: if simulated — show "You're offline. Your photos will be here when you reconnect." with grey waiting illustration.

### Nudge Screen (shown in Varun or Mayank journey as reference)
- Inside group member list — Vishal row shows "Invited" amber. "Nudge" button.
- Tap Nudge → toast "Reminder sent to Vishal."
- This is how Vishal received the nudge from Mayank — demonstrate in Mayank's journey.

### SELF-REVIEW CHECKPOINT — VISHAL
Verify delay and nudge concept communicated through scene-setter. Verify same magic moment as Beulah.

---

## STEP 8 — FINAL REVIEW

After all five journeys are built:

1. Navigate Screen 0. Verify all 5 cards present with correct descriptions.
2. Complete Varun's full journey. Return to Screen 0. Verify green checkmark on Varun's card.
3. Complete Beulah's journey. Verify green checkmark.
4. Complete Mayank's journey. Verify green checkmark.
5. Complete Kavitha's journey. Verify green checkmark.
6. Complete Vishal's journey. Verify green checkmark.
7. Verify Switch Journey pill present and functional on every screen.
8. Verify Share Experience button on Screen 0 works.
9. Verify no dead ends across any journey.
10. Verify all 25 gaps addressed:
    - Gap 1: Resume mid-registration ✓
    - Gap 2: OTP expired state ✓
    - Gap 3: Remove avatar option ✓
    - Gap 4: Back gesture on home ✓
    - Gap 5: Date validation ✓
    - Gap 6: Cover photo for group ✓
    - Gap 7: PixSlay vs non-PixSlay contacts ✓
    - Gap 8: Internet lost during sync ✓
    - Gap 9: No faces detected ✓
    - Gap 10: Wrong face identification correction ✓
    - Gap 11: Cross-tab selection conflict ✓
    - Gap 12: Video in full screen ✓
    - Gap 13: More than 5 events on home ✓
    - Gap 14: Empty search state ✓
    - Gap 15: Memories with one event ✓
    - Gap 16: Friend tapping to relationship view ✓
    - Gap 17: Zero photos member indicator ✓
    - Gap 18: Adaptive memory heading ✓
    - Gap 19: Beulah deep link if PixSlay installed ✓
    - Gap 20: Existing user Beulah skip to login ✓
    - Gap 21: Beulah external share ✓
    - Gap 22: Mayank phone off scenario ✓
    - Gap 23: Mayank progressive sync ✓
    - Gap 24: Kavitha sharing before identification ✓
    - Gap 25: Vishal offline state ✓
11. Export as standalone HTML.
12. Report completion.

---

## HOW TO USE THIS FILE IN CLAUDE DESIGN

**Step 1:** Go to claude.ai/design. Click "Set up design system." Upload DESIGN.md. Wait for design system to generate.

**Step 2:** Create a new prototype project. Name it "PixSlay Interactive Prototype."

**Step 3:** In the chat — paste CONTEXT.md content first. Say: "Read this product context before building anything."

**Step 4:** Paste the MASTER INSTRUCTION section from this file. Say: "These are your building rules. Confirm you understand."

**Step 5:** Paste STEP 1 (shared components). Say: "Build these shared components first. Do not start screens until components are ready."

**Step 6:** Paste STEP 2 (Screen 0). Build and verify.

**Step 7:** Paste STEP 3 (Varun's journey) in full. Say: "Build Varun's complete journey now. After building — navigate every screen yourself and report any gaps before proceeding."

**Step 8:** After Varun is verified — paste STEP 4 (Beulah). And so on.

**Step 9:** After all journeys complete — export as standalone HTML.

**Step 10:** Go to vercel.com. Click "Add New." Drag and drop the HTML file. Get your live URL. Share it.
