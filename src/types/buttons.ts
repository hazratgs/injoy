export interface IButtonProps {
  children: React.ReactChild,
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void,
  disabled?: boolean
}

export interface ILinkProps {
  to: string,
  children: React.ReactChild,
  adaptive?: boolean
}