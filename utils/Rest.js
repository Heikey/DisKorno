const WebSocket = require("ws");
const Intents = require("./Intents");
const requester = require("./Requester");
const fs = require('fs');
const EventsManager = require("../events/EventsManager");
const Client = require("../structs/Client");

class Rest {
    /**
     * @param {Client} client
     */
    constructor(token = '', client) {
        this.token = token
        this.events = new EventsManager()
        this.client = client
    }
    async build() {
        const { data } = await requester.get('/gateway')
        const ws = new WebSocket(JSON.parse(data).url)
        let resumeS = null;
        let ready = false;


        ws.once('open', _ => {
            console.log("opened connection!");
            fs.readdir('./events/', (err, files) => {
                if (err) return console.error("can't read files");
                files.forEach(ele => {
                    const file = require('../events/' + ele)
                    this.events.add(ele, file)
                })
            })
        })

        /**
         * @param {boolean} loopable
         */
        function send_heartbeat(interval = 41 * 1000, loopable) {
            if (loopable) {
                setInterval(() => {
                    ws.send(JSON.stringify({
                        op: 1,
                        d: resumeS
                    }))
                }, interval);

                ws.send(JSON.stringify({
                    op: 1,
                    d: resumeS
                }))
            }
        }

        ws.on('message', dataRaw => {
            const data = JSON.parse(dataRaw.toString())
            //console.log(data)
            resumeS = data.s
            switch (data.op) {

                //HELLO
                case 10:

                    send_heartbeat(data.d.heartbeat_interval, !ready)
                    if (ready) {
                        break;
                    }
                    console.log("sending connect")
                    ws.send(JSON.stringify({
                        op: 2,
                        d: {
                            token: this.token,
                            intents: Intents.ALL,
                            properties: {
                                os: "linux",
                                browser: "DisKorno",
                                device: "DisKorno"
                            }
                        }
                    }))
                    ready = !ready;
                    break;


                case 0:
                    const event_name = data.t
                    try {
                        const event = this.events.events.get(event_name)
                        //console.log(event_name)
                        if (event) event(data.d, this.client)
                        else throw TypeError('event is not a Function')
                    } catch (err) {
                        console.log(`${event_name} don't have a function appended to it.`)
                    }
                    break;
                default:

                    break;
            }

        })

        ws.on('close', event => {
            console.log("closed")
            console.log(event)
        })
        this.ws = ws
    }
}

module.exports = Rest