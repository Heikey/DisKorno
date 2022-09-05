const Base = require("./Base")

class User extends Base {
    constructor(data) {
        super(data.id)
        this.username = data.username
        this.discriminator = data.discriminator
        this.avatar = data.avatar
        this.bot = data.bot || false
        this.f2a = data.f2a
        this.banner = data.banner || ''
        this.color = data.accent_color || 0
        this.locale = data.locale
        this.verified = data.verified
        this.flags = data.flags
        this.nitro = data.premium_type
    }
}

module.exports = User