import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import BooksList from './components/BooksList';
import Favorites from './components/Favorites';
import Layout from './components/Layout';

const getLocalStorageData = () => {
  let todos = localStorage.getItem('favorites');

  return todos ? JSON.parse(localStorage.getItem('favorites')) : [];
};

function App() {
  const [favorites, setFavorites] = useState(getLocalStorageData());

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (localStorage.getItem('favorites')) {
      setFavorites(JSON.parse(localStorage.getItem('favorites')));
    }
  }, []);

  const addFavorite = (book) => {
    setFavorites((prevState) => [book, ...prevState]);
  };

  const removeFavorite = (id) => {
    const filteredFavorites = favorites.filter((fav) => fav.id !== id);
    setFavorites(filteredFavorites);
  };

  const checkFavorite = (id) => favorites.some((fav) => fav.id === id);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route
          index
          element={
            <BooksList
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              checkFavorite={checkFavorite}
            />
          }
        />
        <Route
          path='favorites'
          element={
            <Favorites favorites={favorites} removeFavorite={removeFavorite} />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
