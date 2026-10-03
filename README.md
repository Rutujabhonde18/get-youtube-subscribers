# 💫 Get YouTube Subscribers

**Get YouTube Subscribers** is a backend project developed as part of the **AlmaBetter backend capstone project**. The application is built using **Node.js, Express.js, and MongoDB** and provides REST APIs to retrieve YouTube subscriber information.

The project follows a modular structure, where different responsibilities such as server configuration, database connection, data models, and API routes are organized into separate files. The APIs return subscriber information in **JSON format**, making the application easy to test and integrate with other applications.

---

## 🚀 Features

* Get a list of all YouTube subscribers.
* Get subscriber details including their name and subscribed channel.
* Find a particular subscriber using their unique ID.
* Store and retrieve subscriber data using MongoDB.
* RESTful APIs built with Express.js.
* JSON-based API responses.
* API testing using Postman.

---

## 📌 About the Project

This project is an **Express.js backend application** connected to a **MongoDB database**.

The database contains subscriber information such as:

* Subscriber ID
* Name
* Subscribed Channel
* Subscribed Date

The application provides three main GET APIs:

### 1. Get All Subscribers

```http
GET /subscribers
```

Returns the complete list of subscribers available in the database.

**Example:**

```http
GET http://localhost:3000/subscribers
```
<img width="1535" height="776" alt="Screenshot 2026-10-03 211545" src="https://github.com/user-attachments/assets/477d528b-5a01-4a0d-bc0e-811da3430f9c" />

---

### 2. Get Subscriber Names and Channels

```http
GET /subscribers/name
```

Returns subscriber information containing only the **subscriber name** and **subscribed channel**.

**Example:**

```http
GET http://localhost:3000/subscribers/name
```
<img width="1533" height="771" alt="Screenshot 2026-10-03 211617" src="https://github.com/user-attachments/assets/a5924215-c3c5-4548-8f39-efb5bc2fe058" />

---

### 3. Get Subscriber by ID

```http
GET /subscribers/:id
```

Returns the details of a specific subscriber using their MongoDB ID.

**Example:**

```http
GET http://localhost:3000/subscribers/64abc123...
```
<img width="1535" height="770" alt="Screenshot 2026-10-03 211645" src="https://github.com/user-attachments/assets/fbba0ba9-3f14-4635-a8ee-9a98a79d17bc" />

---


## 📁 Project Structure

```text
Get-YouTube-Subscribers/
│
├── src/
│   ├── app.js
│   ├── createDatabase.js
│   ├── data.js
│   ├── index.js
│   │
│   └── models/
│       └── subscribers.js
│
├── package.json
├── package-lock.json
├── .env
└── README.md
```

### Important Files

**`src/app.js`**
Contains the Express application and API routes.

**`src/index.js`**
Connects the application to MongoDB and starts the server.

**`src/createDatabase.js`**
Used to create/populate the subscriber database.

**`src/data.js`**
Contains the subscriber data used for database creation.

**`src/models/subscribers.js`**
Contains the Mongoose schema and model for subscriber documents.

---

## 🛠️ Technologies Used

* **Node.js** – JavaScript runtime environment
* **Express.js** – Backend web framework
* **MongoDB** – NoSQL database
* **Mongoose** – MongoDB object modeling
* **Postman** – API testing
* **Git & GitHub** – Version control

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
https://github.com/Rutujabhonde18/get-youtube-subscribers.git
```

### 2. Navigate to the Project

```bash
cd Get-YouTube-Subscribers
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure MongoDB

Create a `.env` file in the project directory and add your MongoDB connection string:

```env
MONGODB_URI=your_mongodb_connection_string
```

### 5. Create the Database

Navigate to the `src` folder:

```bash
cd src
```

Run:

```bash
node createDatabase.js
```

### 6. Start the Server

```bash
node index.js
```

If the server starts successfully, you can access the application at:

```text
http://localhost:3000
```

---

## 🧪 Testing APIs with Postman

The APIs can be tested using **Postman**.

Available endpoints:

| Method | Endpoint            | Purpose                           |
| ------ | ------------------- | --------------------------------- |
| GET    | `/subscribers`      | Get all subscribers               |
| GET    | `/subscribers/name` | Get subscriber names and channels |
| GET    | `/subscribers/:id`  | Get a subscriber by ID            |

---

## 🌐 Deployment

The backend application can be deployed using platforms such as **Render**.

**Live Application:**
https://get-youtube-subscribers-1-yryq.onrender.com

**Postman API Documentation:**
https://go.postman.co/workspace/bb9b3fed-6dfd-4c03-a644-57530a40d91f

---

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

* Building REST APIs with Express.js.
* Connecting Node.js applications with MongoDB.
* Creating MongoDB schemas using Mongoose.
* Working with GET API requests.
* Handling route parameters.
* Structuring a backend project into separate modules.
* Testing APIs using Postman.
* Deploying a backend application.

---
