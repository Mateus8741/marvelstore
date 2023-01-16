import styled from "styled-components";

export const LayoutContainer = styled.div`
  padding: 2.5rem;

  background: ${({ theme }) => theme["gray-900"]};

  display: flex;
  flex-direction: column;
`;
