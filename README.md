# Portfólio · Fernanda Camargo ✦

Site-portfólio de **Fernanda Camargo**, especialista em Marketing Digital (SEO, GEO, Tráfego Pago e Conteúdo) em Curitiba, PR.

**No ar em:** https://immfernanda.github.io/portfolio/

## Sobre o projeto

Página única (one-page) construída com **HTML, CSS e JavaScript puros**, sem frameworks e sem build. A estética mistura papel e colagem (polaroids, janelinhas retrô de sistema operacional) com toques de pixel art na fonte Silkscreen.

Todo o material visual é autoral: fotos e vídeos da própria Fernanda, sem banco de imagem.

## Estrutura de arquivos

```
portfolio/
├── index.html    → todo o conteúdo e as seções do site
├── styles.css    → estilos, cores, fontes e responsividade
├── script.js     → interações (tabs, reveal, menu mobile, som dos vídeos)
└── assets/       → fotos e vídeos
    ├── foto-*.jpeg    → fotos pessoais e de trabalho
    ├── proj-*.jpeg    → prints de projetos reais (posts, equipe)
    └── video-*.mp4    → vídeos dos bastidores
```

## Seções do site

1. **Hero** — estrelinha desenhada à mão e manchas de cor desfocadas no fundo; nome, frase "Eu faço sua marca ser encontrada e te ajudo em toda a jornada do seu cliente." e colagem de polaroids intercalando fotos pessoais e de trabalho (mesmo tamanho, zoom no hover).
2. **Marquee** — faixa animada com as ferramentas e habilidades.
3. **Sobre mim** — rolo de filme: a foto no espelho aparece em P&B e, ao passar o mouse (no celular, com um toque), o filme corre para a mesma foto colorida. O arquivo `foto-espelho.jpeg` deve ser a versão colorida; o P&B é aplicado via CSS. Texto sobre dados + criatividade, trabalho humanizado e em equipe. Estatísticas em cards com contador animado: +4 anos, +10 marcas, +1 mi de views e 300 mil curtidas em um único post.
4. **Diferenciais** — seis cards em efeito vidro (glass) sobre manchas de cor desfocadas, com um olho desenhado à mão que pisca.
5. **Trabalhos** — duas abas (performance & dados / conteúdo & criativo) com cards de serviços. Selo pixel "eu conserto! 🔨".
6. **Projetos** — prova real: posts publicados (Pelvic, gastronomia, Acquafit) e card de equipe com foto do Grupo Boticário.
7. **Bastidores** — vídeos autorais em janelinhas retrô. Os dois do meio têm áudio: basta clicar pra ouvir (clicar de novo silencia; só um toca por vez).
8. **Experiência** — linha do tempo profissional (Action+, Petit, Grupo Boticário, MedSul) e formação.
9. **Depoimentos** — aguardando os relatos reais (textos de exemplo por enquanto).
10. **Funil + Contato** — as quatro etapas do trabalho (ser encontrada, encantar, converter, crescer com dados) com o botão de WhatsApp como ponta do funil. Um botão flutuante de WhatsApp acompanha a página inteira. Todos os "fala comigo" levam direto pro WhatsApp com mensagem pronta.
11. **Rodapé** — logo, navegação e contatos (WhatsApp, LinkedIn e e-mail).

## Identidade visual

| Elemento | Valor |
|---|---|
| Papel (fundo) | `#efe5d3` / `#f7f0e3` |
| Tinta (texto) | `#2a1e16` |
| Vinho | `#8e2b25` |
| Laranja | `#d95b29` |
| Rosa | `#d6336c` |
| Título | Fraunces (serifada) |
| Texto | Space Grotesk |
| Pixel | Silkscreen |

As cores ficam em variáveis CSS no topo do `styles.css` (`:root`), então mudar a paleta inteira é editar meia dúzia de linhas.

## Como editar

1. Textos: edite direto no `index.html` (cada seção está marcada com um comentário `══════`).
2. Fotos: coloque o arquivo em `assets/` e troque o caminho no `src` da imagem.
3. Publicação: o site é servido pelo **GitHub Pages** a partir da branch `main`. Todo push na `main` publica automaticamente em 1 a 2 minutos.

## Pendências

- [ ] Depoimentos reais (substituir os textos de exemplo)
- [ ] Foto colorida do espelho, se preferir à versão P&B

---

Feito com café, dados e um gato por perto ✦
