import React, { ButtonHTMLAttributes } from "react";
import { ComicDTO } from "../../DTOS/comic";

import { CardContainer, Container, Title } from "./styles";

interface ResponseData extends ButtonHTMLAttributes<HTMLButtonElement> {
  commic: ComicDTO;
}

export function Cards({ commic, ...rest }: ResponseData) {
  console.log('LOG DO CARD',commic);

  return (
    <Container key={commic.id} {...rest}>
      <CardContainer>
        <img
          src={`${commic.thumbnail?.path}.${commic.thumbnail?.extension}`}
          alt="Commic Image"
        />
        <Title>{commic.title}</Title>
      </CardContainer>
    </Container>
  );
}
