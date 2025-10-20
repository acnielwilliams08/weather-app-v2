import type { ApiProps } from "../../hooks/useGetApi";

export const DownMain: React.FC<ApiProps> = ({ current, location }) => {
  return (
    <section>
      <article className="direction">
        <p className="latitudes"> {location.lat} </p>
        <p className="latitudes"> {location.lon}</p>
      </article>

      <article className="condition_content">
        <p className="condition">{current.condition.text}</p>
        <p className="condition">Aqui va una imagen</p>
      </article>

      <article className="wind">
        <p className="wind_text">{current.wind_kph}</p>
        <p className="wind_text"> {current.wind_dir} </p>
      </article>
    </section>
  );
};
