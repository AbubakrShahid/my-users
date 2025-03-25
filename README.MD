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

If you encounter an error stating that Port 5000 is already in use, you can either update the project's configuration to use a different port or close the process currently occupying Port 5000.

## Features

- Get user by ID `GET /users/:id`

## Specs

In order to run tests

run the following command
`npm run test:watch`

## Explanation

A simple Node.js with MongoDB API that fetches a user’s details when you provide an ID. It searches the collection in the database and returns the user’s info. The API includes validation middleware (validateObjectIdAndAge) to ensure the provided ID is valid before fetching the user. It retrieves a user where the ID matches and the age is 22 or older.
