class EventsManager {
    constructor() {
        /**
         * @type { Map<String,Function> }
         */
        this.events = new Map()
    }
    
    /**
     * @param {string} name
     * @param {Function} func
     */
    add(name, func) {
        name = name.split('.')[0]
        if (name.toUpperCase() !== name) return this.events
        return this.events.set(name, func)
    }

    namedEvents() {
        return this.events.keys()
    }

    /**
     * @param {string} name
     */
    get(name) {
        return this.events.get(name)
    }
}

module.exports = EventsManager