import { useState } from 'react'
import * as Config from './Config'
import { Paginator, PaginateLinks } from './Paginator'

const HelpList = ({ articles }) => {

    const [page, setPage] = useState(1)
    const [paginatedData, setPaginatedData] = useState(Paginator(articles, 1, Config.ITEMS_PER_PAGE))

    const handlePageClick = (e, newPage) => {
        e.preventDefault()
        setPage(newPage)
        setPaginatedData(Paginator(articles, newPage, Config.ITEMS_PER_PAGE))
    }

    return (
        <div>
            <div className="o-layout  o-layout--spaced">
                {paginatedData.data.map((article, i) => (
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
            </div>
            <hr className="c-divider" />
            <ul className="o-list-inline">
                {PaginateLinks(page, paginatedData.total_pages).map(pageId => (
                    <li className="o-list-inline__item" key={pageId}>
                        <button className={`c-link ${pageId === page ? "active" : ""}`} onClick={(e) => handlePageClick(e, pageId)}>{pageId}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HelpList