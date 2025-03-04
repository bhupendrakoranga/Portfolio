import Head from 'next/head'
import { Header } from '../components/Header'
import { Links } from '../components/Links'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { CV } from '../components/CV'
import { Description, Section, Title } from '../styles/styles'
import { PageSection } from '../styles/resume'
import { BsFileText } from 'react-icons/bs'

export default function Resume() {
  const resumeData = 'https://drive.google.com/file/d/1j2rd5WwYUeFn5Jww3rcPFY8qeaHcHrnt/view?usp=sharing'
  const previewData = `https://drive.google.com/file/d/1j2rd5WwYUeFn5Jww3rcPFY8qeaHcHrnt/preview`
  return (
    <>
      <Head>
        <title>Resume | Bhupendra Singh Koranga</title>
        <meta
          name="description"
          content="Here you can view or download my resume."
        />
        <meta property="og:title" content="Resume | Bhupendra Singh Koranga" />
        <meta
          property="og:description"
          content="Here you can view or download my resume."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <Title>
          <p>../Resume</p>
          Resume
          <span>
            <BsFileText /> Resume
          </span>
        </Title>
        <Description>
          Here you can see or download my resume.
        </Description>

        <PageSection>
          <iframe
            src={previewData}
            allowFullScreen
            width="740"
            height="780"
            title="Bhupendra Singh Koranga Resume"
          />
          <CV />
        </PageSection>
      </Section>
      <Footer />
    </>
  )
}
