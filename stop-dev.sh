#!/bin/bash

# Stop Next.js Development Server
# Usage: ./stop-dev.sh

echo "🛑 Stopping Next.js development server..."

# Kill all Next.js dev processes
pkill -f "next dev"

if [ $? -eq 0 ]; then
  echo "✅ Development server stopped successfully"
else
  echo "ℹ️  No development server was running"
fi

