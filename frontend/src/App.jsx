import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import './App.scss';


const App = () => {
  // const photos = Array.from({ length: 3 });

  return (
    <div className="App">
      {/* {photos.map((_, index) => (
        <PhotoListItem key={index} {...sampleDataForPhotoListItem} />
      ))} */}
      <PhotoList  />
    </div>
  );
};

export default App;