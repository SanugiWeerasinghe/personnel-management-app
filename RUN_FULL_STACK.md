# How to Run Backend and Frontend Together

## 📋 Quick Summary

You need **2 terminals** - one for backend, one for frontend.

---

## 🚀 **Step 1: Start Backend (Terminal 1)**

```bash
cd /Users/sanugiweerasinghe/personnel-management-app/backend
PORT=3500 npx ts-node src/app.ts
```

You should see:
```
Server is running on http://localhost:3500
Database connected successfully
```

---

## 🎨 **Step 2: Start Frontend (Terminal 2)**

```bash
cd /Users/sanugiweerasinghe/personnel-management-app/frontend
npm start
```

The frontend will automatically open in your browser at `http://localhost:3000`

---

## ✅ **Verify Both Are Running**

### Backend Check:
Open a new terminal and run:
```bash
curl http://localhost:3500/api/employees
```

You should see: `[]` (empty array)

### Frontend Check:
Open browser to: `http://localhost:3000`

You should see the Personnel Management Application

---

## 📝 **Complete Step-by-Step Instructions**

### **TERMINAL 1 - Backend Server:**

```bash
# Navigate to backend
cd /Users/sanugiweerasinghe/personnel-management-app/backend

# Start the backend (uses port 3500)
PORT=3500 npx ts-node src/app.ts
```

**Expected Output:**
```
Server is running on http://localhost:3500
Database connected successfully
```

**Keep this terminal running!** (Don't close it)

---

### **TERMINAL 2 - Frontend Application:**

**Open a NEW terminal window**, then run:

```bash
# Navigate to frontend
cd /Users/sanugiweerasinghe/personnel-management-app/frontend

# Start the frontend (uses port 3000)
npm start
```

**Expected Output:**
```
Compiled successfully!

You can now view personnel-management-app in the browser.
  Local:            http://localhost:3000
```

The browser should automatically open. If not, visit `http://localhost:3000`

---

## 🌐 **Access the Application**

- **Frontend URL**: http://localhost:3000
- **Backend URL**: http://localhost:3500
- **Database**: Connected to `personnel_management` on localhost

---

## 🧪 **Test the Application**

### In Browser (http://localhost:3000):
1. Click on "Employees" page
2. You should see an empty employee list
3. Try creating a new employee using the form
4. Try adding a department

### Via Terminal (Test API):
```bash
# Get all employees
curl http://localhost:3500/api/employees

# Get all departments
curl http://localhost:3500/api/departments

# Create a department (in another terminal)
curl -X POST http://localhost:3500/api/departments \
  -H "Content-Type: application/json" \
  -d '{"name":"Engineering"}'
```

---

## ⚠️ **If Something Goes Wrong**

### Port 3500 Already in Use:
```bash
# Kill the process and try again
lsof -i :3500 | grep -v COMMAND | awk '{print $2}' | xargs kill -9
sleep 2
PORT=3500 npx ts-node src/app.ts
```

### Port 3000 Already in Use:
```bash
# Frontend will ask to use a different port, just press Y
# Or manually use a different port:
PORT=3001 npm start
```

### Database Connection Error:
Make sure MySQL is running:
```bash
# Check MySQL status
ps aux | grep mysqld | grep -v grep

# If not running, start it
/usr/local/mysql/support-files/mysql.server start
```

---

## 🎯 **Quick Copy-Paste Commands**

**Terminal 1:**
```bash
cd /Users/sanugiweerasinghe/personnel-management-app/backend && PORT=3500 npx ts-node src/app.ts
```

**Terminal 2:**
```bash
cd /Users/sanugiweerasinghe/personnel-management-app/frontend && npm start
```

Then open browser to: **http://localhost:3000**

---

## 📊 **Architecture Diagram**

```
┌─────────────────────────────────────────────────────┐
│                   User Browser                       │
│              http://localhost:3000                   │
│            (React Frontend App)                      │
└──────────────────┬──────────────────────────────────┘
                   │
                   │ HTTP Requests
                   │
┌──────────────────▼──────────────────────────────────┐
│                  Backend Server                      │
│              http://localhost:3500                   │
│        (Express.js REST API)                         │
└──────────────────┬──────────────────────────────────┘
                   │
                   │ Database Queries
                   │
┌──────────────────▼──────────────────────────────────┐
│                MySQL Database                        │
│           personnel_management                       │
│         (employees, departments tables)              │
└──────────────────────────────────────────────────────┘
```

---

## 🎉 **You're All Set!**

Just follow the 2 steps above and your full-stack app will be running! 🚀
