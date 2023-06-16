import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
function MyImageGallery({ images }) {
  const galleryItems = images.map((image) => ({
    original: image,
  }));

  const galleryOptions = {
    showPlayButton: false, // Play düğmesini gizler
    showFullscreenButton: false, // Fullscreen düğmesini gizler
  };

  return <ImageGallery items={galleryItems} {...galleryOptions} />;
}

export default MyImageGallery;
