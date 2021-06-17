import { useState } from 'react'
import HelpList from './HelpList'
import * as Config from './Config'

const SearchForm = () => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

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
        // clear old data
        setData(null)
        setError(null)
        setIsPending(true)
        // call api
        fetch(Config.API + '/search?query=' + query)
        .then(response => {
            if (!response.ok) { // error coming back from server
                setError('Ooops! could not fetch the data')
                // todo: implement some logging / reporting on errors
            }
            response.json().then(json => {
                if (json.results.length === 0) {
                    setError("Sorry, no results found")
                }
                setData(json.results)
            })
        })
        .catch(error => {
            // error may not be suitable to output to users
            setError('Ooops! could not fetch the data')
        })
        .finally(() => setIsPending(false))
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
                            <button className="c-form-combo__btn c-btn c-btn--primary" disabled={isPending}>Search</button>
                        </div>
                    </div>
                </li>
            </fieldset>
            {isPending && <strong className='c-spinner' role='progressbar'>Loading…</strong>}
            {error && <div><p className="u-text-center">{error}</p></div>}
            {data && <HelpList articles={data} />}
        </form>
    )
}

export default SearchForm