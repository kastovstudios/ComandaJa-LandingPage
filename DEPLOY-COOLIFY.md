# Deploy da landing page ComandaJá no Coolify

Esta pasta é um projeto independente. O deploy usa Nginx e publica somente HTML, CSS, JavaScript e imagens. Não precisa de banco de dados, Node.js, instalação de dependências ou volume persistente.

## 1. Configure o contato

O número encontrado nos botões da página foi centralizado em `config.js`, com o código brasileiro `55`. Confira se é o contato comercial desejado. Para alterar, informe o WhatsApp com código do país, DDD e número, somente dígitos. Todos os botões usam esse arquivo. Sem um número configurado, a página funciona e exibe o aviso de contato em preparação.

Essa configuração é um arquivo público da página, não uma variável de ambiente do Coolify. Para mudar o contato depois, altere o arquivo no repositório e faça um novo deploy.

## 2. Envie para o repositório

Envie os arquivos desta pasta ao repositório Git que será conectado ao Coolify, incluindo `Dockerfile`, `.dockerignore`, `deploy/nginx.conf`, `index.html`, `styles.css`, `script.js`, `config.js` e toda a pasta `assets`.

O projeto já tem um repositório Git local. Faça o commit e envie para o seu remoto usando seu fluxo habitual. A preparação deste deploy não cria commits nem faz push.

## 3. Crie a aplicação (Dockerfile)

No Coolify, abra seu projeto e ambiente, adicione uma aplicação a partir do repositório Git e escolha **Dockerfile** em **Build Pack**.

Use estes valores quando o conteúdo desta pasta estiver na raiz do repositório:

| Campo | Valor |
| --- | --- |
| Build Pack | `Dockerfile` |
| Base Directory | `/` |
| Dockerfile Location | `/Dockerfile` |
| Ports Exposes | `80` |
| Ports Mappings | Deixar vazio |
| Build/Install/Start Commands | Deixar vazios; o Dockerfile já define tudo |
| Variáveis de ambiente | Nenhuma obrigatória |
| Volumes | Nenhum |

Selecione a branch para a qual você enviou os arquivos. Se a pasta estiver dentro de outro repositório, altere **Base Directory** para o caminho dessa pasta; mantenha o Dockerfile relativo a ela.

Defina seu domínio, por exemplo `https://site.seudominio.com.br`. Aponte o DNS para o servidor do Coolify e mantenha o proxy/HTTPS do Coolify habilitado. O endereço é um exemplo: substitua pelo seu domínio.

Clique em **Deploy**. O Nginx escuta em todas as interfaces na porta interna `80`, que será alcançada pelo proxy do Coolify. A porta `4175` é usada apenas pela prévia local em Node.js.

## 4. Saúde e verificação

O Dockerfile define um health check que consulta `http://127.0.0.1:80/health`. A rota retorna HTTP `200` com `ok`. O cliente `wget` faz parte da imagem Alpine utilizada.

No modo Dockerfile, o Coolify usa o `HEALTHCHECK` da imagem. Não é necessário cadastrar outro check no painel.

Após o deploy, confira:

- Container com status saudável.
- Domínio abrindo a landing page com HTTPS.
- Logo e capturas reais carregando.
- Cinco abas abrindo suas imagens e links de ampliação.
- Contato do WhatsApp, depois de configurar o número.

Para diagnosticar dentro do terminal da aplicação:

```sh
nginx -t
wget -q -O - http://127.0.0.1:80/health
wget -q -O /dev/null http://127.0.0.1:80/
```

## Alternativa: Docker Compose

Se preferir o Build Pack **Docker Compose**, use o arquivo `/docker-compose.coolify.yml`. Configure o domínio no serviço `site`, apontando para a porta interna `80`.

O Compose não fixa nome de container, porta do host ou redes do Coolify. O health check é herdado da imagem.

## Testar o container localmente

Com o Docker Desktop iniciado e usando containers Linux, execute nesta pasta:

```sh
docker build -t comandaja-site:local .
docker run --rm -d --name comandaja-site-preview -p 127.0.0.1:8088:80 comandaja-site:local
docker exec comandaja-site-preview nginx -t
docker exec comandaja-site-preview wget -q -O - http://127.0.0.1:80/health
docker inspect --format '{{.State.Health.Status}}' comandaja-site-preview
```

Abra `http://localhost:8088`. O status de saúde pode começar como `starting`; aguarde o primeiro check. Para encerrar o teste:

```sh
docker stop comandaja-site-preview
```

O servidor local `npm start` continua disponível como antes. Ele não é usado em produção.

## Validação desta preparação

O arquivo Compose e a sintaxe JavaScript foram validados localmente. O build e a execução do container precisam ser confirmados com o Docker ativo: o serviço do Docker Desktop estava parado durante a preparação.

## Referências oficiais

- [Dockerfile no Coolify](https://coolify.io/docs/applications/builds/dockerfile)
- [Health checks no Coolify](https://coolify.io/docs/applications/configuration/health-checks)
- [Imagem oficial Nginx](https://hub.docker.com/_/nginx)
