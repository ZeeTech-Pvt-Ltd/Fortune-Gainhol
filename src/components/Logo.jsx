import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo${light ? ' logo--light' : ''}`} aria-label="Fortune Gainhol - home">
      {/* The F glyph comes from CSS so the visible label matches the accessible name */}
      <span className="logo__mark" aria-hidden="true" />
      <span className="logo__word">Fortune Gainhol</span>
    </Link>
  )
}
