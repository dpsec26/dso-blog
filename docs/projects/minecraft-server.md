---
title: Minecraft Server
sidebar_label: Minecraft Server
sidebar_position: 4
---

# Minecraft Server 26.1 Java Edition

This documentation shows the containerized version of a Minecraft 26.1 Java Edition server.

:::tip[View repository on GitHub]
You can view the [**repository**](https://github.com/dpsec26/mc-server) on GitHub.
:::

## Table of contents

- [Prerequisites](#prerequisites)
- [Quickstart](#quickstart)
- [Usage](#usage)
    - [Server configuration](#server-configuration)
    - [Start and stop the container](#start-and-stop-the-container)
    - [Access log files](#access-log-files)

## Prerequisites

- **Git**
- **Docker**

## Quickstart

1. Clone the repository
```sh
git clone git@github.com:dpsec26/mc-server.git
```

2. Create (or copy) the `.env` file
```sh
cp example.env .env
```

3. Start the container via Docker Compose
```sh
docker compose up -d
```

## Usage

### Server configuration

The `server.properties` file contains a few common settings for the server.
You can change them as you like or even add new ones.
For the full list of settings or more information, please refer to the [Minecraft wiki](https://minecraft.wiki/w/Server.properties).

### Start and stop the container

To start the container you can use
```sh
# use -d for detached mode
docker compose up -d
```

Your Minecraft server is now available under `<your-ip>`.
If you changed the `MC_SERVER_PORT` in the `.env` you need to specify it. Example: `localhost:12345`

To stop the container use
```sh
docker compose down
```

### Access log files

You can access the log files while the container is running with
```sh
docker compose logs mc-server
```