# Vite.js, Express.js, Node.js, and MySQL Project

This project is a web application built with Vite.js for the frontend, Express.js for the backend, Node.js as the runtime environment, and MySQL as the database.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine (v14.x or higher)
- MySQL server installed and running
- Git installed on your machine

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies for both frontend and backend:**

    ```bash
    # Navigate to the frontend directory
    cd frontend
    npm install

    # Navigate to the backend directory
    cd ../backend
    npm install
    ```

## Configuration

1. **Configure the MySQL database:**

    - Create a new MySQL database.
    - Create a `.env` file in the `server` directory and add your database configuration:

    ```ini
    DB_HOST=localhost
    DB_USER=your-username
    DB_PASSWORD=your-password
    DB_NAME=your-database-name
    ```

2. **Configure the backend server:**

    - Add additional configurations to the `.env` file if needed:

    ```ini
    PORT=3000
    ```

3. **Configure the frontend:**

    - If necessary, update the API endpoint in your frontend configuration files.

## Running the Application

1. **Start the MySQL server:**

    Ensure your MySQL server is running.

2. **Run the backend server:**

    ```bash
    cd server
    npm start
    ```

    This will start the Express.js server on the port specified in your `.env` file (default is 3000).

3. **Run the frontend development server:**

    ```bash
    cd ../Bookify
    npm run dev
    ```

    This will start the Vite.js development server.

## Project Structure

