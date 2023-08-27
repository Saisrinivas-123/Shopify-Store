import React from 'react';
import SimpleCarousel from './SimpleCarousel';

const ProductDetailPage: React.FC = () => {
  const productImages = [
    '/Carousels/one.png',
    '/Carousels/two.png',
    '/Carousels/three.png',
    '/Carousels/four.png',
    '/Carousels/five.png',
  ];

  return (
    <div>
      <SimpleCarousel images={productImages} />
    </div>
  );
};

export default ProductDetailPage;
