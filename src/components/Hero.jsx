import Section from './Section'
import HeroCanvas from './HeroCanvas'
import EnvironmentalArtwork from './EnvironmentalArtwork'

// HeroCanvas owns all of the hero's real content and its own mount-
// triggered entrance animation — Hero itself is just the section wrapper.
// The artwork sits in Section's own background layer, behind HeroCanvas —
// HeroCanvas's card is opaque (bg-paper) and completely unmodified, so the
// mural only ever shows in the section's margins around the card, never
// through or over it, and can't interact with the card's cursor-reveal.
function Hero() {
  return (
    <Section animate={false} spacing="hero" artwork={<EnvironmentalArtwork variant="hero" />}>
      <HeroCanvas />
    </Section>
  )
}

export default Hero
