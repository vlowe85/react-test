const HelpList = ({ articles }) => {

    return (
        <div>
            <div className="o-layout  o-layout--spaced">
                {articles.map((article, i) => (
                    <div className="o-layout__item  u-width-1/2  u-width-1/4@large" key={i} >
                        <article className="c-tile" role="listitem">
                            <div className="c-tile__content">
                                <div className="c-tile__body">
                                    <p className="c-tile__title c-text-lead u-margin-bottom-none">{article.title}</p>
                                    {/* <p className="c-text-body">{article.description}</p> */}
                                </div>
                            </div>
                        </article>
                    </div>
                ))}
                <hr className="c-divider" />
            </div>
        </div>
    );
}

export default HelpList