# ✅ POSTMAN - READY TO TEST NOW!

## 🎯 Copy These Exact Codes Into Postman

---

## 📌 BASE URL FOR ALL REQUESTS
```
http://localhost:3500/api
```

---

## 🎯 EXACT CODES TO COPY-PASTE

### REQUEST #1: Create Department
```
Method: POST
URL: http://localhost:3500/api/departments
Header: Content-Type: application/json

Body:
{
  "name": "Engineering"
}
```

**Expected Response:**
```json
{
  "id": 1,
  "name": "Engineering"
}
```

---

### REQUEST #2: Create Employee
```
Method: POST
URL: http://localhost:3500/api/employees
Header: Content-Type: application/json

Body:
{
  "first_name": "Sanugi",
  "last_name": "Weerasinghe",
  "email": "sanugi@gmail.com",
  "phone": "0740733547",
  "department_id": 1
}
```

**Expected Response:**
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

### REQUEST #3: Get All Employees
```
Method: GET
URL: http://localhost:3500/api/employees
Header: Content-Type: application/json

Body: (None - leave empty)
```

**Expected Response:**
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

### REQUEST #4: Get Single Employee
```
Method: GET
URL: http://localhost:3500/api/employees/1
Header: Content-Type: application/json

Body: (None - leave empty)
```

**Expected Response:**
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

### REQUEST #5: Update Employee
```
Method: PUT
URL: http://localhost:3500/api/employees/1
Header: Content-Type: application/json

Body:
{
  "first_name": "Sanugi",
  "last_name": "Weerasinghe",
  "email": "sanugi.updated@gmail.com",
  "phone": "0740733547",
  "department_id": 1
}
```

**Expected Response:**
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

### REQUEST #6: Delete Employee
```
Method: DELETE
URL: http://localhost:3500/api/employees/1
Header: Content-Type: application/json

Body: (None - leave empty)
```

**Expected Response:**
```
Status: 204 No Content
(Empty body)
```

---

### REQUEST #7: Create Another Employee
```
Method: POST
URL: http://localhost:3500/api/employees
Header: Content-Type: application/json

Body:
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "phone": "555-1234",
  "department_id": 1
}
```

---

### REQUEST #8: Get All Departments
```
Method: GET
URL: http://localhost:3500/api/departments
Header: Content-Type: application/json

Body: (None - leave empty)
```

---

### REQUEST #9: Update Department
```
Method: PUT
URL: http://localhost:3500/api/departments/1
Header: Content-Type: application/json

Body:
{
  "name": "Software Engineering"
}
```

---

### REQUEST #10: Delete Department
```
Method: DELETE
URL: http://localhost:3500/api/departments/1
Header: Content-Type: application/json

Body: (None - leave empty)
```

---

## 🚀 HOW TO USE IN POSTMAN

1. **Open Postman**
2. **Click the "+" button** to create new request
3. **For each request above:**
   - Copy the Method
   - Paste the URL
   - Add the Header
   - Paste the Body (if not empty)
   - Click SEND
4. **Check the Response** matches the expected response

---

## ✅ POSTMAN TIPS

### Add Header in Postman:
1. Click on **Headers** tab
2. In Key field: `Content-Type`
3. In Value field: `application/json`
4. Done!

### Add Body in Postman:
1. Click on **Body** tab
2. Select **raw**
3. Select **JSON** from dropdown
4. Paste the body code
5. Done!

### Send Request:
1. Click the **SEND** button (blue button on right)
2. See response at bottom

---

## 📊 REQUEST ORDER

**Follow this sequence:**
1. Create Department ← **Do this first!**
2. Create Employee ← Needs department to exist
3. Get All Employees
4. Get Single Employee
5. Update Employee
6. Delete Employee
7. Create Another Employee
8. Get All Departments
9. Update Department
10. Delete Department

---

## 🎯 QUICK START IN POSTMAN

### Copy This for Request #1:
```json
{
  "name": "Engineering"
}
```

### Copy This for Request #2:
```json
{
  "first_name": "Sanugi",
  "last_name": "Weerasinghe",
  "email": "sanugi@gmail.com",
  "phone": "0740733547",
  "department_id": 1
}
```

### Copy This for Request #5:
```json
{
  "first_name": "Sanugi",
  "last_name": "Weerasinghe",
  "email": "sanugi.updated@gmail.com",
  "phone": "0740733547",
  "department_id": 1
}
```

---

## 💾 SAVE IN POSTMAN

After creating requests:
1. Click **Save** (top right)
2. Name it (e.g., "Create Department")
3. Select **Collection** (or create new)
4. **Save** again

Now you have all requests saved for reuse!

---

## 📥 IMPORT EVERYTHING AT ONCE

**Easiest way:**
1. Go to project root folder
2. Find `Postman_Collection.json`
3. In Postman: Click **Import** (top left)
4. Select the JSON file
5. **All 10 requests automatically added!** ✅

---

## 🎉 YOU'RE READY!

All codes are ready to copy-paste.  
Just follow the steps above and you'll have a complete API test!

**Happy Testing!** 🚀
