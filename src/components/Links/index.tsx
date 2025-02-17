import Link from 'next/link'
import { Icons } from './styles'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

export function Links() {
  return (
    <>
      <Icons>
        <Link href={'https://github.com/bhupendrakoranga'}>
          <a target="_blank" aria-label="Link to Github">
            <FiGithub />
          </a>
        </Link>
        <Link href={'https://www.linkedin.com/in/bhupendra-koranga-6124471bb/'}>
          <a target="_blank" aria-label="Link to Linkedin">
            <FiLinkedin />
          </a>
        </Link>
        <Link href={'https://api.whatsapp.com/send?phone=7505331236'}>
          <a target="_blank" aria-label="Link to contact via whatsapp">
            <FaWhatsapp />
          </a>
        </Link>
        <Link href={'https://www.instagram.com/bhupendra_koranga_07/'}>
          <a target="_blank" aria-label="Link to Instagram">
            <FaInstagram />
          </a>
        </Link>
        <div className="barra"></div>
      </Icons>
    </>
  )
}
