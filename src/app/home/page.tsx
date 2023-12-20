import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h2>Home page</h2>
      <Link href={'/detail'}>Detail page</Link>
    </div>
  )
}

export default Home