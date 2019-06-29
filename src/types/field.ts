export type FieldType<T extends (string | string[])> = {
  key: string,
  value: T
}

export type CheckFieldType = {
  field: string,
  type: 'error' | 'checked' | 'clear'
}