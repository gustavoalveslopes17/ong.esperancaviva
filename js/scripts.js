document.addEventListener("DOMContentLoaded", () => {
  const cpfInput = document.getElementById("cpf");
  const telInput = document.getElementById("telefone");

  cpfInput.addEventListener("input", () => {
    cpfInput.value = cpfInput.value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  });

  telInput.addEventListener("input", () => {
    telInput.value = telInput.value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{1,4})$/, "$1-$2");
  });

  document.getElementById("formCadastro").addEventListener("submit", (e) => {
    alert("Cadastro enviado com sucesso!");
    e.preventDefault();
  });
