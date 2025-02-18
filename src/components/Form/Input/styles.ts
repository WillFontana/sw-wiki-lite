import styled, { css } from "styled-components";

export const StyledInputWrapper = styled.div<{ $action?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  align-items: flex-start;
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: #e5e5e5;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const StyledInput = styled.input<{ $error: boolean }>`
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(5px);
  ${({ $error }) =>
    $error &&
    css`
      border-color: #ff4444;
    `}
  &:focus {
    border-color: #00aaff;
    box-shadow: 0 0 5px #00aaff, 0 0 20px #0077ff;
  }
`;

export const StyledInputError = styled.span`
  font-size: 12px;
  color: #ff4444;
  text-shadow: 0px 0px 5px #ff0000;
  margin-top: 5px;
`;

export const StyledInputAction = styled.button<{
  $position: "end" | "start";
  $error: boolean;
}>`
  position: absolute;
  bottom: ${({ $error }) => ($error ? "5px" : "-25px")};
  height: 52px;
  display: flex;
  align-items: center;
  ${({ $position }) => ($position === "end" ? "right: 12px;" : "left: 12px;")}
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #00aaff;
    text-shadow: 0 0 5px #00aaff, 0 0 10px #0077ff;
  }
`;
