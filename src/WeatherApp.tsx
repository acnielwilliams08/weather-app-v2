import { Search, Time } from "./header/";
import { DownMain, TopMain } from "./contenMain";
import { useGetApi } from "./hooks/useGetApi";

export const WeatherApp = () => {
  const { doc, isLoading } = useGetApi();

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
