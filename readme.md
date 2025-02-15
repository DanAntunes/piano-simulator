# Piano Virtual

Um aplicativo web interativo que simula um piano virtual, permitindo que os usuários toquem melodias diretamente do navegador.

## Visão Geral

O **Piano Virtual** foi projetado para oferecer uma experiência musical acessível e divertida. Ele é responsivo e funciona bem em dispositivos móveis e desktop. Os usuários podem controlar o volume, alternar a exibição das teclas e tocar o piano usando o teclado ou o mouse.

## Recursos

- **Teclas interativas:** Clique ou pressione as teclas no teclado para tocar.
- **Controle de volume:** Ajuste o volume diretamente na interface.
- **Exibição personalizável:** Escolha ocultar ou exibir as legendas das teclas.
- **Design responsivo:** Experiência otimizada para diferentes tamanhos de tela.

## Tecnologias Utilizadas

- **HTML5:** Estrutura semântica do aplicativo.
- **CSS3:** Estilização e responsividade (incluindo media queries).
- **JavaScript:** Funcionalidades interativas, como reprodução de áudio e eventos de teclado.
- **Normalize.css:** Garantia de consistência de estilos entre navegadores.
- **Google Fonts:** Tipografia estilosa com a fonte Poppins.

## Como Usar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/DanAntunes/piano-simulator
   ```

2. **Acesse o diretório do projeto:**
   ```bash
   cd piano-simulator
   ```

3. **Abra o arquivo `index.html` em seu navegador.**

## Estrutura do Projeto

```
├── index.html
├── src
│   ├── assets
│   │   ├── css
│   │   │   ├── main.css
│   │   │   └── media-querie.css
│   │   ├── scripts
│   │   │   └── script.js
│   │   └── tunes
│   │       ├── a.wav
│   │       ├── w.wav
│   │       └── ...
│
└── README.md
```

## Controles

- **Volume:** Use o controle deslizante para ajustar o volume do som.
- **Exibição das Teclas:** Ative/desative a visualização das legendas das teclas com o botão de alternância.
- **Teclas do Teclado:**
  - Teclas brancas: `A, S, D, T, Y, U, K, L, ;`
  - Teclas pretas: `W, E, F, G, H, J, O, P`

## Responsividade

O design foi otimizado para diferentes dispositivos:

- **Desktop:** Interface padrão com layout horizontal.
- **Mobile:** Layout rotacionado e ajustado para telas menores.

## Demonstração

Insira aqui um link para uma demonstração ao vivo ou um gif do aplicativo em ação.

## Contribuição

Contribuições são bem-vindas! Siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma nova branch:
   ```bash
   git checkout -b feature/sua-feature
   ```
3. Commit suas alterações:
   ```bash
   git commit -m 'Adicionei um novo recurso'
   ```
4. Faça o push para a branch:
   ```bash
   git push origin feature/sua-feature
   ```
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---


