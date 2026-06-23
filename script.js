// Mensagem de boas-vindas
console.log("Tenda do Caboclo Sete Flechas - Manual do Médium");

// Ano automático no rodapé
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer p");

    if (footer) {
        footer.innerHTML =
            `Tenda do Caboclo Sete Flechas © ${new Date().getFullYear()}`;
    }
});

// Botão voltar ao topo
const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";
botaoTopo.id = "topo";

document.body.appendChild(botaoTopo);

botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.padding = "10px 15px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.fontSize = "20px";

botaoTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
