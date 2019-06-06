export interface IInputProps {
  placeholder: string,
  error: boolean,
  checked: boolean,
  value: string,
  autoFocus?: boolean,
  icon?: string
  mask?: Array<string | RegExp> | boolean,
  handle: (value: string) => void
}

export interface IInputStyleProps {
  full: boolean,
  error: boolean,
  checked: boolean
}
