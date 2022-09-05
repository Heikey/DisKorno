const Base = require("./Base");
const MessageActivity = require("./MessageActivity");
const MessageReference = require("./MessageReference");
const User = require("./User");

class Message extends Base {
    constructor(data) {
        super(data.id)
        this.channel_id = data.channel_id
        this.author = data.author
        this.content = data.content
        this.timestamp = this.timestamp
        this.edited_timestamp = data.edited_timestamp
        this.tts = data.tts
        this.mention_everyone = data.mention_everyone
        this.mentions = data.mentions
        this.mentions_roles = data.mentions_roles
        this.mentions_channels = data.mentions_channels
        this.attachments = data.attachments
        this.embeds = data.embeds
        this.reactions = data.reactions
        this.nonce = data.nonce
        this.pinned = data.pinned
        this.webhook_id = data.webhook_id
        this.type = new MessageActivity(data.type)
        this.application = data.application
        this.application_id = data.application_id
        this.message_reference = new MessageReference(data.message_reference)
        this.flags = data.flags
        this.interaction = data.interaction

    }
}