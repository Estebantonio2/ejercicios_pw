import { calcularPromedio, filtrarNumerosMayores } from "./ej1";

const main = () => {
    const numeros: number[] = [5, 8, 3, 10, 2, 7];
    const p1: number[] = filtrarNumerosMayores(numeros, 5);
    console.log(p1);

    const p2: number = calcularPromedio(numeros);
    console.log(p2);
}

main()