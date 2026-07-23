function Hero({ title, subtitle }) {
  return (
    <div className="max-w-3xl">
      <h1 className="text-display-md sm:text-display-lg">{title}</h1>
      {subtitle && <p className="mt-4 text-lg text-ink-soft sm:text-xl">{subtitle}</p>}
    </div>
  )
}

export default Hero
