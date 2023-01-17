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
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;

    div {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    button {
      background: ${({ theme }) => theme["green-500"]};
      color: ${({ theme }) => theme["gray-100"]};
      border: none;
      padding: 1rem;
      border-radius: 10px;
      transition: all 0.5s;
      cursor: pointer;

      &:not(:disabled):hover {
        background: ${({ theme }) => theme["green-300"]};
      }

      :disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme["gray-100"]};
`;

export const Description = styled.p`
  flex: 1;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme["gray-400"]};
  text-align: justify;
  margin-top: 0.625rem;
`;

export const Info = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme["gray-400"]};
`;

export const Indisp = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme["red-500"]};
`;

export const Price = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme["green-700"]};
  font-weight: bold;
`;
