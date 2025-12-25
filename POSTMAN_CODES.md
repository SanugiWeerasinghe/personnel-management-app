# 📮 POSTMAN COMPLETE TESTING GUIDE

## 🎯 Base URL
```
http://localhost:3500/api
```

---

## 👥 EMPLOYEE ENDPOINTS

### 1️⃣ CREATE EMPLOYEE (POST)
**URL:** `http://localhost:3500/api/employees`  
**Method:** POST  
**Headers:**
```
Content-Type: application/json
```

**Body (Raw JSON):**
```json
{
  "first_name": "Sanugi",
  "last_name": "Weerasinghe",
  "email": "sanugi@gmail.com",
  "phone": "0740733547",
  "department_id": 1
}
```

**Expected Response (201 Created):**
```json
{
  "id": 1,
  "first_name": "Sanugi",
  "last_name": "Weerasinghe",
  "email": "sanugi@gmail.com",
  "phone": "0740733547",
  "department_id": 1
}
```

---

### 2️⃣ GET ALL EMPLOYEES (GET)
**URL:** `http://localhost:3500/api/employees`  
**Method:** GET  
**Headers:**
```
Content-Type: application/json
```

**No Body Needed**

**Expected Response (200 OK):**
```json
[
  {
    "id": 1,
    "first_name": "Sanugi",
    "last_name": "Weerasinghe",
    "email": "sanugi@gmail.com",
    "phone": "0740733547",
    "department_id": 1,
    "created_at": "2025-12-25T10:30:00.000Z",
    "updated_at": "2025-12-25T10:30:00.000Z"
  }
]
```

---

### 3️⃣ GET EMPLOYEE BY ID (GET)
**URL:** `http://localhost:3500/api/employees/1`  
**Method:** GET  
**Headers:**
```
Content-Type: application/json
```

**No Body Needed**

**Expected Response (200 OK):**
```json
{
  "id": 1,
  "first_name": "Sanugi",
  "last_name": "Weerasinghe",
  "email": "sanugi@gmail.com",
  "phone": "0740733547",
  "department_id": 1,
  "created_at": "2025-12-25T10:30:00.000Z",
  "updated_at": "2025-12-25T10:30:00.000Z"
}
```

---

### 4️⃣ UPDATE EMPLOYEE (PUT)
**URL:** `http://localhost:3500/api/employees/1`  
**Method:** PUT  
**Headers:**
```
Content-Type: application/json
```

**Body (Raw JSON):**
```json
{
  "first_name": "Sanugi",
  "last_name": "Weerasinghe",
  "email": "sanugi.updated@gmail.com",
  "phone": "0740733547",
  "department_id": 1
}
```

**Expected Response (200 OK):**
```json
{
  "id": 1,
  "first_name": "Sanugi",
  "last_name": "Weerasinghe",
  "email": "sanugi.updated@gmail.com",
  "phone": "0740733547",
  "department_id": 1
}
```

---

### 5️⃣ DELETE EMPLOYEE (DELETE)
**URL:** `http://localhost:3500/api/employees/1`  
**Method:** DELETE  
**Headers:**
```
Content-Type: application/json
```

**No Body Needed**

**Expected Response (204 No Content):**
```
(Empty - just HTTP 204 status)
```

---

## 🏢 DEPARTMENT ENDPOINTS

### 1️⃣ CREATE DEPARTMENT (POST)
**URL:** `http://localhost:3500/api/departments`  
**Method:** POST  
**Headers:**
```
Content-Type: application/json
```

**Body (Raw JSON):**
```json
{
  "name": "Engineering"
}
```

**Expected Response (201 Created):**
```json
{
  "id": 1,
  "name": "Engineering"
}
```

---

### 2️⃣ GET ALL DEPARTMENTS (GET)
**URL:** `http://localhost:3500/api/departments`  
**Method:** GET  
**Headers:**
```
Content-Type: application/json
```

**No Body Needed**

**Expected Response (200 OK):**
```json
[
  {
    "id": 1,
    "name": "Engineering",
    "created_at": "2025-12-25T10:30:00.000Z",
    "updated_at": "2025-12-25T10:30:00.000Z"
  }
]
```

---

### 3️⃣ GET DEPARTMENT BY ID (GET)
**URL:** `http://localhost:3500/api/departments/1`  
**Method:** GET  
**Headers:**
```
Content-Type: application/json
```

**No Body Needed**

**Expected Response (200 OK):**
```json
{
  "id": 1,
  "name": "Engineering",
  "created_at": "2025-12-25T10:30:00.000Z",
  "updated_at": "2025-12-25T10:30:00.000Z"
}
```

---

### 4️⃣ UPDATE DEPARTMENT (PUT)
**URL:** `http://localhost:3500/api/departments/1`  
**Method:** PUT  
**Headers:**
```
Content-Type: application/json
```

**Body (Raw JSON):**
```json
{
  "name": "Software Engineering"
}
```

**Expected Response (200 OK):**
```json
{
  "id": 1,
  "name": "Software Engineering"
}
```

---

### 5️⃣ DELETE DEPARTMENT (DELETE)
**URL:** `http://localhost:3500/api/departments/1`  
**Method:** DELETE  
**Headers:**
```
Content-Type: application/json
```

**No Body Needed**

**Expected Response (204 No Content):**
```
(Empty - just HTTP 204 status)
```

---

## 🧪 STEP-BY-STEP TESTING SEQUENCE

### Step 1: Create Department First
```
POST /api/departments
Body: {"name":"Engineering"}
```
✅ Save the returned `id` (should be 1)

---

### Step 2: Create Employee
```
POST /api/employees
Body: {
  "first_name":"Sanugi",
  "last_name":"Weerasinghe",
  "email":"sanugi@gmail.com",
  "phone":"0740733547",
  "department_id":1
}
```
✅ Save the returned `id` (should be 1)

---

### Step 3: Get All Employees
```
GET /api/employees
```
✅ Should see your employee in the list

---

### Step 4: Get Specific Employee
```
GET /api/employees/1
```
✅ Should see the employee details

---

### Step 5: Update Employee
```
PUT /api/employees/1
Body: {
  "first_name":"Sanugi",
  "last_name":"Weerasinghe",
  "email":"sanugi.updated@gmail.com",
  "phone":"0740733547",
  "department_id":1
}
```
✅ Email should be updated

---

### Step 6: Delete Employee
```
DELETE /api/employees/1
```
✅ Should return 204 No Content

---

### Step 7: Verify Deletion
```
GET /api/employees
```
✅ Should be empty array now

---

## 📝 POSTMAN COLLECTION FORMAT

You can also import the `Postman_Collection.json` file:

1. Open Postman
2. Click **Import** (top left)
3. Select **Postman_Collection.json**
4. All endpoints automatically configured!

---

## ✅ QUICK COPY-PASTE FOR POSTMAN

### Create Employee Body
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "phone": "555-1234",
  "department_id": 1
}
```

### Create Department Body
```json
{
  "name": "HR"
}
```

### Update Employee Body
```json
{
  "first_name": "Jane",
  "last_name": "Smith",
  "email": "jane.smith@example.com",
  "phone": "555-5678",
  "department_id": 1
}
```

### Update Department Body
```json
{
  "name": "Human Resources"
}
```

---

## 🔍 RESPONSE STATUS CODES

| Code | Meaning | Endpoint |
|------|---------|----------|
| 200 | OK | GET, PUT |
| 201 | Created | POST |
| 204 | No Content | DELETE |
| 400 | Bad Request | Invalid data |
| 404 | Not Found | ID doesn't exist |
| 500 | Server Error | Database error |

---

## 💡 TIPS

1. **Always create department first** before creating employee (foreign key requirement)
2. **Email must be unique** - can't create two employees with same email
3. **Use the ID returned** from POST to make PUT/GET/DELETE requests
4. **Content-Type header** is required on all requests
5. **Body is required for** POST and PUT (empty for GET and DELETE)

---

## 🎉 READY TO TEST!

Everything is configured and ready. Just follow the steps above in Postman and you'll have a complete test of the Personnel Management API!

**Happy Testing!** 🚀
