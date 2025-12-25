# Personnel Management Application - Backend

This is the backend part of the Personnel Management Application, built using Express and TypeScript. It provides RESTful APIs for managing employee and department data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Configuration](#database-configuration)
- [Error Handling](#error-handling)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd personnel-management-app/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the backend server, run:
```
npm start
```
The server will run on `http://localhost:5000` by default.

## API Endpoints

### Employees
- `GET /api/employees` - Retrieve a list of employees
- `POST /api/employees` - Create a new employee
- `PUT /api/employees/:id` - Update an existing employee
- `DELETE /api/employees/:id` - Delete an employee

### Departments
- `GET /api/departments` - Retrieve a list of departments
- `POST /api/departments` - Create a new department
- `PUT /api/departments/:id` - Update an existing department
- `DELETE /api/departments/:id` - Delete a department

## Database Configuration

The application uses MySQL as the database. Ensure that the database is set up according to the schema defined in `database/schema.sql`.

## Error Handling

The application includes middleware for handling errors. Any errors that occur during request processing will be caught and a standardized error response will be sent to the client.