import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, src, alt }) {
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            window.addEventListener('keydown', handleKeyDown);
            isFirstRender.current = false;
            return;
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            onClose();
        }
    };

    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };
    return createPortal(
        <div className={s.Overlay} onClick={handleBackdropClick}>
            <div className={s.Modal}>
                <img src={src} alt={alt} className={s.ImageGalleryItemImage} />
            </div>
        </div>,
        modalRoot,
    );
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Modal;