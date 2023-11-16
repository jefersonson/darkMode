function darkmode() {
    const pagina = document.body

    pagina.classList.toggle("dark-mode")

    const botao = document.querySelector("button")

    const isdarkmode = document.body.classList.contains("dark-mode");

    if (isdarkmode == true) {
        botao.textContent = "Modo Claro"
    } else {
        botao.textContent = "Modo Escuro"
    }
}
