import React from "react";
import "../styles/PhotoListItem.scss";
import App from "../App";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item" key={props.id}>
      <img src={props.imageSource} className="photo-list__image" />
      <img src={props.profile} className="photo-list__user-profile" />
      <div className="photo-list__user-info" >
        <h3>{props.username}</h3>
        <p className="photo-list__user-location">{`${props.location.city}, ${props.location.country}`}</p>
      </div>
    </div>
  );
};


export default PhotoListItem;
