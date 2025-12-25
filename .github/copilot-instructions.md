# AI Agent Instructions for Personnel Management App

## Project Overview

This is a **full-stack personnel management system** with a **React frontend** (TypeScript), **Express backend** (TypeScript), and **MySQL database**. The application manages employees and departments with CRUD operations and department associations.

## Architecture

### High-Level Data Flow
```
React (frontend) → Axios API calls → Express REST API → MySQL Database
```

- **Frontend** (`frontend/src`): React components consuming REST API via `services/api.ts`
- **Backend** (`backend/src`): Express server with controller/route pattern
- **Database** (`database/schema.sql`): Two main tables (`employees`, `departments`) with foreign key relationship

### Key Integration Points

1. **Frontend-Backend Communication**: The frontend uses `axios` to call `http://localhost:5000/api/` endpoints. The API client is centralized in `frontend/src/services/api.ts` (not typed in current version).

2. **Backend Routes**: All routes follow the pattern `/api/{resource}` where resources are `employees` and `departments`. Controllers handle business logic without a dedicated service/model layer (logic is split between controllers and models).

3. **Type Definitions**: Frontend types are in `frontend/src/types/index.ts`. Backend types are likely in `backend/src/types/index.ts` (not yet created in this structure).

## Project-Specific Patterns

### Backend Architecture Pattern
- **Controllers** (`backend/src/controllers/`): Handle HTTP logic and call model methods directly
- **Routes** (`backend/src/routes/`): Define endpoints that call controller actions
- **Models** (`backend/src/models/`): Contain database query logic (expected but not yet seen in workspace structure)
- **Middleware** (`backend/src/middleware/`): Error handling middleware for global exception management

**Note**: This is a lightweight MVC pattern without a dedicated service layer. Database interactions are expected in model files.

### Frontend Component Structure
- **Pages** (`frontend/src/pages/`): Route-level components (Home, Employees, Settings)
- **Components** (`frontend/src/components/`): Reusable UI components (EmployeeForm, EmployeeList, Dashboard)
- **Services** (`frontend/src/services/api.ts`): Centralized Axios API client
- **Types** (`frontend/src/types/index.ts`): Shared TypeScript interfaces

### Database Relationships
- `employees.department_id` → `departments.id` (Many-to-One, nullable, cascades to NULL on delete)
- Both tables have automatic `created_at` and `updated_at` timestamps

## Development Workflows

### Starting the Application
```bash
# Terminal 1: Backend (runs on port 5000)
cd backend
npm install  # First time only
npm start    # or: npm run dev (with hot reload via nodemon)

# Terminal 2: Frontend (runs on port 3000)
cd frontend
npm install  # First time only
npm start
```

### Building for Production
```bash
cd backend && npm run build  # Compiles TypeScript to JavaScript
cd frontend && npm run build # Creates optimized React build
```

### Database Setup
1. Create MySQL database (name not specified in project, likely `personnel_management` or `personnel_app`)
2. Run `database/schema.sql` to initialize tables
3. Configure database connection in `backend/src/config/database.ts` (currently not visible; check `.env` or hardcoded config)

## Critical Developer Considerations

1. **No Validation Layer**: Controllers accept `req.body` directly without validation. New endpoints should add input validation before database operations.

2. **Error Handling**: Global error middleware exists but controller-level error handling is basic (try/catch blocks return JSON). Consider consistent error response format.

3. **TypeScript Configuration**: Both backend and frontend have `tsconfig.json`. Ensure strict mode is enabled for type safety.

4. **Environment Configuration**: Backend uses `dotenv` for `PORT` and likely database credentials. Ensure `.env` file exists locally.

5. **CORS Handling**: Backend includes `cors` middleware but configuration isn't visible. If frontend and backend are on different origins in production, update CORS policy in `app.ts`.

6. **API Client Typing**: Frontend's `api.ts` lacks TypeScript types. Parameters should be typed using interfaces from `frontend/src/types/index.ts`.

## Common Modifications

- **Adding a new resource**: Create controller in `backend/src/controllers/{resource}Controller.ts`, routes in `backend/src/routes/{resource}Routes.ts`, model methods in `backend/src/models/{resource}.ts`, then add frontend components and API calls in `frontend/src/`.
- **Adding database fields**: Update `database/schema.sql`, update model methods, update frontend types in `types/index.ts`, update forms/displays in components.
- **Changing API behavior**: Controllers define business logic and HTTP responses; routes define endpoints; models handle SQL queries.

## File References for Patterns

- **REST endpoint pattern**: `backend/src/routes/employeeRoutes.ts`
- **Controller logic**: `backend/src/controllers/employeeController.ts`
- **Frontend API integration**: `frontend/src/services/api.ts`
- **Type contracts**: `frontend/src/types/index.ts`
- **Database schema**: `database/schema.sql`
