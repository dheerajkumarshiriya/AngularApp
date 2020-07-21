export class LoggingService {
  loggedIn = false

  // isAuthenticated() {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log(this.loggedIn, '11111')
  //       resolve(this.loggedIn)
  //     }, 800)
  //   })
  //   return promise
  // }

  login(log) {
    console.log(log, '111')
    this.loggedIn = log
    console.log(this.loggedIn, '1111')
  }

  logout() {
    this.loggedIn = false
  }

  logStatusChange(name: string, password: string) {
    return true
  }
}
