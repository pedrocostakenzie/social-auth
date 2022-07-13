# Google Auth com Node.js

**Passo 1/5:**

- No painel de desenvolvedor do Google, selecione ou crie um projeto.
- Navegue até a página de credenciais e crie um OAuthApp.
  - [Google Cloud console for credentials](https://console.developers.google.com/apis/credentials)
- Criar um novo aplicativo OAuth.
- Copiar as credenciais Client Id e Client Secret

**Passo 2/5:**

- Na aplicação crie um endpoint para ser a URL Callback.
- Na criação do OAuthApp, indicar a URL da aplicação e esse endpoint que o Google usará para redirecionar o usuário. (Pode ser localhost:3000) 

**Passo 3/5:**

- Instale a lib **query-string, axios e dotenv** na aplicação.
- Definir as queries da URL de login do Google
- Certifique-se de que seus escopos correspondam aos dados que você deseja acessar posteriormente em seu código. Por exemplo, você precisará adicionar o escopo “user:email” para acessar o endereço de e-mail do usuário.
- Veja as opções de escopo [aqui](https://developers.google.com/identity/protocols/OAuth2WebServer#exchange-authorization-code): 

**Passo 4/5:**

Como mencionado anteriormente, assim que o usuário fizer login, ele será redirecionado de volta ao seu aplicativo. A url para a qual eles são redirecionados conterá um código especial . Por exemplo:

http://localhost:3000/auth/google?code=CODE\_IS\_HERE

- Capture esse código da query da URL.
- Gere um token de acesso com esse código.


**Passo 5/5:**

Agora que você obteve o token de acesso, podemos usá-lo para obter dados da API do Google. 

- Criar uma requisição para obter alguns detalhes básicos do usuário.

[Mais opções da API do Google](https://developers.google.com/apis-explorer/#p/)


# GitHub Auth com Node.js

**Passo 1/5:**

- Nas configurações de desenvolvedor do GitHub, ir na seção OAuth Apps.
  - <https://github.com/settings/developers>
- Criar um novo aplicativo OAuth.
- Copiar as credenciais Client Id e Client Secret

**Passo 2/5:**

- Na aplicação crie um endpoint para ser a URL Callback.
- Na criação do OAuthApp, indicar a URL da aplicação e esse endpoint que o GitHub usará para redirecionar o usuário. (Pode ser localhost:3000) 

**Passo 3/5:**

- Definir as queries da URL de login do GitHub
- Veja as opções de escopo [aqui](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/): 

**Passo 4/5:**

- Capture esse código da query da URL.
- Gere um token de acesso com esse código.

**Passo 5/5:**

- Criar uma requisição para obter alguns detalhes básicos do usuário.

[Mais opções da API do GitHub](https://developer.github.com/v3/)

