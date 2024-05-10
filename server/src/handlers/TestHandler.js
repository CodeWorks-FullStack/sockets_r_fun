import { SocketHandler } from '../utils/SocketHandler'

let isLightOn = true


export class TestHandler extends SocketHandler {
  /**
   * @param {import("socket.io").Server} io
   * @param {import("socket.io").Socket} socket
   */
  constructor(io, socket) {
    super(io, socket)
    this
      .on('SOCKET_TEST', this.testEvent)
      .on('GET_LIGHT_STATUS', this.sendLightStatus)
      .on('TOGGLE_LIGHT', this.toggleLight)
      .on('JOIN_ROOM', this.joinRoom)
      .on('LEAVE_ROOM', this.leaveRoom)
  }

  async testEvent(payload) {
    this.socket.emit('IS_TESTED', payload)
  }

  sendLightStatus() {
    this.messageSelf('LIGHT_STATUS', isLightOn)
  }

  toggleLight() {
    isLightOn = !isLightOn
    this.messageRoom('THE_ROOM_WITH_THE_LIGHT', 'LIGHT_STATUS', isLightOn)
  }

  joinRoom(roomName) {
    this.socket.join(roomName)
    this.messageSelf('JOINED_ROOM', roomName)
  }

  leaveRoom(roomName) {
    this.socket.leave(roomName)
    this.messageSelf('LEFT_ROOM', roomName)
  }


}
