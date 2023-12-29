import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import css from './ImageGallery.module.css'


const ImageGallery = ({ images, handleOpenModal }) => {  
        
        return (
            <ul className={css.gallery}>
                {images && images.map((el, index) => <ImageGalleryItem handleClick={handleOpenModal} image={el} key={index} />)}
            </ul>
        )
    }

        
export default ImageGallery