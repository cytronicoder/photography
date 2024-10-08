import Footer from '../components/Footer';
import GalleryGrid from '../components/GalleryGrid';
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
    const imagesDir = path.join(process.cwd(), 'public/images');
    const imageFiles = fs.readdirSync(imagesDir);
    const allImages = imageFiles.map(file => `/images/${file}`);

    // Randomly shuffle the images
    for (let i = allImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allImages[i], allImages[j]] = [allImages[j], allImages[i]];
    }

    return {
        props: {
            allImages,
        },
    };
}

const Home = ({ allImages }) => {
    return (
        <div>
            <main>
                <GalleryGrid images={allImages} />
            </main>
            <Footer />
        </div>
    );
};

export default Home;