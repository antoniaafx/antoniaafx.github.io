import ContactCard from './ContactCard'
import contact from '../data/contact'

// Email and LinkedIn are two separate, equally-weighted actions — always
// stacked, at every breakpoint, rather than a two-column row on desktop.
// A side-by-side pair reads as one wide unit that fights the note for
// horizontal space; stacked cards stay a compact column that belongs to
// the (narrower) left side of the section.
function ContactOptions({ onDark = false }) {
  return (
    <ul className="flex flex-col gap-4">
      {contact.map((item) => (
        <li key={item.label}>
          <ContactCard {...item} onDark={onDark} />
        </li>
      ))}
    </ul>
  )
}

export default ContactOptions
