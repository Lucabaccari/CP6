export default function SectionHeading({ id, number, eyebrow, title, description }) {
  return (
    <div className="section-heading reveal">
      <div className="section-index" aria-hidden="true">{number}</div>
      <div>
        <p className="eyebrow">// {eyebrow}</p>
        <h2 id={id}>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
    </div>
  )
}
