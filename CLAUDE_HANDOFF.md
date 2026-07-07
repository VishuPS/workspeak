# WorkSpeak Claude Handoff

## Project

WorkSpeak is a web-app MVP for spoken workplace English practice. It is aimed at working adults who need confidence for practical job situations such as asking for leave, speaking to customers, explaining delays, reporting problems, and answering interview questions.

The product direction is intentionally practical and non-school-like: short role-play rehearsals, simple feedback, saved useful phrases, and progress tracking.

## Access

- Local workspace: `C:\Users\vsoor\OneDrive\Documents\APP`
- GitHub repo: `https://github.com/VishuPS/workspeak`
- Current branch: `master`
- Current latest commit: `0d7acde Add local profile login`
- Previous commit: `24ba2cd Initial WorkSpeak web app`
- Expected GitHub Pages URL after Pages is enabled: `https://vishups.github.io/workspeak/`

Do not share GitHub tokens or personal access tokens in chat. If Claude needs GitHub access, use the repository URL and authenticate locally through GitHub CLI or the GitHub website.

## Current Status

The app is a static, deployable web app. It has no backend and no build step.

It can run locally by opening:

```text
file:///C:/Users/vsoor/OneDrive/Documents/APP/index.html
```

Or by starting a local server:

```powershell
.\start-workspeak-server.bat
```

Then open:

```text
http://127.0.0.1:4173
```

## Files

- `index.html` - app shell, login view, practice/progress/phrases views
- `styles.css` - responsive UI styling
- `app.js` - role-play content, app state, local login, progress, speech features
- `manifest.webmanifest` - PWA manifest
- `sw.js` - service worker cache
- `icon.svg` - app icon
- `_headers` - Cloudflare-style static headers for later hosting
- `package.json` - minimal metadata and local start command
- `start-workspeak-server.bat` - Windows local server launcher
- `README.md` - project usage and deployment notes

## Features Built

- Mobile-first web-app UI
- Practice, Phrases, and Progress sections
- Workplace role-play scenario cards
- Job type selection
- Confidence goal selection
- Scripted conversation flow
- Text-to-speech for app/role replies
- Browser speech-to-text where supported
- Mic support messaging for unsupported browsers, permissions, and non-HTTPS contexts
- Simple feedback after each reply
- Better/polite sentence suggestions
- Saved useful phrases
- Local profile login with name + 4-digit PIN
- Separate progress, phrases, and last scene per local profile
- PWA manifest and service worker
- GitHub repository created and pushed

## Current Role-Play Scenarios

1. Ask your manager for one day leave
2. Talk to a customer politely
3. Explain a delay
4. Ask a coworker for help
5. Report a problem at work
6. Answer interview questions
7. Handle a complaint
8. Ask about salary or shift timing
9. Call someone for work updates

## Important Limitations

- Login is not real cloud authentication.
- The current profile system stores data only in browser `localStorage`.
- Progress does not sync across devices.
- PINs are stored locally and are not secure.
- Speech recognition depends on browser support.
- Mic works best in Chrome or Edge on `https://` or `localhost`.
- Fully AI-powered conversation is not implemented yet.
- Conversations are scripted.

## GitHub Pages Deployment

The repo is already pushed to GitHub. To deploy via GitHub Pages:

1. Open `https://github.com/VishuPS/workspeak`
2. Go to Settings
3. Go to Pages
4. Source: Deploy from a branch
5. Branch: `master`
6. Folder: `/root`
7. Save

Expected live URL:

```text
https://vishups.github.io/workspeak/
```

If Pages does not appear for the repo, make the repository public first.

## Recommended Next Work

1. Enable GitHub Pages and verify the live URL.
2. Test mic behavior on the live HTTPS URL in Chrome/Edge.
3. Add more scripted conversations, especially by job type.
4. Improve progress analytics:
   - scenes completed
   - repeated practice count
   - saved phrases by scenario
   - daily/weekly streak
5. Replace local-only login with real auth when ready:
   - Supabase Auth is a good fit
   - Firebase Auth is also possible
6. Add a simple backend/database for synced progress.
7. Later, add AI role-play after scripted flows are validated with users.

## Suggested Prompt For Claude

```text
You are taking over the WorkSpeak project.

Repo: https://github.com/VishuPS/workspeak
Local path: C:\Users\vsoor\OneDrive\Documents\APP

WorkSpeak is a static web-app MVP for workplace English role-play practice. It helps working adults rehearse real work conversations like asking for leave, talking to customers, explaining delays, interviews, complaints, and salary/shift questions.

Current stack:
- Plain HTML/CSS/JavaScript
- Static hosting ready
- PWA manifest and service worker
- LocalStorage profile login
- No backend yet

Latest commit:
- 0d7acde Add local profile login

Important context:
- Login is currently local-only using name + 4-digit PIN.
- It separates saved phrases and progress per browser profile.
- It is not secure cloud auth yet.
- Speech recognition depends on browser support and works best on HTTPS or localhost.

Immediate next tasks:
1. Help deploy and verify GitHub Pages from branch master/root.
2. Test the live HTTPS URL, especially microphone behavior.
3. Improve the app with more scripted role-play conversations.
4. Later, plan real auth and synced progress using Supabase or Firebase.

Please inspect the repo before making changes and keep the product tone practical, respectful, and confidence-building.
```
