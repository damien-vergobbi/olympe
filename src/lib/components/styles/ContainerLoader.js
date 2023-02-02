import styled from "styled-components";
import { Colors } from "./Colors";

export const ContainerLoader = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  img {
    background: ${Colors.white}33;
    border: 1px solid ${Colors.white}33;

    padding: 15px 10px;
    object-fit: contain;
    border-radius: 10px;
  }

  p {
    font-size: 1.3rem;
    color: ${Colors.white};
  }
`;
