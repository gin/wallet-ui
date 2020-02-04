require('dotenv').config()
const withImages = require('next-images')

module.exports = {
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    FORTMATCI_API_KEY: process.env.FORTMATCI_API_KEY,
  },
}

module.exports = withImages()
