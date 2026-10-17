import { profile } from '../data.js'
import { GithubIcon, LinkedinIcon, YoutubeIcon } from './Icons.jsx'

export default function Hero() {
  const { socials } = profile
  return (
    <section id="top" className="hero">
      <p className="mono accent">Hi, my name is</p>
      <h1>{profile.name}.</h1>
      <h3 className="hero-sub">I build things for the web.</h3>
      <p className="hero-text">{profile.tagline}</p>
      <div className="hero-actions">
        <a href="#projects" className="btn btn-solid">See my work</a>
        <a href="#contact" className="btn btn-outline">Get in touch</a>
      </div>
      <div className="hero-socials">
        <a href={socials.github} target="_blank" rel="noreferrer" aria-label="github"><GithubIcon /></a>
        <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="linkedin"><LinkedinIcon /></a>
        {socials.youtube && <a href={socials.youtube} target="_blank" rel="noreferrer" aria-label="youtube"><YoutubeIcon /></a>}
      </div>
    </section>
  )
}
