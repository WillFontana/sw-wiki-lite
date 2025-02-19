# Star Wars Wiki Lite - Frontend Challenge

## May the force be with you!!

Projeto desenvolvido para o teste técnico Minha Casa Construida.  
Este app permite explorar informações sobre os filmes e personagens do universo Star Wars, utilizando a API pública **SWAPI**.

O app foi desenvolvido com foco no uso em desktop, especialmente devido às animações personalizadas e à ênfase em demonstrar competências técnicas. O objetivo principal foi destacar habilidades como lógica de programação, consumo de APIs e a implementação de recursos avançados de front-end.

Preciso dizer que foi uma experiência muito gratificante criar este projeto. Poder trabalhar com um tema que eu gosto tanto (Star Wars) tornou o processo ainda mais legal. Além disso, foi ótimo poder explorar tecnologias modernas e novos padrões, que muitas vezes são difíceis de encontrar em projetos mais legados.

Como a Api tem as respostas apenas em inglês o sistema foi adaptado para ficar mais coerente como um todo.

---

## Tecnologias Utilizadas

O projeto foi desenvolvido com as seguintes tecnologias e ferramentas:

- **React.js** - Biblioteca para construção da interface
- **Styled Components** - Estilização com temas dinâmicos
- **React Router DOM** - Gerenciamento de rotas
- **Redux Toolkit** - Gerenciamento de estado global
- **React Hook Form** - Manipulação de formulários
- **Zod** - Validação de dados nos formulários
- **TypeScript** - Tipagem estática e segurança no código
- **Day.js** - Manipulação de datas
- **LocalStorage** - Simulação de login sem backend

---

## API Utilizada

Utilizamos a **SWAPI (Star Wars API)** para obter dados sobre os filmes e personagens:

🔗 **API Oficial:** [https://swapi.dev](https://swapi.dev)  

Endpoints principais utilizados:

- `/films/` - Lista todos os filmes
- `/films/:id` - Detalhes de um filme específico
- `/people/` - Lista todos os personagens
- `/people/:id` - Detalhes de um personagem específico

---

## Funcionalidades Implementadas

[x] **Página Inicial:** Lista os filmes do Star Wars, categorizados por era (Prequels, Trilogia Clássica e Sequels).  
[x] **Detalhes do Filme:** Ao clicar em um filme, são exibidas suas informações, incluindo personagens e naves associadas.  
[x] **Detalhes do Personagem:** Permite visualizar dados detalhados dos personagens, como planeta natal, veículos e filmes em que aparecem.  
[x] **Cadastro de Usuário:** Simulado com `localStorage`, permitindo que novos usuários sejam registrados.  
[x] **Login de Usuário:** Valida os dados cadastrados e gera um token fake no `localStorage` para simular autenticação.  
[x] **Tema Dinâmico:** O sistema foi refatorado para utilizar `Styled Components` com `ThemeProvider`, facilitando a manutenção.  
[x] **Efeitos Visuais:** Animações de entrada, hover, neon effects e um loader inspirado nos sabres de luz.  

---

## Rodando o projeto?

### Clonar o Repositório

```sh
git clone https://github.com/WillFontana/sw-wiki-lite
cd sw-wiki-lite
```

### Instalar dependências

```sh
yarn install | npm install
```

### Rodar a Aplicação

```sh
yarn dev | npm run dev
```

### Acessar a Aplicação

Acesse <http://localhost:5173> no navegador.

### Autenticando no sistema

Basta apenas registrar o usuário no sistema através da url /register (acessável também pela tela de login), e após o cadastro é só realizar o login.
