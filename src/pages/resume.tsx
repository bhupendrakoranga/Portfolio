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
  const resumeData = 'https://www.canva.com/design/DAGfQjny0WE/ltr7cJzdhrtGHRGDrwr7vg/edit?utm_content=DAGfQjny0WE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
  const previewData = `${resumeData.substr(
    0,
    resumeData.lastIndexOf('/') + 1
  )}view?embed`

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
