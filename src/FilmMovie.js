import data from './data'
import {useState} from 'react'
import MovieLists from './Components/MovieLists';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './Components/AddMovie';
import Filtre from './Components/Filtre';
import App from './App'
import index from './index';


function Router() {
  const [search,setSearch] = useState('');
  const [rate, setRate] = useState(0)
  const [movies,setMovies] = useState(data)
  const AddNewMovie = (kk)=>{
      setMovies([...movies, kk])
  }
  return (
    <div className="App">
      <div style={{display:'flex',justifyContent:'space-around',gap:'40px',margin:'40px 0px'}}>
        <AddMovie AddNewMovie={AddNewMovie}/>
        <Filtre setSearch={setSearch} setRate={setRate}></Filtre>
      </div>
      <MovieLists movies={movies.filter(movie=> movie.title.toLocaleLowerCase().trim().includes(search) && movie.rating>= rate)} />
    </div>
  );
}

export default Router;