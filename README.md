Task Management Dashboard
A full-stack Task Management Dashboard built with ReactJS, Next.js, Redux Toolkit, and Tailwind CSS. This application allows users to manage tasks through a clean, responsive UI and integrates a backend API for task operations using in-memory storage.

GitHub Repository: Task Management App

Features
Core Functionalities
Task Management:
Add, edit, delete, and view tasks.
Filter tasks by priority, status, and due date.
Task Fields:
Title, Description, Priority (Low, Medium, High), Status (Pending, In Progress, Completed), and Due Date.
Backend API
RESTful API using Next.js API routes with in-memory task storage.
Endpoints for CRUD operations on tasks.
State Management
Redux Toolkit is used to manage the global state of tasks and for caching to reduce redundant API calls.
Responsive Design
Built with Tailwind CSS for a modern, mobile-friendly user interface.
Validation and Error Handling
Input validation using Formik with Yup:
Task title is required.
Due date must be a valid future date.
Displays user-friendly error messages for API errors and invalid input.
Technology Stack
Frontend: ReactJS, Next.js (v14+)
State Management: Redux Toolkit
Styling: Tailwind CSS
Form Handling: Formik with Yup
Backend: Next.js API Routes with in-memory storage
Live Demo (Optional)
If the application is deployed (e.g., on Vercel), include the live link here:
Live Application: Task Management App on Vercel

Installation and Setup
Prerequisites
Node.js (v18 or above)
Git
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/osamaayub/Task-Management-App.git
cd Task-Management-App
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Open the app in your browser:

arduino
Copy code
http://localhost:3000
Usage
Task Management
Add Task: Enter task details (title, description, priority, status, and due date) and click "Add Task."
Edit Task: Click the "Edit" button for a task, modify fields, and save changes.
Delete Task: Click the "Delete" button to remove a task.
Filter Tasks: Use dropdown filters to sort tasks by priority, status, or due date.
API Documentation
Endpoints
GET /api/tasks
Fetch all tasks.
Response:

json
Copy code
[
  {
    "id": "1",
    "title": "Sample Task",
    "description": "Task description",
    "priority": "High",
    "status": "Pending",
    "dueDate": "2025-01-20"
  }
]
POST /api/tasks
Add a new task.
Payload:

json
Copy code
{
  "title": "New Task",
  "description": "Task description",
  "priority": "Medium",
  "status": "In Progress",
  "dueDate": "2025-02-15"
}
PUT /api/tasks/:id
Update an existing task by ID.
Payload:

json
Copy code
{
  "title": "Updated Task",
  "priority": "Low"
}
DELETE /api/tasks/:id
Delete a task by ID.

Project Structure
plaintext
Copy code
.
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable UI components
│   ├── features/         # Redux slices
│   ├── pages/
│   │   ├── api/tasks/    # API routes for task operations
│   │   ├── index.js      # Main dashboard page
│   └── styles/           # Tailwind CSS configuration
├── README.md             # Project documentation
├── package.json          # Project dependencies
└── next.config.js        # Next.js configuration
Error Handling and Validation
Frontend:
Tasks must have a title.
Due dates must be valid and set in the future.
Backend:
Provides appropriate HTTP status codes for errors (e.g., 400 for bad requests, 404 for missing tasks).
Error Messages:
Displays user-friendly error messages for API errors and validation issues.
Responsive Design
The app is fully responsive and works seamlessly on both desktop and mobile devices. Tailwind CSS is used to ensure modern styling and scalability.

Thought Process
UI Design: Focused on creating a professional and intuitive user interface with Tailwind CSS.
State Management: Implemented Redux Toolkit for efficient state updates and caching.
Backend Implementation: Used Next.js API routes with in-memory storage for simplicity and quick data management.
Performance Optimization: Minimized API calls by caching data in Redux state.
Challenges Faced
Ensuring a fully responsive design that works on all screen sizes.
Managing complex form validations with Formik and Yup.
Efficiently handling state updates and API integration with Redux Toolkit.
