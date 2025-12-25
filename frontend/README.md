# Personnel Management Application - Frontend

This is the frontend part of the Personnel Management Application, built using React and TypeScript. The application allows users to manage employee and department data efficiently.

## Project Structure

- **src/**: Contains the source code for the application.
  - **components/**: Reusable components for the application.
    - `EmployeeForm.tsx`: Component for creating and editing employee data.
    - `EmployeeList.tsx`: Component for displaying a list of employees.
    - `Dashboard.tsx`: Main interface aggregating various components.
  - **pages/**: Contains the main pages of the application.
    - `Home.tsx`: Landing page of the application.
    - `Employees.tsx`: Employee management interface.
    - `Settings.tsx`: Configuration settings for the application.
  - **services/**: API service for making requests to the backend.
    - `api.ts`: Functions for fetching, creating, updating, and deleting data.
  - **types/**: TypeScript interfaces defining the structure of data.
    - `index.ts`: Interfaces for employee and department objects.
  - `App.tsx`: Main application component that sets up routing.
  - `index.tsx`: Entry point of the React application.

## Getting Started

1. **Installation**: Run `npm install` to install the necessary dependencies.
2. **Running the Application**: Use `npm start` to start the development server.

## Contributing

Feel free to submit issues and pull requests for improvements or bug fixes.