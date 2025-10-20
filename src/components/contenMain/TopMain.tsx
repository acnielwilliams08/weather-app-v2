import type { ApiProps } from "../../hooks/useGetApi";

export const TopMain: React.FC<ApiProps> = ({ current, location }) => {
  return (
    <section>
      <h1 className="degree"> {current.temp_c}°C</h1>
      <h2 className=" title"> {location.region} </h2>
      <h3 className="region_description"> {location.country} </h3>
    </section>
  );
};
