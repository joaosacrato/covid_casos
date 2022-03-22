import { useState, useEffect } from "react";
import Input from "./Input";
import Statistics from "./Statistics";
import Chart from "./Chart";
import "./style.css";
function Body() {
  const initial = [
    {
      country: "",
      continent: "",
      population: 0,
      cases: {
        new: "",
        active: 0,
        critical: 0,
        recovered: 0,
        total: 0,
      },
      deaths: {
        new: "",
        total: 0,
      },
      tests: {
        total: 0,
      },
      day: "",
      time: "",
    },
  ];
  const [paisSelecionado, setPaisSelecionado] = useState("");
  const [dadosPais, setDadosPais] = useState(initial);

  return (
    <div className="container bg-color-p">
      <div className="row container-input-statistics">
        <Input
          paisSelecionado={paisSelecionado}
          setPaisSelecionado={setPaisSelecionado}
        />
        {paisSelecionado !== initial[0].country ? (
          <Statistics
            dadosPais={dadosPais}
            setDadosPais={setDadosPais}
            paisSelecionado={paisSelecionado}
          />
        ) : (
          <></>
        )}
       
      </div>
      <div className="row">
        {
          paisSelecionado!==initial[0].country ? 
          <Chart paisSelecionado={paisSelecionado} /> : <></>

        }
      </div>
    </div>
  );
}

export default Body;
