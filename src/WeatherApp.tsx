import { Search, Time } from "./components/header";
import { DownMain, TopMain } from "./components/contenMain";
import { useGetApi } from "./hooks/useGetApi";

export const WeatherApp = () => {
  const { doc, isLoading } = useGetApi("Cuba");

  return (
    <>
      <header>
        <Search></Search>
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
