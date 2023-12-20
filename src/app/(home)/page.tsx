import Link from 'next/link'
import React from 'react'

async function getData() {
  const res = await fetch('https://boogle.onrender.com/api/posts/public?page=1')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  const data = await res.json();
  return data.data;
}
 

const Home = async () => {
  const data = await getData();
  console.log(data)

  return (
    <div>
      <h2>Home page</h2>
      <Link href={'/detail'}>Detail page</Link>
      {
        data?.length && data?.map((item: any, index: number) => (
          <Link href={`${item._id}`} key={index}>
            <p>{ item.title }</p>
          </Link>
        ))
      }
    </div>
  );
};

export default Home;
