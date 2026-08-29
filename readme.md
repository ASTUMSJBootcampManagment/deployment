<img width="1205" height="632" alt="image" src="https://github.com/user-attachments/assets/fe17dfcb-e14f-4cb3-9019-15f8ffac43a6" />
<img width="1247" height="607" alt="image_2026-08-29_20-36-18" src="https://github.com/user-attachments/assets/504a0eb2-a3f7-4db0-bc7d-66d010ebf169" />
<img width="710" height="552" alt="Screenshot 2026-08-28 172556" src="https://github.com/user-attachments/assets/af8ca1da-9150-4dc5-8651-1dd484416293" />
<img width="1234" height="566" alt="Screenshot 2026-08-29 011803" src="https://github.com/user-attachments/assets/1aa2ab9c-28e9-4686-b8b8-dfa47280749f" />
<img width="1250" height="654" alt="Screenshot 2026-08-29 202800" src="https://github.com/user-attachments/assets/cb2cc22f-5c78-4fd8-9cd6-68a10ac1dc1b" />
<img width="1213" height="629" alt="Screenshot 2026-08-29 203059" src="https://github.com/user-attachments/assets/d308b994-0fe9-4faa-8e63-f8644a053358" />
<img width="1247" height="607" alt="Screenshot 2026-08-29 203416" src="https://github.com/user-attachments/assets/a7acc234-3e2a-42b4-98e7-42cf2d7d01a5" />
# ASTUMSJ Bootcamp Management System

A full-stack web-based **Bootcamp Management System** developed for the **ASTU Muslim Students Summer Bootcamp (ASTUMSJ)**.

The system provides a centralized platform for managing bootcamp registration, authentication, students, mentors, batches, attendance, assignments, progress, announcements, and administrative activities.

This project was designed and developed **collaboratively by our group** as part of the ASTUMSJ Bootcamp software development project.

---

##  Project Overview

The ASTUMSJ Bootcamp Management System was developed to replace manual and fragmented bootcamp management processes with a centralized digital platform.

The system supports different users based on their roles and provides each role with the appropriate functionality and access permissions.

The main goal of the system is to make bootcamp administration more organized, efficient, secure, and easier to manage.

###  Objectives

- Centralize bootcamp management activities.
- Simplify student registration and application management.
- Provide secure authentication and role-based access.
- Manage students, mentors, and batches.
- Record and monitor student attendance.
- Manage assignments and student progress.
- Publish announcements to bootcamp members.
- Provide administrators with a centralized dashboard.
- Reduce manual administrative work.
- Improve communication between administrators, mentors, and students.

---

#  About ASTUMSJ Bootcamp

The ASTU Muslim Students Tech Bootcamp is a technology-focused summer program designed for Muslim students enrolled at **Adama Science and Technology University (ASTU)**.

The program focuses on practical software development and problem-solving skills.

### Main learning areas

- Problem Solving
- HTML
- CSS
- JavaScript
- React
- Node.js
- Express.js
- MongoDB
- Authentication
- Full-Stack Web Development

The bootcamp also emphasizes mentorship, teamwork, practical assignments, and continuous progress tracking.

---

#  Features

##  Authentication & Authorization

- User registration
- User login
- Secure password hashing
- JWT-based authentication
- Protected routes
- Role-based authorization
- Logout
- Authentication state management

### Supported Roles

- **Admin**
- **Supervisor / Mentor**
- **Student / User**

Each role has access to features appropriate to its responsibilities.

---

## 👨 Admin Management

Administrators can manage the overall bootcamp through a centralized dashboard.

### Admin features include:

- Dashboard
- Student management
- Mentor management
- Application management
- Batch management
- Attendance management
- Progress management
- Assignment management
- Announcement management
- System settings
- Registration control

---

##  Student Management

Administrators can manage registered bootcamp students.

Features include:

- View students
- Search students
- Manage student information
- Assign students to batches
- View student status
- Monitor attendance
- Monitor learning progress

---

## 👨 Mentor Management

The system provides functionality for managing mentors and their relationship with bootcamp batches and students.

Mentors can participate in student supervision and learning management according to their assigned responsibilities.

---

##  Batch Management

Administrators can create and manage bootcamp batches.

Each batch can contain information such as:

- Batch name
- Year
- Track
- Start date
- End date
- Students
- Mentors
- Batch status

Batch lifecycle management allows administrators to manage active and completed batches.

---

##  Application Management

The system supports the bootcamp application process.

Administrators can review and manage applications and student statuses.

This helps replace manual application tracking with a centralized digital workflow.

---

##  Attendance Management

Administrators can record daily attendance for students.

Supported attendance statuses include:

- Present
- Absent
- Late
- Excused

The attendance section includes:

- Date selection
- Batch filtering
- Student search
- Individual attendance marking
- Bulk attendance actions
- Attendance saving

---

##  Student Progress

The system allows student learning progress to be monitored.

Administrators can create learning topics and monitor student progress through different stages such as:

- Not Started
- In Progress
- Completed
- Needs Improvement

Progress information helps mentors and administrators identify areas where students may need additional support.

---

##  Assignments

Administrators can create and manage assignments.

Assignments can contain:

- Title
- Description
- Due date
- Target batch

Administrators can also manage existing assignments.

---

##  Announcements

The announcement system allows administrators to communicate important information to bootcamp members.

Announcements can contain:

- Title
- Message
- Target audience
- Batch
- Publication date

This provides a centralized communication channel for bootcamp updates.

---

##  System Settings

Administrators can control important system operations, including:

- Registration status
- Active registration batch
- Batch completion
- Bootcamp lifecycle settings

---

#  Technology Stack

## Frontend

- **React.js**
- **React Router**
- **Tailwind CSS**
- **Lucide React**
- **Axios**
- **Vite**

## Backend

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT**
- **bcrypt**

## Development Tools

- Git
- GitHub
- Visual Studio Code
- Postman
- npm

---

#  System Architecture

The project follows a full-stack architecture:

```text
┌──────────────────────────────┐
│          Frontend            │
│                              │
│ React + Tailwind CSS + Vite  │
└──────────────┬───────────────┘
               │
               │ HTTP / REST API
               │
               ▼
┌──────────────────────────────┐
│           Backend            │
│                              │
│ Node.js + Express.js         │
│ JWT Authentication           │
│ Role-Based Authorization      │
└──────────────┬───────────────┘
               │
               │ Mongoose
               ▼
┌──────────────────────────────┐
│          Database            │
│                              │
│           MongoDB            │
└──────────────────────────────┘
```

---

#  Project Structure

The project is organized into separate frontend and backend applications.

```text
BootCump_Management-_System/
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── admin/
│   │   │   ├── mentor/
│   │   │   └── student/
│   │   ├── api/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   └── server.js
│   │
│   ├── package.json
│   └── .env
│
└── README.md
```

> The exact folder structure may vary slightly depending on the final implementation.

---

#  Security

Security was considered throughout the development of the system.

The application uses:

- Password hashing with **bcrypt**
- JWT authentication
- Protected API routes
- Role-based authorization
- Protected frontend routes
- Environment variables for sensitive configuration
- Server-side validation

Sensitive credentials and environment variables should **never be committed to the repository**.

---

#  User Flow

A simplified system flow is:

```text
                ┌──────────────┐
                │    Visitor   │
                └──────┬───────┘
                       │
                       ▼
              ┌─────────────────┐
              │ Login / Register│
              └────────┬────────┘
                       │
                       ▼
                ┌──────────────┐
                │ Authentication│
                └──────┬───────┘
                       │
          ┌────────────┼────────────┐
          │            │            │
          ▼            ▼            ▼
       Admin        Mentor       Student
          │            │            │
          ▼            ▼            ▼
     Management    Supervision    Learning
     Dashboard     & Progress     Activities
```

---

#  Admin Dashboard

The administrator dashboard provides a centralized overview of the bootcamp.

It allows administrators to access:

- Applications
- Students
- Mentors
- Batches
- Attendance
- Progress
- Assignments
- Announcements
- Settings

The admin interface uses a consistent dashboard layout with navigation and protected role-based access.

---

#  UI & Design

The frontend was developed using **Tailwind CSS** with a consistent design system.

The interface focuses on:

- Clean layouts
- Responsive design
- Clear navigation
- Reusable components
- Consistent colors
- Accessible forms
- Dashboard-based management
- Responsive tables and cards

The design was created specifically for the ASTUMSJ Bootcamp Management System.

---

#  Installation & Setup

## 1. Clone the repository

```bash
git clone https://github.com/ASTUMSJBootcampManagment/BootCump_Management-_System.git
```

```bash
```

---

## 2. Backend Setup

Navigate to the backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend:

```bash
npm run dev
```

The backend should run on:

```text
http://localhost:3000
```

---

## 3. Frontend Setup

Open another terminal and navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

---

#  API Testing

The backend REST APIs were tested during development using **Postman**.

API testing included areas such as:

- Authentication
- User management
- Batch management
- Attendance
- Assignments
- Announcements
- Progress
- Protected routes
- Role-based access

---

#  Development Team

This project was **designed and developed collaboratively by our group** as part of the ASTUMSJ Bootcamp project.

The development process involved teamwork across:

- Frontend development
- Backend development
- Database design
- API development
- Authentication
- UI/UX implementation
- Testing
- Integration
- Documentation

Each member contributed to different parts of the project, and the final system was completed through **collaborative development and integration**.

---

#  Development Approach

The project was developed using an iterative workflow.

### Phase 1 — Planning

- Requirements analysis
- System planning
- UI/UX planning
- Database planning
- Role definition

### Phase 2 — Frontend Development

- React setup
- Routing
- Dashboard layouts
- Authentication pages
- Admin interfaces
- Student interfaces
- Mentor interfaces
- Responsive UI

### Phase 3 — Backend Development

- Express server
- Database models
- Controllers
- Routes
- Authentication
- Authorization
- API endpoints

### Phase 4 — Integration

- Frontend/API connection
- Authentication integration
- Protected routes
- CRUD operations
- Error handling

### Phase 5 — Testing & Refinement

- API testing with Postman
- Frontend testing
- Authentication testing
- Role-based access testing
- Bug fixing
- UI consistency improvements



#  License

This project was developed as an academic and organizational project for the ASTUMSJ Bootcamp.

All rights reserved unless otherwise specified by the project contributors.

---

#  Acknowledgements

Special thanks to:

- **Adama Science and Technology University (ASTU)**
- **ASTUMSJ**
- Our bootcamp mentors and supervisors
- Our project team members
- Everyone who contributed feedback and support throughout development

---

##  ASTUMSJ Bootcamp Management System

**Learn • Build • Collaborate • Grow**

Built with  by the rifkatul hayr team.

#  Development Team

This project was collaboratively designed and developed by the following team members as part of the ASTUMSJ Bootcamp project:

| # | Team Member           |
| - | --------------------- |
| 1 | **Eman Abdulaziz**    |
| 2 | **Firdews Kemal**     |
| 3 | **Hafsa Abdullwahid** |
| 4 | **Asanti Nuredin**    |
| 5 | **Minabusser**        |

###  Team Collaboration

The system was developed through collaborative teamwork, with members contributing across different areas of the project, including:

* Frontend development
* Backend development
* Database design
* UI/UX implementation
* Authentication and authorization
* API development and integration
* Testing and debugging
* Documentation
* Project presentation

The final application represents the combined effort, ideas, and contributions of all five team members.

---

#  Project Mentors & Supervisors

We would like to acknowledge and express our appreciation to our project mentors and supervisors for their guidance, technical support, feedback, and continuous supervision throughout the development of the project.

| # | Mentor / Supervisor |
| - | ------------------- |
| 1 | **Hanan Nuru**      |
| 2 | **Nuha Samson**     |

###  Acknowledgement

We sincerely appreciate **Hanan Nuru** and **Nuha Samson** for mentoring and supervising our team throughout the project. Their guidance, feedback, and support contributed significantly to our learning process and the successful completion of the ASTUMSJ Bootcamp Management System.
##  Development Group

### **Rifqatul Qhair**

**Rifqatul Qhair** is the name of our development group. The ASTUMSJ Bootcamp Management System was developed collaboratively by the members of this group as a team project.

> **Rifqatul Qhair** — *Our team, our effort, our achievement.* 


#  Demo / Judge Credentials

For judges, reviewers, and evaluators who would like to explore the different role-based pages of the system, the following demo accounts are available.

> **Important:** These credentials are provided specifically for testing and demonstration purposes.

| Role           | Email                         | Password       |
| -------------- | ----------------------------- | -------------- |
| 🔴 **Admin**   | `admin@taste.com`             | `admin123`     |
| 🟢 **Mentor**  | `hanannuru384@gmail.com`      | `mypassword87` |
| 🔵 **Student** | `hikmaabdulaziz719@gmail.com` | `admin123`     |

###  How to Test

1. Open the deployed application.
2. Go to the **Login** page.
3. Use one of the credentials above.
4. Explore the features available for that role.
5. Log out and sign in with another role to compare the different dashboards and permissions.

###  Role-Based Access

Each account provides access to a different part of the system:

* **Admin** — Full system management, including students, mentors, applications, batches, attendance, assignments, progress, announcements, and system settings.
* **Mentor** — Mentor-related functionality for supervising and supporting students.
* **Student** — Student dashboard and learning-related functionality.

These accounts allow evaluators to experience the system from the perspective of each major user role.
