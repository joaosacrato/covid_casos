import { useEffect, useState } from "react";
import { getStatistics } from "../../../services/api/getStatistics";
import "./style.css";
import moment from "moment";
import 'moment/locale/pt-br'

function porCemMil(casos: number, pop: number) {
  return (casos / pop) * 100000;
}

interface Props {
  dadosPais: Array<{
    country: string;
    continent: string;
    population: number;
    cases: {
      new: string;
      active: number;
      critical: number;
      recovered: number;
      total: number;
    };
    deaths: {
      new: string;
      total: number;
    };
    tests: {
      total: number;
    };
    day: string;
    time: string;
  }>;
  setDadosPais: React.Dispatch<
    React.SetStateAction<
      {
        country: string;
        continent: string;
        population: number;
        cases: {
          new: string;
          active: number;
          critical: number;
          recovered: number;
          total: number;
        };
        deaths: {
          new: string;
          total: number;
        };
        tests: {
          total: number;
        };
        day: string;
        time: string;
      }[]
    >
  >;
  paisSelecionado: string;
}

function Statistics({ dadosPais, setDadosPais, paisSelecionado }: Props) {
  moment.locale('pt-br')
  useEffect(() => {
    if (paisSelecionado !== "" && "initial") {
      getStatistics(setDadosPais, paisSelecionado);
    }
  }, [paisSelecionado]);
  return (
    <section className="col-lg-9">
      <div className="container">
        <div className="row container">
          {dadosPais[0].country ? (
            <img
              className="img-flag align-middle"
              src={`https://countryflagsapi.com/svg/${dadosPais[0].country}`}
              alt={`${dadosPais[0].country}`}
            />
          ) : (
            "Não foi possível obter o pais, atualize o campo país"
          )}

          <p className="col alinhar-ps">{`População: ${
            dadosPais[0].population
              ? dadosPais[0].population.toLocaleString("pt-BR")
              : "O dado não é disponibilizado"
          }`}</p>
          <p className="col alinhar-ps">{`Ultima atualização: ${
            dadosPais[0].time
              ? moment(dadosPais[0].time).startOf('day').fromNow()
              : "O dado não é disponibilizado"
          }`}</p>
        </div>

        <div className="row container">
          <p className="col alinhar-ps">{`Casos totais: ${
            dadosPais[0].cases.total
              ? dadosPais[0].cases.total.toLocaleString("pt-BR")
              : "O dado não é disponibilizado"
          }`}</p>

          <p className="col alinhar-ps">{`Número de casos a cada 100.000 habitantes: ${
            dadosPais[0].population && dadosPais[0].cases.total
              ? parseInt(
                  porCemMil(
                    dadosPais[0].cases.total,
                    dadosPais[0].population
                  ).toFixed(0)
                ).toLocaleString("pt-BR")
              : "O dado não é disponibilizado"
          }`}</p>

          <p className="col alinhar-ps">{`Novos casos: ${
            dadosPais[0].cases.new
              ? dadosPais[0].cases.new
              : "O dado não é disponibilizado"
          }`}</p>

          <p className="col alinhar-ps">{`Número de casos ativos: ${
            dadosPais[0].cases.active
              ? dadosPais[0].cases.active.toLocaleString("pt-BR")
              : "O dado não é disponibilizado"
          }`}</p>
          <p className="col alinhar-ps">{`Número de casos criticos: ${
            dadosPais[0].cases.critical
              ? dadosPais[0].cases.critical.toLocaleString("pt-BR")
              : "O dado não é disponibilizado"
          }`}</p>
        </div>

        <div className="row container">
              <p className="col alinhar-ps">{`Mortes acumuladas: ${
                dadosPais[0].deaths.total
                  ? dadosPais[0].deaths.total.toLocaleString("pt-BR")
                  : "O dado não é disponibilizado"
              }`}</p>
          <p className="col alinhar-ps">{`Novas mortes: ${
            dadosPais[0].deaths.new
              ? dadosPais[0].deaths.new
              : "O dado não é disponibilizado"
          }`}</p>
          <p className="col alinhar-ps">{`Número de mortes a cada 100.000 habitantes: ${
            dadosPais[0].deaths.total && dadosPais[0].population
              ? parseInt(
                  porCemMil(
                    dadosPais[0].deaths.total,
                    dadosPais[0].population
                  ).toFixed(0)
                ).toLocaleString("pt-BR")
              : "O dado não é disponibilizado"
          }`}</p>
        </div>
        <div className="row container">
          <p className="col alinhar-ps">{`Testes totais: ${
            dadosPais[0].tests.total
              ? dadosPais[0].tests.total.toLocaleString("pt-BR")
              : "O dado não é disponibilizado"
          }`}</p>

          <p className="col alinhar-ps">{`Número de testes a cada 100.000 habitantes: ${
            dadosPais[0].tests.total && dadosPais[0].population
              ? parseInt(
                  porCemMil(
                    dadosPais[0].tests.total,
                    dadosPais[0].population
                  ).toFixed(0)
                ).toLocaleString("pt-BR")
              : "O dado não é disponibilizado"
          }`}</p>

          <p className="col alinhar-ps">{`Total de recuperados: ${
            dadosPais[0].cases.recovered
              ? dadosPais[0].cases.recovered.toLocaleString("pt-BR")
              : "O dado não é disponibilizado"
          }`}</p>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
