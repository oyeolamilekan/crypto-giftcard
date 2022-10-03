# Giftcard Store

An app that enables users buy giftcard with crypto, it's basically a bitrefill clone.

## Features

Giftcard Store features include:

- Buy Giftcard with crypto
- Convert crypto to stablecoins or fiat
- Send giftcard to customers upon confirmation

## Installation

- `git clone <this_url> && cd <repo_name>`
- Run `npm install`
- Configure Server
    - Create `.env`
    - Update `.env` with the current attributes
        - `NODE_ENV = development`
        - `DB_USERNAME = <DB_USERNAME>`
        - `DB_PASSWORD = <DB_PASSWORD>`
        - `DB_NAME = <DB_NAME>`
        - `DB_HOST = <DB_HOST>`
        - `DB_DIALECT = <DB_DIALECT>`
        - `QUIDAX_SECRET_API = <QUIDAX_SECRET_API>`
        - `WEBHOOKKEY = <WEBHOOKKEY>`
        - `REDIS_URL = <REDIS_URL>`
        - `CLIENT_ID = <CLIENT_ID>`
        - `CLIENT_SECRET = <CLIENT_SECRET>`
        - `GRANT_TYPE = <GRANT_TYPE>`
        - `AUDIENCE = <AUDIENCE>`
        - `QUIDAX_SECRET_KEY = <QUIDAX_SECRET_KEY>`
        - `BASE_URL = <BASE_URL>` // Reloadly base url could be giftcard-sandbox for testing or giftcard for prod

    - Setup markets `npm run setup`
- Run the app locally `npm run server`

## APP STRUCTURE

- config: This directory stores all of the configuration for the app.
- constants: This directory stores constants for the application.
- controllers: This directory stores all business logic.
- jobs: This folder contains all cron and backgroud jobs.
- middleware: This folder contains all application level middleware
- models: This folder contains data models for the application.
- routes: This folder contains application level routes
- migrations: This folder contains application migration files
- seeders: This folder contains seed files
- util: This folder contains all application utility functions