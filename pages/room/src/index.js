import { constants } from "../../_shared/constants.js"
import SocketBuilder from "../../_shared/socketBuilder.js"


const socketBuilder = new SocketBuilder ({ 
    socketUrl: constants.socketUrl,
    namespace: constants.scoketNameSpaces.room

})

const socket = socketBuilder
    .setOnUserConnected( (user) => console.log('user is run', user) )
    .setOnUserDesconnected( (user) => console.log('user desconneceted', user) )


const room = {
    id: Date.now();
    topic: 'JS'

}

const user = {
    img: '',
    username: 'Christian' 
}