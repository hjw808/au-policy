import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'PolicyWatch — Australian Parliamentary Decisions',
  description: 'Cross-referencing 30 years of Australian policy decisions with political donations, declared interests, and corporate tax data.',
  openGraph: {
    title: 'PolicyWatch',
    description: 'Who benefits from Australian policy? 247 decisions cross-referenced with public government data.',
    type: 'website',
  },
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
    >
      {children}
    </Link>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        {/* Navigation — minimal, no backdrop blur, no gradients */}
        <nav className="border-b border-gray-200">
          <div className="max-w-[960px] mx-auto px-6">
            <div className="flex items-center justify-between h-14">
              <Link href="/" className="font-serif text-lg font-bold text-gray-900 hover:text-gray-700">
                PolicyWatch
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <NavLink href="/">Timeline</NavLink>
                <NavLink href="/mp">MPs</NavLink>
                <NavLink href="/money">Money</NavLink>
                <NavLink href="/search">Search</NavLink>
                <NavLink href="/about">About</NavLink>
              </div>
              {/* Mobile: just show search */}
              <div className="md:hidden">
                <NavLink href="/search">Search</NavLink>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="max-w-[960px] mx-auto px-6 py-10">
          {children}
        </main>

        {/* Footer — simple, factual */}
        <footer className="border-t border-gray-200 mt-16">
          <div className="max-w-[960px] mx-auto px-6 py-8">
            <p className="text-xs text-gray-400 leading-relaxed">
              All data from public Australian government records: AEC Transparency Register, APH Hansard, ATO Corporate Tax Transparency, APH Register of Members' Interests. Non-partisan, non-commercial, open source.
            </p>
            <div className="flex gap-6 mt-3 text-xs text-gray-400">
              <Link href="/about" className="hover:text-gray-600">Methodology</Link>
              <Link href="/about#corrections" className="hover:text-gray-600">Corrections</Link>
              <a href="https://github.com/hjw808/au-policy" target="_blank" rel="noopener" className="hover:text-gray-600">Source Code</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
