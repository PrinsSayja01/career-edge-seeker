#!/bin/bash

echo "🚀 Setting up Career Edge Seekar + Advanced Resume Analyzer"
echo "============================================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js v16 or higher.${NC}"
    exit 1
fi

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo -e "${RED}❌ Python3 is not installed. Please install Python 3.8 or higher.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Node.js and Python3 are installed${NC}"

# Setup frontend
echo -e "\n${BLUE}📦 Setting up Frontend (career-edge-seekar)...${NC}"
npm install
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Frontend dependencies installed${NC}"
else
    echo -e "${RED}❌ Failed to install frontend dependencies${NC}"
    exit 1
fi

# Check if .env exists, if not create it
if [ ! -f ".env" ]; then
    echo -e "${YELLOW}📝 Creating .env file...${NC}"
    cp .env.example .env
    echo -e "${GREEN}✅ Environment file created${NC}"
else
    echo -e "${GREEN}✅ Environment file already exists${NC}"
fi

# Check if backend directory exists
if [ -d "../advanced-resume-analyzer" ]; then
    echo -e "\n${BLUE}🔧 Setting up Backend (advanced-resume-analyzer)...${NC}"
    cd ../advanced-resume-analyzer
    
    # Create virtual environment if it doesn't exist
    if [ ! -d "venv" ]; then
        echo -e "${YELLOW}🐍 Creating Python virtual environment...${NC}"
        python3 -m venv venv
    fi
    
    # Activate virtual environment
    source venv/bin/activate
    
    # Install requirements if requirements.txt exists
    if [ -f "requirements.txt" ]; then
        echo -e "${YELLOW}📦 Installing backend dependencies...${NC}"
        pip install -r requirements.txt
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}✅ Backend dependencies installed${NC}"
        else
            echo -e "${RED}❌ Failed to install backend dependencies${NC}"
        fi
    else
        echo -e "${YELLOW}⚠️  requirements.txt not found. Please install backend dependencies manually.${NC}"
    fi
    
    # Create backend .env if it doesn't exist
    if [ ! -f ".env" ]; then
        echo -e "${YELLOW}📝 Creating backend .env file...${NC}"
        cat > .env << EOL
PORT=8000
DEBUG=True
CORS_ORIGINS=http://localhost:5173,http://localhost:3000
UPLOAD_FOLDER=uploads
MAX_FILE_SIZE=5242880
ALLOWED_EXTENSIONS=pdf,docx
EOL
        echo -e "${GREEN}✅ Backend environment file created${NC}"
    fi
    
    cd ../career-edge-seekar
else
    echo -e "${YELLOW}⚠️  Backend directory '../advanced-resume-analyzer' not found.${NC}"
    echo -e "   Please clone the backend repository to the parent directory:"
    echo -e "   ${BLUE}git clone https://github.com/your-username/advanced-resume-analyzer.git ../advanced-resume-analyzer${NC}"
fi

echo -e "\n${GREEN}🎉 Setup complete!${NC}"
echo -e "\nTo start the application:"
echo -e "${BLUE}1. Start the backend:${NC}"
echo -e "   cd ../advanced-resume-analyzer"
echo -e "   source venv/bin/activate"
echo -e "   uvicorn main:app --host 0.0.0.0 --port 8000 --reload"
echo -e "\n${BLUE}2. Start the frontend (in a new terminal):${NC}"
echo -e "   cd career-edge-seekar"
echo -e "   npm run dev"
echo -e "\n${BLUE}3. Open your browser to:${NC} http://localhost:5173"
echo -e "\n${YELLOW}📖 For detailed setup instructions, see: backend-integration.md${NC}"