import React from 'react'
import { AllPictures } from './AllPictures'

import { Container } from 'react-bootstrap'

export const Home = () => {
  return (
    <div>
      <Container>
        <h1>Todos los cuadros disponibles</h1>
        <AllPictures />
      </Container>
    </div>
  )
}
