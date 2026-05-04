[CONTEXT.md](https://github.com/user-attachments/files/27370855/CONTEXT.md)
# PixSlay — CONTEXT.md
*Product context for Claude Design. Read this before building any screens.*

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

## The Event

**This prototype is built around one event:**
Mumbai to Karjat — Overnight trip
Saturday 24 May 8:00am → Sunday 25 May 6:00pm
Group: Varun, Beulah, Kavitha, Mayank, Anand, Vishal
34 photos. 2 videos. Mixed scenes — forest, waterfall, bonfire, lakeside, starry sky, group shots.

---

## The Five Users

### Varun — The Initiator
Already has PixSlay. Creates the Mumbai — Karjat group. Invites friends. His photos sync automatically. He identifies faces. He shares selectively. His job is done before he sleeps.
**Journey type:** Full new user → group creator → tagger → sharer

### Beulah — The Surprised Recipient
Does not have PixSlay. Receives a personalised WhatsApp link Sunday morning — "Varun and Kavitha shared 14 photos of you from Mumbai — Karjat." Installs because her photos are already waiting. Experiences the magic of receiving without asking.
**Journey type:** Link recipient → new install → straight to waiting photos

### Kavitha — The Enthusiastic Early Adopter
Installs during the trip itself after Varun mentions it at the bonfire. Gallery permission granted immediately. Photos sync silently while she continues enjoying the trip. Returns home to find everything organised.
**Journey type:** Mid-trip install → sync → identify → receive

### Mayank — The Returning User
Already on PixSlay from a previous event. His face is globally registered. Gets an in-app notification. Opens app. Karjat event already on his home feed. His photos syncing in background. Zero friction. Zero setup.
**Journey type:** Existing user → notification → event appears → photos already there

### Vishal — The Reluctant Late Adopter
Receives the link. Delays installing. Gets nudged by Mayank inside the app. Finally installs. His photos were waiting all along. His experience is identical to Beulah's magic moment — just delayed.
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

The prototype covers five complete user journeys. Each journey is accessible from the entry screen by selecting the corresponding user card.

---

## Technical Notes for Claude Design

**Framework:** HTML/CSS/JS single file output preferred for easy sharing.
**Font:** Plus Jakarta Sans from Google Fonts — import in every screen.
**Icons:** Lucide icons — outlined style, 1.5px stroke, 20-22px size.
**Photos:** Flat vector illustrations in warm colours — group of people scenes, nature, food, night sky. Not real photographs.
**Sharing:** Final output should be exportable as standalone HTML uploadable to Vercel Drop for instant live URL.
**Performance:** Optimise for mobile browser. All interactions should feel instant.
