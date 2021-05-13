<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/wilsonfsouza/login-system">
  <a href="https://github.com/wilsonfsouza/login-system/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/wilsonfsouza/login-system">
  </a>

   <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F26C6C">


  <a href="https://www.linkedin.com/in/wilsonfsouza/">
    <img alt="Made by Wilson Franca" src="https://img.shields.io/badge/made%20by-Wilson%20Franca-%230AA186">
  </a>
</p>

<h1 align="center">
    Login System
</h1>

<h4 align="center">
Table of Contents
</h4>

<p align="center">
 <a href="#-about-the-project">About</a> •
 <a href="#-how-to-run-the-project">How to run</a> •
 <a href="#-usage">Usage</a> •
 <a href="#-tests">Tests</a> •
 <a href="#-technologies">Technologies</a> •
 <a href="#-author">Author</a> •
</p>


## 💻 About the project

This is login system that allows users to sign in, sign up, reset password, update user information, and display user information once logged in.

Non-authenticated users can:
- Sign up
- Sign in

Authenticated users can:
- See and modify their information (name, email, and password)

---

## 🚀 [](https://github.com/wilsonfsouza/login-system#how-to-run-the-project)How to run the project

### **Requirements**

Initial requirements:
[git](https://git-scm.com), [yarn](https://yarnpkg.com/), and a code editor of your choice.

### **Install project and dependencies**

```bash
# Clone this repository
$ git clone https://github.com/wilsonfsouza/login-system.git

# Access the folder in your terminal
$ cd login-system

# Install all dependencies
$ yarn install

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
$ cp .env.example .env
```

### Folder structure

```bash
src
├── config
├── modules
│   └── users
│       ├── dtos
│       ├── infra
│       │   ├── customORM
│       │   │   ├── entities
│       │   │   └── repositories
│       │   ├── http
│       │   │   ├── controllers
│       │   │   └── routes
│       │   └── middlewares
│       ├── providers
│       │   └── HashProvider
│       │       ├── fakes
│       │       ├── implementations
│       │       └── models
│       ├── repositories
│       │   └── fakes
│       └── services
├── shared
│   ├── errors
│   └── infra
│       ├── customORM
│       │   └── fakeDatabase
│       └── http
│           └── routes
└── @types

28 directories
```

### Understanding .env

|key|description|default
|---|---|---
|APP_SECRET|An alphanumeric random string. Used to create signed tokens.| -


### Start the application
```bash
# To start development server, run:
$ yarn dev:server
```

---

## ⭐ Usage
### **Bearer Token**
This app has open and private routes. Private routes expect a **Bearer token** in an `Authorization` header. The token is generated after a user sign in into the application throughout the `/sessions` route. This token will expire after 2 hours.

### **Routes**

### Users
|Route|HTTP Method|Params|Description|Auth method
|---|---|---|---|---
|`/sessions`|POST|Body with user's email and password.|Authenticates user, return a Bearer Token and user's id and email.| ❌
|`/users`|POST|Body with user's name, email, and password.|Sign up for new users. | ❌
|`/user-info`|GET| - |Shows user profile.|Bearer
|`/user-info`|PUT|Body with user `name`, `email`, `old_password`, `password`, and `password_confirmation`.|Updates user information.|Bearer

---

## ⚙️ Tests
```bash
# Running tests
$ yarn test

# Coverage Report
$ yarn test --coverage

# =============================== Coverage summary ===============================
# Statements   : 99.11% ( 223/225 )
# Branches     : 97.62% ( 41/42 )
# Functions    : 100% ( 10/10 )
# Lines        : 99.11% ( 223/225 )
# ================================================================================
```
---

## 🛠 Technologies

The following tools were used in this project:

### **REST  API**  ([Node.js](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [JWT-token](https://jwt.io/)
- [Uuid](https://www.npmjs.com/package/uuid)
- [Date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

> See the file  [package.json](https://github.com/wilsonfsouza/login-system/blob/main/package.json)

---

## 👨‍💻 Author

<br/>
<h3>
 <img  src="https://avatars0.githubusercontent.com/u/21347383?s=460&u=fdb399c92e369762d45d6495cbd2e87eef9e4d65&v=4" width="100px" alt=""/>
 <br />
 <sub>Wilson Franca</sub></h3>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Wilson-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/wilsonfsouza/)](https://www.linkedin.com/in/wilsonfsouza/)
[![Gmail Badge](https://img.shields.io/badge/-wilson.franca.92@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:wilson.franca.92@gmail.com)](mailto:wilson.franca.92@gmail.com)

---

Made with ❤️ by Wilson Franca 👋

