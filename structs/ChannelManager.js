const Collection = require("./Collection");

class ChannelManager {
    constructor(data,client) {
        this.cache = new Collection(data)
    }
}

module.exports = ChannelManager