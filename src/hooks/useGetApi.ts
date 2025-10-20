import { useEffect, useState } from "react";
import { getFetch } from "../helpers/getFetch";

export const useGetApi = (region: string = "Cuba") => {
  const [doc, setDoc] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getDoc = async () => {
    const data = await getFetch(region);
    setDoc({ ...data });
  };

  useEffect(() => {
    getDoc().finally(() => setIsLoading(false));
  }, []);

  return { doc, isLoading };
};
