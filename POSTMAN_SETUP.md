# 🚀 POSTMAN SETUP - STEP BY STEP

## 📱 Open Postman and Follow These Steps

---

## ✅ STEP 1: Create Department

### In Postman:
1. **New Tab** → Click the **+** button
2. **Method** → Change to **POST**
3. **URL** → Paste:
   ```
   http://localhost:3500/api/departments
   ```
4. **Headers Tab** → Add:
   - Key: `Content-Type`
   - Value: `application/json`

5. **Body Tab** → Select **raw** → Select **JSON**:
   ```json
   {
     "name": "Engineering"
   }
   ```

6. **Click SEND** → Should see:
   ```json
   {
     "id": 1,
     "name": "Engineering"
   }
   ```

✅ **Department created!**

---

## ✅ STEP 2: Create Employee

### In Postman:
1. **New Tab** → Click the **+** button
2. **Method** → Change to **POST**
3. **URL** → Paste:
   ```
   http://localhost:3500/api/employees
   ```
4. **Headers Tab** → Add:
   - Key: `Content-Type`
   - Value: `application/json`

5. **Body Tab** → Select **raw** → Select **JSON**:
   ```json
   {
     "first_name": "Sanugi",
     "last_name": "Weerasinghe",
     "email": "sanugi@gmail.com",
     "phone": "0740733547",
     "department_id": 1
   }
   ```

6. **Click SEND** → Should see:
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

✅ **Employee created!**

---

## ✅ STEP 3: Get All Employees

### In Postman:
1. **New Tab** → Click the **+** button
2. **Method** → **GET** (default)
3. **URL** → Paste:
   ```
   http://localhost:3500/api/employees
   ```
4. **Headers Tab** → Add:
   - Key: `Content-Type`
   - Value: `application/json`

5. **Click SEND** → Should see array with your employee:
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

✅ **Retrieved all employees!**

---

## ✅ STEP 4: Get One Employee

### In Postman:
1. **New Tab** → Click the **+** button
2. **Method** → **GET**
3. **URL** → Paste:
   ```
   http://localhost:3500/api/employees/1
   ```
4. **Headers Tab** → Add:
   - Key: `Content-Type`
   - Value: `application/json`

5. **Click SEND** → Should see specific employee

✅ **Retrieved one employee!**

---

## ✅ STEP 5: Update Employee

### In Postman:
1. **New Tab** → Click the **+** button
2. **Method** → Change to **PUT**
3. **URL** → Paste:
   ```
   http://localhost:3500/api/employees/1
   ```
4. **Headers Tab** → Add:
   - Key: `Content-Type`
   - Value: `application/json`

5. **Body Tab** → Select **raw** → Select **JSON**:
   ```json
   {
     "first_name": "Sanugi",
     "last_name": "Weerasinghe",
     "email": "sanugi.updated@gmail.com",
     "phone": "0740733547",
     "department_id": 1
   }
   ```

6. **Click SEND** → Should see updated employee with new email

✅ **Employee updated!**

---

## ✅ STEP 6: Delete Employee

### In Postman:
1. **New Tab** → Click the **+** button
2. **Method** → Change to **DELETE**
3. **URL** → Paste:
   ```
   http://localhost:3500/api/employees/1
   ```
4. **Headers Tab** → Add:
   - Key: `Content-Type`
   - Value: `application/json`

5. **No Body Needed for DELETE**

6. **Click SEND** → Should see:
   ```
   Status: 204 No Content
   (Empty response body)
   ```

✅ **Employee deleted!**

---

## ✅ STEP 7: Verify Deletion

### In Postman:
1. **Go back to GET all employees tab** (or create new one)
2. **Method** → **GET**
3. **URL** → `http://localhost:3500/api/employees`
4. **Click SEND** → Should see empty array:
   ```json
   []
   ```

✅ **Verified deletion!**

---

## 🏢 DEPARTMENTS - Same Pattern

### Create Department
```
POST http://localhost:3500/api/departments
Body: {"name":"Engineering"}
```

### Get All Departments
```
GET http://localhost:3500/api/departments
```

### Get One Department
```
GET http://localhost:3500/api/departments/1
```

### Update Department
```
PUT http://localhost:3500/api/departments/1
Body: {"name":"Software Engineering"}
```

### Delete Department
```
DELETE http://localhost:3500/api/departments/1
```

---

## 🎯 KEYBOARD SHORTCUTS IN POSTMAN

| Action | Shortcut |
|--------|----------|
| Send Request | Cmd+Enter (Mac) / Ctrl+Enter (Windows) |
| New Tab | Cmd+T (Mac) / Ctrl+T (Windows) |
| New Request | Cmd+N (Mac) / Ctrl+N (Windows) |
| Save Request | Cmd+S (Mac) / Ctrl+S (Windows) |

---

## 💾 SAVE REQUESTS IN POSTMAN

1. After creating a request, click **Save**
2. Give it a name like "Create Employee"
3. Select or create a **Collection**
4. All requests are now saved for reuse!

---

## 📥 IMPORT COLLECTION

**Fastest Way:**
1. Go to Project Root folder
2. Find `Postman_Collection.json`
3. In Postman, click **Import**
4. Select the JSON file
5. **All 10 endpoints automatically added!**

---

## 🔍 VIEW RESPONSE DETAILS

After clicking SEND, you see:

**Status Code** (top right):
- 200 = OK ✅
- 201 = Created ✅
- 204 = No Content ✅
- 400 = Bad Request ❌
- 404 = Not Found ❌
- 500 = Server Error ❌

**Response Body** (bottom):
- Shows JSON returned by API
- Click **Pretty** to format nicely
- Click **Raw** to see unformatted

---

## 🧪 TEST MULTIPLE EMPLOYEES

### Create Second Employee:
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "phone": "555-1234",
  "department_id": 1
}
```

### Create Third Employee:
```json
{
  "first_name": "Jane",
  "last_name": "Smith",
  "email": "jane@example.com",
  "phone": "555-5678",
  "department_id": 1
}
```

### Get All → Should see all 3!

---

## ⚠️ COMMON ERRORS & SOLUTIONS

| Error | Solution |
|-------|----------|
| Connection refused | Ensure backend is running: `npx ts-node src/app.ts` |
| 404 Not Found | Check URL spelling, endpoint might not exist |
| 400 Bad Request | Check JSON format, might have typo in field names |
| Email already exists | Use different email (must be unique) |
| Foreign key error | Create department first before employee |

---

## 🎉 YOU'RE ALL SET!

Now you have:
- ✅ 10 working API endpoints
- ✅ Complete Postman setup
- ✅ Test data created
- ✅ Full CRUD operations tested

**Enjoy testing!** 🚀
