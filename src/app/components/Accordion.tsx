import React from 'react'
import styled, { css } from 'styled-components'

interface Props {
  title: string;
  description: string;
}

const StyledDetails = styled.details`
  summary {
    font-weight: bold;
    cursor: pointer;
    padding: 0.5rem;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 0.5rem;
    list-style-type: none;

    &:hover {
      background-color: #e0e0e0;
    }
  }

  p {
    margin: 0;
    padding: 0.5rem;
    background-color: #fafafa;
    border-left: 2px solid #ccc;
  }

  &[open] p {
    border-left-color: #007bff;
  }
`;

export const Accordion: React.FC<Props> = ({ title, description }) => {
  return (
    <StyledDetails name="reqs">
      <summary>{title || 'Title Example'}</summary>
      <p>{description || 'Description Example'}</p>
    </StyledDetails>
  )
}
