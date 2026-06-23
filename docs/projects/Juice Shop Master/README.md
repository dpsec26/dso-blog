# Juice Shop Master

[OWASP Juice Shop](https://github.com/juice-shop/juice-shop) is an intentionally insecure online shop used to practice finding and exploiting common web vulnerabilities. Juice Shop Master collects write-ups for individual challenges: how they work, how to solve them, and scripts or techniques used along the way.

## Disclaimer

All documents in this section have been prepared solely for educational and training purposes. The information contained reflects simulated security assessment activities conducted in a controlled environment as part of a learning exercise.

Any techniques, tools, or methodologies described in the documents are intended to illustrate common security concepts and should only be used in environments where explicit authorization has been granted.

The author assumes no responsibility or liability for misuse of the information presented. Unauthorized testing or exploitation of systems may be illegal and is strictly discouraged.

## Table of contents

- [Quickstart](#quickstart)
- [Setup](#setup)
    - [Prerequisites](#prerequisites)
    - [Network layout](#network-layout)
    - [Install Docker](#install-docker)
    - [Run Juice Shop](#run-juice-shop)
- [Challenges](#challenges)
    - [CAPTCHA Bypass](#captcha-bypass)
    - [Forged Feedback](#forged-feedback)
    - [User Credentials](#user-credentials)

## Quickstart

1. Complete [Setup](#setup) (two Kali VMs + Juice Shop on the Target VM).
2. On the Attacker VM, open `http://<TARGET_VM_IP>:3000`.
3. Pick a challenge from [Challenges](#challenges) and follow its write-up.

## Setup

This lab runs in **VirtualBox** with two **Kali Linux** VMs on an isolated network:

| VM | Role | Purpose |
|----|------|---------|
| **Kali Target** | Victim / application host | Runs OWASP Juice Shop in Docker |
| **Kali Attacker** | Attacker workstation | Browser, Burp Suite, scripts, etc. |

### Prerequisites

- [VirtualBox](https://www.virtualbox.org/) installed on the host
- Two Kali Linux VMs (e.g. from [Kali’s official images](https://www.kali.org/get-kali/))
- Enough RAM for both VMs (roughly 2 GB each minimum; 4 GB each is more comfortable)
- Internet access on the **Target** VM (to pull the Docker image once)

### Network layout

Put both VMs on the same isolated VirtualBox network so the attacker can reach Juice Shop by IP.
**Recommended: Internal Network**
1. In VirtualBox, open **Settings → Network** for **both** VMs.
2. Enable **Adapter 1** and set **Attached to** → **Internal Network**.
3. Use the **same network name** on both VMs (e.g. `juiceshop-lab`).

### Install Docker

On **Kali Target**:
1. Install Docker:
```sh
sudo apt update
sudo apt install docker.io
```
2. Enable and start it:
```sh
sudo systemctl enable docker
sudo systemctl start docker
```

### Run Juice Shop

On **Kali Target**:
1. Pull and run Juice Shop ([bkimminich/juice-shop on Docker Hub](https://hub.docker.com/r/bkimminich/juice-shop)):
```sh
docker pull bkimminich/juice-shop
docker run --rm -p 3000:3000 --name juice-shop bkimminich/juice-shop
```
2. Confirm it is listening:
```sh
curl -s -o /dev/null -w "%{http_code}\n" http://<TARGET_VM_IP>:3000
```

## Challenges

### CAPTCHA Bypass

**Category:** [Broken Anti-Automation](https://pwning.owasp-juice.shop/companion-guide/latest/part2/broken-anti-automation.html)

**Challenge:** Submit 10 or more customer feedbacks within 20 seconds

For more information, see the full [Solution](./captcha-bypass/captcha-bypass.md).

### Forged Feedback

**Category:** [Broken Access Control](https://pwning.owasp-juice.shop/companion-guide/latest/part2/broken-access-control.html)

**Challenge:** Post some feedback in another user’s name

For more information, see the full [Solution](./forged-feedback/forged-feedback.md).

### User Credentials

**Category:** [Injection](https://pwning.owasp-juice.shop/companion-guide/latest/part2/injection.html)

**Challenge:** Retrieve a list of all user credentials via SQL Injection

For more information, see the full [Solution](./user-credentials/user-credentials.md).