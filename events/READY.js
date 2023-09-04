const User = require("../structs/User")

module.exports = function(data,client) {
    client.user = new User(data.user)
    console.log(client.user);
}