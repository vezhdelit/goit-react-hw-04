const ImageCard = ({ setSelectedImage, image }) => {
  const handleClick = () => {
    setSelectedImage(image);
  };
  return (
    <li onClick={handleClick}>
      <img src={image.urls.small} alt={image.alt_description} />
    </li>
  );
};

export default ImageCard;
