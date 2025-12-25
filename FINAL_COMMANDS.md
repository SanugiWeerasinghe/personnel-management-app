# ✅ COMPLETE WORKING COMMANDS - Personnel Management App

## 🚀 **YOUR APPLICATION IS READY TO RUN!**

### **BACKEND STATUS: ✅ RUNNING on Port 3500**
```
Server is running on http://localhost:3500
Database connected successfully
```

---

## **COMPLETE COMMANDS TO RUN**

### **TERMINAL 1 - Start Backend:**

```bash
cd /Users/sanugiweerasinghe/personnel-management-app/backend && PORT=3500 ./node_modules/.bin/ts-node src/app.ts
```

**Expected Output:**
```
Server is running on http://localhost:3500
Database connected successfully
```

✅ **Keep this terminal open!**

---

### **TERMINAL 2 - Start Frontend:**

```bash
cd /Users/sanugiweerasinghe/personnel-management-app/frontend && npm start
```

**Expected Output:**
```
Compiled successfully!

You can now view personnel-management-app in the browser.
  Local: http://localhost:3000
```

✅ **Your browser will open automatically!**

---

## 🌐 **ACCESS YOUR APPLICATION**

Once both are running:

| Component | URL | Status |
|-----------|-----|--------|
| **Frontend** | http://localhost:3000 | ✅ Ready |
| **Backend API** | http://localhost:3500/api | ✅ Ready |
| **Database** | MySQL personnel_management | ✅ Connected |

---

## 🧪 **QUICK TEST COMMANDS**

In a **NEW terminal**, verify both are working:

```bash
# Test Backend API
curl http://localhost:3500/api/employees

# Create a Department
curl -X POST http://localhost:3500/api/departments \
  -H "Content-Type: application/json" \
  -d '{"name":"IT Department"}'

# Get all Departments
curl http://localhost:3500/api/departments
```

---

## 📋 **EXACT COPY-PASTE COMMANDS**

**For Terminal 1 (Backend):**
```
cd /Users/sanugiweerasinghe/personnel-management-app/backend && PORT=3500 ./node_modules/.bin/ts-node src/app.ts
```

**For Terminal 2 (Frontend):**
```
cd /Users/sanugiweerasinghe/personnel-management-app/frontend && npm start
```

---

## 🛑 **TO STOP**

- **Terminal 1:** Press `Ctrl+C`
- **Terminal 2:** Press `Ctrl+C`

---

## ❌ **TROUBLESHOOTING**

### Port 3500 in use:
```bash
lsof -i :3500 | grep -v COMMAND | awk '{print $2}' | xargs kill -9
sleep 1
# Retry the backend command
```

### Port 3000 in use:
```bash
lsof -i :3000 | grep -v COMMAND | awk '{print $2}' | xargs kill -9
sleep 1
# Retry the frontend command
```

### npm install missing:
```bash
cd /Users/sanugiweerasinghe/personnel-management-app/backend && npm install
cd /Users/sanugiweerasinghe/personnel-management-app/frontend && npm install
```

### MySQL not connected:
```bash
ps aux | grep mysqld | grep -v grep
# If not running:
/usr/local/mysql/support-files/mysql.server start
```

---

## ✨ **WHAT YOU CAN DO IN THE APP**

✅ Create Employees  
✅ Create Departments  
✅ View All Employees  
✅ View All Departments  
✅ Update Employee Info  
✅ Update Department Info  
✅ Delete Employees  
✅ Delete Departments  
✅ Assign Employees to Departments  

---

## 📊 **PROJECT STRUCTURE**

```
personnel-management-app/
├── backend/              ← Express.js API (Port 3500)
│   ├── src/
│   ├── .env             ← Database config
│   └── node_modules/
├── frontend/            ← React.js UI (Port 3000)
│   ├── src/
│   ├── public/
│   └── node_modules/
└── database/
    └── schema.sql       ← MySQL schema
```

---

## 🎯 **SUMMARY**

| Step | Command | Status |
|------|---------|--------|
| 1 | Start Backend | `cd backend && PORT=3500 ./node_modules/.bin/ts-node src/app.ts` | ✅ |
| 2 | Start Frontend | `cd frontend && npm start` | ✅ |
| 3 | Open Browser | http://localhost:3000 | ✅ |
| 4 | Use App | Create/View/Update/Delete | ✅ |

---

## 🎉 **YOU'RE ALL SET!**

**Just run the two commands above in two different terminals and your full-stack application will be running!**

For questions or issues, check the troubleshooting section above.

**Happy coding!** 🚀
