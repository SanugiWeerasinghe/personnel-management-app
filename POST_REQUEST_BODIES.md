# 📮 POST REQUEST BODIES - COPY & PASTE

## 🎯 All POST Request Bodies Ready to Copy

---

## POST REQUEST #1: Create Department

**URL:** `http://localhost:3500/api/departments`  
**Method:** `POST`  
**Headers:**
```
Content-Type: application/json
```

### BODY - Copy This Exactly:
```json
{
  "name": "Engineering"
}
```

**In Postman:**
1. Click **Body** tab
2. Select **raw**
3. Select **JSON** from dropdown
4. Paste the body above
5. Click **SEND**

**Expected Response:**
```json
{
  "id": 1,
  "name": "Engineering"
}
```

---

## POST REQUEST #2: Create Employee (Using Department ID 1)

**URL:** `http://localhost:3500/api/employees`  
**Method:** `POST`  
**Headers:**
```
Content-Type: application/json
```

### BODY - Copy This Exactly:
```json
{
  "first_name": "Sanugi",
  "last_name": "Weerasinghe",
  "email": "sanugi@gmail.com",
  "phone": "0740733547",
  "department_id": 1
}
```

**In Postman:**
1. Click **Body** tab
2. Select **raw**
3. Select **JSON** from dropdown
4. Paste the body above
5. Click **SEND**

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

## POST REQUEST #3: Create Another Employee

**URL:** `http://localhost:3500/api/employees`  
**Method:** `POST`  
**Headers:**
```
Content-Type: application/json
```

### BODY - Copy This Exactly:
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "phone": "555-1234",
  "department_id": 1
}
```

**Expected Response:**
```json
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

## POST REQUEST #4: Create Third Employee

**URL:** `http://localhost:3500/api/employees`  
**Method:** `POST`  
**Headers:**
```
Content-Type: application/json
```

### BODY - Copy This Exactly:
```json
{
  "first_name": "Jane",
  "last_name": "Smith",
  "email": "jane.smith@example.com",
  "phone": "555-5678",
  "department_id": 1
}
```

**Expected Response:**
```json
{
  "id": 3,
  "first_name": "Jane",
  "last_name": "Smith",
  "email": "jane.smith@example.com",
  "phone": "555-5678",
  "department_id": 1
}
```

---

## POST REQUEST #5: Create Another Department

**URL:** `http://localhost:3500/api/departments`  
**Method:** `POST`  
**Headers:**
```
Content-Type: application/json
```

### BODY - Copy This Exactly:
```json
{
  "name": "Human Resources"
}
```

**Expected Response:**
```json
{
  "id": 2,
  "name": "Human Resources"
}
```

---

## 🎯 QUICK COPY-PASTE BODIES

### Body 1: Create Engineering Department
```json
{
  "name": "Engineering"
}
```

### Body 2: Create Sanugi Employee
```json
{
  "first_name": "Sanugi",
  "last_name": "Weerasinghe",
  "email": "sanugi@gmail.com",
  "phone": "0740733547",
  "department_id": 1
}
```

### Body 3: Create John Employee
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "phone": "555-1234",
  "department_id": 1
}
```

### Body 4: Create Jane Employee
```json
{
  "first_name": "Jane",
  "last_name": "Smith",
  "email": "jane.smith@example.com",
  "phone": "555-5678",
  "department_id": 1
}
```

### Body 5: Create HR Department
```json
{
  "name": "Human Resources"
}
```

---

## 📝 FIELD EXPLANATIONS

### For Employees (5 required fields):
- **first_name** (string): Employee's first name
- **last_name** (string): Employee's last name
- **email** (string): Employee's email (MUST BE UNIQUE)
- **phone** (string): Employee's phone number
- **department_id** (number): ID of the department

### For Departments (1 required field):
- **name** (string): Department name (e.g., "Engineering", "HR", "Sales")

---

## ⚠️ IMPORTANT RULES

1. **Email must be unique** - Can't create two employees with same email
2. **Department must exist first** - Create department before assigning employees
3. **All fields required** - Don't skip any fields in the bodies
4. **Phone is optional** - Can leave empty or omit (but recommended to include)
5. **JSON format** - Must be valid JSON (no trailing commas, proper quotes)

---

## 🔄 MODIFY THE BODIES

Want to create with different data? Just change:

```json
{
  "first_name": "YOUR_NAME",
  "last_name": "YOUR_LAST_NAME",
  "email": "your.email@example.com",
  "phone": "YOUR_PHONE",
  "department_id": 1
}
```

For example:
```json
{
  "first_name": "Mike",
  "last_name": "Johnson",
  "email": "mike.johnson@example.com",
  "phone": "555-9999",
  "department_id": 1
}
```

---

## ✅ STEP-BY-STEP IN POSTMAN

### Step 1: Create Department
1. New request → POST → `http://localhost:3500/api/departments`
2. Body tab → raw → JSON
3. Paste: `{"name": "Engineering"}`
4. SEND
5. ✅ You get: `{"id": 1, "name": "Engineering"}`

### Step 2: Create Employee
1. New request → POST → `http://localhost:3500/api/employees`
2. Body tab → raw → JSON
3. Paste employee body (from above)
4. SEND
5. ✅ You get: Employee object with ID

### Step 3: Create More Data
1. Repeat steps above with different bodies
2. Change email each time (must be unique!)
3. Use department_id: 1 (or create new department)

---

## 🎨 COMPLETE EXAMPLE REQUEST

**In Postman, do exactly this:**

```
Method:  POST
URL:     http://localhost:3500/api/employees
Header:  Content-Type: application/json

Body:
{
  "first_name": "Sanugi",
  "last_name": "Weerasinghe",
  "email": "sanugi@gmail.com",
  "phone": "0740733547",
  "department_id": 1
}

Click SEND

Response (should be):
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

## 💾 HOW TO PASTE IN POSTMAN

1. **Highlight the body** (the JSON in curly brackets)
2. **Copy it** (Cmd+C or Ctrl+C)
3. **Click Body tab** in Postman
4. **Select raw**
5. **Select JSON** from dropdown
6. **Click in the text area**
7. **Paste** (Cmd+V or Ctrl+V)
8. **Click SEND** (top right blue button)

---

## ✨ YOU'RE READY!

All bodies are ready to copy-paste.  
Just follow the steps and test!

**Happy Testing!** 🚀
