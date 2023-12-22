import { Component } from 'react'
import css from './Filter.module.css'


class Filter extends Component {
    handleChange = ({ target: { value } }) => {
        this.props.filterContact(value)
    }

    render() {
        return (
            <div className={css.wrapper}>
                <p className={css.text}>Find contact by name:</p>
                <input type="text" name="filter" className={css.input} onChange={this.handleChange} />
            </div>
        )
    }
}


export default Filter