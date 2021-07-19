import React from 'react'
import Layout from '../components/Layout'

interface aboutProps {}

const about: React.FC<aboutProps> = () => {
  return (
    <Layout pageTitle="About">
      <h1>About Us</h1>
      <p>아무말</p>
    </Layout>
  )
}

export default about
