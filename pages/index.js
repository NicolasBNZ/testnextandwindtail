import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/Link'

export default function Home({posts}) {

// const [posts, setPosts] = useState([]);

// useEffect (() => {
//   const data = fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
//   .then(response => response.json())
//   .then(setPosts)
//   }, []);

const [count, setCount] = useState(0);

useEffect (() => {
  const timer = setInterval(()=> setCount(n=>n+1),1000);
  return () => {
    clearInterval(timer);
  }
}
);

  return (
    <>
 <Head>
<title>
  Page test 
</title>
</Head>
<h1>
  Compteur : {count}
</h1>
<ul>
{posts.map(post => <li key={post.id}>
<Link href={`/blog/${post.id}`}>
  <a>
    <h3>{post.id} - {post.title}</h3>
</a>
</Link>
</li>)}
  
</ul>
    </>
   
  )
}

// Affichage statique
export async function getStaticProps () {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
  .then(response => response.json())
  return {
props :{
  posts
}
  };
};