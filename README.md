# Post (Instagram-like prop)

Built from Figma file jO4VrQnb9mAVd7SkmDKv9Y: frames "IG Posting 1" (2165:56), "IG Posting 2" (7:1308)
and "Sharing the post with others" (9:3013), all 523×847 (Fold folded screen).

Flow: post with an empty caption box → tap the caption box to type: the device's own keyboard opens and the caption box sits just above it,
with the photo shrinking to fit (like IG Posting 2; on a computer it uses the Figma spacing)
→ tap the blue arrow → shared screen, shown as the last of 5 stories (four full bars, the fifth fills). The X goes back to the post and empties the caption for the next take.

URL options:
- `?text=...` pre-fills the caption (it starts empty)
- `?story=6` sets the seconds for the story progress bar
- `?screen=story` opens straight on the shared screen

Installed on Android, the app opens fullscreen (manifest display fullscreen, falling back to standalone), so the
browser UI and the system status bar are hidden; a swipe down from the top shows the status bar briefly. There's no
fake status bar: the strip above the photo on the shared screen (55px in Figma) stays empty, and if a status bar
does draw over the page, the post header is kept clear of it.

sw.js is a pass-through service worker (caches nothing). It's there so Chrome on Android installs a real app
instead of a home-screen shortcut that opens in a browser tab.

Preview locally: `python3 -m http.server 5181` in this folder.
