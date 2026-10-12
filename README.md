# Jergcraftweb

Official website starter for **JergBuilder 1.0.1**, by Jergan Studio.

## Files
- `index.html` — website content and sections
- `style.css` — responsive layout and visual design
- `script.js` — mobile navigation and download button
- `assets/favicon.svg` — browser tab icon

## Run locally
Open this repository in VS Code and open `index.html` in a browser. You can also install the Live Server extension and choose **Open with Live Server**. No npm install or build step is needed.

## Connect the PC download
In `script.js`, find `const DOWNLOAD_URL = "";` and add the direct URL to your JergBuilder installer or ZIP file between the quotes. Until that is configured, the button shows a message instead of pretending the game is downloadable.

## Publish
This is a static website and can be hosted using GitHub Pages or another static host. Keep `index.html` at the site root.