import styled from "styled-components";

export const Container = styled.button`
  background: transparent;
  border: none;

  cursor: pointer;

  &:hover {
    transform: translateY(-1rem);
    transition: 0.5s all;
  }
`;

export const CardContainer = styled.div`
  width: 25rem;

  background-color: ${({ theme }) => theme["gray-800"]};
  border-radius: 8px;
  padding: 1rem;
  align-items: center;
  justify-content: center;

  img {
    width: 15rem;
    height: 25rem;
    border-radius: 8px;
  }

  &:hover {
    background-color: ${({ theme }) => theme["gray-700"]};
    transition: 0.5s all;
  }
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme["gray-100"]};
  text-align: center;
  margin-top: 10px;
`;
