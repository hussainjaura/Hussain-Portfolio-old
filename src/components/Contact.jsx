import Section from './Section.jsx'
import { profile } from '../data.js'
import { GithubIcon, LinkedinIcon, YoutubeIcon, MailIcon, FileIcon } from './Icons.jsx'

export default function Contact() {
  const { socials } = profile
  const cvUrl = profile.cv ? `${import.meta.env.BASE_URL}${profile.cv}` : ''

  return (
    <Section id="contact" num="06" title="Get in touch">
      <div className="contact">
        <p>
          I'm currently looking for full stack engineering roles. Whether you've got a job, a question or just want to say hi,
          my inbox is always open.
        </p>
        <a className="btn btn-solid big" href={`mailto:${profile.email}`}><MailIcon /> Say hello</a>

        <div className="contact-cards">
          {cvUrl ? (
            <a className="card contact-card" href={cvUrl} target="_blank" rel="noreferrer" download>
              <FileIcon /> <span>Download CV</span>
            </a>
          ) : (
            <div className="card contact-card disabled"><FileIcon /> <span>CV coming soon</span></div>
          )}
          <a className="card contact-card" href={socials.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon /> <span>LinkedIn</span></a>
          <a className="card contact-card" href={socials.github} target="_blank" rel="noreferrer"><GithubIcon /> <span>GitHub</span></a>
          {socials.youtube ? (
            <a className="card contact-card" href={socials.youtube} target="_blank" rel="noreferrer"><YoutubeIcon /> <span>YouTube</span></a>
          ) : (
            <div className="card contact-card disabled"><YoutubeIcon /> <span>YouTube soon</span></div>
          )}
        </div>
      </div>
    </Section>
  )
}
