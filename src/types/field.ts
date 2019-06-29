export type FieldType = {
  key: string,
  value: string
}

export type CheckFieldType = {
  field: string,
  type: 'error' | 'checked' | 'clear'
}