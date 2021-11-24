const {runTests} = require('vscode-test');
const path = require('path');

function resolveRoot(pathname = '') {
  return path.resolve(__dirname, '..', pathname);
}

async function main() {
  try {
    // The folder containing the Extension Manifest package.json
    // Passed to `--extensionDevelopmentPath`
    const extensionDevelopmentPath = resolveRoot();

    // The path to test runner
    // Passed to --extensionTestsPath
    // const extensionTestsPath = path.resolve(__dirname, './suite/index');

    // test workspace
    const testWorkspace = resolveRoot('tests/test-workspace');

    // Download VS Code, unzip it and run the integration test
    await runTests({
      version: '1.50.0',
      extensionDevelopmentPath,
      extensionTestsPath: '',
      launchArgs: [
        testWorkspace,
        '--disable-extensions'
      ]
    });
  } catch (err) {
    console.error('Failed to run tests', err);
    process.exit(1);
  }
}

main();
