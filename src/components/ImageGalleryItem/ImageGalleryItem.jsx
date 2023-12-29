import css from './ImageGalleryItem.module.css'


const ImageGalleryItem = ({ image, handleClick }) => {     
   return (
      <li className={css.galleryItem} key={image.id} onClick={() => handleClick(image)}>
         <img className={css.image} src={image.webformatURL} alt={image.tags} />
      </li>
    )
}


export default ImageGalleryItem