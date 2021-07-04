import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import Footer from './Footer'
import Link from './Link'
import MobileNav from './MobileNav'
import SectionContainer from './SectionContainer'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between bg-white dark:bg-gray-700 rounded-lg p-8 my-6">
          <div>
            <Link href="/">
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <img
                    src="/images/logo.png"
                    alt={siteMetadata.headerTitle}
                    className="h-12 dark:hidden"
                  />
                  <img
                    src="/images/logo.png"
                    alt={siteMetadata.headerTitle}
                    style={{ filter: 'brightness(20)' }}
                    className="h-12 hidden dark:block"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
