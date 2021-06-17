const HelpList = ({ articles }) => {

    return articles.map((article, i) => (
        <p key={i}>{article.title}</p>
    ))
}

export default HelpList