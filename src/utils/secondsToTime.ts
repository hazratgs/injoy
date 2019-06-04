const zero = (value: number) => value <= 9 ? `0${value}` : value

const secondsToTime = (sec: number) => {
  const hours = Math.floor(sec / (60 * 60))

  const divisorForMinutes = sec % (60 * 60)
  const minutes = Math.floor(divisorForMinutes / 60)

  const divisorForSeconds = divisorForMinutes % 60
  const seconds = Math.ceil(divisorForSeconds);

  return {
    hours: zero(hours),
    minutes: zero(minutes),
    seconds: zero(seconds)
  }
}

export default secondsToTime
