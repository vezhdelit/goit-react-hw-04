import { useEffect, useState } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./api";
import LoadMoreBtn from "./components/LoadMoreBtn";
import ImageModal from "./components/ImageModal";
import { useToggle } from "./hooks/useToggle";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  const [isOpen, close, open] = useToggle(false);

  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSetQuery = (value) => {
    setQuery(value);
    setImages([]);
    setPage(1);
  };

  const handleSetSelectedImage = (image) => {
    setSelectedImage(image);
    open();
  };

  useEffect(() => {
    const getImages = async (page, query) => {
      setErrorMessage("");
      setIsLoading(true);

      try {
        const data = await fetchImages(page, query);

        const newImages = data.results.map((image) => {
          return {
            id: image.id,
            alt_description: image.alt_description,
            description: image.description,
            urls: {
              small: image.urls.small,
              regular: image.urls.regular,
            },
          };
        });

        setImages((prevImages) => [...prevImages, ...newImages]);
        setTotalPages(data.total_pages);
      } catch (error) {
        setErrorMessage(error.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    if (query) {
      getImages(page, query);
    }
  }, [page, query]);

  return (
    <>
      <SearchBar setQuery={handleSetQuery} />
      {images.length > 0 && (
        <ImageGallery
          setSelectedImage={handleSetSelectedImage}
          images={images}
        />
      )}
      <ImageModal
        isOpen={isOpen}
        image={selectedImage}
        onRequestClose={() => close()}
      />
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
      {!isLoading && totalPages > page && <LoadMoreBtn setPage={setPage} />}
      {isLoading && <Loader />}
    </>
  );
}

export default App;
