import css from './Modal.module.css'


const Modal = () => {   
    return (
        <div className={css.overlay}>
            <div className={css.modal}>
                <img className={css.image} src="" alt="" />
            </div>
        </div>
    )
}


export default Modal