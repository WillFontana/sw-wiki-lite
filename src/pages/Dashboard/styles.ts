import styled from "styled-components";

export const StyledDashboard = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
  justify-content: center;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
