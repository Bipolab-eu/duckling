import React from 'react'
import styled, { css } from 'styled-components'

interface Props {
  children: string;
  onClick?: () => void;
  variant: 'primary' | 'secondary';
}

export const Button: React.FC<Props> = ({ children, onClick, variant }) => {
  return (
    <StyledButton
      onClick={onClick}
      variant={variant}
    >
      {children}
    </StyledButton>
  )
}

const variants = {
  primary: css`
    background: #171717;
    color: #FAFAFA;
    &:hover {
      background: #bbb7b7;
      color: #171717;
    }
  `,
  secondary: css`
    background: #FAFAFA;
    color: #171717;
  `
}; 

const StyledButton = styled.button<{ variant: 'primary' | 'secondary' }>`
  padding: 1rem;
  font-family: Arial;
  font-size: 1rem;
  line-height: 100%;
  border: none;
  ${({ variant }) => variants[variant]}
`

