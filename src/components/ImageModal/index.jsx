import Modal from "react-modal";

const ImageModal = ({ image, isOpen, onRequestClose }) => {
  if (!image || !image.urls.regular || !image.alt_description) return null;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
    >
      <img src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  );
};

export default ImageModal;
