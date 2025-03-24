/BackEnd
 ├── config/
 │    ├── database.js          
 │
 ├── controllers/               (Renamed from 'controller' to 'controllers' for consistency)
 │    ├── auth.controller.js    (Handles authentication logic)
 │    ├── user.controller.js    (Handles user-related logic)
 │    ├── campaign.controller.js✅ (Handles campaigns)
 │    ├── donation.controller.js✅ (Handles donations)
 │    ├── comment.controller.js ✅ (Handles comments)
 │
 ├── middleware/
 │    ├── auth.js               ✅ (Middleware for authentication and role-based access)
 │
 ├── models/
 │    ├── user.model.js         ✅ (User schema & model)
 │    ├── campaign.model.js     ✅ (Campaign schema & model)
 │    ├── comment.model.js      ✅ (Comment schema & model)
 │    ├── donation.model.js     ✅ (Donation schema & model)
 │
 ├── routes/
 │    ├── auth.routes.js        ✅ (Routes for authentication)
 │    ├── user.routes.js        ✅ (Routes for user operations)
 │    ├── campaign.routes.js    ✅ (Routes for campaigns)
 │    ├── comment.routes.js     ✅ (Routes for comments)
 │    ├── donation.routes.js    ✅ (Routes for donations)
 │
 ├── utils/                     ✅ (New folder for utility functions)
 │    ├── errorHandler.js        ✅ (Centralized error handling)
 │    ├── emailService.js        ✅ (Handles email-related logic if needed)
 │
 ├── .env                       ✅ (Environment variables)
 ├── .gitignore                 ✅ (Ignore node_modules, .env, etc.)
 ├── index.js                   ✅ (Main entry point)
 ├── websocket.js               ✅ (WebSocket handling if needed)
 ├── package.json               ✅ (Dependencies & scripts)
 ├── package-lock.json





# Apies 

### campaign 

<!-- post by admin only  -->
http://localhost:3030/api/campaigns

<!-- //get by all  -->
http://localhost:3030/api/campaigns

<!-- update by admin -->
http://localhost:3030/api/campaigns/:id

<!-- delete by admin  -->
http://localhost:3030/api/campaigns/:id



## auth routes 

<!-- rejister -->
http://localhost:3030/api/auth/register


<!-- login -->
http://localhost:3030/api/auth/login

