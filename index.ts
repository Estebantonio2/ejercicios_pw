import { calcularPromedio, filtrarNumerosMayores } from "./ej1";
import { distanciaEntrePuntos, moverPunto, Punto } from "./ej2";

const main = () => {
    const numeros: number[] = [5, 8, 3, 10, 2, 7];
    const lp: number[] = filtrarNumerosMayores(numeros, 5);
    console.log(lp);

    const x: number = calcularPromedio(numeros);
    console.log(x);

    const p1: Punto = [1, 2];
    const p2: Punto = [4, 6];
    const distancia = distanciaEntrePuntos(p1, p2); 
    console.log(distancia);

    const nuevoPunto = moverPunto(p1, [3, 4]);
    console.log(nuevoPunto);
}

main()