# How To Run This Project

## Setup Postgres
1. Download Postgres from https://www.postgresql.org/download.
2. Open PgAdmin, configure the server as necessary. create a new database. Note the username, port and database name, you will need them later.

## Install Packages
 Run `npm install`

## Configure The Project

### Set Environment Variables
Create a `.env` file in the root of the project. Set the environment variables as follows:
```
PORT=3000
DB_PASSWORD=your_password
DB_USER=postgres
DB_NAME=your_db_name
DB_HOST=localhost
DB_PORT=5432
```

### Run Migrations
Run the command
```
npx knex migrate:latest --knexfile ./knexfile.cjs
```
to create the tables in the database.

### Seed Data
Run the command
```
npx knex seed:run --knexfile ./knexfile.cjs
```
to seed the database with mock data.

## Run the project
Run `npm start` to start the server. It will start on port 3000 if port not specified.

## Test the Apis
[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 256px; height: 64px;">](https://god.gw.postman.com/run-collection/37331531-7d256f49-c269-4663-8bc3-a628c552a632?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D37331531-7d256f49-c269-4663-8bc3-a628c552a632%26entityType%3Dcollection%26workspaceId%3Da0431765-c30c-4e85-a8e3-1a5cc7b03200)