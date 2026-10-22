# Portfólio — Luca Baccari

Portfólio pessoal criado para apresentar minha trajetória como estudante de Engenharia de Software na FIAP e minha atuação em Gerenciamento de Serviços de TI (ITSM) na Pluxee. A página reúne projetos, conhecimentos técnicos, formação e canais de contato em uma experiência de navegação única, responsiva e acessível.

> **Status:** projeto concluído e preparado para publicação. O endereço do deploy será adicionado aqui após a hospedagem.

## Sobre o projeto

O conceito visual combina **tecnologia, prática e evolução**. A interface utiliza tema escuro, destaques em azul e elementos inspirados em editores de código, como numeração lateral, comentários, rótulos monoespaçados e estruturas semelhantes a objetos JavaScript.

O projeto foi desenvolvido como parte do Checkpoint 6 de Front-End da FIAP, utilizando um fluxo de *vibecoding*: definição de referências, criação de um briefing detalhado, geração da primeira versão e rodadas documentadas de revisão.

## Conteúdo da página

- **Início:** apresentação profissional e resumo do perfil.
- **Sobre:** formação, experiência e interesses em tecnologia.
- **Projetos:** Code-Cam, landing page Marcos Moreira e API de Jogos.
- **Tecnologias:** conhecimentos organizados como código e representados em um mapa orbital animado.
- **Trajetória:** linha do tempo com marcos acadêmicos e profissionais.
- **Contato:** acesso direto ao GitHub, LinkedIn e e-mail.

## Projetos apresentados

### Code-Cam — FIAP Challenge / Jovi

Projeto em equipe que chegou à banca final do FIAP Challenge, ficando entre os 20 melhores de 113 grupos. Minha participação envolveu concepção da ideia, prototipação, desenvolvimento, testes, correções e apresentação.

- [Acessar o Code-Cam](https://codecam.onrender.com)
- [Ver repositório do projeto](https://github.com/Code-Cam-Solutions/code-cam)

### Marcos Moreira — Landing Page

Landing page freelancer desenvolvida para um nutricionista, abrangendo prospecção, implementação e entrega comercial.

- [Acessar a landing page](https://www.marcosmoreiranutri.com.br/)
- [Ver repositório do projeto](https://github.com/Lucabaccari/marcosmoreira-nutri-lp)

### API de Jogos

Primeira API REST desenvolvida para praticar fundamentos de back-end, organização em camadas e operações CRUD com métodos HTTP.

- [Ver repositório do projeto](https://github.com/Lucabaccari/Api-Jogos)

## Tecnologias utilizadas no portfólio

- React 19
- JavaScript
- Vite 8
- CSS organizado por responsabilidade
- HTML semântico

O projeto evita dependências de interface desnecessárias. Os componentes, dados e estilos foram separados para facilitar manutenção e futuras atualizações.

## Decisões de desenvolvimento

- Componentes reutilizáveis para cards, cabeçalhos de seção e elementos recorrentes.
- Conteúdo de projetos, tecnologias, navegação e trajetória centralizado em `src/data/portfolio.js`.
- CSS dividido entre estilos globais, componentes e regras responsivas.
- Navegação por âncoras entre todas as seções da página.
- Imagens locais e tratamento visual alinhado à paleta do portfólio.
- Mapa de tecnologias com logos em órbita e alternativa estática para usuários que preferem menos movimento.

## Acessibilidade e responsividade

- Estrutura com elementos HTML semânticos.
- Link para pular diretamente ao conteúdo principal.
- Textos alternativos nas imagens relevantes.
- Estados visíveis de foco e suporte à navegação por teclado.
- Contraste adequado entre fundo, superfícies e textos.
- Menu e layouts adaptados para desktop, tablet e celular.
- Respeito à configuração `prefers-reduced-motion`.

## Organização do código

```text
src/
├── components/    componentes reutilizáveis
├── data/          projetos, tecnologias, navegação e trajetória
├── styles/        estilos globais, de componentes e responsivos
├── App.jsx        composição das seções e interações principais
└── main.jsx       ponto de entrada da aplicação

public/
└── assets/         fotografia, capa de projeto e logos locais
```

## Processo de criação

As referências visuais, decisões de identidade, prompt inicial e rodadas de correção estão documentados em [docs/processos.md](docs/processos.md). Esse registro mostra como o resultado evoluiu a partir do briefing inicial e quais aprendizados surgiram durante os ajustes.

## Publicação

A aplicação gera uma versão estática otimizada na pasta `dist/`, adequada para serviços de hospedagem de front-end. Após o deploy, o link público será incluído no início deste documento e na seção de resultado final do registro de processo.

## Créditos

O retrato do card de perfil está em `public/assets/luca-profile-blue.png`. Os logotipos de tecnologias em `public/assets/tech/` são fornecidos pelo projeto [Devicon](https://devicon.dev/) sob licença MIT; as marcas pertencem aos seus respectivos proprietários.
