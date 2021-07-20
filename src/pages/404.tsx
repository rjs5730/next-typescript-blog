import React from 'react'
import AppLink from 'src/components/AppLink'
import Layout from 'src/components/Layout'
import { Container } from 'src/styles/Containers'
import { Paragraph, Title } from 'src/styles/TextElements'

export default function NotFound() {
  return (
    <Layout pageTitle="Not Found">
      <Container>
        <Title>Not Found 404</Title>
        <Paragraph>Sooryi! Not Found Page!</Paragraph>
        <AppLink href="/" label="Go to home." />
      </Container>
    </Layout>
  )
}
