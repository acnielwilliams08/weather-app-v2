import { useEffect, useState } from "react";
import { getFetch } from "../helpers/getFetch";

export interface ApiProps {
  current: {
    condition: {
      text: string,
      code: string
    };
    temp_c: string;
    humidity: string;
    is_day: string;
    wind_kph: string;
    wind_dir: string;
  };

  location: {
    country: string;
    lat: string;
    lon: string;
    region: string;
    localtime: string;
  };
}

export const useGetApi = (region: string = "Cuba") => {
  const [doc, setDoc] = useState<ApiProps>();
  const [isLoading, setIsLoading] = useState(true);

  const getDoc = async () => {
    const data = await getFetch(region);

    if (!data) {
      setDoc(undefined);
      return;
    }

    setDoc({ ...data });
  };

  useEffect(() => {
    getDoc().finally(() => setIsLoading(false));
  }, [region]);

  return { doc, isLoading };
};
