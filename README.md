# 🚀 SkillForge – Learning Management System (LMS)

SkillForge is a full-stack Learning Management System where users can explore courses, enroll, make payments, and access learning content. It also includes an admin dashboard to manage courses and bookings.

---

## 📌 Features

### 👨‍🎓 User Side
- Browse and search courses
- View course details
- Enroll in free/paid courses
- Secure authentication using Clerk
- Payment integration using Stripe
- Access enrolled courses
- Course rating system

### 🛠️ Admin Panel
- Add new courses
- View all courses
- Delete courses
- Manage bookings
- Dashboard with statistics

---

## 🏗️ Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- Clerk Authentication
- Axios / Fetch API

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Clerk Middleware
- Stripe Payment Integration

### Admin Panel
- React.js (Vite)
- REST API integration

---

## 📂 Project Structure


LMS/
│
├── frontend/ # User Interface
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── assets/
│
├── backend/ # API Server
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ └── config/
│
├── admin/ # Admin Dashboard
│ ├── src/
│ │ ├── components/
│ │ └── pages/


---

## 🔐 Authentication

- Implemented using **Clerk**
- JWT-based secure session handling
- Role-based logic (can be extended for admin protection)

---

## 💳 Payment Flow

1. User clicks enroll
2. Backend creates Stripe session
3. User completes payment
4. Payment verified
5. Course unlocked

---

## 🔄 API Endpoints (Sample)

### Courses
- `GET /api/course/public`
- `GET /api/course/:id`
- `POST /api/course`

### Bookings
- `POST /api/booking`
- `GET /api/booking/my`
- `GET /api/booking/stats`

---

## ⚙️ Environment Variables

### Frontend (.env)

VITE_API_BASE=your_backend_url
VITE_CLERK_PUBLISHABLE_KEY=your_key


### Backend (.env)

PORT=4000
MONGO_URI=your_mongodb_uri
CLERK_SECRET_KEY=your_secret
STRIPE_SECRET_KEY=your_key


---

## 🚀 Deployment

### Frontend
- Hosted on: Vercel / Netlify

### Backend
- Hosted on: Render

### Admin Panel
- Hosted separately (Render / Netlify)

---

## 🧠 Key Learnings

- Full-stack development with real-world architecture
- Secure authentication (Clerk + JWT)
- Payment integration (Stripe)
- REST API design
- State management in React
- Deployment & environment handling

---

## ⚠️ Known Issues / Improvements

- Admin routes are not role-protected (can be improved)
- API base URL is not fully centralized (can be optimized)
- Error handling can be improved in UI
- Caching & performance optimization pending

---

## 📸 Screenshots (Optional)

_Add screenshots here_

---

## 👩‍💻 Author

**Geetanjali**
- GitHub: https://github.com/geetanjali55

---

## ⭐ Future Enhancements

- Role-based access control (Admin/User)
- Course progress tracking
- Video streaming optimization
- Notifications system
- AI-based recommendations

---

## 📜 License

This project is for educational purposes.
