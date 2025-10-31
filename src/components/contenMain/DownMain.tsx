import type { ApiProps } from "../../hooks/useGetApi";
import "../../styles/components/contenMain/DownMain.css";

export const DownMain: React.FC<ApiProps> = ({ current, location }) => {
  return (
    <section className="down_main">
      <article className="direction">
        <p className="latitudes">Lat: {location.lat} </p>
        <p className="latitudes">Long: {location.lon}</p>
      </article>

      <article className="condition_content">
        <p className="condition">{current.condition.text}</p>
      </article>

      <article className="wind">
        <p className="wind_text">
          Velocidad del viento: {current.wind_kph}Km/h
        </p>

        <p className="wind_text">Dirección del viento: {current.wind_dir} </p>
      </article>
    </section>
  );
};
