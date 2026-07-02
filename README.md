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

1. **Hero** — nome, frase "Eu faço sua marca ser encontrada." e colagem de polaroids intercalando fotos pessoais e de trabalho (mesmo tamanho, zoom no hover).
2. **Marquee** — faixa animada com as ferramentas e habilidades.
3. **Sobre mim** — foto no espelho com tripé, texto sobre dados + criatividade, trabalho humanizado e em equipe. Estatísticas: +4 anos de experiência, +10 marcas atendidas.
4. **Trabalhos** — duas abas (performance & dados / conteúdo & criativo) com cards de serviços. Selo pixel "eu conserto! 🔨".
5. **Projetos** — prova real: posts publicados (Pelvic, gastronomia, Acquafit) e card de equipe com foto do Grupo Boticário.
6. **Bastidores** — vídeos autorais em janelinhas retrô. Os dois do meio têm áudio: basta clicar pra ouvir (clicar de novo silencia; só um toca por vez).
7. **Experiência** — linha do tempo profissional (Action+, Petit, Grupo Boticário, MedSul) e formação.
8. **Depoimentos** — aguardando os relatos reais (textos de exemplo por enquanto).
9. **Contato** — e-mail, WhatsApp e LinkedIn.

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
