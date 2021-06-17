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

const PaginateLinks = (currentPage, maxPage) => {
    var current = currentPage,
        last = maxPage,
        delta = 2,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;
    for (let i = 1; i <= last; i++) {  
        if (i === 1 || i === last || ((i >= left) && (i < right))) {
            range.push(i);
        }
    }
    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1)
            } else if (i - l !== 1) {
                rangeWithDots.push('...')
            }
        }
        rangeWithDots.push(i)
        l = i;
    }
    return rangeWithDots
}

export { Paginator, PaginateLinks }