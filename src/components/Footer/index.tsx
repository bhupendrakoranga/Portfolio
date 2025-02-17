import { FooterContainer } from './styles';
import { IoMdHeart } from "react-icons/io";

export function Footer() {
  return (
    <FooterContainer>
      <h4>
        Made with <span><IoMdHeart /></span> by <p>Bhupendra Singh Koranga</p>
      </h4>
    </FooterContainer>
  );
}
