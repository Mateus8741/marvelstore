import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { CommicContainer, CommicSelectedContainer, Title } from "./styles";

interface ComicDTO {
  title?: string;
  images?: {
    extension?: string;
    path?: string;
  };
  urls?: {
    type?: string;
    url?: string;
  };
  thumbnail?: {
    extension?: string;
    path?: string;
  };
}

export function CommicSelected() {
  const [data, setData] = useState<ComicDTO>({});
  const [modalIsOpen, setIsOpen] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    try {
      api.get(`/comics/${id}`).then((response) => {
        setData(response.data.data.results[0]);
        console.log(response.data.data.results[0]);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <CommicSelectedContainer>
        <p>antes era o "modal"</p>
      </CommicSelectedContainer>
    </>
  );
}
