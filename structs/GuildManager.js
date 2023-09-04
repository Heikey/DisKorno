const Collection = require("./Collection");

class GuildManager {
    constructor(data,client) {
        this.cache = new Collection()
    }
}

module.exports = GuildManager