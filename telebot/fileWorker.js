const fs = require('fs')

const get = function(key) {
  config = readConfig()

  if (config[key] !== undefined) {
    return config[key]
  }

}

const readConfig = function() {
  const configBuffer = fs.readFileSync('./config/default.json')
  const configJSON = configBuffer.toString()
  return JSON.parse(configJSON)
}

module.exports = {
  get
}
