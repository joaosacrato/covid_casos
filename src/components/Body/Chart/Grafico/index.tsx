import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-moment";
import moment from "moment";

ChartJS.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

function Grafico({ dadosMortes }: any) {
  const labels = dadosMortes
    .map((dado: any) => moment(new Date(dado.dia)).format("ll"))
    .reverse();

  const ordenada = dadosMortes.map((dado: any) => dado.mortes).reverse();

  const options = {
    scales: {
      x: {
        ticks: {
          callback: function (val: any, index: any) {
            return index % 30 === 0 ? labels[val] : "";
          },
        },
        color: "black",
      },
    },

    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Mortes Acumuladas",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Mortes Acumuladas",
        data: ordenada,
        borderColor: "black",
        backgroundColor: "black",
        pointStyle: "circle",
        pointRadius: 0,
        pointHoverRadius: 1,
      },
    ],
  };
  return (
    <>
      <Line options={options} data={data} />;
    </>
  );
}

export default Grafico;
