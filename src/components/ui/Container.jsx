const WIDTHS = {
  narrow: 'max-w-3xl', // body copy / prose
  content: 'max-w-6xl', // default page width
  wide: 'max-w-7xl', // full-bleed layouts, galleries
}

function Container({ size = 'content', className = '', children, ...props }) {
  return (
    <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${WIDTHS[size]} ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Container
