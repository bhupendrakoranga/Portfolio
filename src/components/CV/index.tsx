/* eslint-disable @next/next/no-img-element */
import { ButtonSecondAlt, Container, Title } from "../../styles/styles";
import { CVContainer, CVContent, CVDescription, Curriculum } from "./styles"
import { FiDownload } from 'react-icons/fi'
import Avatar from '../../../public/avatar.jpg';
import Image from "next/image";

export function CV() {
  return (
    <Container>
      <CVContainer>
        <Title style={{ marginBottom: '3rem' }}>
          <span>
            <FiDownload /> Download
          </span>
        </Title>

        <CVContent>
          <CVDescription>
            <div className="aspas">&ldquo;</div>
            <p>
              Here you can download my resume by clicking the download button.
            </p>
            <div className="profile">
              <Image
                width={64}
                height={64}
                src={Avatar}
                alt="Image"
              />
              <div className="name">
                <h3>Bhupendra Singh Koranga</h3>
                <span style={{ textAlign: "start" }}>Front-End developer</span>
              </div>
            </div>
          </CVDescription>

          <Curriculum>
            <img src="/cv.png" alt="Man showing a resume download button" />
            <a target="_blank" href="https://drive.google.com/file/d/1j2rd5WwYUeFn5Jww3rcPFY8qeaHcHrnt/view?usp=sharing" download>
              <ButtonSecondAlt>
                <b>Download CV</b> <FiDownload size={20} />
              </ButtonSecondAlt>
            </a>
          </Curriculum>
        </CVContent>
      </CVContainer>
    </Container>
  )
}