const Base = require("./Base");class MessageActivity extends Base {
    constructor(data,client) {
        super(data.id)
        this.type = data.type
    }
}module.exports = MessageActivity