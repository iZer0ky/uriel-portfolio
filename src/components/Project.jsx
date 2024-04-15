

const Project = (article) => {
    return(
        <div className="project-article">
            <p className="article-title">{article.name}</p>
            <img src={article.img} referrerPolicy="no-referrer"/>
            <p>{article.description}</p>
            <div className="article-links">
                <a href={article.source} target="_blank">Source</a> 
                <a href={article.page} target="_blank">Page</a>
            </div>
        </div>
    )
}

export default Project;