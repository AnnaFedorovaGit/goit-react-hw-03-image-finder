import css from './Button.module.css'


const Button = ({handleLoadMore}) => {    
    return(
        <>
            <button type='button' className={css.button} onClick={handleLoadMore}>Load more</button>
        </>
    )
}


export default Button