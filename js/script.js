
const cursos = ["HTML", "CSS", "JavaScript"];

const lista = document.querySelector("#lista");
const busca = document.querySelector("#busca");

// Função para mostrar os cursos
function render(termo = "") {

    const filtrados = cursos.filter(curso =>
        curso.toLowerCase().includes(termo.toLowerCase())
    );

    if (filtrados.length === 0) {
        lista.innerHTML = "Nada encontrado";
        return;
    }

    lista.innerHTML = filtrados.map(curso =>
        `<li>${curso}</li>`
    ).join("");
}

// Mostrar os cursos ao carregar
render();

// Filtrar enquanto digita
busca.addEventListener("input", () => {
    render(busca.value);
});
