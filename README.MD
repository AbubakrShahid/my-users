# My Users API

## Specifications

- **Framework**: 
    Express.js 4.21.2
    npm 8.19.4
- **Database**:
    Using MongoDB:		8.0.5
    Using Mongosh:		2.4.2
- **Environment**: 
    Node.js 16.20.2

## Setup

### Environment Variables

Create `.env` file and place the following variables

- MONGO_URI
- PORT
- DATABASE_NAME

Execute the following command to start the application

`docker compose up`

## Features

- Get user by ID `GET /users/:id`

## Specs

In order to run tests

run the following command
`npm run test:watch`
