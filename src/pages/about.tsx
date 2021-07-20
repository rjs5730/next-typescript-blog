import React from 'react'
import { Container } from 'src/styles/Containers'
import Layout from 'src/components/Layout'

interface aboutProps {}

const about: React.FC<aboutProps> = () => {
  return (
    <Layout pageTitle="About">
      <Container>
        <h1>About Us</h1>
        <p>아무말</p>
      </Container>
    </Layout>
  )
}

export default about
