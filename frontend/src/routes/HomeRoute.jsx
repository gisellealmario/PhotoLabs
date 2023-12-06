import React from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import FavBadge from 'components/FavBadge';
import { useState } from 'react';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const [alert, setAlert] = useState(false);
  const [favPhotos, setfavPhotos] = useState([]);

  const toggleFavourites = (id) => {
    if (favPhotos.includes(id)) {
      setfavPhotos((prev) => {
        return [...prev].filter((tempId) => tempId !== id);
      });
    } else {
      setfavPhotos((prev) => {
        return [...prev, id];
      });
    }
  };


  return (
    <div className='home-route'>
      <TopNavigation
        alert={alert}
        setAlert={setAlert}
        favPhotos={favPhotos}
        toggleFavourites={toggleFavourites}
      />
      <PhotoList
        alert={alert}
        setAlert={setAlert}
        favPhotos={favPhotos}
        toggleFavourites={toggleFavourites}
      />
    </div>
  );
};

export default HomeRoute;
