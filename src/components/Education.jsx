import Section from './Section.jsx'
import { education } from '../data.js'

export default function Education() {
  return (
    <Section id="education" num="05" title="Education">
      <div className="timeline">
        {education.map((e) => (
          <div key={e.school} className="timeline-item">
            <h3>{e.degree}</h3>
            <p className="accent">{e.school}</p>
            <p className="mono muted small">{e.period}</p>
            <ul className="arrow-list">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
