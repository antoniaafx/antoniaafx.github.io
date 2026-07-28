import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

// Hover/tap feedback is plain CSS (transform + transition), not Framer
// Motion — it's simpler, avoids ref-forwarding edge cases with react-router's
// Link, and the reduced-motion media query in index.css already disables it
// for users who ask for less motion.
const BASE =
  'inline-flex min-h-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-control font-medium ' +
  'cursor-pointer transition-[transform,background-color,color,border-color] duration-150 ease-out ' +
  'hover:scale-[1.015] active:scale-[0.98] ' +
  'disabled:opacity-50 disabled:pointer-events-none disabled:hover:scale-100'

const VARIANTS = {
  // The site's primary-interactive color (rich plum) — reserved for the
  // main call-to-action on a screen. Brightens on hover to
  // --color-raspberry (the accent system's energetic counterpart) rather
  // than darkening — an intentional shift from the conventional "darken
  // on hover" pattern, so the primary CTA reads as coming alive under the
  // cursor instead of receding. 5.1:1 under paper-colored text, clearing
  // the 4.5:1 minimum with room to spare.
  primary: 'bg-accent text-paper hover:bg-raspberry',
  secondary: 'border border-line text-ink hover:border-ink hover:bg-paper-muted',
  ghost: 'text-ink hover:text-accent-dark underline-offset-4 hover:underline',
  // For use on bg-ink sections (e.g. a closing Contact CTA) where the other
  // variants lose contrast against a dark background.
  inverse: 'bg-paper text-ink hover:bg-paper-muted',
}

const SIZES = {
  sm: 'text-sm px-4 py-2',
  md: 'text-[0.9375rem] px-5 py-2.5',
  lg: 'text-base px-6 py-3',
}

const Button = forwardRef(function Button(
  { to, href, variant = 'primary', size = 'md', className = '', children, ...props },
  ref
) {
  const classes = `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`

  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button ref={ref} type={props.type ?? 'button'} className={classes} {...props}>
      {children}
    </button>
  )
})

export default Button
