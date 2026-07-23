import Container from './Container'

function Footer() {
  return (
    <footer className="border-t border-line bg-paper-muted">
      <Container>
        <div className="flex h-16 items-center justify-between text-sm text-ink-muted">
          <p>&copy; {new Date().getFullYear()} Antonia</p>
          <p>UX/UI Designer</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
