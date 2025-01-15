# Task Management Dashboard

A full-stack Task Management Dashboard built with [ReactJS](https://reactjs.org/), [Next.js](https://nextjs.org/), [Redux Toolkit](https://redux-toolkit.js.org/), and [Tailwind CSS](https://tailwindcss.com/). This application allows users to manage tasks through a clean, responsive UI and integrates a backend API for task operations using in-memory storage.

## GitHub Repository
[Task Management App](https://github.com/osamaayub/Task-Management-App)

## Features

### Core Functionalities

#### Task Management:
- Add, edit, delete, and view tasks.
- Filter tasks by priority, status, and due date.

#### Task Fields:
- Title, Description, Priority (Low, Medium, High), Status (Pending, In Progress, Completed), and Due Date.

### Backend API
- RESTful API using Next.js API routes with in-memory task storage.
- Endpoints for CRUD operations on tasks.

### State Management
- [Redux Toolkit](https://redux-toolkit.js.org/) is used to manage the global state of tasks and for caching to reduce redundant API calls.

### Responsive Design
- Built with [Tailwind CSS](https://tailwindcss.com/) for a modern, mobile-friendly user interface.

### Validation and Error Handling
- Input validation using [Formik](https://formik.org/) with [Zod](https://zod.dev/):
  - Task title is required.
  - Due date must be a valid future date.
  - Displays user-friendly error messages for API errors and invalid input.

## Technology Stack
- **Frontend:** [ReactJS](https://reactjs.org/), [Next.js](https://nextjs.org/) (v14+)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Form Handling:** [ReactHookForm](https://www.react-hook-form.com/) with [Yup](https://github.com/jquense/yup)
- **Backend:** [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) with in-memory storage



## Installation and Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or above)
- [Git](https://git-scm.com/)

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/osamaayub/Task-Management-App.git
    cd Task-Management-App

arduino
    ```Copy code
2. Install dependencies:localhost:3000
    ```bash
    npm install
    ```ask: Enter task details (title, description, priority, status, and due date) and click "Add Task."
3. Start the development server:k the "Edit" button for a task, modify fields, and save changes.
    ```bash
    npm run devte.
    ```
4. Open the app in your browser:
    ```arduino
    http://localhost:3000 tasks.
    ```

## Usage
Copy code
### Task Management
- **Add Task:** Enter task details (title, description, priority, status, and due date) and click "Add Task."
- **Edit Task:** Click the "Edit" button for a task, modify fields, and save changes.   "id": "1",
- **Delete Task:** Click the "Delete" button to remove a task. "title": "Sample Task",
- **Filter Tasks:** Use dropdown filters to sort tasks by priority, status, or due date.on": "Task description",

## API Documentation
-20"
### Endpoints

#### GET /api/tasksT /api/tasks
Fetch all tasks.dd a new task.
Response:
```json
[
  {Copy code
    "id": "1",
    "title": "Sample Task",: "New Task",
    "description": "Task description", "description": "Task description",
    "priority": "High",,
    "status": "Pending",
    "dueDate": "2025-01-20"5"
  }
]
```pdate an existing task by ID.

#### POST /api/tasks
Add a new task.
Payload:Copy code
```json
{: "Updated Task",
  "title": "New Task", "priority": "Low"
  "description": "Task description",
  "priority": "Medium",id
  "status": "In Progress",elete a task by ID.
  "dueDate": "2025-02-15"
}
```plaintext

#### PUT /api/tasks/:id
Update an existing task by ID.c/               # Static assets
Payload:── src/
```jsonomponents
{features/         # Redux slices
  "title": "Updated Task",
  "priority": "Low"or task operations
}dex.js      # Main dashboard page
```
on
#### DELETE /api/tasks/:id
Delete a task by ID.

## Project Structure
```plaintext
. must be valid and set in the future.
├── public/               # Static assets
├── src/ors (e.g., 400 for bad requests, 404 for missing tasks).
│   ├── components/       # Reusable UI componentsssages:
│   ├── features/         # Redux slices
│   ├── pages/gn
│   │   ├── api/tasks/    # API routes for task operations devices. Tailwind CSS is used to ensure modern styling and scalability.
│   │   ├── index.js      # Main dashboard page
│   └── styles/           # Tailwind CSS configuration
├── README.md             # Project documentationUI Design: Focused on creating a professional and intuitive user interface with Tailwind CSS.
├── package.json          # Project dependenciest: Implemented Redux Toolkit for efficient state updates and caching.
└── next.config.js        # Next.js configurationck data management.
```

## Error Handling and Validation
 form validations with React-Hook-Form and Zod.
### Frontend:Toolkit.
- Tasks must have a title.- Due dates must be valid and set in the future.

### Backend:
- Provides appropriate HTTP status codes for errors (e.g., 400 for bad requests, 404 for missing tasks).

### Error Messages:
- Displays user-friendly error messages for API errors and validation issues.

## Responsive Design
The app is fully responsive and works seamlessly on both desktop and mobile devices. [Tailwind CSS](https://tailwindcss.com/) is used to ensure modern styling and scalability.

## Thought Process
- **UI Design:** Focused on creating a professional and intuitive user interface with [Tailwind CSS](https://tailwindcss.com/).
- **State Management:** Implemented [Redux Toolkit](https://redux-toolkit.js.org/) for efficient state updates and caching.
- **Backend Implementation:** Used [Next.js API routes](https://nextjs.org/docs/api-routes/introduction) with in-memory storage for simplicity and quick data management.
- **Performance Optimization:** Minimized API calls by caching data in Redux state.

## Challenges Faced
- Ensuring a fully responsive design that works on all screen sizes.
- Managing complex form validations with [Formik](https://formik.org/) and [Yup](https://github.com/jquense/yup).
- Efficiently handling state updates and API integration with [Redux Toolkit](https://redux-toolkit.js.org/).
