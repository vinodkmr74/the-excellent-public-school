import React, { useState } from "react";
import { jsonData } from "../json/home";

export default function Gallery({ limit }) {
  const [selectedImage, setSelectedImage] = useState(null);

    const galleryImages = limit
    ? jsonData.gallery.slice(0, limit)
    : jsonData.gallery;

  return (
    <>
      <div className="homeGalleryImg">
        {galleryImages.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt={`Gallery ${item.id}`}
            onClick={() => setSelectedImage(item.image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="imageModal">
          <button className="closeBtn" onClick={() => setSelectedImage(null)}>
            ✕
          </button>

          <img src={selectedImage} alt="Zoom" className="zoomImage" />
        </div>
      )}
    </>
  );
}
