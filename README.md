#  User CRUD Dashboard (Node.js + React + MongoDB)

A full-stack application for managing users with **Create, Read, Update, and Delete (CRUD)** functionality.  
Built using **React** for the frontend, **Node.js + Express** for the backend, and **MongoDB** for data storage.

---

##  Features
- Display all users in a dashboard view
- View details of a single user
- Add, edit, and delete users
- Integrated with MongoDB
- Simple clean UI (no external CSS frameworks)

---

##  Tech Stack
**Frontend:** React, Fetch API, Plain CSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (Mongoose ODM)

---
##  Setup Instructions

1 Clone the repository
```bash
git clone https://github.com/<your-username>/User_CRUD.git
cd User_CRUD
Clone the repository 
```
2️ Install dependencies
Backend
cd server
npm install

Frontend
cd ../client
npm install

3️ Start the servers
Backend
npm start
# runs on http://localhost:5000

Frontend
npm start
# runs on http://localhost:3000

🧠 Folder Structure
User_CRUD/
 ├── client/          # React frontend
 │   ├── src/
 │   └── package.json
 ├── server/          # Node.js backend
 │   ├── server.js
 │   ├── models/
 │   ├── routes/
 │   └── package.json
 └── README.md

🌐 API Endpoints
Method	Endpoint	Description
GET	/api/users	Get all users
GET	/api/users/:id	Get a single user
POST	/api/users	Add a new user
PUT	/api/users/:id	Update a user
DELETE	/api/users/:id	Delete a user
💻 Example MongoDB User Schema
{
  name: "Alice Johnson",
  email: "alice@example.com",
  role: "Admin"
}

