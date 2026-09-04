// Função para filtrar comunidades na busca
function filtrarComunidades() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const itens = document.querySelectorAll('.item-comunidade');

  itens.forEach(item => {
    const texto = item.textContent.toLowerCase();
    if (texto.includes(input)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Manipulação do formulário de cadastro
document.getElementById('formCadastro').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const tipo = document.getElementById('tipo').value;
  const descricao = document.getElementById('descricao').value;

  if (nome && tipo) {
    const lista = document.getElementById('listaComunidades');
    
    const novoItem = document.createElement('li');
    novoItem.className = 'item-comunidade';
    novoItem.setAttribute('data-tipo', tipo);
    novoItem.innerHTML = `
      <strong>${nome}</strong>
      <span class="tag">${tipo}</span>
      <p>${descricao}</p>
    `;

    lista.appendChild(novoItem);

    // Limpa o formulário
    document.getElementById('formCadastro').reset();
    alert('Comunidade cadastrada com sucesso!');
  }
});