const DisKorno = require('.')

require('dotenv').config()

const client = new DisKorno.DisKorno(process.env.TOKEN);