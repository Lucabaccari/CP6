import { timeline } from '../data/portfolio'

export default function Timeline() {
  return (
    <ol className="timeline">
      {timeline.map((item, index) => (
        <li className={`timeline-item reveal ${item.current ? 'current' : ''} ${item.future ? 'future' : ''}`} key={`${item.date}-${item.title}`}>
          <div className="timeline-marker" aria-hidden="true"><span /></div>
          <div className="timeline-meta">
            <time>{item.date}</time>
            <span>{item.type}</span>
          </div>
          <div className="timeline-copy">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          <span className="timeline-count" aria-hidden="true">0{index + 1}</span>
        </li>
      ))}
    </ol>
  )
}
