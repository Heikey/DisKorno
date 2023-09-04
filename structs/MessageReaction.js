const Base = require("./Base");
const Emoji = require("./Emoji");class MessageReaction {
    constructor(data,client) {
        this.count = data.count
        this.me = data.me
        this.emoji = new Emoji(data.emoji)
    }
}module.exports = MessageReaction