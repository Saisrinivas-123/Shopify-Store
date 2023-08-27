import React from 'react';
import SimpleCarousel from './SimpleCarousel';

const ProductDetailPage: React.FC = () => {
  const productImages = [
    '../../public/Carousels/one.png',
    '../../public/Carousels/two.png',
    '../../public/Carousels/three.png',
    '../../public/Carousels/four.png',
    '../../public/Carousels/five.png',
  ];

  return (
    <div>
      <SimpleCarousel images={productImages} />
    </div>
  );
};

export default ProductDetailPage;
