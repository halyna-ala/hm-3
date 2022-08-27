import { PropTypes } from 'prop-types';
import { ImageGalleryStyle} from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

export const ImageGallery =({images, openModal})=> (
				<ImageGalleryStyle>
					{images.map(({ id, webformatURL, tags, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        src={webformatURL}
        alt={tags}
        largeImageURL={largeImageURL}
        openModal={openModal}
      />
    ))}
				</ImageGalleryStyle>
			)

ImageGallery.propTypes = {
	images: PropTypes.object.isRequired,
	id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
