const dateOfBrith = (date: string): string => {
  if (!date || date.length < 10) return ''
  const [ day, month, year ] = date.split('.')
  return `${year}-${month}-${day}`
}

export const dateOfBrithRevert = (date: string): string => {
  if (!date || date.length < 10) return ''
  const [year, month, day ] = date.split('-')
  return `${day}.${month}.${year}`
}

export default dateOfBrith
