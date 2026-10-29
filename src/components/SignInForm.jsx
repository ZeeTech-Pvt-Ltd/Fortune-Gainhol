'use client'
import { useState } from 'react'
import Link from 'next/link'
import { SUPPORT_EMAIL } from '../data/content'

// Client half of the sign-in page (local submit state); metadata lives
// in src/app/sign-in/page.jsx.
export default function SignInForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="auth-wrap">
      <div className="container">
        <div className="form-card auth-card" data-reveal>
          <h1 style={{ fontSize: 24, marginBottom: 8 }}>Welcome Back</h1>
          <p>Sign in to your Fortune Gainhol account.</p>

          <form onSubmit={handleSubmit}>
            <label className="form-field">
              <span>Email Address *</span>
              <input type="email" name="email" placeholder="you@example.com" autoComplete="email" required />
            </label>
            <label className="form-field">
              <span>Password *</span>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                autoComplete="current-password"
                required
                minLength={8}
              />
            </label>

            {submitted && (
              <div className="auth-note" role="status">
                Account access is activated by our team after your registration is verified. If you
                already registered, check your email for your activation link - or contact{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
              </div>
            )}

            <button className="btn btn--gold btn--block" type="submit">
              Sign In
            </button>
          </form>

          <p className="auth-card__footer">
            New to Fortune Gainhol? <Link href="/sign-up">Create an account</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
