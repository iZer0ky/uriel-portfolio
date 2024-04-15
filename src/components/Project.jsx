

const Project = (article) => {
    return(
        <div className="project-article">
            <p className="article-title">{article.name}</p>
            <img src={article.img} referrerpolicy="no-referrer"/>
            <p>{article.description}</p>
            <a href={article.source} target="_blank">Source</a> 
            <a href={article.page} target="_blank">Page</a>
        </div>
    )
}

export default Project;