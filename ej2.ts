export type Punto = [number, number];

type TipoDEP = (p1: Punto, p2: Punto) => number;

export const distanciaEntrePuntos: TipoDEP = (p1, p2) => {
    return Math.sqrt((p2[0] - p1[0])**2 + (p2[1] - p1[1])**2);
}

type TipoMP = (p: Punto, tupla : [number, number]) => Punto;

export const moverPunto: TipoMP = (p, tupla) => {
    p[0] += tupla[0];
    p[1] += tupla[1];
    return p;
}