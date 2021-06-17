const Paginator = (items, pageNumber, itemsPerPage) => {
    var page = pageNumber || 1,
        perPage = itemsPerPage || 10,
        offset = (pageNumber - 1) * itemsPerPage,
        paginatedItems = items.slice(offset).slice(0, itemsPerPage),
        totalPages = Math.ceil(items.length / itemsPerPage)
    return {
        page: page,
        per_page: perPage,
        pre_page: page - 1 ? page - 1 : null,
        next_page: (totalPages > page) ? page + 1 : null,
        total: items.length,
        total_pages: totalPages,
        data: paginatedItems
    }
}

export default Paginator