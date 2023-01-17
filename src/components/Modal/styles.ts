import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 45rem;

  display: flex;
  flex-direction: row;
  gap: 2rem;

  border-radius: 5px;
  padding: 1rem;

  background-color: ${({ theme }) => theme["gray-900"]};
`;

export const CommicContainer = styled.div`
  padding: 15rem;

  background-color: ${({ theme }) => theme["gray-800"]};
  border-radius: 8px;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;

  img {
    width: 10rem;
    height: 17rem;
    border-radius: 8px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme["gray-100"]};
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme["gray-400"]};
  text-align: justify;
  margin-top: 0.625rem;
`;

export const Price = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme["gray-100"]};
  margin-top: 5rem;

  strong {
    margin-top: 1rem;
  }
`;
