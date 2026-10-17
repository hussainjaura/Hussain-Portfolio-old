import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer mono small">
      <p>Built with React &amp; Vite by {profile.name} · {new Date().getFullYear()}</p>
    </footer>
  )
}
