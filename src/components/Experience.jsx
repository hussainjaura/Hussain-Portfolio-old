import { useState } from 'react'
import Section from './Section.jsx'
import { experience } from '../data.js'

export default function Experience() {
  const [active, setActive] = useState(0)
  const job = experience[active]

  return (
    <Section id="experience" num="02" title="Where I've worked">
      <div className="tabs">
        <div className="tab-list" role="tablist">
          {experience.map((e, i) => (
            <button key={e.company + i} className={i === active ? 'active' : ''} onClick={() => setActive(i)}>
              {e.company}
            </button>
          ))}
        </div>
        <div className="tab-panel">
          <h3>
            {job.title} <span className="accent">@ {job.company}</span>
          </h3>
          <p className="mono muted small">{job.period} · {job.location}</p>
          <ul className="arrow-list">
            {job.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      </div>
    </Section>
  )
}
