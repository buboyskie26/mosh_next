import React from 'react';

const AddToCart = () => {
  return (
    <div>
      <button
        className="btn btn-active btn-primary"
        onClick={() => console.log('click')}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCart;
