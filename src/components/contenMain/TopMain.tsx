import type { ApiProps } from "../../hooks/useGetApi";
import "../../styles/components/contenMain/TopMain.css";

export const TopMain: React.FC<ApiProps> = ({ current, location }) => {
  return (
    <section className="top_main">
      <h1 className="degree"> {Number(current.temp_c).toFixed()}°C</h1>
      <h2 className=" title"> {location.region} </h2>
      <h3 className="region_description"> {location.country} </h3>
    </section>
  );
};
