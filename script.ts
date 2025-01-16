const cambiarTexto = (texto: string) => {
    const p = document.getElementById("p1");
    if (p == null) return;
    p.innerText = texto;
}

const confBoton = () => {
    const b = document.getElementById("b1");
    b?.addEventListener("click", (event: MouseEvent) => {
        const f = document.getElementById("f1");
        // f?.setAttribute("style", "background-color: red");
        f?.setAttribute("class", "fondo_rojo")

        const h = document.getElementById("h1");
        h?.setAttribute("style", "display: none");
    })
}

const main = () => {
    cambiarTexto("funciono");
    confBoton();
}

main()