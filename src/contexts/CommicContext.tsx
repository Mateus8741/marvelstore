import { createContext, ReactNode, useEffect, useState } from "react";
import { ComicDTO } from "../DTOS/comic";
import { api } from "../services/api";

export interface CommicContextDataProps {
  commic: ComicDTO;
  getCommicById: (id: number) => void;
  commicWithId: ComicDTO;
}

interface Props {
  children: ReactNode;
}

export const CommicContext = createContext<CommicContextDataProps>(
  {} as CommicContextDataProps
);

export function CommicContextProvider({ children }: Props) {
  const [commic, setCommic] = useState<ComicDTO>({} as ComicDTO);
  const [commicWithId, setCommicWithId] = useState<ComicDTO>({} as ComicDTO);

  async function getCommicById(id: number) {
    const { data } = await api.get(`/comics/${id}`);
    setCommicWithId(data.data.results[0]);
  }

  const values = {
    commic,
    getCommicById,
    commicWithId,
  };

  return (
    <CommicContext.Provider value={values}>{children}</CommicContext.Provider>
  );
}
