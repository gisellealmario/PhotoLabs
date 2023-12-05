import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item" key={props.id}>
      <img src={props.imageSource}/>
      <div className="photo-details">
        <img src={props.profile}/>
        <h3>{props.username}</h3>
        <p>{`${props.location.city}, ${props.location.country}`}</p>
      </div>
    </div>
  );
};


export default PhotoListItem;
