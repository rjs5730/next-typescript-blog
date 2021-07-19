import React from 'react'
import Layout from '../components/Layout'

interface contactProps {}

const contact: React.FC<contactProps> = () => {
  return (
    <Layout pageTitle="Contact">
      <h1>Contact</h1>
      <p>아무말</p>
    </Layout>
  )
}

export default contact
