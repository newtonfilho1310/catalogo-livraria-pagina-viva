# Catálogo da Livraria Página Viva

Projeto desenvolvido para a atividade prática de HTML, CSS e JavaScript.

## 1. Qual é o papel de um servidor Web ao carregar esta página?

O servidor Web recebe a requisição HTTP enviada pelo navegador e devolve os recursos
solicitados para montar a página, como o arquivo HTML, a folha de estilos CSS, o arquivo
JavaScript e as imagens. Depois disso, o navegador interpreta esses arquivos e apresenta
a interface ao usuário.

## 2. Caminho relativo a partir de `paginas/sobre.html`

O caminho correto seria:

```text
../imagens/capa-livro.png
```

O `../` é necessário porque `sobre.html` estaria dentro da pasta `paginas/`. Primeiro é
preciso voltar um nível até a raiz `projeto/` e, a partir dela, entrar na pasta `imagens/`
para acessar `capa-livro.png`.

## 3. Boas práticas de escrita HTML aplicadas

Foram usadas tags semânticas como `header`, `nav`, `main`, `article`, `section` e `footer`
para indicar com clareza a função de cada parte da página. As tags estão corretamente
aninhadas e fechadas, os identificadores (`id`) são únicos, a indentação acompanha a
hierarquia do documento, as imagens possuem texto alternativo e os campos do formulário
têm `label` associado por `for` e `id`.

## Estrutura do projeto

```text
projeto/
├── index.html
├── README.md
├── css/
│   └── estilo.css
├── imagens/
│   └── capa-livro.png
└── js/
    └── script.js
```
