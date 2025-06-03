function fazerPedido(marmita) {
    const nomeCliente = prompt("Digite seu nome:");
    const observacao = prompt("Deseja adicionar alguma observação?");
    if (!nomeCliente) {
        alert("Por favor, digite seu nome para continuar o pedido.");
        return;
    }

    const numero = "5592984413665"; // Altere para o número da cliente
    const mensagem = `Olá! Meu nome é ${nomeCliente} e gostaria de pedir a marmita: ${marmita}.${observacao ? ' Observação: ' + observacao : ''}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

document.getElementById("form-contato").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = this.querySelector('input[placeholder="Seu nome"]').value.trim();
    const telefone = this.querySelector('input[placeholder="Seu telefone"]').value.trim();
    const mensagem = this.querySelector('textarea').value.trim();

    if (!nome || !telefone) {
        alert("Por favor, preencha seu nome e telefone.");
        return;
    }

    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    this.reset();
});
