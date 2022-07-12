# Wellington Pereira Silva

- Estudante de Ciência da Computação - 5 periodo - UFJF
- Obs: Por conta de passado por uma semana de provas no curso, não pude fazer tudo com muito capricho. Mas na parte da API tentei fazer com muita qualidade, usando Docker compose.

## Stack utilizada

**API Rest:** Node, AdonisJS, Docker, TypeScript

**Banco de Dados:** PostgresSQL

## Instalação

Antes de iniciar a API você precisa ter o Docker instalado em sua máquina, pois ele será resposavel por baixar todas as dependências do projeto.

https://docs.docker.com/get-docker/

Para baixar as dependências e rodar a API

```bash
  cd corelab-web-challenge
  docker-compose up
```

Para acessar o dashboard do postgres use endereço abaixo usando o username e password abaixo. Essas constante podem ser alteradas no arquivo docker-compose.yml

http://localhost:16543/

```bash
   username: pgadmin4@pgadmin.com.br
   password: admin
```

Para conectar o dashboard ao banco, use as seguintes configurações no pgadmin4. Essa variáveis estão definidas no arquivo docker-compose.yml:

```bash
   General:
    Name: Corelab-Server

   Connection:
    Host name/addres: postgres
    Port: 5432
    Maintenance database: Corelab
    Username: corelabuser
    Password: corelabpassword
```
