# Personnel Management Application

This is a full-stack personnel management application built with React for the frontend, Express for the backend, and MySQL for the database.

## Project Structure

```
personnel-management-app
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── EmployeeForm.tsx
│   │   │   ├── EmployeeList.tsx
│   │   │   └── Dashboard.tsx
│   │   ├── pages
│   │   │   ├── Home.tsx
│   │   │   ├── Employees.tsx
│   │   │   └── Settings.tsx
│   │   ├── services
│   │   │   └── api.ts
│   │   ├── types
│   │   │   └── index.ts
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   ├── employeeController.ts
│   │   │   └── departmentController.ts
│   │   ├── routes
│   │   │   ├── employeeRoutes.ts
│   │   │   └── departmentRoutes.ts
│   │   ├── models
│   │   │   ├── Employee.ts
│   │   │   └── Department.ts
│   │   ├── middleware
│   │   │   └── errorHandler.ts
│   │   ├── types
│   │   │   └── index.ts
│   │   ├── config
│   │   │   └── database.ts
│   │   └── app.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── database
│   └── schema.sql
└── README.md
```

## Features

- **Employee Management**: Create, read, update, and delete employee records.
- **Department Management**: Manage departments associated with employees.
- **User Interface**: A responsive and user-friendly interface built with React.
- **RESTful API**: A backend API built with Express to handle requests and manage data.

## Getting Started

### Prerequisites

- Node.js
- MySQL

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd personnel-management-app
   ```

2. Install dependencies for the frontend:
   ```
   cd frontend
   npm install
   ```

3. Install dependencies for the backend:
   ```
   cd backend
   npm install
   ```

4. Set up the database:
   - Create a MySQL database and run the SQL schema located in `database/schema.sql`.

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

The application should now be running on `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.