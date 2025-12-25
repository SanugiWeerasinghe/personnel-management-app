# 🚀 QUICK START - Full Stack Application

## **5-Minute Setup**

### **Step 1: Open Terminal 1**
```bash
cd /Users/sanugiweerasinghe/personnel-management-app/backend
PORT=3500 npx ts-node src/app.ts
```

**Wait for:**
```
Server is running on http://localhost:3500
Database connected successfully
```

✅ Leave this running!

---

### **Step 2: Open Terminal 2 (NEW TERMINAL)**
```bash
cd /Users/sanugiweerasinghe/personnel-management-app/frontend
npm start
```

**Wait for browser to open automatically to:**
```
http://localhost:3000
```

---

## ✅ **Done! Your App is Running**

| Component | URL | Status |
|-----------|-----|--------|
| Frontend | http://localhost:3000 | ✅ React App |
| Backend | http://localhost:3500 | ✅ Express API |
| Database | MySQL | ✅ Connected |

---

## 🧪 **Test It Works**

### Option 1: In the Browser
1. Go to http://localhost:3000
2. Click on "Employees" page
3. Click "Add Employee" button
4. Fill in the form and submit
5. Employee should appear in the list!

### Option 2: Via Terminal
```bash
# In a NEW terminal, create a department:
curl -X POST http://localhost:3500/api/departments \
  -H "Content-Type: application/json" \
  -d '{"name":"Engineering"}'

# Get all departments:
curl http://localhost:3500/api/departments
```

---

## 🛑 **To Stop the App**

**Terminal 1 (Backend):** Press `Ctrl+C`
**Terminal 2 (Frontend):** Press `Ctrl+C`

---

## ❌ **Troubleshooting**

### Backend won't start (port 3500 in use)
```bash
lsof -i :3500 | grep -v COMMAND | awk '{print $2}' | xargs kill -9
sleep 1
# Try again
```

### Frontend won't start (port 3000 in use)
```bash
# Try port 3001 instead
PORT=3001 npm start
```

### Can't connect to database
```bash
# Check MySQL is running:
ps aux | grep mysqld | grep -v grep

# If not running:
/usr/local/mysql/support-files/mysql.server start
```

### Blank frontend page
- Hard refresh: `Cmd+Shift+R` in browser
- Check browser console for errors: `Cmd+Option+I`
- Make sure backend is running on port 3500

---

## 📁 **Project Structure**

```
personnel-management-app/
├── backend/           # Express.js REST API (port 3500)
│   ├── src/
│   │   ├── app.ts     # Main server file
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   └── config/
│   └── .env           # Database credentials
├── frontend/          # React.js UI (port 3000)
│   ├── src/
│   │   ├── App.tsx
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/  # API client (connects to backend)
│   │   └── types/
└── database/
    └── schema.sql     # MySQL database schema
```

---

## 🎯 **What You Can Do**

✅ Create employees  
✅ Create departments  
✅ View all employees & departments  
✅ Update employee/department info  
✅ Delete employees & departments  
✅ Assign employees to departments  

---

## 📝 **API Endpoints**

```
GET    /api/employees          Get all employees
GET    /api/employees/:id      Get employee by ID
POST   /api/employees          Create new employee
PUT    /api/employees/:id      Update employee
DELETE /api/employees/:id      Delete employee

GET    /api/departments        Get all departments
GET    /api/departments/:id    Get department by ID
POST   /api/departments        Create new department
PUT    /api/departments/:id    Update department
DELETE /api/departments/:id    Delete department
```

---

## 🎉 **That's It!**

Your full-stack personnel management application is ready to use! 

If you run into any issues, check the troubleshooting section above.

**Happy coding!** 🚀
