import { Search, Time } from "./components/header";
import { DownMain, TopMain } from "./components/contenMain";
import { useGetApi } from "./hooks/useGetApi";
import { useState } from "react";

export const WeatherApp = () => {
  const [region, setRegion] = useState("Cuba");
  const { doc, isLoading } = useGetApi(region);

  const onInputSubmit = (value: string) => {
    setRegion(value);
  };

  return (
    <>
      <header>
        <Search onInputSubmit={onInputSubmit}></Search>
        <Time></Time>
      </header>

      {isLoading ? (
        <h2>Cargando...</h2>
      ) : !doc ? (
        <h2>Región desconocida, ingrese otra</h2>
      ) : (
        <main>
          <TopMain></TopMain>
          <DownMain></DownMain>
        </main>
      )}
    </>
  );
};
