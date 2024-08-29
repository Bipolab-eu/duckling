'use client'

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
  border-radius: 1rem;

  &[open] summary::after {
    content: url('data:image/svg+xml,%3Csvg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M4.5 15.75L12 8.25L19.5 15.75" stroke="%23111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E');
    line-height: 0%;
  }

  .accordion-title {
    padding: 1rem;
    cursor: pointer;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;

    &::after {
      content: url('data:image/svg+xml,%3Csvg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M19.5 8.25L12 15.75L4.5 8.25" stroke="%23111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E');
      line-height: 0%;
    }
  }

  .accordion-content {
    padding: 1rem 1rem 2rem 1rem;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
  }
`;

export const Accordion: React.FC<Props> = ({ title, description }) => (
  <StyledDetails name="accordion">
    <summary className='accordion-title'>{title}</summary>
    <p className='accordion-content'>{description}</p>
  </StyledDetails>
)