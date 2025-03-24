# DonorSphere

DonorSphere is a **crowdfunding platform** designed to help individuals and organizations raise funds for their causes. It allows users to create campaigns, make donations, leave comments, and interact via chat.

##  Features

- **User Authentication**: Secure login & signup
- **Campaign Management**: Create, view, and donate to campaigns
- **Donations**: Users can donate and track progress
- **Comments & Chat**: Users can interact via comments and real-time chat
- **Private Routes**: Secure routes that require authentication
- **Responsive UI**: Built using **React + Tailwind CSS**

---

## 🛠️ Tech Stack

### **Frontend**
- React (Vite)
- Tailwind CSS
- React Router
- Context API (Auth)

### **Backend**
- Node.js + Express.js
- MongoDB (Mongoose)
- JWT Authentication
- WebSocket for Chat
- RESTful API

---

## Installation Guide

### **1Clone the Repository**
    git clone https://github.com/yourusername/DonorSphere.git
    cd DonorSphere
    cd BackEnd
    npm install
    
###Create .env file
```
  PORT=5000
  MONGO_URI=your_mongodb_connection_string  
  JWT_SECRET=your_secret_key
```
### Start Backend Server
    npm run dev 
    





      DonorSphere
      │── BackEnd
      │   │── controller
      │   │   │── donation.controller.js
      │   │   │── user.controller.js
      │   │── middleware
      │   │   │── auth.js
      │   │── models
      │   │   │── campaign.model.js
      │   │   │── ChatMessage.js
      │   │   │── comment.model.js
      │   │   │── donation.model.js
      │   │   │── user.model.js
      │   │── routes
      │   │   │── auth.routes.js
      │   │   │── campaign.routes.js
      │   │   │── chat.routes.js
      │   │   │── comment.routes.js
      │   │   │── donation.routes.js
      │   │   │── user.routes.js
      │   │── node_modules/
      │   │── .env
      │   │── .gitignore
      │   │── index.js
      │   │── note.md
      │   │── package-lock.json
      │   │── package.json
      │   │── websocket.js
      │
      │── FrontEnd
      │   │── node_modules/
      │   │── public/
      │   │── src
      │   │   │── assets/
      │   │   │── components
      │   │   │   │── Campaign.jsx
      │   │   │   │── CampaignCard.jsx
      │   │   │   │── Footer.jsx
      │   │   │   │── Navbar.jsx
      │   │   │   │── PrivateRoute.jsx
      │   │   │── context
      │   │   │   │── AuthContext.jsx
      │   │   │── pages
      │   │   │   │── About.jsx
      │   │   │   │── Campaign.jsx
      │   │   │   │── Campigns.jsx
      │   │   │   │── Contact.jsx
      │   │   │   │── Home.jsx
      │   │   │   │── Login.jsx
      │   │   │   │── Signup.jsx
      │   │   │── apiClient.js
      │   │   │── App.css
      │   │   │── App.jsx
      │   │   │── index.css
      │   │   │── main.jsx
      │   │── .gitignore
      │   │── eslint.config.js
      │   │── index.html
      │   │── package-lock.json
      │   │── package.json
      │   │── README.md
