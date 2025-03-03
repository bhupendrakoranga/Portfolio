import styled, { keyframes } from "styled-components";

const heartBeat = keyframes`
  0% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.3);
  }
  28% {
    transform: scale(1);
  }
  42% {
    transform: scale(1.3);
  }
  70% {
    transform: scale(1);
  }
`;

export const FooterContainer = styled.footer`
  margin-top: 5rem;
  border-top: 1px solid ${(props) => props.theme.gray_easy};
  padding: 1.4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }

  h4 {
    font-size: 13px;
    display: flex;
    color: ${(props) => props.theme.gray};
  }

  p {
    color: ${(props) => props.theme.firstColor};
    background: linear-gradient(90deg, #9442fe, #3378ff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 0 5px;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5px;
    color: ${(props) => props.theme.red};

    svg {
      animation: ${heartBeat} 1.5s infinite;
    }
  }

  .links {
    cursor: pointer;
    display: flex;
    gap: 9px;
    font-size: 1.4rem;
    color: ${(props) => props.theme.gray};

    a {
      &:hover {
        color: ${(props) => props.theme.firstColor};
      }
    }
  }
`;
