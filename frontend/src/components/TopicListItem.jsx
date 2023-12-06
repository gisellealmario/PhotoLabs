import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  return (
    <ul className="topic-list__item">
      <span key={props.key} className="topic-list__item span">{props.label}</span>
    </ul>
  );
};

export default TopicListItem;
