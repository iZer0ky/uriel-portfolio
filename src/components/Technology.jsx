const Technology = (article) => {
    return(
        <div className="flex flex-col mx-2 min-w-10 place-self-center text-center">
            <img src={article.img} className="flex-auto size-20" referrerPolicy="no-referrer"/>
            <p className="pt-2">{article.name}</p>
        </div>
    )
}

export default Technology;