import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function Home() {

const [posts, setPosts] = useState([]);

useEffect (() => {
  const data = fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
  .then(response => response.json())
  .then(setPosts)
  }, []);

  return (
    <>
 <Head>
<title>
  Page test 
</title>
</Head>
<ul>
{posts.map(post => <li>
<h3>{post.title}</h3>
</li>)}
  
</ul>
    </>
   
  )
}

