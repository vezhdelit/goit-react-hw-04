import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, setSelectedImage }) => {
  return (
    <ul>
      {images.map((image) => (
        <ImageCard
          setSelectedImage={setSelectedImage}
          key={image.id}
          image={image}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
