# url-shortener
Encurtador de links com algumas tecnologias: Node.js, NGINX, Docker, PostgreSQL, Redis

## Como rodar a aplicação:

### Pré-requisitos
- [Docker](https://www.docker.com/) instalado na sua máquina

### Passos

1. **Clone o repositório (se necessário):**
   ```sh
   git clone https://github.com/Kadu-H/url-shortener.git
   cd url-shortener
   ```

2. **Configure as variaveis de ambientes:**
   Crie um arquivo .env baseado no arquivo .env.example

3. **Suba o container do servidor:**
   ```sh
   docker build -t backend-url_shortner .
   ```

4. **Rode o container:**
   ```sh
   docker run -p 3000:3000 backend-teste
   ```