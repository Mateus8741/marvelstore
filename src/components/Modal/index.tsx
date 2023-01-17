import {
  CommicContainer,
  Description,
  DescriptionContainer,
  Indisp,
  Info,
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
  const { commicWithId, commicPrice } = useCommics();

  const formatMath = commicPrice * 5.1;

  const formated = formatMath.toLocaleString("pt-br", {
    style: "decimal",
    minimumFractionDigits: 2,
    currency: "BRL",
    currencyDisplay: "code",
  });

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
          <Description>
            {commicWithId.description === ""
              ? "Sem descrição"
              : commicWithId.description}
          </Description>
          <div>
            <div>
              <Price>
                {formatMath === 0 ? (
                  <Indisp>INDISPONÍVEL</Indisp>
                ) : (
                  `R$ ${formated}`
                )}
              </Price>
              {formatMath === 0 ? null : <Info>*Já convertido</Info>}
            </div>
            <button disabled={formatMath === 0}>Comprar</button>
          </div>
        </DescriptionContainer>
      </ModalContainer>
    </Modal>
  );
}
