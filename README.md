# url-shortener
Este projeto é um encurtador de URLs desenvolvido com o objetivo de aprimorar minhas habilidades em tecnologias modernas de backend e banco de dados, além de servir como exemplo prático para outros projetos.

## Como rodar a aplicação:

### Pré-requisitos
- [Docker](https://www.docker.com/) instalado na sua máquina
- [Docker Compose](https://docs.docker.com/compose/) também instalado

### Passos

1. **Clone o repositório (se necessário):**
   ```sh
   git clone https://github.com/Kadu-H/url-shortener.git
   cd url-shortener
   ```

2. **Configure as variaveis de ambientes:**
   Crie um arquivo .env baseado no arquivo .env.example

3. **Suba os containners:**
   ```sh
   docker compose up
   ```

4. **Rode as migrations no containner do servidor:**
   ```sh
   docker-compose exec server sh
   ```
   Dentro do terminal do servidor rode:
   ```sh
   npx prisma migrate dev --name init
   ```

## Rotas da API

### Criar uma url
- **POST** `/`
- **Payload:**
  ```json
  {
    "id": "id",
    "url": "http://example.com"
  }
  ```

### Buscar url por ID
- **GET** `/:id`
- **Resposta:** 200 OK  
  ```json
  {
    "id": "id",
    "url": "http://example.com"
  }
  ```

### Atualizar url
- **PATCH** `/:id`
- **Payload:**
  ```json
  {
    "url": "http://new.example.com",
  }
  ```

### Remover url
- **DELETE** `/:id`
- **Resposta:** 200 ok
  ```json
  {
    "id": "id",
    "url": "http://example.com"
  }
  ```
