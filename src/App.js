import './styles/App.css';
import movieArray from './data/movies.json'
import Movie from './components/Movie'

const App = () => {

  return (
    <div className="App">
      <h1>Movie List</h1>
      <ul>
        {movieArray.map(movie => {
          return <Movie movie = {movie} key = {movie.id}></Movie>    
        })}
      </ul>
    </div>
  )
};

export default App;
