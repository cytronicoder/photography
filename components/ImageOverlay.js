import styles from '../styles/Overlay.module.css';

const ImageOverlay = ({ src, onClose }) => {
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.overlayContent} onClick={(e) => e.stopPropagation()}>
                <img src={src} alt="Full View" />
                <button className={styles.closeButton} onClick={onClose}>Back</button>
            </div>
        </div>
    );
};

export default ImageOverlay;