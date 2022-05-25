import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/Link'

export default function Home({posts, date}) {

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
<div className='flex justify-center mt-50 '>
<h1 className='customtext'>
  Compteur : {count} - {date}
</h1>
</div>
<h1>
  Compteur : {count} - {date}
</h1>
<ul className='flex flex-col mt-50 '>
{posts.map(post => <li key={post.id} className='border-4 w-1/2 '>
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

// Server side rendering
// export async function getServerSideProps () {
//   const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=4`)
//   .then(response => response.json())
//   return {
// props :{
//   posts,
//   date: (new Date ()).toString()
// }
//   };
// };

// Affichage statique
// le revalidate permet de raffraichir la page statique régulièrement -> Static Site generation, rapide pour l'utilisateur avec du contenu 
// nouveau régulièrement
export async function getStaticProps () {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
  .then(response => response.json())
  return {
props :{
  posts,
date: (new Date ()).toString()
},
revalidate:5,
  };
};