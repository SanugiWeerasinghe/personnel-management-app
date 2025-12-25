# 🎯 COMPLETE POSTMAN TESTING - ALL IN ONE

## Everything You Need to Test in Postman

---

## 📮 REQUEST #1: CREATE DEPARTMENT

```
METHOD:  POST
URL:     http://localhost:3500/api/departments
HEADER:  Content-Type: application/json

BODY:
{
  "name": "Engineering"
}

EXPECTED:
{
  "id": 1,
  "name": "Engineering"
}
```

---

## 📮 REQUEST #2: CREATE EMPLOYEE

```
METHOD:  POST
URL:     http://localhost:3500/api/employees
HEADER:  Content-Type: application/json

BODY:
{
  "first_name": "Sanugi",
  "last_name": "Weerasinghe",
  "email": "sanugi@gmail.com",
  "phone": "0740733547",
  "department_id": 1
}

EXPECTED:
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

## 📮 REQUEST #3: GET ALL EMPLOYEES

```
METHOD:  GET
URL:     http://localhost:3500/api/employees
HEADER:  Content-Type: application/json
BODY:    (Empty - no body needed)

EXPECTED:
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

## 📮 REQUEST #4: GET EMPLOYEE BY ID

```
METHOD:  GET
URL:     http://localhost:3500/api/employees/1
HEADER:  Content-Type: application/json
BODY:    (Empty - no body needed)

EXPECTED:
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

## 📮 REQUEST #5: UPDATE EMPLOYEE

```
METHOD:  PUT
URL:     http://localhost:3500/api/employees/1
HEADER:  Content-Type: application/json

BODY:
{
  "first_name": "Sanugi",
  "last_name": "Weerasinghe",
  "email": "sanugi.updated@gmail.com",
  "phone": "0740733547",
  "department_id": 1
}

EXPECTED:
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

## 📮 REQUEST #6: DELETE EMPLOYEE

```
METHOD:  DELETE
URL:     http://localhost:3500/api/employees/1
HEADER:  Content-Type: application/json
BODY:    (Empty - no body needed)

EXPECTED:
Status: 204 No Content
(Empty response body)
```

---

## 📮 REQUEST #7: CREATE EMPLOYEE #2

```
METHOD:  POST
URL:     http://localhost:3500/api/employees
HEADER:  Content-Type: application/json

BODY:
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "phone": "555-1234",
  "department_id": 1
}

EXPECTED:
{
  "id": 2,
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "phone": "555-1234",
  "department_id": 1
}
```

---

## 📮 REQUEST #8: GET ALL DEPARTMENTS

```
METHOD:  GET
URL:     http://localhost:3500/api/departments
HEADER:  Content-Type: application/json
BODY:    (Empty - no body needed)

EXPECTED:
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

## 📮 REQUEST #9: UPDATE DEPARTMENT

```
METHOD:  PUT
URL:     http://localhost:3500/api/departments/1
HEADER:  Content-Type: application/json

BODY:
{
  "name": "Software Engineering"
}

EXPECTED:
{
  "id": 1,
  "name": "Software Engineering"
}
```

---

## 📮 REQUEST #10: DELETE DEPARTMENT

```
METHOD:  DELETE
URL:     http://localhost:3500/api/departments/1
HEADER:  Content-Type: application/json
BODY:    (Empty - no body needed)

EXPECTED:
Status: 204 No Content
(Empty response body)
```

---

## 🎯 QUICK BODY REFERENCE

### All POST Bodies at Once:

**Body 1:**
```json
{"name": "Engineering"}
```

**Body 2:**
```json
{"first_name":"Sanugi","last_name":"Weerasinghe","email":"sanugi@gmail.com","phone":"0740733547","department_id":1}
```

**Body 3 (PUT):**
```json
{"first_name":"Sanugi","last_name":"Weerasinghe","email":"sanugi.updated@gmail.com","phone":"0740733547","department_id":1}
```

**Body 4:**
```json
{"first_name":"John","last_name":"Doe","email":"john.doe@example.com","phone":"555-1234","department_id":1}
```

**Body 5 (PUT):**
```json
{"name": "Software Engineering"}
```

---

## 📋 ALL URLs AT A GLANCE

```
POST   http://localhost:3500/api/departments
POST   http://localhost:3500/api/employees
GET    http://localhost:3500/api/employees
GET    http://localhost:3500/api/employees/1
PUT    http://localhost:3500/api/employees/1
DELETE http://localhost:3500/api/employees/1
POST   http://localhost:3500/api/employees (again)
GET    http://localhost:3500/api/departments
PUT    http://localhost:3500/api/departments/1
DELETE http://localhost:3500/api/departments/1
```

---

## ✅ TESTING SEQUENCE

```
1. CREATE DEPARTMENT
   ↓ (id=1)
2. CREATE EMPLOYEE
   ↓ (id=1)
3. GET ALL EMPLOYEES
   ↓ (see 1 employee)
4. GET EMPLOYEE BY ID
   ↓ (see details)
5. UPDATE EMPLOYEE
   ↓ (change email)
6. DELETE EMPLOYEE
   ↓ (removes id=1)
7. CREATE EMPLOYEE #2
   ↓ (new id=2)
8. GET ALL DEPARTMENTS
   ↓ (see 1 department)
9. UPDATE DEPARTMENT
   ↓ (change name)
10. DELETE DEPARTMENT
    ↓ (removes id=1)
```

---

## 🔑 KEY POINTS

✅ Always create Department FIRST  
✅ Email must be UNIQUE  
✅ department_id must match existing department  
✅ Headers: `Content-Type: application/json` on ALL requests  
✅ No body for GET and DELETE  
✅ Body required for POST and PUT  

---

## 📝 IN POSTMAN STEPS

1. Create new request (+ button)
2. Set METHOD (dropdown top left)
3. Paste URL
4. Click Headers tab
5. Add: `Content-Type: application/json`
6. Click Body tab
7. Select **raw**
8. Select **JSON**
9. Paste the body
10. Click SEND (blue button)
11. Check response (bottom)

---

## ✨ FILES THAT HAVE THIS INFO

- `POST_REQUEST_BODIES.md` - Detailed POST bodies
- `POST_BODIES_QUICK.md` - Quick reference
- `POSTMAN_READY.md` - All 10 requests
- `POSTMAN_CODES.md` - Detailed guide
- `Postman_Collection.json` - Import directly

---

**You have everything you need to test!** 🚀
