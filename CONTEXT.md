# PixSlay — CONTEXT.md
*Product context. Read this before building any screens.*

---

## What PixSlay Is

PixSlay is a mobile app for organised, event-based photo sharing. It is built around one central mechanic that no competitor offers: **tag-and-deliver.**

Upload your photos to the event. Tag the people in them. Each tagged person automatically receives exactly the photos they are in — directly, without asking, without scrolling, without chasing anyone.

**The one-liner:**
Photos have two origins — ones you click, ones others click of you. Google and Apple own the first. Nobody owns the second. PixSlay owns the second.

**The Splitwise parallel:**
In Splitwise, you get added to a group whether you spent or not — because your name is in someone else's expense. In PixSlay, you get added to a group whether you uploaded or not — because your face is in someone else's photo. You don't join because you chose to. You join because you were there.

---

## The Problem

Friday dinner. Eight friends. Sixty photos across five phones. Someone creates a WhatsApp group. Two people upload. Photos arrive compressed, buried under voice notes. Three weeks later — "can you send me that photo?" Twenty minutes of scrolling. Sometimes never sent.

The memory existed. The photo was taken. It was simply never delivered to the person it belonged to.

This is not a wedding problem. It happens after every social gathering where more than one person has a smartphone. The frustration is universal. No dedicated product has solved it.

---

## The Demo Event

**The prototype is built around one event:**
Iceland · Northern Lights trip
10 – 20 Aug 2025
Creator: Varun. 34 photos. Mixed scenes.

*(The original concept was designed around a Karjat overnight trip with 6 friends — Varun, Beulah, Kavitha, Mayank, Anand, Vishal. The Iceland trip is the current demo implementation.)*

---

## Active Journeys (v90)

Two journeys are live. Others are built and ready but commented out pending flow refinement.

### Varun — The Initiator ✅ ACTIVE
Already has PixSlay. Goes through full onboarding → registration → creates the Iceland group → syncs photos → tags faces → shares with the group.
**Journey type:** New user → group creator → tagger → sharer

### Anand — The Existing User ✅ ACTIVE
Already on PixSlay. Receives a WhatsApp invite. Lands directly on the album listing with the Group tab pre-opened.
**Journey type:** Existing user → receives invite → views group pool

---

## Planned Journeys (coming soon)

### Beulah — The Surprised Recipient
Does not have PixSlay. Receives a personalised link — "Varun and Kavitha shared 14 photos of you." Installs because her photos are already waiting. The magic of receiving without asking.
**Journey type:** Link recipient → new install → straight to waiting photos

### Kavitha — The Enthusiastic Early Adopter
Installs during the trip after Varun mentions it. Gallery permission granted immediately. Photos sync silently while she enjoys the trip.
**Journey type:** Mid-trip install → sync → identify → receive

### Mayank — The Returning User
Already on PixSlay from a previous event. Face globally registered. Opens app. Karjat event already on home feed. Zero friction. Zero setup.
**Journey type:** Existing user → notification → event appears → photos already there

### Vishal — The Reluctant Late Adopter
Receives the link. Delays. Gets nudged by Mayank. Finally installs. Photos were waiting all along.
**Journey type:** Link received → delayed → nudged → installs → photos waiting

---

## Core Philosophy

**Tech does the work. Human confirms.**
Never ask users to do what the app can figure out. Location + timestamp = automatic photo collection. Global face registry = automatic identification of returning users. The app asks only for confirmation — never for effort.

**Private by default.**
Every photo uploaded belongs to the uploader until they actively share it. Nothing visible to others until the uploader decides.

**Skip is always as prominent as confirm.**
The app never guilt-trips users. Skip buttons are always the same size, same weight, same prominence as confirm buttons.

**Never a dead end.**
Every screen has a back state. Every action has a success or error state. Every loading moment has a progress indicator.

---

## Revenue Model

**Free:** Unlimited uploads, unlimited low-res downloads, auto-delivery, view all shared photos.
**₹5 per photo:** Download in original full quality. Impulse-buy pricing — less than a cup of chai.
**₹149 small group subscription:** Unlimited hi-res for up to 50 people for one event.
**₹499 large event subscription:** Unlimited hi-res for up to 300 people. Weddings, corporate events.

---

## Prototype Purpose

This prototype is being shared with friends, potential investors, and early users to demonstrate the product concept before it is built. The goal is to make someone say — "I have lived this exact problem. I want this app."

Every person who experiences the prototype should be able to share it immediately with someone else. The Share Experience button on the entry screen makes this possible.

---

## Technical Notes

**Framework:** Single HTML file. No build step. No dependencies except Google Fonts.
**Font:** Plus Jakarta Sans from Google Fonts.
**Icons:** Inline SVG (Lucide-style). Outlined style, 1.5–2px stroke.
**Photos:** Real JPG photos in `/photos/` directory (k1.jpg – k19.JPG).
**Hosting:** Deployed via GitHub → Vercel auto-deploy on push.
**Performance:** Optimised for mobile browser. Service worker for offline support.
