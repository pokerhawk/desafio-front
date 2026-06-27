# desafio-front

# Uso:

**1. Clonar e baixar dep**

Clone o repositório e instale as dependências com o programa de preferência:

```bash
git clone https://github.com/pokerhawk/desafio-front.git
```

instalar com o programa selecionado:

```bash
yarn
```

ou

```bash
npm install
```

**2. Executar**

Tenha certeza de que a porta 5173 (padrão) esteja disponivel

```bash
yarn dev
```

ou


```bash
npm run dev
```

---

# Respostas

**Resposta das 3 perguntas feitas no final do documento**

1. Em que momento do ciclo de vida do sistema a utilização do Docker se faz necessária?

O docker pode ser utilizado a qualquer momento do ciclo de vida do sistema facilitando o setup, padronizando o ambiente com o docker-compose agiliza a criação de ambientes isolados. Ele é isola, padroniza e empacota o sistema.

---

2. Qual a importância de conteinerizar o sistema no Docker?

Ele padroniza a aplicação, deixa o deploy mais rápido e simples, ele isola a aplicação, é facil de escalonar, é portatil, entre outros.

---

3. Qual a diferença entre Docker e máquinas virtuais (VMs)?

A VM ela virtualiza um sistema operacional completo enquanto o docker utiliza apenas o kernel do sistema operacional fazendo o docker mais simple, leve, rápido e utiliza menos do hardware do sistema.

---

# Painel:

**1. Cadastro/Login**

Inicialmente você será aprensentado a pagina de login, haverá uma opção para cadastrar-se, faça seu cadastro e login.

**2. Dashboard**

Assim que o login for efetuado você será levado a pagina de Dashboard aonde terá a opção de criar passageiros, visualizar os passageiros e visualizar as viagens.

**3. Análise de viagens**

No canto superior esquerdo da tela terá um botão que te levará a pagina de Análise aonde podera apresentar um arquivo .csv de viagens e ele retornará na pagina as informações dos voos apresentados, como: Numero de passageiros total, Média de ocupação total, Receita total, Operador e rota com maior gargalo além dos minutos.

**4. Lista de Viagens**

Em seu Dashboard na "Lista de Viagens" haverá uma parte de "Detalhes" que irá lhe mostrar os passageiros relacionados a viagem selecionada.
