import React from "react";
import moment from "moment";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';

function Grafico2({ dadosMortes }: any) {
  
  Chart.register(...registerables);

  const labels = dadosMortes
    .map((dado: any) => moment(new Date(dado.dia)).format("ll"))
    .reverse();

  const ordenada = dadosMortes.map((dado: any) => dado.mortes).reverse();


  const state = {
    labels: labels,
    datasets: [
      {
        label: "Mortes acumuladas",
        data: ordenada,
        borderColor: "black",
        backgroundColor: "black",
        pointStyle: "circle",
        pointRadius: 0,
        pointHoverRadius: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          callback: function (val: any, index: any) {
            return (index % 7 === 0 || index + 1 === labels.length) ? labels[val] : "";
          },
        },
        color: "black",
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Mortes Acumuladas",
      },
    },
  };

  return (
    <div>
      <Line data={state} options={options}></Line>
    </div>
  );
}

export default Grafico2;
