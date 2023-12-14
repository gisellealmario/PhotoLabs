import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
  const handlePhotoClick = (id) => {
    if (!props.modalVisible) {
      props.openPhotoModal();
      props.setSelectedPhoto(id);
    }
  };


  return (
    <div className="photo-list">
      {props.photos.map((photo) => (
        <PhotoListItem
          alert={props.alert}
          setAlert={props.setAlert}
          key={photo.id}
          id={photo.id}
          PhotoData={photo}
          favPhotos={props.favPhotos}
          toggleFavourites={props.toggleFavourites}
          setModalVisible={props.setModalVisible}
          onClick={handlePhotoClick}
          openPhotoModal={props.openPhotoModal}
          onClosePhotoDetailsModal={props.onClosePhotoDetailsModal}


        />
      ))}
    </div>
  );
};

export default PhotoList;
