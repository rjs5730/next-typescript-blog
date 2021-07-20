import React from 'react'
import FooterElement from 'src/styles/FooterElement'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterElement>
      <p>&copy; Argentinux {new Date().getFullYear()} </p>
    </FooterElement>
  )
}

export default Footer
