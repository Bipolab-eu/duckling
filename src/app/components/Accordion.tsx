import React from 'react'
import styled from 'styled-components'

interface Props {
  title: string;
  description: string;
}

const StyledDetails = styled.details`
  width: 100%;
  background: #F9FAFB;
  color: #111827;

  summary {
    padding: 1rem;
    border-bottom: 1px solid #111827;
    cursor: pointer;
    list-style-type: none;

    &:hover {
      background-color: #9f9fa1;
    }
  }

  p {
    padding: 1rem;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;

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
