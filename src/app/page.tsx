'use client'
import React from 'react'
import { Button } from './components/Button'

export default function Home() {

  function onSend() {
    return console.log('Hola mundo')

  }
  return (
    <Button
      children={'Haz click'}
      onClick={onSend}
      variant='primary'
    />
  )
}
