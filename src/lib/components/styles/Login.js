import styled from "styled-components";
import { Colors } from "./Colors";
import { ContainerPdf } from "./Items";

export const LoginError = styled.p`
  color: ${Colors.light};
  max-width: 250px;
  padding: 15px;
  border-radius: 10px;
  margin-top: 20px;
  background-color: ${Colors.tomato}88;
  border: 1px solid ${Colors.tomato}88;
`;

export const ContainerLogin = styled(ContainerPdf)`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);

  background-image: url(${Colors.bgLogin});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  width: 100%;

  form {
    padding: 40px;
    border-radius: 10px;
    background: ${Colors.light}33;
    will-change: backdrop-filter;
    backdrop-filter: blur(8px);
    border: 1px solid ${Colors.light}33;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      margin-bottom: 20px;
    }

    input {
      width: 100%;
      margin: 10px 0;
      width: 40%;
      min-width: 250px;
      max-width: 350px;
      font-size: 1rem;
    }

    button {
      margin-top: 20px;
    }
  }
`;
