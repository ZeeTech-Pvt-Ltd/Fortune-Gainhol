'use client'
import { useEffect } from 'react'

// Replaces the SPA ChunkErrorBoundary - Next serves route errors through
// this boundary instead of a client-side chunk load failure.
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="page-loading" role="alert">
      <p style={{ color: 'var(--muted)', marginBottom: 18 }}>
        Something went wrong loading this page.
      </p>
      <button className="btn btn--gold" type="button" onClick={() => reset()}>
        Reload page
      </button>
    </div>
  )
}
