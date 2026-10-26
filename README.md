# Post (Instagram-like prop)

Built from Figma file jO4VrQnb9mAVd7SkmDKv9Y: frames "IG Posting 1" (2165:56), "IG Posting 2" (7:1308)
and "Sharing the post with others" (9:3013), all 523×847 (Fold folded screen).

Flow: post with editable caption → tap the caption box to type: the device's own keyboard opens and the caption box sits just above it,
with the photo shrinking to fit (like IG Posting 2; on a computer it uses the Figma spacing)
→ tap the blue arrow → shared screen. The X goes back to the post and restores the default caption for the next take.

URL options:
- `?text=...` replaces the default caption ("Jamme. Jamme. / Let’s go to the top")
- `?story=6` sets the seconds for the story progress bar
- `?screen=story` opens straight on the shared screen

The app opens in standalone mode so the device's real status bar (time, signal, battery) shows. There's no fake
status bar: the empty strip above the photo on the shared screen (55px in Figma) is left for it, and the post
header is kept clear of it.

Preview locally: `python3 -m http.server 5181` in this folder.
