import styled from "styled-components";

export const CommicSelectedContainer = styled.div`
  width: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  margin-top: 10rem;

  padding: 0.3rem;
  border-radius: 8px;

  background: ${({ theme }) => theme["gray-600"]};

  input {
    background: ${({ theme }) => theme["gray-900"]};
    border-color: ${({ theme }) => theme["gray-100"]};
    color: ${({ theme }) => theme["gray-100"]};
    border-style: solid;
    border-width: 1px;
    padding: 0.5rem;
  }
`;

export const PriceButton = styled.button`
  background: ${({ theme }) => theme["green-500"]};
  color: ${({ theme }) => theme["gray-100"]};
  border: none;
  padding: 1rem;
  border-radius: 10px;
  transition: all 0.5s;
  cursor: pointer;

  margin-bottom: 0.5rem;

  &:not(:disabled):hover {
    background: ${({ theme }) => theme["green-300"]};
  }

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const CancelButton = styled.button`
  background: ${({ theme }) => theme["red-700"]};
  color: ${({ theme }) => theme["gray-100"]};
  border: none;
  padding: 1rem;
  border-radius: 10px;
  transition: all 0.5s;
  cursor: pointer;

  margin-bottom: 0.5rem;

  &:hover {
    background: ${({ theme }) => theme["red-500"]};
  }
`;

export const BuyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  align-items: center;
  padding: 1rem;
`;

export const CommicContainer = styled.div`
  height: 23rem;
  width: 15rem;

  background-color: ${({ theme }) => theme["gray-800"]};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  img {
    width: 12rem;
    height: 15rem;
    border-radius: 8px;
  }

  p {
    font-weight: 500;
    color: ${({ theme }) => theme["gray-100"]};
  }
`;

export const Title = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme["gray-100"]};
`;

export const TitlePageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme["green-500"]};
  background: ${({ theme }) => theme["gray-900"]};
  padding: 0.5rem;
  border-radius: 8px;
`;

export const TitlePage = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

export const Footer = styled.div`
  width: 100%;

  padding: 0 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
