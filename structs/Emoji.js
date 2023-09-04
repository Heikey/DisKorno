const Base = require("./Base");
const User = require("./User");class Emoji extends Base{
    constructor (data) {
        super(data.id)
        this.name = data.name
        this.roles = data.roles
        this.user = new User(data.user)
        this.colons = data.require_colons
        this.managed = data.managed
        this.animated = data.animated
        this.available = data.available
    }
}
module.exports = Emoji