import React from 'react';

function ImageButton(props) {
  return (
    <button
      className="image-button"
      style={{ backgroundImage: `url('${props.imageUrl}')` }}
    >
      {props.text}
    </button>
  );
}

export default ImageButton;