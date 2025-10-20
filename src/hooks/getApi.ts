import { useEffect, useState } from "react";
import { getFetch } from "../helpers/getFetch";

export const getApi = (region: string = "Cuba") => {
  const [doc, setDoc] = useState({});

  useEffect(() => {
    const data = getFetch(region);

    setDoc({ ...data });
  }, []);

  return { doc };
};
