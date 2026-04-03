---
title: "VS Code"
description: My VS Code setup, extensions, keyboard shortcuts, and tips.
---

:::note
See also my [blog post about VS Code](/posts/my-vs-code-playground/).
:::

## 💻 My setup

- [My public gist setup](https://gist.github.com/pyxelr/760dac032d0427377ecc1bb195499d9b) ← share it by: "*Profiles (Default)*" > "*Export Profile…*" > (deselect "*UI State*" not to expose private stuff) > "*Local*" > copy the content and save in your gist
- 🎨 Theme
  - Default Dark or [Dracula Pro](https://github.com/dracula-pro/visual-studio-code/tree/main)
    - [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- ⌨ Font
  - Editor
    - Consolas
    - eventually [FiraCode](https://github.com/tonsky/FiraCode) + font ligatures
  - terminal font settings
    - download [JetBrainsMonoNerdFontMono-Regular.tff](https://www.jetbrains.com/lp/mono/)
    - add these lines to `settings.json`

   ```json
   "terminal.integrated.fontFamily": "JetBrainsMono Nerd Font Mono",
   "terminal.integrated.fontWeight": 350
   ```

- 🧹 Code formatting
  - add this to `settings.json`
    - `"editor.codeActionsOnSave": { "source.organizeImports": true },`
  - disable Pylint as it will conflict with flake8
  - add black args: `-l 99`
  - enable pytest
  - Editor: Render Whitespace ← you can access it in Settings
- 💡 Tips
  - type `code .` in terminal to open another VS Code
- ⌨ Keyboard shortcut change
  - not to conflict with Ditto and ConEmu
    - open ConEmu with `[ALT]` + ```[`]```
    - open Ditto with `[CTRL]` + ```[`]```
    - open VS Code terminal with `[CTRL]` + `[SHIFT]` + ```[`]```
      - also disable the creation of new terminal with this shortcut as it's done by default
- ⌨ [Keyboard shortcuts](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf) ← pdf (check also [my Anki Deck](https://ankiweb.net/shared/info/1549461506))
  - Interface
    - `[CTRL/CMD]` + `[SHIFT]` + `[P]` ← command palette
    - `[CTRL/CMD]` + `[B]` ← hide/unhide sidebar
    - `[CTRL]` + `[SHIFT]` + ```[`]``` ← open/focus on terminal
      - `[CTRL]` + ```[`]``` ← open/close terminal
    - `[CTRL/CMD]` + `[SHIFT]` + `[F]` ← find in files
    - `[CTRL/CMD]` + `[P]` ← go to file
    - `[CTRL/CMD]` + `[,]` ← open settings
    - `[CTRL/CMD]` + `[K]`, `[M]` ← change language mode
    - `[CTRL/CMD]` + `[SHIFT]` + `[-]` or `[+]` ← reset zoom
    - `[CTRL/CMD]` + `[SHIFT]` + `[0]` ← toggle between light/dark theme
    - `code .` ← typed in a terminal opens up a VS Code instance
  - Split mode
    - `[CTRL/CMD]` + `[\]` ← split mode
    - `[CTRL/CMD]` + `[1]` ← switch to editor group 1
    - `[ALT/OPT]`, `[V]` + `[L]` + `[S]` ← fold the split view into the single one
  - Code
    - `[CTRL/OPT]` + `[SPACE/ESC]` ← IntelliSense
    - `[CTRL/CMD]` + `[LMB]` ← go to the code definition
    - `[CTRL/CMD]` + `[/]` ← comment the line of code
    - `[SHIFT]` + `[ALT/OPT]` + `[F]` ← format code
    - `[CTRL/CMD]` + `[SHIFT/OPT]` + `[` or `]` ← fold/unfold line
      - `[CTRL/CMD]` + `[K]`, `[CTRL/CMD]` + `[0]` ← fold all regions
      - `[CTRL/CMD]` + `[K]`, `[CTRL/CMD]` + `[J]` ← unfold all regions
    - `[ALT/OPT]` + `[Z]` ← text wrap
    - `[F5]` ← initialise the debugger
    - `[F8]` ← jump between errors
    - `[F9]` ← set a breakpoint on the current line. Then hit `[F5]` to initialise the debugger
    - `[CTRL/CMD]` + `[F5]` ← run file in terminal
  - Manipulating
    - `[CTRL/CMD]` + `[D]` ← select the word your cursor is at
    - `[CTRL]` + `[F2]` (or `[CMD]` + `[SHIFT]` + `[L]`) ← select all instances of the word
    - `[SHIFT]` + `[esc]` ← exit multi-cursor mode
  - Navigating
    - `[ALT/OPT]` + `[↑/↓]` ← move line up/down
    - `[CTRL/CMD]` + `[ALT/OPT]` + `[↑/↓]` ← new cursor up/down the line
      - `[ALT/OPT]` + `[LMB]` ← place an extra cursor anywhere
    - `[CTRL/CMD]` + `[L]` ← select current line
    - `[CTRL/CMD]` + `[SHIFT]` + `[L]` ← select all occurrences of current selection
    - `[ALT/OPT]` + `[SHIFT]` + `[I]` ← put the cursor at the end of all selected lines (e.g. with `[CTRL/CMD]` + `[A]`). Afterwards, use `[HOME]` and `[END]` to move from start to end

## 📰 Links

- [23 lesser known VS Code Shortcuts as GIF](https://dev.to/devmount/23-lesser-known-vs-code-shortcuts-as-gif-80)
- [Awesome VS Code](https://github.com/viatsko/awesome-vscode)
- [code-server](https://github.com/cdr/code-server) ← run VS Code in the browser
- [Dockerize your Development Environment](https://www.youtube.com/watch?v=fPtGgOJykTM) ← 12:25 YT tutorial to dockerise VS Code
- [Run MySQL Database Queries From VS Code](https://www.youtube.com/watch?v=L1Iv7Voc5bY) ← simple 6:33 YouTube tutorial (XAMPP + VS Code extension)
- [Suping Up VS Code as a Markdown Notebook](https://kortina.nyc/essays/suping-up-vs-code-as-a-markdown-notebook/) ← how the author organised his note taking with VS Code
- [The Ultimate Guide To Use VS Code With Windows Subsystem for Linux (WSL)](https://dev.to/ajeet/the-ultimate-guide-to-use-vs-code-with-windows-subsystem-for-linux-wsl-51hc)
- [Tips for Visual Studio Code to be productive in 2018](https://medium.com/@i_AnkurBiswas/pro-tips-for-visual-studio-code-to-be-productive-in-2018-d5252e914561)
- [Visual Studio Code is designed to fracture](https://ghuntley.com/fracture/)
- [VSCodeThemes](https://vscodethemes.com/) ← preview VS Code themes
- [VS Code - Wtyczki i "tricki" jakie używam](https://www.youtube.com/watch?v=wWbYYkwkF1o) ← 10 min YouTube
- [VSCodium](https://vscodium.com/) ← free/libre open source software binaries of VSCode

## 🧰 Extensions/Tools

Also stored on my [GitHub list](https://github.com/stars/pyxelr/lists/vs-code).

- 🤖 **Code completion**
  - [Cline](https://github.com/cline/cline) ← coding agent that can use CLI and editor
  - [Cursor](https://github.com/getcursor/cursor) ← AI-powered code editor based on VS Code
  - [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) ← AI pair programmer
    - [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat) ← AI chat features powered by Copilot
  - [IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode) ← AI-assisted development
- 📊 **Data Science**
  - [DVC](https://marketplace.visualstudio.com/items?itemName=Iterative.dvc) ← machine learning experiment management with tracking, plots, and data versioning
- 🔨 **Debugging**
  - [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) ← easily run code snippets/files for multiple languages
  - [Debug visualiser](https://marketplace.visualstudio.com/items?itemName=hediet.debug-visualizer) ← extension for visualizing data structures while debugging. Like the VS Code's watch view, but with rich visualizations of the watched value
  - [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) ← improve highlighting of errors, warnings and other language diagnostics
  - [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) ← real browser preview inside your editor that you can debug
  - [Live Server (Five Server)](https://marketplace.visualstudio.com/items?itemName=yandeu.five-server) ← launch a development local Server with live reload feature for static & dynamic pages (better than [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer))
  - [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) ← REST Client for Visual Studio Code
  - [Slowbug](https://marketplace.visualstudio.com/items?itemName=srimukh.slowbug) ← debug (run) your code in slow motion to catch bugs
- ⭐ **Extra/Other**
  - [AWS Toolkit](https://marketplace.visualstudio.com/items?itemName=AmazonWebServices.aws-toolkit-vscode) ← after installing, make sure to log in to the right AWS role through AWS CLI, and then select the right AWS region in VS Code
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) ← spelling checker for source code
  - [Compare Folders](https://marketplace.visualstudio.com/items?itemName=moshfeu.compare-folders) ← compare folders by contents
  - [Git Worktree Manager](https://marketplace.visualstudio.com/items?itemName=jackiotyu.git-worktree-manager) ← Effortless multi-workspace management and fast Git project cloning across directories. Define "Worktree Subdirectory Template" as `$BASE_NAME.$REF_NAME`. I can also consider creating worktrees with `Git: Create Worktree…` ([info](https://github.com/jackiotyu/git-worktree-manager/issues/38))
  - [JWT Debugger](https://marketplace.visualstudio.com/items?itemName=yokawasa.jwt-debugger) ← JWT tokens decoder
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) ← live-edit (pair programming) a file collectively in your IDE
  - [Log File Highlighter](https://marketplace.visualstudio.com/items?itemName=emilast.LogFileHighlighter) ← specify custom words to be highlighted in the log files
  - [One File Export](https://marketplace.visualstudio.com/items?itemName=Husaria.one-file-export) ← combine multiple files into a single text block for easy copying or exporting (e.g. for AI prompting)
  - [Open Folder Context Menus for VS Code](https://marketplace.visualstudio.com/items?itemName=chrisdias.vscode-opennewinstance) ← add two new context menus to the Explorer
  - [Partial Diff](https://marketplace.visualstudio.com/items?itemName=ryu1kn.partial-diff) ← compare (diff) text selections within a file, across files, or to the clipboard
  - [Peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock) ← subtly change the workspace color of your workspace. Ideal when you have multiple VS Code instances and you want to quickly identify which is which
  - [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager) ← easily switch between projects
  - [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) ← replacement for Postman
  - ~~[Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) ← synchronize Settings, Snippets, Themes, File Icons, Launch, Keybindings, Workspaces and Extensions Across Multiple Machines Using GitHub Gist.~~ This feature is now built-in (Code/File > Preferences > Turn on Settings Sync...)
  - [Sort JSON objects](https://marketplace.visualstudio.com/items?itemName=richie5um2.vscode-sort-json) ← sort the keys within JSON objects
  - [vscode-base64](https://marketplace.visualstudio.com/items?itemName=adamhartford.vscode-base64) ← base64 encode/decode the current selections
  - [x509 parser](https://marketplace.visualstudio.com/items?itemName=jlcs-es.x509-parser) ← parse OpenSSL artifacts to human readable text (e.g. select crt and use "Parse x509 certificate")
  - [YAML Sort](https://marketplace.visualstudio.com/items?itemName=PascalReitermann93.vscode-yaml-sort) ← sort, format and validate yaml files
- 🐙 **Git**
  - [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) ← view a Git Graph of your repository, and perform Git actions from the graph
  - [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) ← view git log, file history, compare branches or commits
  - [GitLab Workflow](https://marketplace.visualstudio.com/items?itemName=GitLab.gitlab-workflow) ← integrate GitLab into VS Code
  - [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) ← git blame annotations and code lens
- 🟨 **JavaScript**
  - [D3.js Snippets](https://marketplace.visualstudio.com/items?itemName=hridoy.d3-js-snippets) ← d3.js development toolkit
  - [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets) ← code snippets for JavaScript in ES6 syntax
  - [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) ← interactive testing for JavaScript, TypeScript and more
- 👅 **Language support / Linter**
  - [AHK++ (AutoHotkey Plus Plus)](https://marketplace.visualstudio.com/items?itemName=mark-wiemer.vscode-autohotkey-plus-plus) ← AutoHotkey language support for VS Code
  - [Better Jinja](https://marketplace.visualstudio.com/items?itemName=samuelcolvin.jinjahtml) ← syntax highlighting for jinja(2) including HTML, Markdown, YAML, Ruby and LaTeX templates
  - [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) ([tutorial](https://code.visualstudio.com/docs/remote/containers)) ← create, manage, and debug containerized applications
  - [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) ← support for dotenv file syntax
  - [Even Better TOML](https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml) ← fully-featured TOML support
  - [HashiCorp Terraform](https://marketplace.visualstudio.com/items?itemName=HashiCorp.terraform) ← syntax highlighting and autocompletion for Terraform
  - [Helm Intellisense](https://marketplace.visualstudio.com/items?itemName=Tim-Koehler.helm-intellisense) ← Intellisense in helm-templates from the values.yaml
  - [Java in Visual Studio Code](https://code.visualstudio.com/docs/languages/java) ← installer to download all the Java components for you
  - [Kubernetes](https://marketplace.visualstudio.com/items?itemName=ms-kubernetes-tools.vscode-kubernetes-tools) ([tutorial](https://code.visualstudio.com/docs/azure/kubernetes)) ← develop, deploy and debug Kubernetes applications
  - [LTex](https://marketplace.visualstudio.com/items?itemName=valentjn.vscode-ltex) ← LanguageTool grammar/spell checking
  - [PostgreSQL](https://marketplace.visualstudio.com/items?itemName=ckolkman.vscode-postgres) ← PostgreSQL management tool
  - [R](https://marketplace.visualstudio.com/items?itemName=REditorSupport.r) ← R extension
  - [ShellCheck](https://marketplace.visualstudio.com/items?itemName=timonwong.shellcheck) ← integrates ShellCheck into VS Code, a linter for Shell scripts
  - [VimL (Vim Language, Vim Script)](https://marketplace.visualstudio.com/items?itemName=XadillaX.viml) ← Vim Script language support for VSCode
  - [VSCode Neovim](https://marketplace.visualstudio.com/items?itemName=asvetliakov.vscode-neovim) ← Vim-mode for VS Code using embedded Neovim
  - [YAML](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml) ← YAML Language Support by Red Hat, with built-in Kubernetes syntax support
- ✍ **Markdown**
  - [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) ← keyboard shortcuts, table of contents, auto preview and more
  - [Markdown Editor](https://marketplace.visualstudio.com/items?itemName=zaaack.markdown-editor) ← full-featured WYSIWYG editor for markdown
  - [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) ← markdown linting and style checking for Visual Studio Code
  - [Markdown Table](https://marketplace.visualstudio.com/items?itemName=TakumiI.markdowntable) ← add features to edit markdown table
  - [Markdown Shortcuts](https://marketplace.visualstudio.com/items?itemName=mdickin.markdown-shortcuts) ← generate Markdown syntax with shortcuts
- 🐍 **Python**
  - [AREPL for python](https://marketplace.visualstudio.com/items?itemName=almenon.arepl&fbclid=IwAR3KGOtWOoytn9pAEVHNTUp0EULbw0d_M05CSTcgJJTSY8ZjzX1nxtmuHaM) ← print code output in real time
  - [autoDocstring - Python Docstring Generator](https://marketplace.visualstudio.com/items?itemName=njpwerner.autodocstring) ← generate python docstrings automatically
  - [Black Formatter](https://marketplace.visualstudio.com/items?itemName=ms-python.black-formatter) ← formatting support for Python files
  - [Flake8](https://marketplace.visualstudio.com/items?itemName=ms-python.flake8) ← linting support for Python files (imho, better than [Pylint](https://marketplace.visualstudio.com/items?itemName=ms-python.pylint))
  - [isort](https://marketplace.visualstudio.com/items?itemName=ms-python.isort) ← import organization support for Python files
  - [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance) ← performant, feature-rich language server for Python in VS Code
  - [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) ← IntelliSense (Pylance), Linting, Debugging (multi-threaded, remote), Jupyter Notebooks, code formatting, refactoring, unit tests, and more
  - [Python Debugger](https://marketplace.visualstudio.com/items?itemName=ms-python.debugpy) ← Python Debugger using debugpy
  - [Python Indent](https://marketplace.visualstudio.com/items?itemName=KevinRose.vsc-python-indent) ← correct python indentantion
  - [Python Path](https://marketplace.visualstudio.com/items?itemName=mgesbert.python-path) ← Python import utils
  - [Python Snippets 3](https://marketplace.visualstudio.com/items?itemName=EricSia.pythonsnippets3) ← new auto suggestion for Python updated in 2022
- 👓 **Readability**
  - [:emojisense:](https://marketplace.visualstudio.com/items?itemName=bierner.emojisense) ← add suggestions and autocompletions to emojis
  - ~~[Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2) ← don't be lost in the forest of { }~~ ← replaced in 1.60 with `"editor.bracketPairColorization.enabled": true`
  - [Edit CSV](https://marketplace.visualstudio.com/items?itemName=janisdd.vscode-edit-csv) ← edit csv files with a table UI
  - [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) ← make indentation easier to read
  - [Markdown Preview Mermaid Support](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid) ← adds Mermaid diagram and flowchart support to VS Code's builtin markdown preview
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) ← enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary
  - [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv) ← highlight CSV and TSV files in different colors, Run SQL-like queries
  - [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) ← show TODO, FIXME, etc. comment tags in a tree view
  - [swapdiff](https://marketplace.visualstudio.com/items?itemName=shalimski.swapdiff) ← quickly swaps out documents open in diff mode
- 🏝 **Remote**
  - [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) ← extension pack including the following 4 extensions:
    - [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) ([tutorial](https://code.visualstudio.com/docs/remote/containers-tutorial)) ← work with a separate toolchain or container based application by opening any folder mounted into or inside a container
    - [Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) ([tutorial](https://code.visualstudio.com/docs/remote/ssh-tutorial)) ← work with source code in any location by opening folders on a remote machine/VM using SSH. Supports x86_64, ARMv7l (AArch32), and ARMv8l (AArch64) glibc-based Linux, Windows 10/Server (1803+), and macOS 10.14+ (Mojave) SSH hosts
    - [Remote - Tunnels](https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-server) - work with source code in any location by opening folders on a remote machine/VM using a VS Code Tunnel (rather than SSH)
    - [WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) ([tutorial](https://code.visualstudio.com/docs/remote/wsl-tutorial)) ← get a Linux-powered development experience from the comfort of Windows by opening any folder in the Windows Subsystem for Linux
  - [Remote Explorer](https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-explorer) ← view remote machines for SSH and tunnels
- 🗄 **SQL**
  - [SQLTools - Database tools](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools) ([YT tutorial](https://www.youtube.com/watch?v=L1Iv7Voc5bY)) ← database management done right. Connection explorer, query runner, intellisense, bookmarks, query history
  - [SQL Server (mssql)](https://marketplace.visualstudio.com/items?itemName=ms-mssql.mssql) ← develop Microsoft SQL Server, Azure SQL Database and SQL Data Warehouse everywhere
