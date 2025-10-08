#!/bin/bash

# Restart Next.js Development Server
# Usage: ./restart-dev.sh

echo "🔄 Restarting Next.js development server..."

# Stop any running dev servers
pkill -f "next dev" 2>/dev/null

# Wait a moment
sleep 1

# Start the dev server
echo "🚀 Starting development server..."
echo "📍 Server will run at http://localhost:3000"
echo "⏹️  Press Ctrl+C to stop the server"
echo ""

npm run dev

