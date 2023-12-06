import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item" key={props.id}>
      <PhotoFavButton />
      <img src={props.imageSource} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={props.photo.user.profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info" >
          <h3>{props.photo.user.name}</h3>
          <p className="photo-list__user-location">{`${props.photo.location.city}, ${props.photo.location.country}`}</p>
        </div>
      </div>
    </div>
  );
};


export default PhotoListItem;
