# Scratchpad README

Simple Scratchpad for quick notes. 

By default, notes are appended to the same document regardless of where you are in VSCode, and are optionally prepended if you'd like to keep a reverse-chronological history of your scratchpad. Timestamps are added for visual clarity. If you delete the scratchpad file, upon next run it will generate a new file for you to use.

## Usage

1. Install the plugin (reload VS Code)
2. `CMD+SHIFT+P`, search for `Open Scratchpad`
3. Add key bindings (Optional) .
    - Open key bindings settings file:
        + Open Command Palette (Ctrl+P)
        + Search for 'Open keyboard shortcuts'
    - Add and save you key bindings. For example:

```json
// Open "keybindings.json" to overwrite the defaults. Can also be modified in VS Code's Keyboard Preferences.
[
    {
        "key": "ctrl+shift+.",
        "command": "extension.openScratchpad",
        "when": "editorTextFocus"
    }
]
```

4. Settings can be modified to specify appending to scratchpad upon invocation or prepending (defaults to appending):

```json
// Setting for prepending to scratchpad.txt
"scratchpad.prepend": true // default is false
```

## Contributing

1. Clone the repo
2. `$ npm install`
3. Develop develop develop
4. Run the tsc linter
5. Open a PR and I'll take a look


## History

- 0.0.1 - Initial release