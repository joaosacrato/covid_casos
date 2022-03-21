import { useEffect, useState } from "react";
import { getHistory } from "../../../services/api/getHistory";
import Grafico from './Grafico'
import './style.css'

interface Props {
  paisSelecionado: string;
}

function Chart({ paisSelecionado }: Props) {
  function mortes(historico: any) {
    var mortes: any = [];
    if (historico !== undefined) {
      historico.forEach((day: any) => {
        if (day.deaths == undefined) {
        } else {
          let dadosDiarios = { mortes: day.deaths.total, dia: day.day };
          mortes.push(dadosDiarios);
        }
      });
    }
    return mortes;
  }

  // agrupa um conjunto de arrays pela keyword, retorna um objeto

  function groupArrayOfObjects(list: any, key: any) {
    return list.reduce(function (rv: any, x: any) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  // pega array tipo ["02-02-2022", objeto] e transforma em [{dia: "02-02-2022", "mortes": 2020}]

  function ajustaArray(teste: any) {
    var aux: any = [];

    teste.forEach((a: any) => {
      var aux_ = 0;
      a[1].forEach((b: any) => {
        if (b.mortes > aux_) {
          aux_ = b.mortes;
        }
      });
      aux.push({ dia: a[0], mortes: aux_ });
    });

    return aux;
  }

  function ajustaDiaRepetido(teste: any, key: any) {
    /* 
  Objeto tipo {
      "02-02-2022": Array<{mortes: number, dia: string}> ...
  } transforma em array tipo ["02-02-2022, Array<{objeto}}"] ...*/
    const aux = Object.entries(groupArrayOfObjects(teste, key));

    return ajustaArray(aux);
  }

  const [historico, setHistorico] = useState();

  const [dadosMorteGraph, setDadosMorteGraph] = useState(mortes(historico));

  useEffect(() => {
    getHistory(setHistorico, paisSelecionado);
  }, [paisSelecionado]);

  useEffect(() => {
    const aux = mortes(historico);
    setDadosMorteGraph(ajustaDiaRepetido(aux, "dia"));
  }, [historico]);

  return (
    <div className="container-sm grafico">
      <Grafico dadosMortes={dadosMorteGraph} />
    </div>
  );
}
export default Chart;
