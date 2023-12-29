import { Component } from 'react'
import SearchBar from './components/Searchbar/Searchbar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import { getAllImages } from './components/api/images'
import Modal from './components/Modal/Modal'
import Loader from './components/Loader/Loader'
import Button from './components/Button/Button'

import css from './App.module.css'
import cssImageItem from './components/Modal/Modal.module.css'


class App extends Component {
    state = {
        images: [],
        isLoading: false,
        error: '',
        page: 1,
        value: '',
        largeImage: null,
    }

    // componentDidMount() {
    //     this.getImages(this.state.page)
    // }
    
    componentDidUpdate(_, prevState) {
        if (this.state.value !== prevState.value) {
            this.getImages(1, this.state.value);
        }

        if (this.state.page !== prevState.page) {
            this.getImages(this.state.page, this.state.value);
        }
    }

    onSubmit = (value) => {
        this.setState({ value: value, page: 1 })
    }

    handleLoadMore = () => {
        this.setState((prev) => ({ page: prev.page + 1 }))
    }

    handleOpenModal = (largeImage) => {
        this.setState({ largeImage: largeImage })
        // console.log(largeImage);
    }

    toggleModal = () => {
		this.setState(() => ({
			largeImage: null,
		}))
	}

    getImages = async (page, value) => { 
        try {
            this.setState({
                isLoading: true,
                error: ''
            })
            const response = await (getAllImages(page, value))
            this.setState((prev) => ({
                images: this.state.page > 1 ? [...prev.images, ...response.hits] : response.hits,
            }))
        } catch (error) {
            this.setState({
                error: error.response.data
            })
        } finally { 
            this.setState({
                isLoading: false,
            })
        }
    }
    
	render() {
		const { images, isLoading, error, largeImage } = this.state;
		return (
			<div className={css.wrapper}>
                <SearchBar onSubmit={this.onSubmit} />
				
                {error && <h1>{error}</h1>}
                {isLoading && <Loader /> }
                <ImageGallery images={images} handleOpenModal={this.handleOpenModal}/>

                {Boolean(images.length) && <Button handleLoadMore={this.handleLoadMore} />}

                {largeImage && <Modal><img className={cssImageItem.modal} src={largeImage.largeImageURL} alt={largeImage.tags} hideModal={this.toggleModal} /></Modal>}
			</div>
		)
	}
}


export default App