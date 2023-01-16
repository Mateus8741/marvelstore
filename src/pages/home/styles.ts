import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 4rem;

  h2 {
    align-self: flex-start;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme["green-500"]};
    text-decoration: underline dashed;
  }

  main {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    gap: 2rem;
    justify-content: center;
  }
`;
