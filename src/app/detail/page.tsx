import Link from 'next/link'
import React from 'react'

async function getData() {
  const res = await fetch(`https://boogle.onrender.com/api/posts/63e3ab61568745362d2c68e5`, { cache: 'no-store' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  const data = await res.json();
  console.log(data, '--------')
  return data;
}

const Detail = async () => {
  const data = await getData();
  return (
    <div>
      <h2>Detail page</h2>
      <Link href={'/home'}>Home page</Link>
      <p>
        { data?.description }
      </p>
    </div>
  )
}

export default Detail;
