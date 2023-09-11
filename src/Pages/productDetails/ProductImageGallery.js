// ProductImageGallery.js
import React, { useState } from 'react';
import {useParams} from "react-router-dom"

function ProductImageGallery({ source }) {
    const {itemId} = useParams()
    const thisProduct = source.find(item => item.id === itemId)
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % thisProduct.img.length);
    };

    const previousImage = () => {
        setCurrentImageIndex(
        (currentImageIndex - 1 + thisProduct.img.length) % thisProduct.img.length
        );
    };

  return (
    <div className="product-image-gallery">
      <div className="gallery-image">
        <img src={thisProduct.img[currentImageIndex]} alt="Product" />
        <div className="gallery-controls">
          <button className="prev" onClick={previousImage}>&lt;</button>
          <button className="next" onClick={nextImage}>&gt;</button>
        </div>
      </div>
      
    </div>
  );
}

export default ProductImageGallery;
