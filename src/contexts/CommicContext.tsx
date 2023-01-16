import { createContext, ReactNode, useEffect, useState } from "react";
import { ComicDTO } from "../DTOS/comic";
import { api } from "../services/api";

export interface CommicContextDataProps {
  commic: ComicDTO;
}

interface Props {
  children: ReactNode;
}

export const CommicContext = createContext<CommicContextDataProps>(
  {} as CommicContextDataProps
);

export function CommicContextProvider({ children }: Props) {
  const [commic, setCommic] = useState<ComicDTO>({} as ComicDTO);

  async function fetchCommics() {
    try {
      const { data } = await api.get(`/comics`);
      setCommic(data.data.results);
      console.log(data.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCommics();
  }, []);

  const values = {
    commic,
  };

  return (
    <CommicContext.Provider value={values}>{children}</CommicContext.Provider>
  );
}
