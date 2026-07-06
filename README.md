# WorkSpeak

A deployable web-app MVP for workplace spoken English practice.

The product is built around short scripted role-play scenes so the experience feels like rehearsing real life, not studying for a test.

## What is included

- Job type selection
- Scenario cards for realistic workplace situations
- Scripted role-play conversation
- Browser speech-to-text where supported
- Text-to-speech app replies
- Simple feedback with better and more polite sentences
- Saved useful phrases with local storage
- Progress counters with local storage
- Local profile login with separate progress per user on the same device
- Offline-ready PWA files
- Mobile-first responsive layout

## Run

Open `index.html` in a browser.

Speech recognition works best in Chrome or Edge. Text-to-speech support depends on the browser and operating system voices.

## Install on Android

This prototype is now set up as an installable web app.

1. Open `index.html` in Chrome or Edge on Android.
2. Use the browser menu.
3. Tap **Add to Home screen** or **Install app**.

For a Play Store APK, the next step is creating a native Android project with Android Studio, Kotlin, Jetpack Compose, and the Android SDK.

## Share online

To share a real link with other people, deploy this folder to a static host. The planned host is Cloudflare Pages.

No build step is required. The entry file is `index.html`.

Recommended Cloudflare Pages settings:

- Framework preset: None
- Build command: leave empty
- Build output directory: `/`

## Mic support

Speech recognition is browser-dependent. It works best in Chrome or Edge on `https://` or `localhost`.

When opened as a local `file://` page, the mic may not work. Cloudflare Pages hosting should improve this because the app will run on HTTPS.

## Login support

The current login is an MVP profile system. It stores each user's progress in the browser's local storage using a profile name and 4-digit PIN.

This is useful for testing personal progress, but it is not secure cloud authentication. For real accounts across devices, add Supabase, Firebase, or another auth backend later.
