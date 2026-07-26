import Section from './Section'
import HeroLaptop from './HeroLaptop'

// HeroLaptop now owns all of the hero's real content (it lives inside the
// laptop screen) and its own mount-triggered entrance animation — Hero
// itself is just the section wrapper.
function Hero() {
  return (
    <Section animate={false} spacing="hero">
      <HeroLaptop />
    </Section>
  )
}

export default Hero
