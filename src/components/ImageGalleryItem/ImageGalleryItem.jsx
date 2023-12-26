import css from './ImageGalleryItem.module.css'


const ImageGalleryItem = ({ image }) => {     
   return (
      <li className={css.galleryItem} key={image.id}>
         <img className={css.image} src={image.webformatURL} alt={image.tags} />
      </li>
    )
}


export default ImageGalleryItem