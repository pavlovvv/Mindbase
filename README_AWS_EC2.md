
# Deploying the Backend Project on AWS EC2

This guide provides step-by-step instructions to deploy your backend application to an **AWS EC2 instance**.

---

## Prerequisites

Before starting, ensure you have:

1. **AWS Account** with EC2 service access.
2. **SSH key pair** for connecting to the EC2 instance.
3. **Node.js** and **npm/yarn** installed locally for testing.
4. A **backend project** ready for deployment (e.g., `index.js`).

---

## Step-by-Step Guide

### 1. Launch an EC2 Instance
1. Log in to your AWS Management Console and navigate to the **EC2 Dashboard**.
2. Click **Launch Instance**:
   - Choose **Amazon Linux 2** or **Ubuntu** as the operating system.
   - Select an instance type (e.g., `t2.micro` for free tier).
   - Add your **SSH key pair** for secure login.
3. Open **Security Groups**:
   - Allow **port 22** for SSH.
   - Allow **port 80** (HTTP) and **port 5000** (or your app port) for public access.
4. Click **Launch** and wait for the instance to start.

---

### 2. Connect to the EC2 Instance
Using the terminal (or an SSH tool), connect to your instance:

```bash
ssh -i "your-key.pem" ec2-user@your-ec2-public-ip
```

Replace `your-key.pem` with your key file and `your-ec2-public-ip` with your EC2 IP address.

---

### 3. Install Required Software
Run the following commands to set up Node.js, npm, and Git:

**For Amazon Linux:**
```bash
sudo yum update -y
sudo yum install -y nodejs npm git
```

**For Ubuntu:**
```bash
sudo apt update -y
sudo apt install -y nodejs npm git
```

---

### 4. Clone the Project Repository
Clone your backend project repository from GitHub:

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

Replace `yourusername/your-repo-name` with your actual repository link.

---

### 5. Install Project Dependencies
Install the required dependencies:

```bash
npm install
```
or
```bash
yarn install
```

---

### 6. Configure the Environment
Create a `.env` file for your environment variables:

```bash
touch .env
nano .env
```

Add your configuration (e.g., database settings, JWT secrets):

```env
PORT=5000
DB_HOST=your-database-url
DB_USER=your-username
DB_PASSWORD=your-password
JWT_SECRET=your-secret-key
```

Save the file (`Ctrl+O`, then `Ctrl+X` in nano).

---

### 7. Start the Application with PM2
Install **PM2** (a process manager for Node.js):

```bash
sudo npm install -g pm2
```

Start your backend application:

```bash
pm2 start index.js --name backend-app
```

To ensure PM2 restarts the app after a reboot:

```bash
pm2 startup
pm2 save
```

---

### 8. Set Up NGINX (Optional)
NGINX can act as a reverse proxy to forward requests to your Node.js app.

1. Install NGINX:
   ```bash
   sudo yum install nginx -y    # For Amazon Linux
   sudo apt install nginx -y    # For Ubuntu
   ```

2. Configure NGINX:
   ```bash
   sudo nano /etc/nginx/conf.d/backend.conf
   ```

   Add this configuration:
   ```nginx
   server {
       listen 80;
       server_name your-ec2-public-ip;

       location / {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

3. Restart NGINX:
   ```bash
   sudo systemctl restart nginx
   ```

---

### 9. Test Your Deployment
1. Open your browser and go to:
   ```http
   http://your-ec2-public-ip
   ```

2. The backend server should now be accessible.

---

## Additional Notes
- Use **`pm2 logs`** to monitor logs.
- Use **`pm2 restart backend-app`** to restart the app after changes.
- Secure your EC2 instance using **firewall rules** and **SSH key management**.

---

## Enjoy Your Deployment 🚀
