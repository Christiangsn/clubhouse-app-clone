import { constants } from "./constants.js"

export default class SocketBuilder {

    constructor ({ socketUrl, namespace }) {
        this.socketUrl = `${socketUrl}/${namespace}`
        this.onUserConnected = () => {}
        this.onUserDesconnected = () => {}

    }

    setOnUserConnected(func) {
        this.onUserConnected = func
        return this
    }
    setOnUserDesconnected(func){
        this.onUserDesconnected = func
        return this
    }

    build() {
        const socket = globalThis.io.connect(this.socketUrl, {
            withCredentials: false
        })

        socket.on('connection', () => console.log('socket run') )
        socket.on(constants.events.USER_CONNECTED, this.onUserConnected)
        socket.on(constants.events.USER_DISCONNECTED, this.onUserDesconnected)

        return socket

    }
    
}