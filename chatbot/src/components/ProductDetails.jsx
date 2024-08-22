
import React from 'react';

const ProductDetail = ({ productName, productCode, description, productUrl, imageUrl }) => {
  return (
    <div className="flex flex-col space-y-4 p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg">
      {imageUrl && (
        <div className="flex items-center space-x-4">
          <img
            src={imageUrl}
            alt={productName || 'Product Image'}
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div>
            {productName && (
              <h2 className="text-xl font-bold text-gray-900">
                {productName}
              </h2>
            )}
            {productCode && (
              <p className="text-sm text-gray-500">
                Product Code: {productCode}
              </p>
            )}
          </div>
        </div>
      )}
      {description && (
        <p className="text-gray-700">
          {description}
        </p>
      )}
      {productUrl && (
        <a
          href={productUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Product
        </a>
      )}
    </div>
  );
};

export default ProductDetail;
