const SearchForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        // queryselector or bind variable
        const queryString = document.querySelector('[name="f-search"]').value
        console.log(queryString)
        if (queryString.length > 0) {
            callApi(queryString)
        }
    }

    const callApi = (query) => {
        console.log("lets find some "+query)
    }

    return (
        <form role="search" onSubmit={handleSubmit}>
            <fieldset>
                <li className="c-form-list__item">
                    <label className="c-form-label" htmlFor="f-combo">
                        What do you need help with?
                    </label>
                    <div className="c-form-combo">
                        <div className="c-form-combo__cell">
                            <input type="text" className="c-form-combo__input c-form-input" placeholder="e.g. Broadband" name="f-search" id="f-search" />
                        </div>
                        <div className="c-form-combo__cell">
                            <button className="c-form-combo__btn c-btn c-btn--primary">Search</button>
                        </div>
                    </div>
                </li>
            </fieldset>
        </form>
    )
}

export default SearchForm