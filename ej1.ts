type TipoFNM = (l: number[], n: number) => number[];

export const filtrarNumerosMayores: TipoFNM = (l, n) => {
    const lista: number[] = [];
    for (const num of l) {
        if (num > n) {
            lista.push(num);
        }
    }
    return lista;
}

export const calcularPromedio = (l: number[]) => {
    let suma: number = 0;
    for (const num of l) {
        suma += num;
    }
    const rpta: number = suma / l.length;
    return rpta;
}
