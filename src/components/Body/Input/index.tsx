import { useState, useEffect } from "react";
import { getPaisesDisponiveis } from "../../../services/api/getPaisesDisponiveis";
import './style.css'

interface Props {
  paisSelecionado: string;
  setPaisSelecionado: React.Dispatch<React.SetStateAction<string>>;
}

function Input({ paisSelecionado, setPaisSelecionado }: Props) {
  const [paisesDisponiveis, setPaisesDisponíveis] = useState([""]);

  useEffect(() => {
    getPaisesDisponiveis(setPaisesDisponíveis);
  }, []);
  return (
      <select
        onChange={(event) => {
          setPaisSelecionado(event.target.value);
        }}
        className="form-select col body-input"
        defaultValue={`initial`}
      >
        <option value="initial">Escolha um país</option>
        {paisesDisponiveis.map((pais: any) => [
          <option key={pais} value={pais}>
            {pais}
          </option>,
        ])}
      </select>
  );
}

export default Input;
