import {Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home'
import SingleMovie from './SingleMovie';
import  Error from './Error';


function App() {
  return (
    <>
      <Routes>
        <Route path='/movie-app' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='movie-app/movie/:id' element={<SingleMovie />} />
        <Route path='movie/:id' element={<SingleMovie />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
