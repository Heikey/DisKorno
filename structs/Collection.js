/** 
 * @template T 
 */
class Collection extends Map {

    /**
    * @type Map<String,T>
    */

    constructor() {
        super()
    }


    /**
     * @param {(arg) => boolean} fn
     * @returns {boolean}
     */
    all(fn) {
        for (const el in this.values()) {
            if (!fn(el)) return false
        }
        return true
    }

    /**
     * @param {(arg0: T) => boolean} fn
     */
    any(fn) {
        for (const el of this.values()) {
            if (fn(el)) return true
        }
        return false
    }

    /**
     * @param {(arg0: any) => boolean} fn
     * @returns {Map<String,T>}
     */
    filter(fn) {
        let tmp = new Map()
        for (const [key, val] of this.entries()) {
            if (fn(val) == true) tmp.set(key, val)
        }
        return tmp;
    }

    /**
     * @param {(arg0: any) => T | null} fn
     */
    some(fn) {
        for (const el of this.values()) {
            if (fn(el)) return el
        }
        return null
    }
}

module.exports = Collection