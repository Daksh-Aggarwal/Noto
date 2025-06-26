# Noto

> A minimalist note-taking app built with the MERN stack. Allows users to create, edit, view, and delete notes with automatic timestamps. Built as my first MERN full-stack project while following a YouTube tutorial.

## 🚀 Features

* View all notes with title, content & timestamp
* Create new notes through a responsive UI
* Edit existing notes in-place
* Delete notes instantly

## 🛠️ Tech Stack

* **MongoDB** – Database for storing notes
* **Express.js** – API framework
* **React** – Frontend UI with Tailwind CSS
* **Node.js** – Backend runtime
* **Vite** – React development bundler

## 🔧 Project Structure

```
Noto/
├── backend/           # Express + MongoDB server
│   └── src/
│       ├── config/    # DB and Upstash connection setup
│       ├── controllers/ # Note logic
│       ├── models/    # Mongoose schemas
│       └── routes/    # API endpoints
├── frontend/          # React + Vite + Tailwind frontend
│   └── src/
│       ├── components/ # Reusable UI components
│       └── App.jsx     # Main app logic
└── package.json       # Root project config
```

## ▶️ Getting Started

### 1. Clone this repo

```bash
git clone https://github.com/Daksh-Aggarwal/Noto.git
cd Noto
```

### 2. Setup Backend

```bash
cd backend
npm install
npm run dev  # starts server at http://localhost:PORT
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev  # starts React app at http://localhost:PORT
```

## 🌐 Usage

* Navigate to `http://localhost:PORT`
* Add notes with a title and content
* Edit or delete existing notes
* Notes auto-store creation & update timestamps

## 🡩‍💻 Author

Made with ❤️ by **Daksh Aggarwal**
[GitHub](https://github.com/Daksh-Aggarwal) • [LinkedIn](https://www.linkedin.com/in/dakshaggarwal7)

## 📄 License

This project is licensed under the MIT License.
