# How To Run This Project

## Setup Postgres
1. Download Postgres Package from https://www.postgresql.org/download. The package includes Postgres Server and PgAdmin.
2. Open PgAdmin, configure the server as necessary. create a new database. Note the username, port and database name, you will need them later.

## Install Packages
I have used pnpm for this project. If you wish to use npm, run 
`npm install`

## Configure The Project

### Configure `knexfile.cjs`
Go to `src/knex/knexfile.cjs` and edit the Database name, password, host, port and username to your Postgres database.

### Run Migrations
Go to `knex` folder by running `cd knex`. Run `npx knex migrate:latest --knexfile ./knexfile.cjs` to create the tables in the database.

### Run the project
Run `npm start` to start the server. It will start on port 3000.