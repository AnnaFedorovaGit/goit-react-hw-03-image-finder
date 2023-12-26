import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import css from './ImageGallery.module.css'


const ImageGallery = ({images}) => {    
    return(
        <ul className={css.gallery}>
            {images && images.map((el, index) => <ImageGalleryItem image={el} key={index} />)}
        </ul>
    )
}
     
        
export default ImageGallery