import Contact from '../Contact/Contact'
import css from './ContactList.module.css'


const ContactList = ({ contacts, filter, toDeleteContact}) => {     
    return (
        <ul className={css.contactsList}>
            {contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())).map(el => <Contact contact={el} key={el.id} toDeleteContact={toDeleteContact} />)}
        </ul>
    )
}


export default ContactList
