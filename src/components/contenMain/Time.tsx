import type { ApiProps } from "../../hooks/useGetApi";
import '../../styles/components/contenMain/Time.css'

type Time = ApiProps["location"];

export const Time: React.FC<Time> = ({ localtime }) => {
  return <p className="time"> {localtime} </p>;
};
