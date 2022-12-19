import React from 'react';

function ImageButton(props) {
  return (
    <button
      className="image-button"
      style={{ backgroundImage: `url('${props.imageUrl}')` }}
    >
      TEst
    </button>
  );
}

export default ImageButton;