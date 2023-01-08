import Head from 'next/head'
import blogs from "../data/blogs.json"
// import { useEffect } from 'react'
import Image from 'next/image'

export default function Home({blogs}) {


  return <div className='container'>
    <h1 className='my-4 text-center'>Welcome to my Anime Blogs</h1>

    <div className='cards row justify-content-center'>
   { blogs.blogs.map((blog)=>{

    return  <div className="card mx-4 my-4" style={{ 'width': '18rem' }}>
        <Image src="https://cdn.myanimelist.net/images/anime/1439/93480.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{blog.title}</h5>
          <p class="card-text">{blog.content.substr(0,145)}</p>
          <a href={"blogpost/"+blog.slug} class="btn btn-primary">Read More</a>
        </div>
      </div>
    })}
    </div>
  </div>
}


export async function getServerSideProps(context) {
  return {
    props: {blogs},
  }
}