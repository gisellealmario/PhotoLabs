import React from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  const { state, actions } = useApplicationData();

  return (
    <div className='home-route'>
      <TopNavigation
        favPhotos={state.favPhotos}
        toggleFavourites={actions.toggleFavourites}
        topics={state.topicData}
        fetchPhotosByTopic={actions.fetchPhotosByTopic}
      />
      <PhotoList
        favPhotos={state.favPhotos}
        photos={state.photoData}
        modalVisible={state.modalVisible}
        selectedPhotoId={state.selectedPhotoId}
        toggleFavourites={actions.toggleFavourites}
        openPhotoModal={actions.openPhotoModal}
        setSelectedPhoto={actions.setSelectedPhoto}
        onClosePhotoDetailsModal={actions.onClosePhotoDetailsModal}
      />
      {state.modalVisible && state.selectedPhotoId && (
        <PhotoDetailsModal
          selectedPhotoId={state.selectedPhotoId}
          photos={state.photoData}
          favPhotos={state.favPhotos}
          toggleFavourites={actions.toggleFavourites}
          setSelectedPhoto={actions.setSelectedPhoto}
          openPhotoModal={actions.openPhotoModal}
          onClosePhotoDetailsModal={actions.onClosePhotoDetailsModal}
        />
      )}
    </div>
  );
};

export default HomeRoute;
