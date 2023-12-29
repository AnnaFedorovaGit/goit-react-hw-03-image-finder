import { Component } from 'react'
import css from './Modal.module.css'


class Modal extends Component {

    handleEsc = (e) => {
        if (e.code === 'Escape') {
            this.props.hideModal();
        }
    }
    
    componentDidMount = () => {
        document.addEventListener('keydown', this.handleEsc)
    }

    componentWillUnmount = () => {
        document.removeEventListener('keydown', this.handleEsc)
    }
    
    render() {
        return (
            <div className={css.overlay} onClick={this.props.hideModal}>
                <div className={css.modal}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
    
    
export default Modal