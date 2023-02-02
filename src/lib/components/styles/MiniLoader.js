import styled from "styled-components";
import { Colors } from "./Colors";
import { spin } from "./KeyFrames";

export const MiniLoader = styled.div`
  border: 3px solid ${Colors.secondaryDarker};
  border-top: 3px solid ${Colors.blue};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin: 20px 0;
  animation: ${spin} 1s linear infinite;
`;
