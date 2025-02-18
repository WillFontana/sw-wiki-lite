import styled from "styled-components";

export const StyledCharacterCard = styled.div`
  cursor: pointer;

  > p {
    color: #aaaaaa;
    font-size: 16px;
    transition: all ease-in-out 0.2s;
  }

  &:hover {
    > p {
      color: #00ff00;
      text-shadow: 0 0 5px #00ff00, 0 0 10px #00cc00, 0 0 15px #008800;
    }
  }
`;
