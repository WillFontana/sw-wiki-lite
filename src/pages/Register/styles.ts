import styled from "styled-components";
import { StyledInputWrapper } from "../../components/Form/Input/styles";

export const StyledRegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: radial-gradient(circle, #0d0d0d, #111111);
  color: white;

  h2 {
    font-family: "Audiowide", sans-serif;
    color: #ffe81f;
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

export const StyledRegisterForm = styled.form`
  background: rgba(255, 255, 255, 0.05);
  padding: 32px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  max-width: 500px;
  width: 100%;
  text-align: center;
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.1);
  ${StyledInputWrapper} {
    margin-top: 20px;
  }
`;

export const StyledRegisterButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 6px;
  background: linear-gradient(90deg, #00aaff, #0066ff);
  color: white;
  text-transform: uppercase;
  box-shadow: 0px 4px 10px rgba(0, 170, 255, 0.5);
  transition: 0.3s;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  &:hover {
    background: linear-gradient(90deg, #0066ff, #00aaff);
    box-shadow: 0px 0px 15px rgba(0, 170, 255, 0.8);
  }

  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
`;
