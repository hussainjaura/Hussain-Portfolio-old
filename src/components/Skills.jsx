import Section from './Section.jsx'
import { skills } from '../data.js'

export default function Skills() {
  return (
    <Section id="skills" num="04" title="Skills & tools">
      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s.group} className="card">
            <h4>{s.group}</h4>
            <ul className="chips">
              {s.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
