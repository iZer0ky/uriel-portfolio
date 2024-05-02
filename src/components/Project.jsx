
const Project = (article) => {
    return(
        <div className="flex flex-col border rounded m-5 text-center">
            <p className="text-lg">{article.name}</p>
            <img src={article.img} className="size-full px-5 py-3" referrerPolicy="no-referrer"/>
            <p className="m-3">{article.description}</p>
            <div className="flex justify-around divide-x-2">
                <a href={article.source} target="_blank" className="border-t w-1/2 hover:bg-blue-500">Source</a> 
                <a href={article.page} target="_blank" className="border-t w-1/2 hover:bg-blue-500">Page</a>
            </div>
        </div>
    )
}

export default Project;