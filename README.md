# Post (Instagram-like prop)

Built from Figma file jO4VrQnb9mAVd7SkmDKv9Y: frames "IG Posting 1" (2165:56), "IG Posting 2" (7:1308)
and "Sharing the post with others" (9:3013), all 523×847 (Fold folded screen).

Flow: post with editable caption → tap the caption box to type (photo shrinks, keyboard opens, like IG Posting 2)
→ tap the blue arrow → shared screen. The X goes back to the post and restores the default caption for the next take.

URL options:
- `?text=...` replaces the default caption ("Jamme. Jamme. / Let’s go to the top")
- `?kb=1` / `?kb=0` forces the Figma keyboard picture on or off while typing (default: shown only on non-touch screens)
- `?status=0` hides the fake status bar on the shared screen
- `?story=6` sets the seconds for the story progress bar
- `?screen=story` opens straight on the shared screen

Preview locally: `python3 -m http.server 5181` in this folder.
