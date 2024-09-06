import React from 'react'
import { Accordion } from './components/Accordion'

export default function Home() {
  return (
      /* Importa el componente dentro del contenedor lab */
    <div id='lab'>
<Accordion title='hola mundo' description='adios mundo'></Accordion>
    </div>
  )
}
