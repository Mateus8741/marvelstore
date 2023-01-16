import { useContext } from "react";
import { CommicContext } from "../contexts/CommicContext";

export function useCommics() {
  const context = useContext(CommicContext);
  return context;
}
