import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ pictures, bigImage }) => {
  return (
    <ul className={css.ImageGallery}>
      {pictures.map(({ id, webformatURL, largeImageURL }) => {
        const handleItemClick = () => bigImage(largeImageURL);
        return (
          <ImageGalleryItem
            key={id}
            image={webformatURL}
            onClick={handleItemClick}
          />
        );
      })}
    </ul>
  );
};
ImageGallery.propTypes = {
  id: PropTypes.shape({
    id: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
  pictures: PropTypes.array.isRequired,
  bigImage: PropTypes.func.isRequired,
};

export default ImageGallery;
