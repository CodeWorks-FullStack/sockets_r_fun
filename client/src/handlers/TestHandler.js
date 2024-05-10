import { AppState } from "../AppState.js";
import { SocketHandler } from "../utils/SocketHandler.js";

class TestHandler extends SocketHandler {

  constructor() {
    super()
    this
      .on('IS_TESTED', this.onTest)
      .on('LIGHT_STATUS', this.setLightStatus)
      .on('JOINED_ROOM', this.onJoined)
      .on('LEFT_ROOM', this.onLeft)
  }

  onTest(payload) {
    console.log('Recieved IS_TESTED', payload)
  }

  setLightStatus(isLightOn) {
    AppState.isLightOn = isLightOn
  }

  onJoined(roomName) {
    console.log('you are in room', roomName)
  }
  onLeft(roomName) {
    console.log('you left room', roomName)
  }

}

export const testHandler = new TestHandler()
