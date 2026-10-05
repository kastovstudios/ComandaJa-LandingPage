# ComandaJá — site institucional

Landing page independente para divulgação do ComandaJá. HTML, CSS e JavaScript, sem instalação de bibliotecas e sem vínculo com o sistema interno.

## Abrir

Dê dois cliques em `Abrir-Site.cmd` ou em `index.html`. O site funciona diretamente no navegador.

Para uma prévia HTTP, com Node.js instalado, execute `npm start` nesta pasta e acesse http://localhost:4175. Encerre com Ctrl+C. Para outra porta, defina a variável `PORT`.

## Configurar o WhatsApp

Abra `config.js` e substitua `SEUNUMERO` pelo número completo com país e DDD, somente dígitos. O formato brasileiro é `55` + DDD + número. Altere `whatsappMessage` se desejar. Todos os botões são atualizados por esta única configuração.

Enquanto o número não estiver preenchido, os botões exibem um aviso de contato em preparação para evitar abrir um endereço inválido.

## Conteúdo

- Hero, apresentação, fluxo em quatro etapas e dez funcionalidades.
- Cinco capturas reais: visão geral, comandas, pedidos, cardápio e relatórios. As abas aceitam clique e navegação pelas setas do teclado.
- Quatro estabelecimentos fictícios e mockup de celular com visão do garçom.
- Benefícios, chamada final, rodapé e botões de WhatsApp.
- Menu mobile, links de navegação, foco visível, preferência por movimento reduzido e aviso de contato acessível.

Todas as imagens de interfaces são capturas reais, copiadas sem edição: o dashboard enviado pelo proprietário e telas da documentação do sistema. As capturas da documentação são de uma loja de demonstração, cujo nome e dados foram preservados. A visão mobile é uma captura real da sessão do garçom, exibida dentro de uma moldura de celular. As fotografias foram geradas por IA para ilustrar ambientes fictícios; não representam clientes ou instalações reais. Não há depoimentos, estatísticas comerciais ou preços inventados.

## Arquivos

- `index.html`: textos e estrutura.
- `styles.css`: aparência e responsividade.
- `script.js`: ícones, galeria de capturas reais, menu e contatos.
- `config.js`: número e mensagem do WhatsApp.
- `assets/estabelecimentos.png`: quatro fotografias em uma composição, recortadas visualmente via CSS.
- `assets/comandaja-icon.png`: logo e favicon originais, copiados do sistema.
- `assets/sistema/`: capturas reais do dashboard, comandas, pedido, cardápio, relatórios e visão mobile.
- `server.mjs`: servidor local opcional, escutando somente no computador.
- `ASSETS.md`: origem das capturas, logo, fonte e imagens de ambientes.

## Publicação

Envie `index.html`, `styles.css`, `script.js`, `config.js` e a pasta `assets` para uma hospedagem estática. Não é necessário enviar `server.mjs`, `package.json`, documentação ou `Abrir-Site.cmd`. Configure o número de contato antes de publicar. A página não coleta formulários ou armazena dados; links de contato levam ao WhatsApp.

## Verificar a sintaxe

Com Node.js instalado, execute `npm run check`.

## Identidade real do sistema

A logo vem de `src/Lanchonete/wwwroot/brand/comandaja-icon.png`. A tipografia usa exatamente a pilha definida em `src/Lanchonete/wwwroot/styles.css`: `Inter, "Segoe UI", Arial, sans-serif`, sem carregar ou inventar outra fonte. O nome da marca segue peso 750 e espaçamento -0,5 px, como no sistema. As cores principais são extraídas do CSS original.

## Deploy no Coolify

O projeto inclui Dockerfile com Nginx, porta interna 80 e health check em /health. Veja o passo a passo em [DEPLOY-COOLIFY.md](DEPLOY-COOLIFY.md). Há também docker-compose.coolify.yml como alternativa.
