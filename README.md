# Tiny Translator

A tool which continuously checks words from clipboard and notify user
with translated version.

The translation process relies on Google Translation API, and requires
an API key from user.

## Usage

Install dependencies

```shell
npm install
npm install --only=dev
```

Setup API key

```shell
node configure.js init
# API KEY: <paste API KEY here>
```

Run the translation tool

```shell
npm run start
# Press Ctrl + C to terminate
```

Then, copy any text and press `Alt + T` to trigger translate.
On Linux environment, just select the text, no copy-action is required.

**Note**: To remove the API KEY

```shell
node configure.js clear
```
