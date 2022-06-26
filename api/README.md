# E-commerce admin cms

This is a project is backend server api built for the admin to create and manage their e-commerce store

This is only the API server part, the api is available at rep `...`

## How to use

1. run `git clone <put our git url here>
2. run `npm i`
3. run `cd <folder name>
4. run `npm run dev` for the local development. Note that you must have nodemon install in system, otherwise run `npm i nodemon -g`

## API

All our API url follow the following pattern :`{root url}/api/v1`

### Admin registration and login api

This section show you how you can access the api for admin registration and login

Note: TODO: make sure the admin registration api is protected after first admin is created because only admin can add another admin user.

All registration and login API follow the following patterns `{root url}/api/v1/register-login`

| #   | PATH | METHOD | IS PRIVATE | DESCRIPTION                                             |
| --- | ---- | ------ | ---------- | ------------------------------------------------------- |
| 1   | `/`  | post   | yes        | Send user data to create new admin user in the database |
