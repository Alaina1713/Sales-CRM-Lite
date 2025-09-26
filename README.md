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

## **Setup & Installation**

### **Prerequisites**

Before running the project, make sure you have:

* **Node.js** v16+ installed ([Download here](https://nodejs.org/))
* **npm** (comes with Node.js)
* **MongoDB Atlas account** or a local MongoDB instance
* **Gmail account** (for email automation)

---

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/Alaina1713/Sales-CRM-Lite.git
cd Sales-CRM-Lite
```

### **2️⃣ Setup Backend**

1. Navigate to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file inside the **backend** folder:

```env
MONGO_URI=mongodb+srv://sales-crm-lite:u0gzXdNpRx8Eu0Sa@cluster0.wk7zpvu.mongodb.net/sales-crm-lite?retryWrites=true&w=majority
JWT_SECRET=u0gzXdNpRx8Eu0Sa
EMAIL_USER=alainarahim17@gmail.com
EMAIL_PASS=Alaina1317
PORT=5000
```

> **Notes:**
>
> * `MONGO_URI` → MongoDB Atlas connection string
> * `JWT_SECRET` → Secret key for JWT authentication
> * `EMAIL_USER` & `EMAIL_PASS` → Gmail credentials for sending emails
> * `PORT` → backend server port

4. Make sure your **IP is whitelisted** in MongoDB Atlas (Network Access → Add IP → Current IP or `0.0.0.0/0` for testing).

5. Start the backend server:

```bash
npm run dev
```

* You should see:

```
MongoDB Connected: cluster0.wk7zpvu.mongodb.net
Server running on port 5001
```

---

### **3️⃣ Setup Frontend**

1. Open a new terminal window and navigate to the frontend folder:

```bash
cd frontend
```

2. Install frontend dependencies:

```bash
npm install
```

3. Start the frontend:

```bash
npm start
```

* The app will run on: `http://localhost:3000`

---

### **4️⃣ Usage**

1. Open your browser and go to `http://localhost:3000`
2. Register a new user or login (Admin / Sales Rep)
3. Add, update, and manage leads from the dashboard
4. Send emails directly from the lead details page
5. Track analytics and email performance

---

### **5️⃣ Deployment Instructions**

* **Frontend:** Deploy via [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)
* **Backend:** Deploy via [Heroku](https://www.heroku.com/) or [Render](https://render.com/)
* Ensure your **MongoDB Atlas IP whitelist** includes the server IP for deployed apps



