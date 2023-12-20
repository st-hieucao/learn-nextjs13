import Link from 'next/link'
import React from 'react'

const Detail = () => {
  return (
    <div>
      <h2>Detail page</h2>
      <Link href={'/home'}>Home page</Link>
    </div>
  )
}

export default Detail