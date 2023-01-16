import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Cards } from "../../components/Card";
import { Loading } from "../../components/Loading";
import { ModalCard } from "../../components/Modal";
import { ComicDTO } from "../../DTOS/comic";
import { useCommics } from "../../hooks/useCommics";
import { api } from "../../services/api";
import { HomeContainer } from "./styles";

export function Home() {
  const [data, setData] = useState<ComicDTO[]>([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [commicId, setCommicId] = useState(0);

  const { commic } = useCommics();

  const navigate = useNavigate();

  // useEffect(() => {
  //   try {
  //     api.get("/comics").then((response) => {
  //       setData(response.data.data.results);
  //     });
  //   } catch (error) {}
  // }, []);

  function openModal(id: number) {
    setIsOpen(true);
    setCommicId(id);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <HomeContainer>
      <h2>Compre aqui suas HQ's</h2>
      <main>
        {commic.map((item: ComicDTO) => (
          <Cards key={item.id} commic={item} onClick={() => {}} />
        ))}
      </main>
      <ModalCard
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </HomeContainer>
  );
}
