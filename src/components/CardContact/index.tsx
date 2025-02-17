import Link from 'next/link'
import Image from 'next/image'
import { ButtonAlt, Section } from '../../styles/styles'
import { CardContactContainer, CardContactContent } from './styles'
import { TelegramLogo } from 'phosphor-react'

export function CardContact() {
  return (
    <Section>
      <CardContactContainer>
        <div className='ellipse'>
          <Image
            width={330}
            height={410}
            src="/vectors/circles.svg"
            alt="circles"
          />
        </div>
        <CardContactContent>
          <div className="description">
            <h2>{`Let's talk!`}</h2>
            <p>
              {`I’m always open to new ideas, collaborations, or just a friendly chat. You can reach me on the following platforms, and don’t forget to check out my latest work on Instagram and GitHub. I will do my best to contact you!`}
            </p>
          </div>

          <div className="contact">
            <Image
              width={480}
              height={500}
              src="/contact.svg"
              alt="imagem de contato"
            />
          </div>
        </CardContactContent>

        <Link href={'/contact'}>
          <ButtonAlt>
            Get in touch
            {' '}
            <TelegramLogo
              style={{
                marginBottom: '-0.1rem',
                marginLeft: '0.2rem'
              }}
              size={16}
              weight="bold"
            />
          </ButtonAlt>
        </Link>
      </CardContactContainer>
    </Section>
  )
}
