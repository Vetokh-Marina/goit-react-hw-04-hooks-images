
import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

import Modal from '../Modal';

export default function ImageGalleryItem({ src, alt, largeImageUrl }) {
    const [showModal, setshowModal] = useState(false);

    const toggleModal = () => {
        setshowModal(!showModal);
    };

    return (
        <li className={s.ImageGalleryItem}>
            <img
                onClick={toggleModal}
                src={src}
                alt={alt}
                className={s.ImageGalleryItemImage}
            />
            {showModal && (
                <Modal onClose={toggleModal} src={largeImageUrl} alt={alt} />
            )}
        </li>
    );
}

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageUrl: PropTypes.string.isRequired,
};