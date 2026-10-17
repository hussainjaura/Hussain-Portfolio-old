export default function Section({ id, num, title, children }) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">
        <span className="mono">{num}.</span> {title}
      </h2>
      {children}
    </section>
  )
}
