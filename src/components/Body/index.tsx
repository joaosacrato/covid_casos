import { useState, useEffect } from "react";
import Input from "./Input";
import Statistics from "./Statistics";
import Chart from "./Chart";
import './style.css'
function Body() {
  const initial = [
    {
      country: "-",
      continent: "-",
      population: 0,
      cases: {
        new: "-",
        active: 0,
        critical: 0,
        recovered: 0,
        total: 0,
      },
      deaths: {
        new: "-",
        total: 0,
      },
      tests: {
        total: 0,
      },
      day: "2020-03-22",
      time: "2020-03-22T22:45:05+00:00",
    },
  ];
  const [paisSelecionado, setPaisSelecionado] = useState("");
  const [dadosPais, setDadosPais] = useState(initial);

  return (
    <div className="container">
      <div className="row container-input-statistics">
        <Input
          paisSelecionado={paisSelecionado}
          setPaisSelecionado={setPaisSelecionado}
        />
        <Statistics
          dadosPais={dadosPais}
          setDadosPais={setDadosPais}
          paisSelecionado={paisSelecionado}
        />
      </div>
      <div className="row">

        <Chart paisSelecionado={paisSelecionado} />
      </div>
    </div>
  );
}

export default Body;
