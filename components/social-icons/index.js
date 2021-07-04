import Facebook from './facebook.svg'
import Github from './github.svg'
import Linkedin from './linkedin.svg'
import Mail from './mail.svg'
import Twitter from './twitter.svg'
import Youtube from './youtube.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href) return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition duration-200 ease-in-out h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
