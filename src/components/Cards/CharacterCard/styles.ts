import styled from "styled-components";

export const StyledCharacterCard = styled.div`
  cursor: pointer;

  > p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.textSizes.normal};
    transition: all ease-in-out 0.2s;
  }

  &:hover {
    > p {
      color: ${({ theme }) => theme.colors.glowGreen};
      text-shadow: 0 0 5px ${({ theme }) => theme.colors.glowGreen},
        0 0 10px #00cc00, 0 0 15px #008800;
    }
  }
`;
