# Sales-CRM-Lite


Sales CRM Lite is a **full-featured Customer Relationship Management (CRM) web application** built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). The app allows sales teams to manage leads, automate emails, track conversions, and analyze performance with a modern, mobile-responsive dashboard.

---

## **Features**

### **Authentication & Security**
- JWT-based authentication (Login / Signup)
- Role-based access control (Admin / Sales Rep)
- Password hashing using bcrypt

### **Lead Management (CRM Core)**
- Create, read, update, delete (CRUD) leads
- Assign leads to sales representatives
- Filter and search leads by **status** or **company**
- Track lead statuses: New, Contacted, Won, Lost

### **Email Automation**
- Send personalized emails using Nodemailer
- Track email statuses: Sent, Opened, Replied
- Store sent emails in MongoDB

### **Dashboard & Analytics**
- React dashboard displaying:
  - Total leads
  - Contacted leads
  - Conversion percentage
  - Email open/reply rates
- Charts powered by **Chart.js** for data visualization
- Card-based, responsive layout

### **Responsive UI**
- Mobile-first design using **Material UI**
- Sidebar navigation for easy access
- Clean, modern form and dashboard designs

### **Deployment Ready**
- Frontend can be deployed to **Vercel / Netlify**
- Backend can be deployed to **Heroku / Render**
- Database hosted on **MongoDB Atlas**

---

## **Technologies Used**

**Frontend:** React.js, Material UI, Chart.js  
**Backend:** Node.js, Express.js, JWT, Nodemailer  
**Database:** MongoDB, Mongoose  
**Tools:** Git, GitHub, VSCode, Postman  


---

## **Getting Started**

### **Prerequisites**
- Node.js v16+  
- MongoDB Atlas account (or local MongoDB)  
- Gmail account for email automation  

### **Setup Backend**

1. Clone the repository:

```bash
git clone https://github.com/Alaina1713/Sales-CRM-Lite.git
cd Sales-CRM-Lite/backend

Install dependencies:

npm install


Create a .env file in backend folder:

MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
EMAIL_USER=<your_email>
EMAIL_PASS=<your_email_app_password>
PORT=5000


Start the backend server:

npm run dev

Setup Frontend

Open a new terminal:

cd Sales-CRM-Lite/frontend


Install dependencies:

npm install


Start the frontend:

npm start


The app will run on http://localhost:3000 by default.

Usage

Register/Login with Admin or Sales Rep role

Add and manage leads through the dashboard

Send emails directly from the lead details page

Track analytics and email performance in real-time

Deployment Instructions

Frontend: Deploy via Vercel / Netlify

Backend: Deploy via Heroku / Render

Ensure your MongoDB Atlas IP whitelist allows the deployed server

