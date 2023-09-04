const EmbedField = require("./EmbedFields")
const EmbedFooter = require("./EmbedFooter")class Embed {
    constructor(data,client) {
        this.title = data.title
        this.type = data.type
        this.description = data.description
        this.url = data.url
        this.timestamp = new Date(data.timestamp)
        this.color = data.color
        this.footer = new EmbedFooter(data.footer)
        this.image = data.image
        this.thumbnail = data.thumbnail
        this.video = data.video
        this.provider = data.provider
        this.author = data.author
        this.fields = data.fields || []    }
    setFooter(footer, icon) {
        this.footer.text = footer
        this.footer.icon_url = icon
    }
    setField(name, val, inline) {
        this.fields.push(new EmbedField(name, val, inline))
    }
}module.exports = Embed