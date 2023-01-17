import {
  CommicContainer,
  Description,
  DescriptionContainer,
  ModalContainer,
  Price,
  Title,
} from "./styles";
import Modal from "react-modal";
import { Cards } from "../Card";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { api } from "../../services/api";
import { ComicDTO } from "../../DTOS/comic";
import { useCommics } from "../../hooks/useCommics";

interface Props {
  modalIsOpen: boolean;
  closeModal: () => void;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "black",
  },
};

export function ModalCard({ modalIsOpen, closeModal }: Props) {
  const { commicWithId } = useCommics();

  console.log(commicWithId.prices);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalContainer>
        <CommicContainer>
          <img
            src={`${commicWithId.thumbnail?.path}.${commicWithId.thumbnail?.extension}`}
            alt="Commic Image"
          />
        </CommicContainer>
        <DescriptionContainer>
          <Title>{commicWithId.title}</Title>
          <Description>{commicWithId.description}</Description>
          {/* <Price>Valor: R${commicWithId.prices[0].price}</Price> */}
        </DescriptionContainer>
      </ModalContainer>
    </Modal>
  );
}
