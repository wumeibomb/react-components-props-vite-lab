import blogData from "../data/blog"
import React from "react";
import Article from "./Article"

function ArticleList({posts}){
    return (
    <main>
        {posts.map(() => (
            <Article
              key = {id}
              name = {title}
              date = {date}
              preview = {preview}
        />
        ))}
          </main>
    )
}
export default ArticleList