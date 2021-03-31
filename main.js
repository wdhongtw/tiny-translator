const { app } = require('electron')
const { clipboard } = require('electron')
const { globalShortcut } = require('electron')
const { Notification } = require('electron')

const axios = require('axios')

let notification = null
let apiKey = null

function accessClipboard () {
  return clipboard.readText('selection')
}

async function translate (unknown, code, key) {
  const url = 'https://translation.googleapis.com/language/translate/v2' +
    `?q=${unknown}&target=${code}&key=${key}`

  const response = await axios.get(url)
  const body = response.data
  return body.data.translations[0].translatedText
}

function showText (text) {
  notification.body = text
  notification.show()
}

async function launchTranslationJob () {
  const unknownText = accessClipboard()
  const translatedText = await translate(unknownText, 'zh-TW', apiKey)
  showText(translatedText)
}

async function main () {
  notification = new Notification({
    title: 'Translation'
  })
  apiKey = process.env.API_KEY

  globalShortcut.register('Alt+T', launchTranslationJob)
}

app.whenReady().then(main)
