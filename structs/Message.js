const Base = require("./Base");
const MessageActivity = require("./MessageActivity");
const MessageReaction = require("./MessageReaction");
const MessageReference = require("./MessageReference");class Message extends Base {
    constructor(data,client) {
        super(data.id)
        this.channel_id = data.channel_id
        this.author = data.author
        this.content = data.content
        this.timestamp = new Date(data.timestamp)
        this.edited_timestamp = new Date(data.edited_timestamp)
        this.tts = data.tts
        this.mention_everyone = data.mention_everyone
        this.mentions = data.mentions
        this.mentions_roles = data.mentions_roles
        this.mentions_channels = data.mentions_channels
        this.attachments = data.attachments
        this.embeds = data.embeds
        this.reactions = []
        this.reactions = data.reactions
        this.nonce = data.nonce
        this.pinned = data.pinned
        this.webhook_id = data.webhook_id
        this.type = data.type
        this.application = data.application
        this.application_id = data.application_id
        this.message_reference = new MessageReference(data.message_reference)
        this.flags = data.flags
        this.interaction = data.interaction
    }
}module.exports = Message