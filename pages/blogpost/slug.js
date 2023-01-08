// import React from 'react'
import { useRouter } from 'next/router';
import blogs from "../../data/blogs.json"


const Slug = ({ myblog }) => {
    const router = useRouter()
    const { param } = router.query;
    // {console.log(router.query.Slug)}
    return <div className='container ' style={{ 'margin-top': '40px' }}>
        <img src="https://cdn.myanimelist.net/images/anime/1439/93480.jpg" className="card-img-top"  style={{'width':'150px' }}alt="..." />
        <h1>{myblog.title}</h1>
        <p>{myblog.content}
        </p>
        <a target={'/'} href='https://myanimelist.net/forum/?topicid=2052518' className="btn btn-primary"> Watch Anime</a>
    </div>
}
export default Slug;
export async function getServerSideProps(context) {
    console.log(context.query.slug)
    let myblog = blogs.blogs.filter((blog) => {
        return blog.slug == "slug";
    })
    return {
        props: { myblog: myblog[0] }
    }
}
//   export async function getServerSideProps(context) {
//     console.log(context)
//     let myblog = blogs.blogs.filter((blog)=>{
//         return blog.slug=="slug";
//     })
//     return {
//       props: {myblog:myblog[0]}
//     }
//   }
