# Chatsy - Chat App

A real-time chat application with separate backend (Node.js/Express) and frontend (React) projects.

## Project Structure

```
fullstack-chat-app-master/
  backend/      # Node.js/Express backend API
  frontend/     # React frontend client
  README.md     # Project documentation
  package.json  # Root scripts for dev workflow
  .gitignore    # Git ignore rules
```

## Features

- Real-time messaging
- Group and private chats
- Admin dashboard
- User authentication

## Setup Instructions

### 1. Install Dependencies

From the root directory, run:

```sh
npm run install
```

This will install dependencies for both backend and frontend.

### 2. Start Development Servers

To run both backend and frontend concurrently:

```sh
npm run dev
```

- Backend runs on its configured port (see `backend/`)
- Frontend runs on its configured port (see `frontend/`)

### 3. Folder Details

- **backend/**: Express server, API routes, models, controllers, etc.
- **frontend/**: React app, components, pages, Redux, etc.

## Customization

- Configure environment variables in `backend/.env` and `frontend/.env` as needed.

## License

MIT
