function groupArrayOfObjects(list, key) {
  return list.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}

const teste = [
  { mortes: 2000, dia: "02-02-2022" },
  { mortes: 2022, dia: "02-02-2022" },
  { mortes: 2022, dia: "02-02-2022" },
  { mortes: 2044, dia: "02-03-2022" },
  { mortes: 2050, dia: "02-03-2022" },
  { mortes: 2066, dia: "02-04-2022" },
  { mortes: 2070, dia: "02-04-2022" },
];


const teste_ = groupArrayOfObjects(teste, "dia")

console.log(typeof teste_)


/* function ola(teste) {
    teste.forEach(d => console.log(d))
} */

/* console.log(ola(teste_)) */

function x() {
  var resultado = 2
}