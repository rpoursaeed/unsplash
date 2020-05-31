import React from "react";

const Imagelist = (props) => {
  return props.images.map((image) => {
    return (
      <img key={image.id} alt={image.description} src={image.urls.regular} />
    );
  });
};
export default Imagelist;
