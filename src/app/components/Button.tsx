'use client'

import React from 'react'
import styled, { css } from 'styled-components'

interface Props {
  children: string;
  variant: 'primary' | 'secondary';
  onClick: () => void;
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
    &:hover {
      background: #171717;
      color: #bbb7b7;
    }
  `
};

const StyledButton = styled.button<{ variant: 'primary' | 'secondary' }>`
  padding: 1rem;
  font-family: Arial;
  font-size: 1rem;
  line-height: 1rem;
  border: none;
  ${({ variant }) => variants[variant]}
`

export const Button: React.FC<Props> = ({ children, variant, onClick }) => {
  return (
    <StyledButton
      onClick={onClick}
      variant={variant}
    >
      {children}
    </StyledButton>
  )
}
