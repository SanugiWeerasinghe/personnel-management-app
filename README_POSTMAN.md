# 📮 POSTMAN TESTING - COMPLETE GUIDE

## 🎯 Quick Summary

You have **two options** to test the API:

### Option A: Use Postman GUI (Easy)
→ Read `POSTMAN_SETUP.md`

### Option B: Use cURL Commands (Fast)
→ Read `POSTMAN_CODES.md`

---

## 🔗 API BASE URL
```
http://localhost:3500/api
```

---

## 10️⃣ ALL ENDPOINTS AT A GLANCE

### EMPLOYEES (5 endpoints)
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/employees` | Create employee |
| GET | `/employees` | Get all employees |
| GET | `/employees/:id` | Get one employee |
| PUT | `/employees/:id` | Update employee |
| DELETE | `/employees/:id` | Delete employee |

### DEPARTMENTS (5 endpoints)
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/departments` | Create department |
| GET | `/departments` | Get all departments |
| GET | `/departments/:id` | Get one department |
| PUT | `/departments/:id` | Update department |
| DELETE | `/departments/:id` | Delete department |

---

## 📋 EXACT CODES FOR POSTMAN

### 1. CREATE DEPARTMENT

**Method:** `POST`  
**URL:** `http://localhost:3500/api/departments`  
**Headers:**
```
Content-Type: application/json
```
**Body:**
```json
{
  "name": "Engineering"
}
```

---

### 2. CREATE EMPLOYEE

**Method:** `POST`  
**URL:** `http://localhost:3500/api/employees`  
**Headers:**
```
Content-Type: application/json
```
**Body:**
```json
{
  "first_name": "Sanugi",
  "last_name": "Weerasinghe",
  "email": "sanugi@gmail.com",
  "phone": "0740733547",
  "department_id": 1
}
```

---

### 3. GET ALL EMPLOYEES

**Method:** `GET`  
**URL:** `http://localhost:3500/api/employees`  
**Headers:**
```
Content-Type: application/json
```
**Body:** None

---

### 4. GET EMPLOYEE BY ID

**Method:** `GET`  
**URL:** `http://localhost:3500/api/employees/1`  
**Headers:**
```
Content-Type: application/json
```
**Body:** None

---

### 5. UPDATE EMPLOYEE

**Method:** `PUT`  
**URL:** `http://localhost:3500/api/employees/1`  
**Headers:**
```
Content-Type: application/json
```
**Body:**
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

### 6. DELETE EMPLOYEE

**Method:** `DELETE`  
**URL:** `http://localhost:3500/api/employees/1`  
**Headers:**
```
Content-Type: application/json
```
**Body:** None

---

### 7. CREATE DEPARTMENT (Again - for reference)

**Method:** `POST`  
**URL:** `http://localhost:3500/api/departments`  
**Headers:**
```
Content-Type: application/json
```
**Body:**
```json
{
  "name": "HR"
}
```

---

### 8. GET ALL DEPARTMENTS

**Method:** `GET`  
**URL:** `http://localhost:3500/api/departments`  
**Headers:**
```
Content-Type: application/json
```
**Body:** None

---

### 9. UPDATE DEPARTMENT

**Method:** `PUT`  
**URL:** `http://localhost:3500/api/departments/1`  
**Headers:**
```
Content-Type: application/json
```
**Body:**
```json
{
  "name": "Human Resources"
}
```

---

### 10. DELETE DEPARTMENT

**Method:** `DELETE`  
**URL:** `http://localhost:3500/api/departments/1`  
**Headers:**
```
Content-Type: application/json
```
**Body:** None

---

## 📚 DOCUMENTATION FILES

| File | What It's For |
|------|---------------|
| `POSTMAN_SETUP.md` | Step-by-step GUI setup in Postman |
| `POSTMAN_CODES.md` | All codes with expected responses |
| `POSTMAN_TESTING_GUIDE.md` | Detailed guide with cURL commands |
| `Postman_Collection.json` | Import directly into Postman |
| `COMMAND_REFERENCE.md` | Quick command lookup |

---

## 🚀 QUICKEST START

1. **Open Postman**
2. **Create New Request** (Cmd+N or Ctrl+N)
3. **Copy a code from above** into Postman
4. **Click SEND**
5. **See the response!**

---

## ✅ TESTING CHECKLIST

Run in this order:

- [ ] Create Department
- [ ] Create Employee
- [ ] Get All Employees
- [ ] Get One Employee (by ID)
- [ ] Update Employee
- [ ] Delete Employee
- [ ] Get All Employees (verify deletion)

---

## 🎯 EXPECTED RESULTS

| Request | Expected Status | Expected Data |
|---------|-----------------|---------------|
| Create Department | 201 Created | Department object with ID |
| Create Employee | 201 Created | Employee object with ID |
| Get All Employees | 200 OK | Array of employees |
| Get One Employee | 200 OK | Single employee object |
| Update Employee | 200 OK | Updated employee object |
| Delete Employee | 204 No Content | Empty response |

---

## 💡 TIPS FOR SUCCESS

1. **Always create department first** (required by foreign key)
2. **Use the ID from POST response** for PUT/GET/DELETE
3. **Copy-paste the exact JSON** to avoid typos
4. **Check Content-Type header** is set to application/json
5. **Make sure backend is running** before testing

---

## 🔍 IMPORT COLLECTION IN POSTMAN

**Easiest Method:**
1. Click **Import** in Postman (top left)
2. Select **Postman_Collection.json**
3. All 10 endpoints automatically added! ✅

---

## 📞 NEED HELP?

Check these files in order:
1. `POSTMAN_SETUP.md` - Visual step-by-step guide
2. `POSTMAN_CODES.md` - All codes and responses
3. `POSTMAN_TESTING_GUIDE.md` - Detailed explanations

---

## 🎉 YOU'RE READY!

All codes above are ready to copy-paste into Postman.

**Happy Testing!** 🚀
