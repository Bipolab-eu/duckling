'use client'

import React from 'react'
import styled from 'styled-components'
import test from '../icons/test.svg'

interface Props {
  title: string;
  description: string;
}

const chevronDown = 'data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M19.5%208.25L12%2015.75L4.5%208.25%22%20stroke%3D%22%23111827%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E';
const chevronUp = 'data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M4.5%2015.75L12%208.25L19.5%2015.75%22%20stroke%3D%22%23111827%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E';

const StyledDetails = styled.details`
  width: 100%;
  background: #F9FAFB;
  color: #111827;
  border-radius: 1rem;

  &[open] summary::after {
    content: url(${chevronUp});
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
      content: url(${chevronDown});
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