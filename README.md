# Aplicação de Pesquisa de Atletas - Imersão Dev com Google Gemini

## Descrição
Esta aplicação web permite pesquisar por atletas em uma base de dados. O usuário pode digitar o nome do atleta, uma palavra-chave relacionada à descrição ou uma tag e a aplicação retornará uma lista de resultados relevantes.

## Como funciona
1. **Interface do usuário:**
   * O usuário insere um termo de pesquisa em um campo de texto.
   * Ao clicar no botão "Buscar", a função `pesquisar()` é acionada.
2. **Lógica de pesquisa:**
   * A função `pesquisar()` coleta o termo de pesquisa e realiza uma busca nos dados dos atletas.
   * A busca é feita de forma case-insensitive e considera o nome, a descrição e as tags do atleta.
   * Se houver resultados, eles são exibidos na seção de resultados. Caso contrário, é exibida uma mensagem informando que nenhum atleta foi encontrado.

## Tecnologias Utilizadas
* **Front-end:**
  * **HTML:** Estrutura básica da página.
  * **CSS:** Estilização da página.
  * **JavaScript:** Lógica da aplicação.

## Estrutura do projeto
* **index.html:** Arquivo principal da página HTML, contendo a estrutura da página e a chamada para os scripts.
* **styles.css:** Arquivo CSS responsável pelo estilo visual da página.
* **dados.js:** Arquivo JavaScript contendo os dados dos atletas (array de objetos).
* **app.js:** Arquivo JavaScript contendo a lógica da aplicação, incluindo a função de pesquisa.

## Como usar
1. **Clonar o repositório:** Faça um clone desse repositório no seu computador.
2. **Abra o arquivo index.html:** Abra o arquivo `intex.html` no seu navegador.
3. **Comece a pesquisar:**  Digite o nome do seu atleta ou esporte favorito e o item aparecerá.
