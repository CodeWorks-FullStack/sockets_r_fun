import { SocketHandler } from "../utils/SocketHandler.js";

class AuthHandler extends SocketHandler {
  constructor() {
    super(true)
    this
      .on('AUTH_TEST', this.onTest)
    this.emit('wtf')
  }


  onTest(payload) {
    console.log('Recieved AUTH_TESTED', payload)
  }

}

export const authHandler = new AuthHandler()
