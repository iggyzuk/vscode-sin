const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand(
        'sin.searchSymbol',
        () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) return;

            const wordRange = editor.document.getWordRangeAtPosition(editor.selection.start);
            if (!wordRange) return;

            const wordText = editor.document.getText(wordRange);

            // Add "%" before the symbol name
            vscode.commands.executeCommand('workbench.action.quickOpen', `%${wordText}`);
        }
    );

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = { activate, deactivate };
