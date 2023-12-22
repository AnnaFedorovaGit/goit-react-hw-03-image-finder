import { Component } from 'react'
import css from './ContactForm.module.css'


class ContactForm extends Component {    
    state = {
		name: '',
		number: ''
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createContact(e.target[0].value, e.target[1].value);

		e.target[0].value = '';
		e.target[1].value = '';	
    }
    
	render() {
		return (
			<form onSubmit={this.handleSubmit} className={css.form}>
                <div className={css.wrapper}>
					<label className={css.formLabel}>
						Name
                    </label>
                    <input type="text" name="name" className={css.formInput} required /> 
                </div>
                <div className={css.wrapper}>
					<label className={css.formLabel}>
						Phone
                    </label>
                    <input type="tel" name="number" className={css.formInput} required /> 
				</div>
                <button type='submit' className={css.btn}>
					Add contact
				</button>
			</form>
		)
	}
}

    
export default ContactForm