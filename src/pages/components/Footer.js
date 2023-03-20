import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer style={{ marginBottom: 0}} >
    <div  style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      {/* &copy; {new Date().getFullYear()} Copyright:{' '} */}
      <Link href="/">
       Home 
      </Link>
    </div>
  </footer>
  )
}
 

export default Footer;

