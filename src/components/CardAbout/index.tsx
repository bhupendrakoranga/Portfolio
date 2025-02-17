import Image from "next/image";
import Link from "next/link";
import { Button, Container, ButtonAlternatives } from "../../styles/styles";
import { AboutContainer } from "./styles";
import { TelegramLogo } from "phosphor-react";

export function About() {
  return (
    <Container>
      <AboutContainer>
        <div className="AboutImg">
          <Image
            width={500}
            height={500}
            className="AboutImg"
            src="/about.svg"
            alt="Imagem de perfil"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <h2>About me</h2>
            <p>
              I'm a passionate front-end developer with expertise in designing
              and building high-quality web applications. My focus is on
              crafting intuitive user interfaces and seamless functionality
              using modern frameworks like React.js and Next.js.
              <br />
              Feel free to explore my portfolio to learn more about my skills,
              experience, and latest projects.
            </p>
          </div>

          <div className="aboutButton">
            <Link href={"/contact"}>
              <a>
                <Button>
                  Get in touch
                  <TelegramLogo
                    style={{
                      marginBottom: "-0.1rem",
                      marginLeft: "0.2rem",
                    }}
                    size={16}
                    weight="bold"
                  />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </AboutContainer>
    </Container>
  );
}
