# Scratchpad README

Simple Scratchpad for quick notes.

# Usage

1. Install the plugin (reload VS Code)
2. Press F1, search for `Open Scratchpad`
3. Add key bindings (Optional) .
    - Open key bindings settings file:
        + Open Command Palette (Ctrl+P)
        + Search for 'Open keyboard shortcuts'
    - Add and save you key bindings. For example:
```
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
```
// Setting for prepending to scratchpad.txt

"scratchpad.prepend": true // default is false
```
5. Enjoy! :)
