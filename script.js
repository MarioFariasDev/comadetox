function fazerPedido(marmita) {
  const numero = "5592984413665"; // Ex: 5588999999999
  const mensagem = `Olá! Gostaria de pedir a marmita: ${marmita}`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}

document.getElementById("form-contato").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensagem enviada! Entraremos em contato em breve.");
  this.reset();
});