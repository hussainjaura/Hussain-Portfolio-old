import Section from './Section.jsx'
import { about, stats, profile } from '../data.js'

export default function About() {
  return (
    <Section id="about" num="01" title="About me">
      <div className="about-grid">
        <div>
          {about.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="about-side">
          <div className="avatar">{profile.name.split(' ').map((w) => w[0]).join('')}</div>
          <div className="stats">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
