import { useState } from 'react';
import Image from 'next/image';
import ImageOverlay from './ImageOverlay';
import styles from '../styles/Gallery.module.css';

const GalleryGrid = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            <div className={styles.grid}>
                {images.map((src, index) => (
                    <div key={index} className={styles.imageWrapper} onClick={() => setSelectedImage(src)}>
                        <Image src={src} alt={`Photo ${index + 1}`} width={200} height={200} />
                    </div>
                ))}
            </div>
            {selectedImage && (
                <ImageOverlay src={selectedImage} onClose={() => setSelectedImage(null)} />
            )}
        </div>
    );
};

export default GalleryGrid;
