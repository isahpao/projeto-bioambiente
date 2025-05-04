  //menu
  const menu = document.getElementById("navMenu");
  const toggleButton = document.querySelector(".menu-toggle");

  function toggleMenu() {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  }

  // Fechar o menu ao clicar fora dele
  document.addEventListener("click", function (event) {
    const isClickInside = menu.contains(event.target) || toggleButton.contains(event.target);
    
    if (!isClickInside) {
      menu.style.display = "none";
    }
  });

  //Mensagem do formulário
  const formulario = document.getElementById('formulario-contato');
  const mensagem = document.getElementById('mensagem-obrigado');
  
  formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  const dados = new FormData(formulario);

  fetch(formulario.action, {
    method: 'POST',
    body: dados,
  })
    .then(() => {
      formulario.style.display = 'none';
      mensagem.style.display = 'block';
    })
    .catch((error) => {
      alert('Houve um erro ao enviar. Tente novamente.');
      console.error(error);
    });
});


