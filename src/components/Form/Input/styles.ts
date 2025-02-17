import styled from "styled-components";

export const StyledInputWrapper = styled.div<{ $action?: boolean }>``;

export const StyledLabel = styled.label``;

export const StyledInput = styled.input``;

export const StyledInputError = styled.span``;

export const StyledInputAction = styled.button<{
  $position: "end" | "start";
}>``;
