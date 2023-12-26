import { Component } from 'react'
import css from './Loader.module.css'


class Loader extends Component {    
	render() { 
		return (
			<div className={css.loader}>
				<p>loader</p>
			</div>
		)
	}
}

    
export default Loader