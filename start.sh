#!/bin/bash

# Personnel Management App - Startup Script
# This script starts both backend and frontend servers

echo "🚀 Starting Personnel Management App..."
echo ""

# Kill any existing processes
echo "🧹 Cleaning up old processes..."
pkill -f "ts-node\|npm start" 2>/dev/null
sleep 2

# Start Backend
echo "🔷 Starting Backend (Port 3500)..."
cd /Users/sanugiweerasinghe/personnel-management-app/backend
PORT=3500 nohup npx ts-node src/app.ts > /tmp/backend.log 2>&1 &
BACKEND_PID=$!
echo "✅ Backend started (PID: $BACKEND_PID)"

# Wait for backend to start
sleep 4

# Start Frontend
echo "🟦 Starting Frontend (Port 3000)..."
cd /Users/sanugiweerasinghe/personnel-management-app/frontend
PORT=3000 nohup npm start > /tmp/frontend.log 2>&1 &
FRONTEND_PID=$!
echo "✅ Frontend started (PID: $FRONTEND_PID)"

# Wait for frontend to start
sleep 6

# Check status
echo ""
echo "=== CHECKING STATUS ==="
echo ""

echo "Backend check:"
if curl -s http://localhost:3500/health > /dev/null 2>&1; then
    echo "✅ Backend is running on http://localhost:3500"
else
    echo "❌ Backend check failed. Logs:"
    tail -5 /tmp/backend.log
fi

echo ""
echo "Frontend check:"
if lsof -i :3000 2>/dev/null | grep -q node; then
    echo "✅ Frontend is running on http://localhost:3000"
else
    echo "❌ Frontend check failed. Logs:"
    tail -5 /tmp/frontend.log
fi

echo ""
echo "=== READY TO USE ===" 
echo ""
echo "📱 Open: http://localhost:3000"
echo "🔌 API: http://localhost:3500/api"
echo ""
echo "Logs:"
echo "  Backend:  tail -f /tmp/backend.log"
echo "  Frontend: tail -f /tmp/frontend.log"
echo ""
echo "════════════════════════════════════════════════════════"
echo -e "${GREEN}✅ Application Started Successfully!${NC}"
echo "════════════════════════════════════════════════════════"
echo ""
echo -e "${YELLOW}Frontend:${NC}  http://localhost:3000"
echo -e "${YELLOW}Backend:${NC}   http://localhost:3500/api"
echo ""
echo "📄 Available Pages:"
echo "   • Home:      http://localhost:3000/"
echo "   • Employees: http://localhost:3000/employees"
echo "   • Dashboard: http://localhost:3000/dashboard"
echo "   • Settings:  http://localhost:3000/settings"
echo ""
echo "📖 API Endpoints:"
echo "   • GET  /api/employees"
echo "   • POST /api/employees"
echo "   • PUT  /api/employees/:id"
echo "   • DELETE /api/employees/:id"
echo ""
echo "════════════════════════════════════════════════════════"
echo "Press Ctrl+C to stop the application"
echo "════════════════════════════════════════════════════════"
echo ""

# Keep the script running
wait
