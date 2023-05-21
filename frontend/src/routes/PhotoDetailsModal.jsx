import React from "react";

import "../styles/PhotoDetailsModal.scss";
import PhotoList from "../components/PhotoList";
import PhotoListItem from "../components/PhotoListItem";

export const PhotoDetailsModal = (props) => {

  const {onClose, clickedPhoto, photos} = props;

  // console.log(clickedPhoto);  // TEST to see if component receiving clickedPhoto data >> WORKING
  console.log(photos); // TEST to see if component receiving all photo data >> WORKING

  const PhotoListComponentsArr = Array.isArray(photos) && photos.map((photo) => {
    return (
      <PhotoListItem
        id={photo.id}
        key={photo.id}
        username={photo.user.username}
        imageSource={photo.urls.thumb}
        description={photo.description}
        className=".photo-details-modal--images"
        isFav={favPhotos[photo.id]} // Boolean indicating whether photo is favourited based on whether photo.id exists in favPhotos obj
        onFavClick={() => addFavPhoto(photo.id)} // Pass function with photo.id as arg to addFavPhoto
        onUnFavClick={() => removeFavPhoto(photo.id)} // Pass function with photo.id as arg to removeFavPhoto
        onPhotoClick={onPhotoClick}
      />
    )
  });

  // console.log(PhotoListComponentsArr);
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal--close-button" onClick={onClose}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
          <g clipPath="url(#clip0_428_287)">
            <path
              d="M14.0625 3.9375L3.9375 14.0625"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              />
            <path
              d="M14.0625 14.0625L3.9375 3.9375"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
      
            </clipPath>
          </defs>
        </svg>
      </button>
      <img src={clickedPhoto.imageSource} alt={clickedPhoto.description} className="photo-details-modal--image"/>
      <h3 className=".photo-details-modal--header">Similar Photos</h3>
      <PhotoList>{PhotoListComponentsArr}</PhotoList>
    </div>
  );
};

export default PhotoDetailsModal;
