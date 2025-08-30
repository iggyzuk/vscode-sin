const vscode = require('vscode');

function activate(context) {
    // Register your custom search command
    let searchDisposable = vscode.commands.registerCommand('sin.searchSymbol', () => {

        const editor = vscode.window.activeTextEditor;
        if (!editor) return; // No open editor

        const wordRange = editor.document.getWordRangeAtPosition(editor.selection.active);
        if (!wordRange) return; // No word under cursor

        const wordText = editor.document.getText(wordRange);

        // Open Quick Open in "workspace symbol" mode by prefixing '%'
        vscode.commands.executeCommand('workbench.action.quickOpen', `%${wordText}`);
    });

    // WIP
    let escDisposable = vscode.commands.registerCommand('sin.closeQuickOpenAndFocusEditor', () => {
        console.log('sin.closeQuickOpenAndFocusEditor'); // 👈 log for testing
        vscode.commands.executeCommand('workbench.action.focusFirstEditorGroup');
    });

    context.subscriptions.push(searchDisposable, escDisposable);
}

function deactivate() {}

module.exports = { activate, deactivate };
