import ContactCard from './ContactCard'
import contact from '../data/contact'

function ContactOptions() {
  return (
    <ul className="space-y-4">
      {contact.map((item) => (
        <li key={item.label}>
          <ContactCard {...item} />
        </li>
      ))}
    </ul>
  )
}

export default ContactOptions
