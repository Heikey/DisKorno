const Base = require("./Base");

class Role extends Base {
    constructor(data){
        super(data.id)
        this.name = data.name
        this.color = data.color
        this.hoist = data.hoist
        this.icon = data.icon
        this.unicode_emoji = data.unicode_emoji
        this.position = data.position
        this.permissions = data.permissions
        this.managed = data.managed
        this.mentionable = data.mentionable
        this.botOwned = data.bot_id
        this.integrationOwned = data.integration_id
        this.nitroOwned = data.premium_subscriber
    }
}

module.exports = Role