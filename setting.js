const keytar = require('keytar')

const SERVICE_NAME = 'Google translation API'
const ACCOUNT_NAME = 'translation-robot'

async function getApiKey () {
  return await keytar.getPassword(SERVICE_NAME, ACCOUNT_NAME)
}

async function setApiKey (password) {
  await keytar.setPassword(SERVICE_NAME, ACCOUNT_NAME, password)
}

async function deleteApiKey () {
  await keytar.deletePassword(SERVICE_NAME, ACCOUNT_NAME)
}

module.exports = {
  getApiKey,
  setApiKey,
  deleteApiKey
}
