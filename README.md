# Notes Organizer Backend

The backend of the Notes Organizer application is responsible for handling user authentication, note storage, and collaboration features.

- **Node.js:** ![Node.js](https://img.shields.io/badge/Node.js-14.17.6-green?style=flat-square) JavaScript runtime for server-side development.
- **Express:** ![Express](https://img.shields.io/badge/Express-4.17.1-lightgrey?style=flat-square) Web application framework for Node.js.
- **MongoDB:** ![MongoDB](https://img.shields.io/badge/MongoDB-4.4.6-green?style=flat-square) NoSQL database for storing user and note data.

## Features

### Authentication

- **Google OAuth2:** Users can register and log in using their Google accounts.
- **JWT Tokens:** Secure authentication with JSON Web Tokens for authorized API requests.

### Note Management

- **CRUD Operations:** Create, read, update, and delete operations for managing user notes.
- **Collaboration:** Enable collaboration by allowing users to share and edit notes with others.

### User Management

- **User Profiles:** Store user profiles with information retrieved from Google accounts.

### Security

- **Password Hashing:** Use bcrypt and bcryptjs for secure password hashing.
- **Authorization Middleware:** Implement middleware to check user authorization for specific routes.

### Database

- **MongoDB:** Store user data, notes, and sessions in a MongoDB database.

### Middleware

- **Express Middleware:** Implement middleware for logging, CORS, and error handling.

## Technologies Used

- **Node.js:** JavaScript runtime for server-side development.
- **Express:** Web application framework for Node.js.
- **MongoDB:** NoSQL database for storing user and note data.
- **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Passport:** Authentication middleware for Node.js.
- **JWT (JSON Web Tokens):** Securely transmit information between parties.
- **Joi:** Schema validation library for API request validation.

## Frontend Deployment

The frontend of the Notes Organizer is hosted on GitHub Pages. Explore and interact with the application online: [https://ydovzhyk.github.io/notes-organizer/](https://ydovzhyk.github.io/notes-organizer/). The frontend repository is available on GitHub at [https://ydovzhyk/notes-organizer](https://ydovzhyk/notes-organizer).

## Development Setup

#### Docker Container

Explore the Notes Organizer Backend Docker Container on
[GitHub Packages](https://github.com/ydovzhyk/notes-organizer-backend/pkgs/container/notes-organizer-backend).

#### Deployment and Local Setup

Follow these steps to deploy the application locally or run it on your computer:

#### Clone the repository

git clone https://github.com/ydovzhyk/notes-organizer-backend.git cd notes-organizer-backend

#### Install dependencies

npm install

#### Start the development server

npm start
