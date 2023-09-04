const Client = require("./structs/Client");

class DisKorno {
    constructor(token = '') {
        let client = new Client(token)
    }
}

module.exports = {
    DisKorno: DisKorno,

}