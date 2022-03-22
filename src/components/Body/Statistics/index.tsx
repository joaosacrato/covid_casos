import { useEffect, useState } from "react";
import { getStatistics } from "../../../services/api/getStatistics";
import "./style.css";
import moment from "moment";
import "moment/locale/pt-br";

function porCemMil(casos: number, pop: number) {
  return (casos / pop) * 100000;
}

function tirarSinalMais(str: string) {
  return parseInt(str.replace("+", ""));
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

  const [flagStatus, setFlagStatus] = useState('400')

  useEffect(() => {
    if (paisSelecionado !== "" && paisSelecionado !== "initial") {
      getStatistics(setDadosPais, paisSelecionado);
    }
  }, [paisSelecionado, setDadosPais]);


  return (
    <section className="col-lg-10">
      <div className="container">
        <div className="row div-alinhamento">
          <div className="col">
            {dadosPais[0].country ? (
              <img
                className="img-flag align-middle"
                src={`https://countryflagsapi.com/svg/${dadosPais[0].country.replaceAll('-',' ')}`}
                alt={dadosPais[0].country}
              />
            ) : (
              <></>
            )}
          </div>

          <div className="col">
            <span className="span-titulo-p display-6">População</span>
            {dadosPais[0].population ? (
              <span className="span-dado">
                {dadosPais[0].population.toLocaleString("pt-BR")}
              </span>
            ) : (
              <span className="span-dado">Não disponivel</span>
            )}
          </div>

          <div className="col">
            <span className="span-titulo-p display-6">Última atualização</span>
            {dadosPais[0].time ? (
              <span className="span-dado">
                {moment(dadosPais[0].time).startOf("day").fromNow()}
              </span>
            ) : (
              <span className="span-dado">Não disponivel</span>
            )}
          </div>
        </div>

        <div className="row div-alinhamento">
          <hr />
          <p className="display-6 titulo-row">Números acumulados</p>
          <div className="col">
            <span className="span-titulo-p display-6">Casos</span>
            {dadosPais[0].cases.total ? (
              <span className="span-dado">
                {dadosPais[0].cases.total.toLocaleString("pt-BR")}
              </span>
            ) : (
              <span className="span-dado">Não disponivel</span>
            )}
          </div>

          <div className="col">
            <span className="span-titulo-p display-6">Mortes</span>
            {dadosPais[0].deaths.total ? (
              <span className="span-dado">
                {dadosPais[0].deaths.total.toLocaleString("pt-BR")}
              </span>
            ) : (
              <span className="span-dado">Não disponivel</span>
            )}
          </div>

          <div className="col">
            <span className="span-titulo-p display-6">Testes</span>
            {dadosPais[0].tests.total ? (
              <span className="span-dado">
                {dadosPais[0].tests.total.toLocaleString("pt-BR")}
              </span>
            ) : (
              <span className="span-dado">Não disponivel</span>
            )}
          </div>
        </div>

        <div className="row div-alinhamento">
          <hr />
          <p className="display-6 titulo-row">
            Números acumulados por 100.000 habitantes
          </p>

          <div className="col">
            <span className="span-titulo-p display-6">Casos</span>
            {dadosPais[0].population && dadosPais[0].cases.total ? (
              <span className="span-dado">
                {parseInt(
                  porCemMil(
                    dadosPais[0].cases.total,
                    dadosPais[0].population
                  ).toFixed(0)
                ).toLocaleString("pt-BR")}
              </span>
            ) : (
              <span className="span-dado">Não disponivel</span>
            )}
          </div>
          <div className="col">
            <span className="span-titulo-p display-6">Mortes</span>
            {dadosPais[0].deaths.total && dadosPais[0].population ? (
              <span className="span-dado">
                {parseInt(
                  porCemMil(
                    dadosPais[0].deaths.total,
                    dadosPais[0].population
                  ).toFixed(0)
                ).toLocaleString("pt-BR")}
              </span>
            ) : (
              <span className="span-dado">Dado não disponível</span>
            )}
          </div>
          <div className="col">
            <span className="span-titulo-p display-6">Testes</span>
            {dadosPais[0].tests.total && dadosPais[0].population ? (
              <span className="span-dado">
                {parseInt(
                  porCemMil(
                    dadosPais[0].tests.total,
                    dadosPais[0].population
                  ).toFixed(0)
                ).toLocaleString("pt-BR")}
              </span>
            ) : (
              <span className="span-dado">Dado não disponível</span>
            )}
          </div>
        </div>

        <div className="row div-alinhamento">
          <hr />
          <div className="col">
            <span className="span-titulo-p display-6">Novos Casos</span>
            {dadosPais[0].cases.new ? (
              <span className="span-dado">
                +
                {tirarSinalMais(dadosPais[0].cases.new).toLocaleString("pt-BR")}
              </span>
            ) : (
              <span className="span-dado">Não disponível</span>
            )}
          </div>
          <div className="col">
            <span className="span-titulo-p display-6">Novas mortes</span>
            {dadosPais[0].deaths.new ? (
              <span className="span-dado">
                +
                {tirarSinalMais(dadosPais[0].deaths.new).toLocaleString(
                  "pt-BR"
                )}
              </span>
            ) : (
              <span className="span-dado">Não disponível</span>
            )}
          </div>
          <div className="col">
            <span className="span-titulo-p display-6">Casos Ativos</span>
            {dadosPais[0].cases.active ? (
              <span className="span-dado">
                {dadosPais[0].cases.active.toLocaleString("pt-BR")}
              </span>
            ) : (
              <span className="span-dado">Não disponível</span>
            )}
          </div>
          <div className="col">
            <span className="span-titulo-p display-6">Recuperados</span>
            {dadosPais[0].cases.recovered ? (
              <span className="span-dado">
                {dadosPais[0].cases.recovered.toLocaleString("pt-BR")}
              </span>
            ) : (
              <span className="span-dado">Não disponível</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
