---
title: "Espanso"
---

[Espanso](https://espanso.org/) replaced my previous text expander within [Obsidian](/knowledge/software/obsidian/) after it stopped working:

- I found it to be the most reasonable and lightweight option, and it stores some clipboard snippets
- My public config is shared at [my-espanso-config](https://github.com/pyxelr/my-espanso-config)
- I can quickly sync my Espanso config with backup (`;ez`) and download (`;eu`)

My setup:

- Windows
  - Use: `search_shortcut: ALT+SHIFT+SPACE`
  - Also set `backend: inject` to omit [this space issue](https://github.com/espanso/espanso/issues/2130)
- macOS
  - Use: `search_shortcut: CMD+SHIFT+SPACE`

## 📃 Guides

### How to detect window title

Type `#detect#` while focusing on any app, like Obsidian, to get an Espanso pop-up with `title`, `exec`, and `class` so that it can be used with [filters](https://espanso.org/docs/configuration/app-specific-configurations/#filters).

### How not to convert characters on expand

For example, to prevent Obsidian from converting `""` into `“”`, you can either:

- Turn off the setting in the "Smart Typography" plugin
- Change [backend](https://espanso.org/docs/configuration/options/#options-reference) option in `$CONFIG/config/default.yml` to `Clipboard`

### Using OS-specific filters

I tried using `filter_os: macos` and `filter_os: windows`, but it did not work as planned:

- `search_shortcut` has to be placed in `config/default.yml`, and this file cannot be made OS-specific. A potential solution is not to back it up ([Discord](https://discord.com/channels/884163483409731584/1013916990760554608/1437235845630263326))
- Having `config/macos.yml` does not let me keep other app-specific files like `config/obsidian.yml` as then `match/_obsidian.yml` does not work ([Discord](https://discord.com/channels/884163483409731584/1013916990760554608/1437255560390119474)). I would have to only keep `config/macos.yml` and `match/_macos.yml`
