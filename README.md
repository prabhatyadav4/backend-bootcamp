<div align="center">

# 🍵 Backend Bootcamp

### A complete backend development journey following the **Chai aur Backend** series by [Hitesh Choudhary](https://github.com/hiteshchoudhary)

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)

<br/>

> **From zero to production** — this repo documents my complete journey learning backend engineering with JavaScript, culminating in a fully deployed full-stack application.

<br/>

**🚀 Final Project — ViMatrix:** &nbsp; [Live Demo](https://vimatrix.vercel.app) · [GitHub Repo](https://github.com/prabhatyadav4/vimatrix)

</div>

---

## 📖 Table of Contents

- [About This Repo](#-about-this-repo)
- [What I Built](#-what-i-built)
- [Learning Modules](#-learning-modules)
- [Project Structure](#-project-structure)
- [Module Breakdown](#-module-breakdown)
  - [01 — Deploy Backend](#01--deploy-backend)
  - [02 — Connect Frontend](#02--connect-frontend)
  - [03 — Data Modelling](#03--data-modelling)
  - [04 — YouTube Backend](#04--youtube-backend)
  - [05 — YouTube Frontend](#05--youtube-frontend)
- [Tech Stack](#-tech-stack)
- [Key Concepts Covered](#-key-concepts-covered)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Reference](#-api-reference)
- [Final Project — ViMatrix](#-final-project--vimatrix)
- [Commit Journey](#-commit-journey)
- [Resources](#-resources)

---

## 📌 About This Repo

This repository is my complete practice ground for the [Chai aur Backend](https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW) YouTube series. It covers everything from deploying a basic Express server to building a production-grade full-stack video hosting platform — and goes beyond the series with a self-built capstone project **ViMatrix**.

Each folder in this repo represents a distinct learning module, progressing from fundamentals to advanced full-stack development.

---

## 🏗️ What I Built

| Module | Description | Stack |
|--------|-------------|-------|
| `01_deployBackend` | First Express server deployed to the cloud | Node.js, Express |
| `02_connectFrontend` | Full-stack connection — React talking to Express | React, Vite, Express |
| `03_dataModelling` | Mongoose schemas for 3 real-world domains | MongoDB, Mongoose |
| `04_youtubeBackend` | Production-grade REST API with auth, uploads, aggregation | Node.js, Express, MongoDB, JWT, Cloudinary |
| `05_youtubeFrontend` | Feature-complete React frontend with Redux, hooks, routing | React, Redux Toolkit, TailwindCSS, Vite |
| **ViMatrix** | **Self-built capstone — fully deployed full-stack app** | **Full-stack (all of the above)** |

---

## 📚 Learning Modules

```
Apr 10 → Backend deployment & setup
Apr 10 → Data modelling with Mongoose
Apr 13 → Database connection (MongoDB Atlas)
Apr 15 → Custom API error & response handling
Apr 15 → User & Video models
Apr 16 → File uploads with Multer & Cloudinary
Apr 19 → User registration route
Apr 20 → User registration controller
Apr 22–23 → Bug fixes & refinements
Apr 28 → Login & logout controller
Apr 30 → Bug fixes
May 2  → Refresh token functionality
May 3  → Account management, channel profile, watch history
May 4  → Comment, Like, Playlist, Tweet models
May 5  → getAllVideos with pagination & aggregation
May 7  → Video upload, validation & retrieval
May 9  → Comment CRUD operations
May 10 → Likes, health check, dashboard stats
May 12 → Subscriptions & Playlist controller
May 13 → All routes with JWT verification
May 15 → Frontend project initialised (Vite + React)
May 16 → Components, pages, hooks, schemas, utilities
May 17 → Routing & video management features
May 18 → Tweet creation & deletion
May 19 → SidebarContext for global state
May 20 → SearchResults + infinite scroll
May 21 → Comment editing & deletion
May 23 → Channel page with dynamic tabs
May 24 → VideoRow component for dashboard
```

---

## 🗂️ Project Structure

```
backend-bootcamp/
├── 01_deployBackend/          # Basic Express server deployment
├── 02_connectFrontend/        # Full-stack connection demo
│   ├── backend/               # Express API
│   └── frontend/              # React + Vite client
├── 03_dataModelling/          # Mongoose schema practice
│   └── models/
│       ├── ecommerce/         # E-commerce domain
│       ├── hospital-management/ # Healthcare domain
│       └── todos/             # Todo app domain
├── 04_youtubeBackend/         # Main YouTube-like REST API
│   └── src/
│       ├── controllers/       # Business logic
│       ├── db/                # MongoDB connection
│       ├── middlewares/       # Auth + file upload
│       ├── models/            # Mongoose schemas
│       ├── routes/            # Express routes
│       └── utils/             # Helpers & utilities
├── 05_youtubeFrontend/        # Full React frontend
│   └── videotube-frontend/
│       └── src/
│           ├── api/           # Axios API calls
│           ├── app/           # Redux store & slices
│           ├── components/    # Reusable UI components
│           ├── hooks/         # Custom React hooks
│           ├── pages/         # Route-level page components
│           ├── schemas/       # Form validation schemas
│           └── utils/         # Formatters & helpers
└── README.md
```

---

## 🔍 Module Breakdown

### `01` — Deploy Backend

A minimal Express.js server as the starting point. Covers project setup, basic routing, and deploying a Node.js app to a cloud platform.

**Key learnings:** Express setup, `nodemon`, environment variables, deployment workflow.

---

### `02` — Connect Frontend

Demonstrates how a React frontend communicates with an Express backend — covering CORS, API calls, and serving the built frontend through the backend.

**Key learnings:** CORS configuration, `axios`, serving static files, Vite proxy setup.

---

### `03` — Data Modelling

Three independent Mongoose schema exercises modelling real-world domains:

| Domain | Models |
|--------|--------|
| **Todos** | `User`, `Todo`, `SubTodo` |
| **E-commerce** | `User`, `Product`, `Category`, `Order` |
| **Hospital Management** | `Hospital`, `Doctor`, `Patient`, `MedicalRecord` |

**Key learnings:** Schema design, relationships with `ref`, nested documents, enums, timestamps.

---

### `04` — YouTube Backend

The core of this series — a fully-featured REST API for a video hosting platform.

**Features:**
- 🔐 JWT authentication with access & refresh token rotation
- 🎥 Video upload, publish/unpublish, search with pagination
- 👤 User registration, login, logout, profile & avatar updates
- 💬 Comment CRUD on videos
- ❤️ Like/unlike videos, comments & tweets
- 🐦 Tweets (short community posts)
- 📋 Playlist creation and management
- 🔔 Channel subscriptions
- 📊 Dashboard with aggregated channel statistics
- ☁️ File handling via Multer (local) → Cloudinary (cloud)

**Architecture highlights:**
- `asyncHandler` wrapper eliminates repetitive try/catch
- `ApiError` class for consistent error responses
- `ApiResponse` class for standardised success responses
- MongoDB aggregation pipelines for complex queries
- Mongoose `aggregate-paginate-v2` for cursor-based pagination

---

### `05` — YouTube Frontend

A complete React frontend that consumes the backend API above.

**Pages:**

| Page | Description |
|------|-------------|
| `Home` | Video feed with infinite scroll |
| `VideoWatch` | Video player with comments & likes |
| `Channel` | Channel profile with Videos, Playlists, Tweets, About tabs |
| `Dashboard` | Creator stats, video manager with edit/delete |
| `VideoUpload` | Multi-step video upload form |
| `SearchResults` | Paginated search with infinite scroll |
| `Playlists / PlaylistDetail` | Playlist management |
| `LikedVideos` | User's liked videos |
| `Subscriptions` | Subscribed channel feed |
| `Tweets` | Community post feed |
| `Login / Register` | Auth forms with validation |

**Custom hooks built:**

`useAuth` · `useVideos` · useChannel · `useComments` · `useLike` · `usePlaylists` · `useSubscription` · `useTweets` · `useDashboard` · `useInfiniteScroll` · `useDebounce` · `useCountUp`

---

## 🛠️ Tech Stack

### Backend
| Layer | Technology |
|-------|------------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB Atlas |
| ODM | Mongoose |
| Authentication | JWT (access + refresh tokens) |
| Password Hashing | Bcrypt |
| File Uploads | Multer + Cloudinary |
| Pagination | mongoose-aggregate-paginate-v2 |
| Code Style | Prettier |

### Frontend
| Layer | Technology |
|-------|------------|
| Framework | React 18 |
| Build Tool | Vite |
| State Management | Redux Toolkit |
| Routing | React Router v6 |
| HTTP Client | Axios |
| Styling | TailwindCSS + shadcn/ui |
| Form Validation | Custom schemas |

---

## 🧠 Key Concepts Covered

- **MVC architecture** — clean separation of controllers, models, and routes
- **JWT auth flow** — access tokens, refresh tokens, token rotation on expiry
- **MongoDB aggregation pipelines** — `$lookup`, `$match`, `$group`, `$project`
- **Mongoose data modelling** — references, virtuals, pre-hooks (e.g. password hashing)
- **File handling pipeline** — Multer saves locally → Cloudinary uploads to cloud → local file deleted
- **Pagination strategies** — offset-based and cursor-based with aggregation
- **Custom middleware** — JWT verification, Multer configuration
- **Error handling** — centralized `ApiError` class, async wrapper utility
- **React patterns** — custom hooks, context API, Redux slices, protected routes
- **Infinite scroll** — Intersection Observer API with custom hook
- **Form validation** — schema-based validation with custom schemas
- **Debouncing** — optimised search input with custom `useDebounce` hook

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (Atlas or local)
- Cloudinary account

### Run the Backend (`04_youtubeBackend`)

```bash
cd 04_youtubeBackend
npm install
cp .env.sample .env   # fill in your values
npm run dev           # starts on :8000
```

### Run the Frontend (`05_youtubeFrontend`)

```bash
cd 05_youtubeFrontend/videotube-frontend
npm install
cp .env.example .env  # set VITE_API_BASE_URL
npm run dev           # starts on :5173
```

---

## 🔑 Environment Variables

Create a `.env` file inside `04_youtubeBackend/` based on `.env.sample`:

```env
PORT=8000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net
CORS_ORIGIN=*

ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=10d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

> ⚠️ **Never commit `.env` files.** They are in `.gitignore`.

---

## 📡 API Reference

All routes are prefixed with `/api/v1`

| Resource | Base Route | Auth Required |
|----------|------------|:---:|
| Users | `/users` | Partial |
| Videos | `/videos` | Partial |
| Comments | `/comments` | ✅ |
| Likes | `/likes` | ✅ |
| Tweets | `/tweets` | ✅ |
| Playlists | `/playlists` | ✅ |
| Subscriptions | `/subscriptions` | ✅ |
| Dashboard | `/dashboard` | ✅ |
| Healthcheck | `/healthcheck` | ❌ |

### Auth Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/users/register` | Register with avatar & cover image |
| `POST` | `/users/login` | Login, receive access + refresh tokens |
| `POST` | `/users/logout` | Logout, clear cookies |
| `POST` | `/users/refresh-token` | Rotate access token using refresh token |
| `GET` | `/users/current-user` | Get logged-in user profile |
| `PATCH` | `/users/update-account` | Update name & email |
| `PATCH` | `/users/change-password` | Change password |
| `PATCH` | `/users/avatar` | Update avatar image |
| `PATCH` | `/users/cover-image` | Update cover image |
| `GET` | `/users/c/:username` | Get public channel profile |
| `GET` | `/users/history` | Get watch history |

---

## 🌟 Final Project — ViMatrix

After completing the series, I built **ViMatrix** — a fully deployed full-stack creator platform that extends everything learned in this bootcamp.

<div align="center">

**[🔗 Live Demo → vimatrix.vercel.app](https://vimatrix.vercel.app)** &nbsp;&nbsp; | &nbsp;&nbsp; **[📂 GitHub → prabhatyadav4/vimatrix](https://github.com/prabhatyadav4/vimatrix)**

</div>

**What ViMatrix includes:**
- Complete backend API (Node.js + Express + MongoDB)
- Full React frontend (React + Vite + TailwindCSS)
- CI/CD via GitHub Actions
- Frontend deployed on Vercel
- Postman collection for all API endpoints

---

## 🗓️ Commit Journey

This repo was built commit-by-commit over ~45 days (Apr 10 – May 24, 2026), from the very first Express server to a complete full-stack application with 35+ commits.

The entire history reflects real learning — including bug fixes, refactors, and incremental feature additions exactly as they were built during the series.

---

## 📚 Resources

- 🎬 [Chai aur Backend Playlist](https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW)
- 📐 [Data Model Diagram (eraser.io)](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj?origin=share)
- 🗂️ [Official Series Repo](https://github.com/hiteshchoudhary/chai-backend)
- 🌐 [ViMatrix Live](https://vimatrix.vercel.app)
- 🧑‍💻 [ViMatrix Repo](https://github.com/prabhatyadav4/vimatrix)

---

<div align="center">

Built with ☕ and a lot of chai while following <strong>Chai aur Code</strong>

</div>
