class MessageReference {
    constructor(data,client) {
        this.message_id = data.message_id
        this.channel_id = data.channel_id
        this.guild_id = data.guild_id
        this.fail_if_not_exists = data.fail_if_not_exists
    }
}module.exports = MessageReference