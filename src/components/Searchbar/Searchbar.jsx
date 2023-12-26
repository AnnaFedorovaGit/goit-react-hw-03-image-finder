import css from './Searchbar.module.css'


const Searchbar = ({ onSubmit }) => { 

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target[1].value.toLowerCase();
        onSubmit(value);
    }

    return (
        <header className={css.searchbar}>
            <form className={css.form} onSubmit={handleSubmit}>
                <button type="submit" className={css.button}>
                    <span className={css.buttonLabel}>Search</span>
                </button>
                <input
                    className={css.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    )
}


export default Searchbar