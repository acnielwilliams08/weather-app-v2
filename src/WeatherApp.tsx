import { Search, Time } from "./header/";
import { DownMain, TopMain } from "./contenMain";
import { getFetch } from "./helpers/getFetch";

getFetch("Cuba");

export const WeatherApp = () => {
  return (
    <>
      <header>
        <Time></Time>
        <Search></Search>
      </header>

      <main>
        <TopMain></TopMain>
        <DownMain></DownMain>
      </main>
    </>
  );
};
