import React from 'react'
import { Container, Button, Step, StepItem } from './styles'

interface IProps {
  back: string,
  step: number
}

const steps: number[] = [1, 2, 3, 4]

export const RegisterHeader = (props: IProps) => {
  const { back, step } = props

  return (
    <Container>
      <Button to={back}>
        <img src='/images/register/back.svg' alt='' />
      </Button>
      <Step>
        {steps.map((item: number) => <StepItem key={item} active={item === step} />)}
      </Step>
    </Container>
  )
}

export default RegisterHeader
