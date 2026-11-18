# Site – HM Limpezas Pós-Obra (Campo Grande, Cariacica (ES))

Abra o `index.html` no navegador para ver o site. Não precisa de instalação.

## Estrutura
```
site-limpeza-pos-obra/
├── index.html        → página do site
├── css/style.css     → cores e layout
├── js/script.js      → WhatsApp, Instagram, menu e formulário
└── img/              → logo, favicon e ilustrações (SVG)
```

## O que trocar antes de publicar
1. **WhatsApp e Instagram**: edite só o topo do `js/script.js` (objeto `CONFIG`).
   Todos os botões e ícones do site são atualizados automaticamente.
   - `whatsapp`: 55 + DDD + número, só dígitos (ex.: `5527988887777`)
   - `instagram`: usuário sem o @ (hoje está `hmlimpezasposobra`, confira)
2. **Números da faixa de destaque** (+300 imóveis, 5★ etc.): são exemplos. Coloque os dados reais ou remova.
3. **Depoimentos**: substitua os textos entre colchetes por avaliações reais de clientes.
4. **Mais fotos**: coloque o .jpg na pasta `img/` e copie um bloco `<figure>` da seção "Nossos trabalhos" no `index.html`.
5. **Cores**: no início do `css/style.css` e no bloco "Identidade HM" no fim do arquivo.

## Imagens
- `logo-hm.png` / `logo-hm-quadrada.png` / `favicon.png` → logo da HM
- `obra-sala.jpg`, `obra-gourmet-1.jpg`, `obra-gourmet-2.jpg` → fotos dos serviços
- `whatsapp*.svg`, `instagram*.svg` → ícones das redes
- `servico-*.svg` → ilustrações dos cards de serviço

## Recursos
- Botão flutuante de WhatsApp com animação
- Formulário de orçamento que envia a mensagem pronta para o WhatsApp
- Mapa de Campo Grande, Cariacica (ES)
- Responsivo (celular, tablet e computador)
- SEO básico com título e descrição local

## Como publicar de graça
Arraste a pasta para o **Netlify Drop** (app.netlify.com/drop) ou use o **GitHub Pages**.
