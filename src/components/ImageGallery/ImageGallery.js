import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

export default function ImageGallery({ images }) {
    return (
        <ul className={s.ImageGallery}>
            {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem
                    key={id}
                    src={webformatURL}
                    largeImageUrl={largeImageURL}
                    alt={tags}
                />
            ))}
        </ul>
    );
}

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
};