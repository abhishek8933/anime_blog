// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import data from "../../data/blogs.json" 
export default function handler(req, res) {
    let slug="slug"
    let myblog = data.blogs.filter((blog)=>{
        return blog.slug==slug
    })
        res.status(200).json({blog :myblog[0]})
}
  