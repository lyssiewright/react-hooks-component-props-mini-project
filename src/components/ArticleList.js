import React from "react";
import Article from "./Article";

function ArticleList({articles}){
    console.log(articles)
     const articleItems = articles.map((article) =>
        <Article key = {article.id} title = {article.title} date = {article.date} preview = {article.preview}/>
        )
    return(
        <main>
            <span>{articleItems}</span>
        </main>

    )
}



export default ArticleList;