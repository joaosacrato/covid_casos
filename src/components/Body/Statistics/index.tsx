import { useEffect } from "react";
import { getStatistics } from "../../../services/api/getStatistics";

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
  useEffect(() => {
    if (paisSelecionado !== "" && "initial") {
      getStatistics(setDadosPais, paisSelecionado);
    }
  }, [paisSelecionado]);
  return (
    <section>
      <p>{`Continente: ${
        dadosPais[0].continent
          ? dadosPais[0].continent
          : "Não foi possível obter o continente"
      }`}</p>
      <p>{`Pais: ${
        dadosPais[0].country
          ? dadosPais[0].country
          : "Não foi possível obter o pais, atualize o campo país"
      }`}</p>

      <p>{`População: ${
        dadosPais[0].population
          ? dadosPais[0].population.toLocaleString("pt-BR")
          : "O dado não é disponibilizado"
      }`}</p>

      <p>{`Casos totais: ${
        dadosPais[0].cases.total
          ? dadosPais[0].cases.total.toLocaleString("pt-BR")
          : "O dado não é disponibilizado"
      }`}</p>

      <p>{`Número de casos a cada 100.000 habitantes: ${
        dadosPais[0].population && dadosPais[0].cases.total
          ? parseInt(
              porCemMil(
                dadosPais[0].cases.total,
                dadosPais[0].population
              ).toFixed(0)
            ).toLocaleString("pt-BR")
          : "O dado não é disponibilizado"
      }`}</p>

      <p>{`Novos casos: ${
        dadosPais[0].cases.new
          ? dadosPais[0].cases.new
          : "O dado não é disponibilizado"
      }`}</p>

      <p>{`Número de casos ativos: ${
        dadosPais[0].cases.active
          ? dadosPais[0].cases.active.toLocaleString("pt-BR")
          : "O dado não é disponibilizado"
      }`}</p>
      <p>{`Número de casos criticos: ${
        dadosPais[0].cases.critical
          ? dadosPais[0].cases.critical.toLocaleString("pt-BR")
          : "O dado não é disponibilizado"
      }`}</p>
      <p>{`Total de recuperados: ${
        dadosPais[0].cases.recovered
          ? dadosPais[0].cases.recovered.toLocaleString("pt-BR")
          : "O dado não é disponibilizado"
      }`}</p>
      <p>{`Dia da ultima atualização: ${
        dadosPais[0].day ? dadosPais[0].day : "O dado não é disponibilizado"
      }`}</p>
      <p>{`Novas mortes: ${
        dadosPais[0].deaths.new
          ? dadosPais[0].deaths.new
          : "O dado não é disponibilizado"
      }`}</p>
      <p>{`Número de mortes a cada 100.000 habitantes: ${
        dadosPais[0].deaths.total && dadosPais[0].population
          ? parseInt(
              porCemMil(
                dadosPais[0].deaths.total,
                dadosPais[0].population
              ).toFixed(0)
            ).toLocaleString("pt-BR")
          : "O dado não é disponibilizado"
      }`}</p>
      <p>{`Mortes acumuladas: ${
        dadosPais[0].deaths.total
          ? dadosPais[0].deaths.total.toLocaleString("pt-BR")
          : "O dado não é disponibilizado"
      }`}</p>
      <p>{`Testes totais: ${
        dadosPais[0].tests.total
          ? dadosPais[0].tests.total.toLocaleString("pt-BR")
          : "O dado não é disponibilizado"
      }`}</p>
      <p>{`Número de testes a cada 100.000 habitantes: ${
        dadosPais[0].tests.total && dadosPais[0].population
          ? parseInt(
              porCemMil(
                dadosPais[0].tests.total,
                dadosPais[0].population
              ).toFixed(0)
            ).toLocaleString("pt-BR")
          : "O dado não é disponibilizado"
      }`}</p>
      <p>{`Ultima atualização: ${
        dadosPais[0].time ? dadosPais[0].time : "O dado não é disponibilizado"
      }`}</p>
    </section>
  );
}

export default Statistics;
