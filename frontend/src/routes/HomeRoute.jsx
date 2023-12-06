import React from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import { useState } from 'react';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const handleSelection = (photoId) => {
    const isSelected = selectedPhotos.includes(photoId);
    if (isSelected) {
      setSelectedPhotos(selectedPhotos.filter((id) => id !== photoId));
    } else {
      setSelectedPhotos([...selectedPhotos, photoId]);

    }
  };

  return (
    <div className='home-route'>
      <TopNavigation />
      <PhotoList onPhotoSelect={handleSelection} selectedPhotos={selectedPhotos} />
    </div>
  );
};

export default HomeRoute;
