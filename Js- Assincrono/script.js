// Função que faz uma requisição para obter dados de um usuário do GitHub
function carregarDadosDoGitHub(username) {
    // Retornando uma nova promessa
    return new Promise((resolve, reject) => {
      // Fazendo uma requisição GET para a API do GitHub para obter informações do usuário
      fetch(`https://api.github.com/users/${username}`)
        .then(response => {
          // Verificando se a resposta da requisição foi bem sucedida (código 200-299)
          if (!response.ok) {
            // Se não for bem sucedida, rejeitamos a promessa com uma mensagem de erro
            reject("Erro ao carregar os dados. Código de status: " + response.status);
          }
          // Se a resposta for bem sucedida, transformamos os dados em JSON e resolvemos a promessa
          return response.json();
        })
        .then(data => {
          // Resolvendo a promessa com os dados obtidos
          resolve(data);
        })
        .catch(error => {
          // Se ocorrer algum erro durante a requisição, rejeitamos a promessa com uma mensagem de erro
          reject("Erro ao carregar os dados: " + error);
        });
    });
}

// Função para exibir os dados do usuário na página
function exibirDadosDoUsuario(usuario) {
    const dadosDiv = document.getElementById('dados');
    dadosDiv.innerHTML = `
      <h2>${usuario.name}</h2>
      <p><strong>Login:</strong> ${usuario.login}</p>
      <p><strong>Biografia:</strong> ${usuario.bio}</p>
      <p><strong>Repositórios públicos:</strong> ${usuario.public_repos}</p>
      <img src="${usuario.avatar_url}" alt="Avatar do usuário">
    `;
}

// Função para buscar e exibir os dados do usuário do GitHub
function buscarUsuario() {
    const username = document.getElementById('usernameInput').value;
    carregarDadosDoGitHub(username)
        .then(usuario => {
            exibirDadosDoUsuario(usuario);
            listarRepositorios(usuario.repos_url);
        })
        .catch(erro => {
            console.error(erro);
            const dadosDiv = document.getElementById('dados');
            dadosDiv.innerHTML = `<p style="color: red;">${erro}</p>`;
        });
}

// Função para listar os repositórios do usuário
function listarRepositorios(reposUrl) {
    fetch(reposUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar os repositórios. Código de status: " + response.status);
            }
            return response.json();
        })
        .then(repositorios => {
            const reposDiv = document.getElementById('repos');
            let reposList = '<h3>Repositórios:</h3><ul>';
            repositorios.forEach(repo => {
                reposList += `<li>${repo.name}</li>`;
            });
            reposList += '</ul>';
            reposDiv.innerHTML = reposList;
        })
        .catch(error => {
            console.error(error);
            const reposDiv = document.getElementById('repos');
            reposDiv.innerHTML = `<p style="color: red;">${error}</p>`;
        });
}

// Adicionando um ouvinte de evento ao botão para buscar o usuário quando clicado
document.querySelector('#buscarUsuarioBtn').addEventListener('click', buscarUsuario);
