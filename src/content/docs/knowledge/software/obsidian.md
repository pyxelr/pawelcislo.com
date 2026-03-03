---
title: "Obsidian"
tags:
  - "productivity"
  - "note-taking"
---

## Info

- [Obsidian](https://obsidian.md/) ← sync through [Obsidian Sync](https://obsidian.md/sync)
- Settings
  - UI: [Minimal](https://github.com/kepano/obsidian-minimal) with [Minimal Theme Settings](https://github.com/kepano/obsidian-minimal-settings) (`Flexoki` & `Dracula`)
    - or: `Default` theme or [Encore](https://github.com/maldonacho/obsidian-encore-theme)
  - Font: `Default`
  - Quick access to files: add the `files/` folder in the quick access of file explorer
- Tips
  - [Format your notes](https://help.obsidian.md/How+to/Format+your+notes)
  - [MathJax](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference) ← basic tutorial
  - [Pamela Wang](https://www.youtube.com/@PamelaWangMwaha/videos) ← YT channel
- [Obsidian Roundup](https://www.obsidianroundup.org/tag/roundup/) ← Obsidian news

## Plugins

- [Advanced Tables](https://github.com/tgrosinger/advanced-tables-obsidian)
- [Calendar](https://github.com/liamcain/obsidian-calendar-plugin) ← in options, change the "start week on" to Monday
- ~~[Collapse All](https://github.com/OfficerHalf/obsidian-collapse-all)~~ ← not needed after Obsidian 1.0 (it only adds expand option on individual folder levels)
- [Copy Block Link](https://github.com/mgmeyers/obsidian-copy-block-link)
- [Emoji Shortcodes](https://github.com/phibr0/obsidian-emoji-shortcodes) ← use it when "_Toggle icons while editing notes_" is turned off in Iconize settings ([info](https://github.com/FlorianWoelki/obsidian-iconize/issues/458#issuecomment-2065948645))
- [Execute Code](https://github.com/twibiral/obsidian-execute-code) ← execute code in a note
- [Filename Heading Sync](https://github.com/dvcrn/obsidian-filename-heading-sync)
- [Find orphaned files and broken links](https://github.com/Vinzent03/find-unlinked-files) ← find unlinked files (as attachments are not deleted when removing a page)
- [Iconize](https://github.com/FlorianWoelki/obsidian-iconize)
- [Importer](https://github.com/obsidianmd/obsidian-importer) ← import notes from other apps
- [Latex Suite](https://github.com/artisticat1/obsidian-latex-suite)
- [Linter](https://github.com/platers/obsidian-linter)
- [Natural Language Dates](https://github.com/argenos/nldates-obsidian) ← set up the plugin not to insert as links `[[]]`
- [Obsidian x Todoist](https://github.com/jamiebrynes7/obsidian-todoist-plugin) ← 2-way integration with Todoist
- [Quick Switcher++](https://github.com/darlal/obsidian-switcher-plus) ← disable `[CMD]`+`[O]` for Quick Switcher and set it for "Quick Switcher++ Standard Mode". Also, remove `Open quick switcher` from "Appearance" > "Ribbon menu configuration" settings. On [mobile](https://github.com/darlal/obsidian-switcher-plus/issues/222), change `New tab and mobile launcher options` to `Standard`
- [Recent Files](https://github.com/tgrosinger/recent-files-obsidian)
- [Smart Typography](https://github.com/mgmeyers/obsidian-smart-typography)
- [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) ← useful for modifying headings of the Minimal theme ([info](https://github.com/kepano/obsidian-minimal/issues/474)), etc.
- [Table of Contents](https://github.com/hipstersmoothie/obsidian-plugin-toc) ← useful to create ToC, e.g. before exporting a PDF
- [Templater](https://github.com/SilentVoid13/Templater)
- ~~[Text Snippets](https://github.com/ArianaKhit/text-snippets-obsidian)~~ ← replaced with [Espanso](/knowledge/software/espanso/)

## Hotkeys

Ideally, don't sync hotkeys between Windows and macOS devices, because Obsidian's way of mapping Windows to macOS keys doesn't always match my preference.

- file operations
  - `[CTRL/CMD]` + `[SHIFT]` + `[J]` ← open today's daily note
  - templates
    - `[CTRL/CMD]` + `[SHIFT]` + `[H]` ← templater: insert templater/event_filename.md
    - `[CTRL/CMD]` + `[SHIFT]` + `[M]` ← templater: insert templater/sprint_filename.md
    - `[CTRL/CMD]` + `[SHIFT]` + `[,]` ← templates: insert template
  - `[CTRL/CMD]` + `[SHIFT]` + `[DELETE]` ← delete current file (_however, maybe do not set it_)
- text edit
  - `[CTRL/CMD]` + `[Q]` ← toggle code
  - `[CTRL/CMD]` + `[SHIFT]` + `[B]` ← toggle highlight
  - `[CTRL/CMD]` + `[SHIFT]` + `[U/I]` ← toggle blockquote
  - `[CTRL/CMD]` + `[SHIFT]` + `[Y/U]` ← toggle strikethrough
  - `[CTRL/CMD]` + `[.]` ← toggle bullet list
  - `[CTRL/CMD]` + `[SHIFT]` + `[.]` ← toggle numbered list
  - `[CTRL/CMD]` + `[SHIFT]` + `[L]` ← linter: lint the current file
- table
  - `[CTRL]` + `[ENTER]` ← table: add row after (_you will need to disable hotkey for "Open link under cursor in new tab"_)
  - `[CTRL]` + `[SHIFT]` + `[ENTER]` ← table: add column after
  - `[CTRL]` + `[BACKSPACE]` ← table: delete row
  - `[CTRL]` + `[SHIFT]` + `[BACKSPACE]` ← table: delete column
  - `[CTRL/CMD]` + `[SHIFT]` + `[;]` ← advanced tables: format all tables in this file
  - `[ALT/CMD]` + `[SHIFT]` + `[ENTER]` ← advanced tables: insert row before current
- navigation
  - `[CTRL/CMD]` + `[ALT/OPT]` + `[↑]` ← move line up
  - `[CTRL/CMD]` + `[ALT/OPT]` + `[↓]` ← move line down
  - `[CTRL/CMD]` + `[ALT/OPT]` + `[Z]` ← fold all headings and lists
  - `[CTRL/CMD]` + `[ALT]` + `[SHIFT]` + `[Z]` ← unfold all headings and lists
  - `[CTRL/CMD]` + `[ALT/OPT]` + `` [`] `` ← toggle fold on the current line
  - `[CTRL/CMD]` + `[O]` ← Quick Switcher++: Open in Standard mode
- view
  - `[CTRL/CMD]` + `[E]` ← toggle reading view (_default Obsidian hotkey_)
  - `[CTRL/CMD]` + `[SHIFT]` + `[E]` ← toggle live preview/source mode
  - `[CTRL/CMD]` + `[SHIFT]` + `[P]` ← toggle right sidebar
  - `[CTRL/CMD]` + `[SHIFT]` + `[9]` ← toggle light/dark mode
  - `[CTRL/CMD]` + `[0]` ← reset zoom
  - `[CTRL/CMD]` + `[SHIFT/OPT]` + `[I]` ← developer tools

## Mobile app setup

### Increase font size

Set _Font size_ to `14`.

### Hide pictures from the mobile gallery app

1. Add `.nomedia` file in the vault folder
2. Restart the gallery app
   1. If it didn't help, restart the phone

### Two vaults on mobile

For some reason, two vaults may appear in the Obsidian mobile app - one auto-created with a capitalised name. Ideally, use the original lowercase one. Entering the auto-created one may trigger unnecessary file indexing.

## Other operations

### Changing vault sync region

You can check your sync region in _Settings_ > _Sync_ > _Copy debug info_, and then check [the list](https://help.obsidian.md/Obsidian+Sync/Security+and+privacy#I+have+sync-x+as+my+server.+Where+is+it+hosted%3F).

To switch to a different region (e.g. from US to Europe), you will only lose the sync history ([source](https://obsidian.md/blog/new-sync-plans/)):

1. Rename the existing vault (e.g. to `obsidian-vault-old`) via _Open another vault_ > (three dots) > _Rename vault_
2. [Create a new remote vault](https://help.obsidian.md/Obsidian+Sync/Set+up+Obsidian+Sync#Create+a+new+remote+vault) with the original name
3. _Open another vault_ > _Open vault from Obsidian Sync_ > connect and choose the original location > enter encryption password > hit `X` (not to start syncing yet)
4. Copy the content from the old vault folder to the new one
5. Open _Settings_ > _Community plugins_ > enable. Also, open _Settings_ > _Sync_ > turn on all options apart from _Hotkeys_ (useful when using multiple OSes; on mobile, consider disabling audio & video sync to save space) > close the window
6. Reopen the vault > _Settings_ > _Sync_ > _Resume_ to start syncing
7. Set up hotkeys if needed
8. Optionally, reorder the icon layout in properties view: outline, calendar, all properties, tags, backlinks, outgoing links
9. Repeat on other devices:
   1. Rename the previously existing vault (you may need to create a temporary vault as you cannot rename an opened one)
   2. _Open vault from Obsidian Sync_ > choose the vault, configure sync settings, restart Obsidian and resume syncing
   3. Set up hotkeys again if needed
   4. Delete the old vault (folder and remote vault)
