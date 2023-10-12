import { planes } from "./data.js";

function calcularInteresSimple(capital, tasa, plazo) {
  return (capital * plazo * tasa ) / 100;
}

function popularTabla(planes) {
  let tabla = document.getElementById("tabla");
  let fila = "";
  for (let i = 0; i < planes.length; i++) {
    fila += `<tr>
    <td>${planes[i].nombre}</td>
    <td>${planes[i].capital}</td>
    <td>${planes[i].plazo} dias</td>
    <td>${planes[i].tasa}%</td>
    <td>${calcularInteresSimple(
      planes[i].capital,
      planes[i].tasa,
      planes[i].plazo
    )}</td>
    </tr>`;
  }
  tabla.innerHTML = fila;
}

popularTabla(planes);