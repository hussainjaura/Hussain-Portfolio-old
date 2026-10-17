import Section from './Section.jsx'
import { projects } from '../data.js'
import { GithubIcon, ExternalIcon } from './Icons.jsx'

function Links({ p }) {
  return (
    <div className="project-links">
      {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" aria-label="source code"><GithubIcon /></a>}
      {p.live && <a href={p.live} target="_blank" rel="noreferrer" aria-label="live demo"><ExternalIcon /></a>}
    </div>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <Section id="projects" num="03" title="Things I've built">
      {/* big cards for the main ones */}
      <div className="featured">
        {featured.map((p) => (
          <article key={p.name} className="feature-card">
            <p className="mono accent small">{p.tag}</p>
            <h3>{p.name}</h3>
            <p className="feature-desc">{p.desc}</p>
            <ul className="arrow-list">
              {p.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
            <ul className="tech-list mono">
              {p.tech.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <Links p={p} />
          </article>
        ))}
      </div>

      <h3 className="sub-title">Other projects</h3>
      <div className="project-grid">
        {rest.map((p) => (
          <article key={p.name} className="card">
            <div className="card-top">
              <span className="folder">{'</>'}</span>
              <Links p={p} />
            </div>
            <h4>{p.name}</h4>
            <p className="mono accent small">{p.tag}</p>
            <p className="muted">{p.desc}</p>
            <ul className="tech-list mono small">
              {p.tech.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </article>
        ))}
      </div>
      <div className="center">
        <a className="btn btn-outline" href="https://github.com/hussainjaura" target="_blank" rel="noreferrer">More on GitHub</a>
      </div>
    </Section>
  )
}
