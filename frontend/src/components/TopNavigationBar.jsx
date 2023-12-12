import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {
 
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__right">
        <TopicList />
        <FavBadge
          selected={props.favPhotos.length > 0}
          displayAlert={props.favPhotos.length > 0}
        />
      </div>
    </div>
  );
};

export default TopNavigation;