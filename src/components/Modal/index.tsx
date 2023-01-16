import { CommicContainer, ModalContainer, Title } from "./styles";
import Modal from "react-modal";
import { Cards } from "../Card";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
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
  },
};

export function ModalCard({ modalIsOpen, closeModal }: Props) {
  const { commic } = useCommics();

  // const { id } = useParams();

  return (
    <ModalContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <CommicContainer>
          <img
            src={`${commic.thumbnail?.path}.${commic.thumbnail?.extension}`}
            alt="Commic Image"
          />
          <Title>{commic.title}</Title>
        </CommicContainer>
      </Modal>
    </ModalContainer>
  );
}
