class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    let counter = 0

    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback()
      }
      counter++
      this.currentTime = counter
    }, 1000)
  }

  getMinutes() {
    const getMinutes = this.currentTime / 60
    const getMinutesRounded = Math.floor(getMinutes)
    return getMinutesRounded
  }

  getSeconds() {
    const getSecond = this.currentTime % 60
    const getSecondRounded = Math.floor(getSecond)
    return getSecondRounded
  }

  computeTwoDigitNumber(value) {
    const valueString = value.toString()
    const valueString2 = '0'
    if (valueString.length < 2) {
      const valueString2 = '0' + valueString
      return valueString2
    } else {
      return valueString
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const minutes = this.getMinutes()
    const seconds = this.getSeconds()
    const minutesToString = this.computeTwoDigitNumber(minutes)
    const secondsToString = this.computeTwoDigitNumber(seconds)
    return (minutesToString + ':' + secondsToString)

  }
}
