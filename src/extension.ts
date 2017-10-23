import * as fs from 'fs';
import { EOL } from 'os';
import * as path from 'path';
import * as vscode from 'vscode';

"use strict";
const fileName = "scratchpad.txt";
let fullPath = "";
let prepend = vscode.workspace.getConfiguration("scratchpad").prepend;

export function activate(context: vscode.ExtensionContext) {
  let scratchpad = vscode.commands.registerCommand(
    "extension.openScratchpad",
    () => {
      fullPath = path.join(context.extensionPath, fileName);
      if (!fs.existsSync(fullPath)) {
        fs.writeFileSync(fullPath, "");
      }

      vscode.workspace.openTextDocument(fullPath).then(doc => {
        vscode.window.showTextDocument(doc).then(editor => {
          const length = prepend ? 0 : doc.getText().length;
          const pos = editor.document.positionAt(length);

          editor.selection = new vscode.Selection(pos, pos);
          editor.edit(e => {
            e.insert(pos, newLine(length === 0));
          });

          if (prepend) {
            let prependPosition = editor.document.positionAt(
              newLine(length === 0).length
            );

            editor.selection = new vscode.Selection(
              prependPosition,
              prependPosition
            );
          }
        });
      });
    }
  );

  context.subscriptions.push(scratchpad);
}

export function deactivate() {}

function newLine(firstLine = false) {
  const now = new Date();
  let datestamp =
    "__________ " +
    now.toJSON().slice(0, 10) +
    " " +
    now.toLocaleTimeString("fullwise", { hour12: false }) +
    " __________";
  var fullText = prepend
    ? (firstLine ? "" : EOL) + datestamp + EOL + "\n"
    : (firstLine ? "" : EOL) + datestamp + EOL;

  return fullText;
}
