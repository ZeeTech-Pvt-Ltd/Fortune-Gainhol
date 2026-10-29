import SignInForm from '@/components/SignInForm'
import { SITE_URL } from '@/data/content'
import { pageMeta } from '@/app/seo'

export const metadata = pageMeta({
  title: 'Sign In - Fortune Gainhol Client Area',
  description: 'Sign in to your Fortune Gainhol account to access your trading dashboard.',
  robots: 'noindex, nofollow',
  canonical: `${SITE_URL}sign-in`,
})

export default function SignInPage() {
  return <SignInForm />
}
