
export default function Post ({post}) {
return <>
<main>  
<h1>{post.title}</h1>
<p>{post.body}</p>
</main>
</>
}

export async function getStaticProps ({params}) {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    .then(response => response.json())
    return {
  props :{
    post
  }
    };
}


// c'est pour générer les url qui correspondent à chaque url. Là il connait toutes les ID
// fallback, c'est pour dire que si l'id n'est pas dans la liste, il envoie une 404
export async function getStaticPaths () {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
    .then(response => response.json())
    return {
  paths : posts.map(post => ({
      params: {id:post.id.toString()}
  })),
  fallback:false,
  }
    };
