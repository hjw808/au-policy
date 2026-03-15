import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Australian Policy Accountability',
  description: 'Tracking 20 years of Australian parliamentary decisions — who benefited, who donated, and who had conflicts of interest.',
  openGraph: {
    title: 'Australian Policy Accountability',
    description: 'Follow the money behind Australian policy decisions.',
    type: 'website',
  },
}

function NavLink({ href, children }) {
  return (
    <Link href={href} className="text-sm text-gray-400 hover:text-blue-400 transition-colors px-3 py-2 rounded-lg hover:bg-white/5">
      {children}
    </Link>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0e1a]/80 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-3">
                <span className="text-xl">&#127462;&#127482;</span>
                <span className="font-bold text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Policy Accountability
                </span>
              </Link>
              <div className="hidden md:flex items-center gap-1">
                <NavLink href="/">Timeline</NavLink>
                <NavLink href="/money">Follow the Money</NavLink>
                <NavLink href="/mp">MPs</NavLink>
                <NavLink href="/search">Search</NavLink>
                <NavLink href="/about">About</NavLink>
              </div>
              {/* Mobile menu button */}
              <div className="md:hidden">
                <NavLink href="/search">Search</NavLink>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                Built with public data. Not affiliated with any political party.
              </p>
              <div className="flex gap-4 text-sm text-gray-500">
                <Link href="/about" className="hover:text-gray-300">Methodology</Link>
                <a href="https://github.com" target="_blank" rel="noopener" className="hover:text-gray-300">Source Code</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
