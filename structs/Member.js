const Base = require("./Base");
const User = require("./User");class Member extends Base {
    constructor(data,client) {
        super(data.id);
        this.user = new User(data.user)
        this.nick = data.nick || ''
        this.avatar = this.user.avatar;
        this.roles = []
        data.roles.forEach((role) => {
            this.roles.push(new role(role));
        })
        this.joinedAt = new Date(data.joinedAt)
        this.premium_since = data.premium_since
        this.deaf = data.deaf
        this.mute = data.mute
        this.pending = data.pending
        this.permissions = data.permissions
        this.communication_disabled_until = data.communication_disabled_until
    }
}