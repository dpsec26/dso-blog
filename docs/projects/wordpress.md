---
title: Wordpress
sidebar_position: 6
---


# WordPress

This documentation contains the setup for a WordPress blog and a MariaDB. Each service runs in its own container.
A WordPress admin user and MariaDB user are created via the environment variables. An [example.env](https://github.com/dpsec26/wordpress/blob/dev/example.env) is provided.

:::tip[View repository on GitHub]
You can view the [**repository**](https://github.com/dpsec26/wordpress) on GitHub.
:::

## Table of contents

1. [Prerequisites](#prerequisites)
1. [Quickstart](#quickstart)
1. [Usage](#usage)
    - [Configuration](#configuration)
    - [Containerization](#containerization)
        - [Access container logs](#access-container-logs)
        - [Start/Stop the application](#startstop-the-application)
        - [Remove the containers](#remove-the-containers)

## Prerequisites

- Docker Engine or Docker Desktop

## Quickstart

In order to quickly get started with the project follow these steps:

1. Clone the repository
1. Navigate to the repository
1. Configure required application environment variables
    1. `cp example.env .env`
    1. Edit the .env file
1. Build and run the containers
    - `docker compose up -d`
1. (Optional) Show container logs
    - `docker compose logs -f`
1. Verify the application is running by visiting `<your-ip>:8080` (or the port you configured in the .env)

## Usage

### Configuration

1. Create (or copy) the [.env](https://github.com/dpsec26/wordpress/blob/dev/example.env) file to configure the application.
```sh
cp example.env .env
```
The file has to be in the root directory. Otherwise you need to reference it in the docker compose command.
2. Edit the environment variables. Make sure to use strong passwords if the application is exposed to the internet.

### Containerization

You can build and run the containers with a simple command:
```sh
# use -d to run the containers in the background
# you can use --env-file /path/to/your/.env if it's not in the root directory
docker compose up -d
```
This will build and start both containers. 

#### Access container logs

To see the log files of the application, you can use:
```sh
docker compose logs -f
```
Closing this terminal will not stop the containers.

#### Start/Stop the application

If you want to stop the application (and all containers of it) use:
```sh
docker compose stop
```

To start it again:
```sh
docker compose start
```

#### Remove the containers

You can remove the containers with
```sh
docker compose down
```
if you don't need them anymore.