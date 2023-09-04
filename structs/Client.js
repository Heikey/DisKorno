const Base = require("./Base");
const User = require("./User");
const ChannelManager = require("./ChannelManager");
const UserManager = require("./UserManager");
const GuildManager = require("./GuildManager");
const Rest = require("../utils/Rest");

class Client {
    constructor(token = '') {
        this.rest = new Rest(token, this).build()
        this.users = new UserManager()
        this.guilds = new GuildManager()
    }

}

module.exports = Client