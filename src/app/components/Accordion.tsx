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

  &[open] summary::after {
    content: url('data:image/svg+xml,%3Csvg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M4.5 15.75L12 8.25L19.5 15.75" stroke="%23111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E');
    font-size: 1.5rem;
  }

  summary {
    padding: 1rem;
    border-bottom: 1px solid #111827;
    cursor: pointer;
    list-style-type: none;
    display: flex;
    justify-content: space-between;

    &::after {
      content: url('data:image/svg+xml,%3Csvg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M19.5 8.25L12 15.75L4.5 8.25" stroke="%23111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E');
      font-size: 1.5rem;
    }

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

export const Accordion: React.FC<Props> = ({ title, description }) => (
  <StyledDetails name="reqs">
    <summary>{title}</summary>
    <p>{description}</p>
  </StyledDetails>
)
