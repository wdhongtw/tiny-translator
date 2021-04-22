const readline = require('readline')

const argparse = require('argparse')

const setting = require('./setting')

function question (prompt) {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    rl.question(prompt, (answer) => {
      rl.close()
      resolve(answer)
    })
  })
}

async function init () {
  const apiKey = await question('API KEY: ')
  await setting.setApiKey(apiKey)
}

async function clear () {
  await setting.deleteApiKey()
}

async function main () {
  const parser = new argparse.ArgumentParser({
    add_help: true,
    description: 'The tiny translator tool'
  })
  const subParser = parser.add_subparsers()

  const parserInit = subParser.add_parser('init')
  parserInit.set_defaults({ func: init })

  const parserClear = subParser.add_parser('clear')
  parserClear.set_defaults({ func: clear })

  const args = parser.parse_args()

  if (args.func) {
    await args.func(args)
  }
}

main()
