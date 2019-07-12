const dateOfBrith = (date: string): string => {
  const [ day, month, year ] = date.split('.')
  return `${year}-${month}-${day}`
}

export const dateOfBrithRevert = (date: string): string => {
  const [year, month, day ] = date.split('-')
  return `${day}.${month}.${year}`
}

export default dateOfBrith
