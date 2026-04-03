---
title: "Anki"
tags:
  - "learning"
  - "productivity"
---

:::note
See also my [blog post about Anki](/posts/optimising-our-learning-retention-rate-with-srs-anki/).
:::

My setup of [Anki](https://apps.ankiweb.net/). My flashcard decks: [GitHub repo](https://github.com/pyxelr/my-anki-decks-of-flashcards)/[AnkiWeb directory](https://ankiweb.net/shared/by-author/11274685).

## 📰 Links

- [Anki scripting for non-programmers](https://www.juliensobczak.com/write/2020/12/26/anki-scripting-for-non-programmers.html)
- [Anki SRS algorithm](https://www.juliensobczak.com/inspect/2022/05/30/anki-srs.html) ← in-depth explanation of Anki's algorithm
- [Awesome Anki](https://github.com/tianshanghong/awesome-anki)
- [Data Science Anki decks](http://www.marknagelberg.com/anki/anki_webpage_loaded.html) ← from Mark Nagelberg
- [MCAT Behavioral Sciences Deck](https://www.reddit.com/r/AnkiMCAT/comments/fixv7e/mcat_behavioral_sciences_deck/) ← interesting psychology deck

## 🧰 Plugins

- [Add Hyperlink](https://ankiweb.net/shared/info/318752047) ← adds dialogue to enter hyperlinks in your cards
- [Add Table](https://ankiweb.net/shared/info/1237621971) ← add tables in your cards
- [Advanced Browser](https://ankiweb.net/shared/info/874215009) ← enhance options of the card browser
- **[Advanced Review Bottom Bar](https://ankiweb.net/shared/info/1136455830)** ← extend the options of your review bottom bar (button style: `Default + Background Color`)
- [Always On Top](https://ankiweb.net/shared/info/1760080335) ← add option to keep your Anki window always on top (useful when creating new cards)
- [Anki themes](https://github.com/badlydrawnrob/anki) ← Anki theme for programming snippets
- [Customize Keyboard Shortcuts](https://ankiweb.net/shared/info/24411424) ← if you're willing to modify any shortcuts
- [Deck name in title](https://ankiweb.net/shared/info/699175524) ← show the name of the deck you are currently studying, and the profile name
- [Fastbar](https://ankiweb.net/shared/info/46611790) ← improve the look of your card browser with better access to the most common functions
- **[Image Occlusion Enhanced](https://ankiweb.net/shared/info/1374772155)** ← create cards that hide parts of an image to test your knowledge of that hidden information (must have!)
- [Mini Format Pack](https://ankiweb.net/shared/info/295889520) ← extend formatting of your new cards
- [More Overview Stats 2.1](https://ankiweb.net/shared/info/738807903) ← even more statistics!
- [Progress Bar (Fixed by Shige)](https://ankiweb.net/shared/info/1708250053) ← adds a progress bar and estimated time to complete current reviews (make sure to apply the right config mentioned in the plugin description)
- **[Review Heatmap](https://ankiweb.net/shared/info/1771074083)** ← include heatmap graph to Anki's main window which visualises past and future card review activity, similar to the contribution view on GitHub
- [Show total review count in main screen](https://ankiweb.net/shared/info/1730200873) ← display the absolute review count in the main screen after the studied X cards after X time
- [Syntax Highlighting NG](https://ankiweb.net/shared/info/566351439) ← insert syntax-highlighted code snippets into your notes (replacement of [Syntax Highlighting for Code](https://ankiweb.net/shared/info/1463041493))

### Optional

- [AwesomeTTS (Google Cloud Text-to-Speech)](https://ankiweb.net/shared/info/814349176) ← add audio to your notes (recommended for creating language-based cards)
- [Frozen Fields](https://ankiweb.net/shared/info/516643804) ← introduce sticky and unsticky fields (useful when creating new cards)
- [Improved Quizlet to Anki 2.1 Importer](https://ankiweb.net/shared/info/538351043) ← not enough cards in the AnkiWeb repo? Import some of them from Quizlet
- [Kindle Highlights Import](https://ankiweb.net/shared/info/1525149970) ← import and study your highlights from the Kindle e-reader. Besides, have a look at [Fluentcards](https://fluentcards.com/kindle) to import the words of which you checked the definition
- [memrise2anki](https://github.com/wilddom/memrise2anki-extension) ← download and convert a course from Memrise into an Anki deck
- [More Decks Stats and Time Left](https://ankiweb.net/shared/info/1556734708) ← show extra information of the due cards and return the expected time to finalise (Due+New)
- [Puppy Reinforcement](https://ankiweb.net/shared/info/1722658993) ← intermittent reinforcement with cute puppies to encourage card review streaks
- [Reset Card Scheduling](https://ankiweb.net/shared/info/300884351) ← ever imported someone else's deck that contained scheduling information associated with cards?
- [True Retention by Card Maturity](https://ankiweb.net/shared/info/923360400) ← check your True Retention (pass rate calculated only among "_Review_" cards) and a few placebo stats by card maturity

### Modified/unofficial addons

1. Anjoy (costs $5 Patreon support of Glutanimate)
   - in the end, I prefer to use antimicro (Anjoy doesn't let me use it as a mouse)
   - [Patreon post](https://www.patreon.com/posts/anjoy-v0-1-0-1-28840417) (v0.1.0)
2. [antimicro](https://github.com/AntiMicro/antimicro)
3. Better Tags
   - [Patreon post](https://www.patreon.com/posts/bettertags-v1-0-36497547) (v1.0.6)
4. Visual Feedback
   - [beta](https://www.patreon.com/posts/visual-feedback-33559446) (v1.0.0-beta3)

### Old plugins

- Progress bar (replacement for [Remaining time](https://ankiweb.net/shared/info/1508357010) and then [Progress Bar original](https://ankiweb.net/shared/info/1685464019))
  - [official](https://ankiweb.net/shared/info/2091361802) (v1.3)
  - [beta](https://github.com/glutanimate/anki-addons-misc/tree/master/src/reviewer_progress_bar) (v2.0)
    - my changes:

      ```text
      showPercent = True  # Show the progress text percentage or not.
      showNumber = True  # Show the progress text as a fraction
      ```

      ```text
      maxWidth = "20px"  # (e.g. "5px". default: "")
      ```

      ```text
      qtxt = "aliceblue"  # Percentage color, if text visible.
      qbg = "#585858"  # Background color of progress bar.
      qfg = "#22b14c"  # Foreground color of progress bar.
      qbr = 8  # Border radius (> 0 for rounded corners).
      ```
