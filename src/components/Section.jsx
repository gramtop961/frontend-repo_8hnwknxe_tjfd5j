// Section wrapper with consistent spacing and optional title/description
export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {(title || subtitle) && (
          <div className="mb-10">
            {title && <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">{title}</h2>}
            {subtitle && <p className="mt-2 text-gray-600 max-w-2xl">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
