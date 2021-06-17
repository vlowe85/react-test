import './App.scss'
import Header from './Header'
import SearchForm from './SearchForm'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="o-container">
        <div className="o-layout u-margin-top-large">
          <div className="o-layout__item">
            <SearchForm />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
