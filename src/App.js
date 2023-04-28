// Commons imports
import { useState } from 'react';
import axios from 'axios';
// Styles
import './App.css';
// Componenets
import Cards from './components/Cards/Cards';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About'
// Router-Dom
import { Routes, Route } from 'react-router-dom';
import PathRoutes from './helpers/Routes.helper'
import Detail from './components/Detail/Detail';


function App() {
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== Number(id)))
   }


   return (
      <div className='App'>
         <NavBar onSearch={onSearch} />
         <Routes>
            <Route path={PathRoutes.HOME} element={<Cards characters={characters} onClose={onClose} />} />
            <Route path={PathRoutes.ABOUT} element={<About />} />
            <Route path={PathRoutes.DETAIL} element={<Detail />} />
         </Routes>
      </div>

   );
}

export default App;
