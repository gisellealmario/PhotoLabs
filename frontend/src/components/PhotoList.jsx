import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from '../mocks/photos';


const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {photos.map((photo, index) => (
        <PhotoListItem key={index} photo={photo} imageSource={photo.urls.regular} />
      ))}
    </ul>
  );
};

export default PhotoList;
