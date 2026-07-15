# Conduit Container

This is the documentation for the Conduit Container Project.
The project is the containerized version of the [Conduit Backend](https://github.com/dpsec26/conduit-backend) and the [Conduit Frontend](https://github.com/dpsec26/conduit-frontend). It also uses a PostgreSQL database instead of the Sqlite database.

:::tip[View repository on GitHub]
You can view the [**repository**](https://github.com/dpsec26/conduit-container) on GitHub.
:::

## Table of contents

- [Prerequisites](#prerequisites)
- [Quick start](#quick-start)
- [Usage](#usage)
    - [Start and stop the application](#start-and-stop-the-application)
    - [Access log files](#access-log-files)
- [GitHub Workflows](#github-workflows)
    - [Deployment](#deployment)

## Prerequisites

- **Git**
- **Docker**

## Quick start

1. Clone the repository
```sh
git clone --recurse-submodules git@github.com:dpsec26/conduit-container.git
```

2. Create (or copy) the `.env` file
```sh
cp example.env .env
```
:::note
You should change the `SECRET_KEY` and the passwords if the application is accessible from the internet.
:::

3. Start the application via Docker Compose
```sh
docker compose up -d
```

## Usage

### Start and stop the application

You can start the application with a simple
```sh
# use -d for detached mode
docker compose up -d
```
This will start all services.

:::note
A Django superuser is automatically created with the credentials from the `.env` the first time you start this.
:::

You can access the frontend and backend in your browser:
- Frontend: http://localhost:8282
- Backend: http://localhost:8080

To stop the application use
```sh
docker compose down
```

### Access log files

You can view the log files of all the parts of the application:
```sh
docker compose logs db
docker compose logs backend
docker compose logs frontend
```

To save your log files, use
```sh
docker compose logs <container-name> > my-log-file.txt
```

## GitHub Workflows

### Deployment

The deployment workflow is defined in [deployment.yaml](https://github.com/dpsec26/conduit-container/blob/deployment/.github/workflows/deployment.yaml).
It triggers when a tag is pushed.

:::note
The workflow uses the GitHub Container Registry (GHCR).
:::

The workflow automates the following steps:
1. Check out the repositories
2. Log into GHCR
3. Build and push the backend to GHCR
4. Build and push the frontend to GHCR
5. Create the `.env` file
6. Copy the [docker-compose-deployment.yaml](https://github.com/dpsec26/conduit-container/blob/deployment/docker-compose.yaml) and the `.env` file to the remote host
7. Pull and start containers on the remote host.

:::warning[Important]
The workflow depends on GitHub Secrets. You have to set them before you trigger the workflow.
For further information see
[GitHub Secrets](https://docs.github.com/en/actions/concepts/security/secrets) and
[Using secrets in GitHub Actions](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets)
:::

| Secret | Example Value |
| --- | --- |
| ALLOWED_HOSTS | 1.2.3.4 |
| BACKEND_PORT | 8080 |
| BACKEND_URL | 1.2.3.4 |
| DB_HOST | db |
| DJANGO_DEBUG | false |
| DJANGO_SUPERUSER_EMAIL | admin@example.com |
| DJANGO_SUPERUSER_PASSWORD | password |
| DJANGO_SUPERUSER_USER | admin |
| FRONTEND_PORT | 8282 |
| FRONTEND_URL | 1.2.3.4 |
| GHCR_TOKEN | your-ghcr-token |
| POSTGRES_DB | conduit |
| POSTGRES_PASSWORD | password |
| POSTGRES_PORT | 5432 |
| POSTGRES_USER | admin |
| REMOTE_HOST | 1.2.3.4 |
| REMOTE_SSH_KEY | your-ssh-key |
| REMOTE_USER | your-username |
| SECRET_KEY | secretkey |

:::danger[Caution]
Make sure to use **strong** passwords and uncommon usernames
:::