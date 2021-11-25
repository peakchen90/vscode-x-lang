const tokenTypes = ['class', 'interface', 'enum', 'function', 'variable'];
const tokenModifiers = ['declaration', 'documentation'];
const legend = new vscode.SemanticTokensLegend(tokenTypes, tokenModifiers);

/**
 * @type {import('vscode').DocumentSemanticTokensProvider}
 * @see https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide
 */
const provider = {
  /**
   * @param {import('vscode').TextDocument} document
   * @returns
   */
  provideDocumentSemanticTokens(document) {
    // analyze the document and return semantic tokens

    // TODO: 解析 Token，并标记

    const tokensBuilder = new vscode.SemanticTokensBuilder(legend);
    // on line 1, characters 1-5 are a class declaration
    tokensBuilder.push(
      new vscode.Range(new vscode.Position(1, 1), new vscode.Position(1, 5)),
      'class',
      ['declaration']
    );
    return tokensBuilder.build();
  }
};

const selector = { language: 'x-lang', scheme: 'file' }; // register for all Java documents from the local file system

vscode.languages.registerDocumentSemanticTokensProvider(selector, provider, legend);
