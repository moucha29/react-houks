import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import FilmMovie from './FilmMovie'
import { useState } from 'react';

function App() {

return (
<Router>

  <Routes>

<Route index element={<FilmMovie/>}></Route>

  </Routes>


  </Router>


);

}

export default App;