const isDate = (value: string): boolean => {
  const digitals = value.replace(/\D+/g, '')
  if (digitals.length < 8) return false

  const brithDay: string = value.replace(/\./g, '-').replace(/_/g, '')
  const [day, month, year]: string[] = brithDay.split('-')
  const date = new Date(`${year}-${month}-${day}`)

  return !isNaN(date.getTime())
}

export default isDate
