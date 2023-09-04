const { Axios } = require("axios")
const requester = new Axios({
    baseURL: 'https://discord.com/api/v10/',
})

module.exports = requester