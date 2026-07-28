import Section from './Section'
import HeroCanvas from './HeroCanvas'

// HeroCanvas owns all of the hero's real content and its own mount-
// triggered entrance animation — Hero itself is just the section wrapper.
function Hero() {
  return (
    <Section animate={false} spacing="hero">
      <HeroCanvas />
    </Section>
  )
}

export default Hero
