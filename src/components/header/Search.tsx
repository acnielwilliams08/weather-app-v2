import { useRef } from "react";
import searchIcon from "../../assets/travel_explore_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import '../../styles/components/header/Search.css'

interface SearchProps {
  onInputSubmit: (value: string) => void;
}

export const Search: React.FC<SearchProps> = ({ onInputSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current) return;

    onInputSubmit(inputRef.current.value);
  };

  return (
    <form onSubmit={handlerSubmit} className="input_container">
      <input ref={inputRef} type="text" className="input" />

      <button className="input_button">
        <img src={searchIcon} alt="icon" />
      </button>
    </form>
  );
};
