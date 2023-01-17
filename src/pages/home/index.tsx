import { useState, useEffect } from "react";
import { Cards } from "../../components/Card";
import { ModalCard } from "../../components/Modal";
import { ComicDTO } from "../../DTOS/comic";
import { useCommics } from "../../hooks/useCommics";
import { api } from "../../services/api";
import { HomeContainer } from "./styles";

export function Home() {
  const [data, setData] = useState<ComicDTO[]>([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const { getCommicById } = useCommics();

  function openModal(id: number) {
    getCommicById(id);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function fetchCommics() {
    try {
      const { data } = await api.get(`/comics`);
      setData(data.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCommics();
  }, []);

  return (
    <HomeContainer>
      <h2>Compre aqui suas HQ's</h2>
      <main>
        {data.map((item: ComicDTO) => (
          <Cards
            key={item.id}
            commic={item}
            onClick={() => openModal(item.id)}
          />
        ))}
      </main>
      <ModalCard modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </HomeContainer>
  );
}
