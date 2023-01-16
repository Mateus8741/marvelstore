import styled from "styled-components";

export const ModalContainer = styled.div`
  .Overlay {
    background: ${({ theme }) => theme["gray-800"]};
  }
`;

export const CommicSelectedContainer = styled.div`
  margin-top: 10rem;
`;

export const CommicSelectedContent = styled.button`
  width: 17rem;
  background: transparent;
  border: none;
`;

export const CommicContainer = styled.div`
  width: 17rem;

  cursor: pointer;

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
    transform: translateY(-1rem);
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
