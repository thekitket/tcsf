document.addEventListener("DOMContentLoaded", () => {

    // Atualiza o ano automaticamente no rodapé
    const footer = document.querySelector("footer p");

    if (footer) {
        footer.innerHTML = `Tenda do Caboclo Sete Flechas © ${new Date().getFullYear()}`;
    }

    // Botão voltar ao topo
    const btnTopo = document.createElement("button");
    btnTopo.innerText = "↑";
    btnTopo.id = "btnTopo";

    document.body.appendChild(btnTopo);

    // Estilo do botão
    btnTopo.style.position = "fixed";
    btnTopo.style.bottom = "20px";
    btnTopo.style.right = "20px";
    btnTopo.style.width = "40px";
    btnTopo.style.height = "40px";
    btnTopo.style.borderRadius = "50%";
    btnTopo.style.border = "none";
    btnTopo.style.background = "#5a3a22";
    btnTopo.style.color = "#fff";
    btnTopo.style.fontSize = "18px";
    btnTopo.style.cursor = "pointer";
    btnTopo.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
    btnTopo.style.display = "none";

    // Mostrar botão ao rolar a página
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            btnTopo.style.display = "block";
        } else {
            btnTopo.style.display = "none";
        }
    });

    // Voltar ao topo com suavidade
    btnTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});
