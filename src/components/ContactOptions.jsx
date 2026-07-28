import ContactCard from './ContactCard'
import contact from '../data/contact'

function ContactOptions({ onDark = false }) {
  return (
    <ul className="space-y-4">
      {contact.map((item) => (
        <li key={item.label}>
          <ContactCard {...item} onDark={onDark} />
        </li>
      ))}
    </ul>
  )
}

export default ContactOptions
