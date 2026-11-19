
const cursos = [
  { nome: "HTML", area: "Estrutura" },
  { nome: "CSS", area: "Estilo" },
  { nome: "JavaScript", area: "Comportamento" },
];

const lista = document.querySelector("#lista");
const busca = document.querySelector("#busca");


const lista = document.querySelector("#lista");
const busca = document.querySelector("#busca");

// Função para renderizar os cursos
function render(termo = "") {

    const filtrados = cursos.filter(curso =>
        curso.nome.toLowerCase().includes(termo.toLowerCase())
    );

    if (filtrados.length === 0) {
        lista.innerHTML = "Nada encontrado";
        return;
    }

    lista.innerHTML = filtrados.map(curso => `
        <li>${curso.nome}</li>
    `).join("");
}

// Mostrar todos os cursos ao carregar
render();

// Filtrar enquanto digita
busca.addEventListener("input", () => {
    render(busca.value);
});

