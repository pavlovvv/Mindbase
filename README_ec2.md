
# Backend Service for Mindbase app

## System Requirements

Ensure the following tools are installed on your machine:

- **Node.js** (v14 or higher): [Download Node.js](https://nodejs.org/)
- **npm** or **Yarn**: A package manager for JavaScript
- **Git**: For version control
- **Database**: PostgreSQL or MongoDB (set up based on the `.env` file configuration)

---

## Environment Configuration

Create a `.env` file in the root folder with the following variables:

```env
# Server Configuration
PORT=5000

# Database Configuration
DB_HOST=your-database-host
DB_PORT=5432
DB_USER=your-database-username
DB_PASSWORD=your-database-password
DB_NAME=your-database-name

# JWT and Security
JWT_SECRET=your_jwt_secret_key
TOKEN_EXPIRY=1h

# Other configurations
NODE_ENV=development
```

---

## Running the Server

1. **Start the development server**:
   ```bash
   yarn run dev
   ```
   or
   ```bash
   npm run dev
   ```

2. **Run the production server** (requires build):
   ```bash
   yarn start
   ```
   or
   ```bash
   npm start
   ```

3. The server will run on `http://localhost:5000` by default.

---

## API Documentation

To test the API, the following tools can be used:

- **Postman** or **Insomnia**: Import the provided API collection.  
- **Swagger UI**: Accessible at `http://localhost:5000/api-docs` (if configured).

---

## Deployment Guide

### Deploying on AWS EC2 (PM2 and NGINX)

1. **Connect to your server**:
   ```bash
   ssh user@your-ec2-public-ip
   ```

2. **Install Node.js** and **PM2**:
   ```bash
   sudo apt update
   sudo apt install nodejs npm
   sudo npm install pm2 -g
   ```

3. **Clone your repository**:
   ```bash
   git clone https://github.com/yourusername/backend-service.git
   cd backend-service
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Run with PM2**:
   ```bash
   pm2 start index.js --name backend-service
   ```

6. **Set up NGINX as a reverse proxy** (optional for port 80).