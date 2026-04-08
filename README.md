Stock Manager - Frontend
Este é o módulo de interface do sistema de gerenciamento de estoque, desenvolvido em Angular. A aplicação foi projetada para oferecer uma experiência de usuário fluida na gestão de produtos, categorias e controle de acesso.

🚀 Tecnologias Utilizadas
Framework: Angular (versão 17+)

Linguagem: TypeScript

Estilização: CSS / SCSS

Comunicação API: HttpClient para consumo de serviços REST

Gerenciamento de Estado/Fluxo: Services e RxJS (Observables)

🛠️ Funcionalidades da Interface
Painel de Autenticação: Tela de login estruturada para integração com JWT.

Gestão Visual de Inventário: Listagem dinâmica de produtos com filtros e paginação.

Formulários Reativos: Cadastro e edição de produtos e categorias com validações em tempo real.

Navegação: Sistema de rotas protegidas (Guards) para garantir que apenas usuários autenticados acessem o estoque.

Feedback ao Usuário: Tratamento de erros e mensagens de confirmação para operações de CRUD.

📁 Estrutura do Projeto
O projeto segue a estrutura padrão do Angular, organizada por módulos e componentes:

src/app/components/: Componentes reutilizáveis da interface (tabelas, botões, modais).

src/app/services/: Lógica de comunicação com o backend e compartilhamento de dados.

src/app/models/: Interfaces e classes que definem o formato dos dados (Product, Category, User).

src/app/pages/: Componentes que representam as páginas completas da aplicação.

🚦 Como Executar Localmente
Pré-requisitos
Node.js (versão LTS recomendada)

Angular CLI instalado globalmente:

Bash
npm install -g @angular/cli
Instalação
Clone o repositório:

Bash
git clone https://github.com/Mariianah-Santos/projeto-stock.git
Acesse a pasta do projeto:

Bash
cd projeto-stock
Instale as dependências:

Bash
npm install
Execução
Para iniciar o servidor de desenvolvimento, execute:

Bash
ng serve
Após o comando, a aplicação estará disponível em http://localhost:4200/.

⚙️ Configuração da API
Para que o frontend funcione corretamente, certifique-se de que o backend está rodando. Você pode configurar a URL base do servidor no arquivo:
src/environments/environment.ts

TypeScript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api' // Ajuste conforme sua porta backend
};
📝 Licença
Este projeto é voltado para fins acadêmicos e desenvolvimento de portfólio.

Desenvolvido por Mariana Santos
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
