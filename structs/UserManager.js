const Collection = require("./Collection");

class UserManager {
    constructor() {
        this.cache = new Collection()
    }
}

module.exports = UserManager