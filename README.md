# Spendly — Backend API

REST API for Spendly, a personal budget tracker app.

## Endpoints

| Method | URL | Description |
|---|---|---|
| POST | /auth/register | Register a new user |
| POST | /auth/login | Login and get JWT token |
| GET | /transactions | Get all transactions |
| POST | /transactions | Create a transaction |
| DELETE | /transactions/:id | Delete a transaction |

## Tech Stack

- Node.js
- Express
- MySQL
- JWT & bcryptjs

## Live API

[https://budget-app-7bep.onrender.com](https://budget-app-frontend-swart.vercel.app/)
