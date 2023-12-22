import css from './Contact.module.css'


const Contact = ({ contact, toDeleteContact }) => {   
    return (
        <li className={css.item}>
            <p className={css.contactName}>{contact.name}: {contact.number}</p>
            <button type='button' className={css.btn} onClick={() => toDeleteContact(contact.id)}>Delete</button>
        </li>
    )
}


export default Contact