import { createContext, ReactNode, useEffect, useState } from "react";
import { ComicDTO } from "../DTOS/comic";
import { api } from "../services/api";

export interface CommicContextDataProps {
  // commic: ComicDTO;
  getCommicById: (id: number) => void;
  commicWithId: ComicDTO;
  commicPrice: number
  commicId: number
}

interface Props {
  children: ReactNode;
}

export const CommicContext = createContext<CommicContextDataProps>(
  {} as CommicContextDataProps
);

export function CommicContextProvider({ children }: Props) {
  // const [commic, setCommic] = useState<ComicDTO>({} as ComicDTO);
  const [commicWithId, setCommicWithId] = useState<ComicDTO>({} as ComicDTO);
  const [commicPrice, setCommicPrice] = useState(0);
  const [commicId, setCommicId] = useState(0);

  async function getCommicById(id: number) {
    const { data } = await api.get(`/comics/${id}`);
    setCommicWithId(data.data.results[0]);
    setCommicPrice(data.data.results[0].prices[0].price);
    setCommicId(id)
  }

  const values = {
    getCommicById,
    commicWithId,
    commicPrice,
    commicId
  };

  return (
    <CommicContext.Provider value={values}>{children}</CommicContext.Provider>
  );
}
