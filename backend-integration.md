# Backend Integration Guide

## Connecting carrer-edge-seekar (Frontend) with advanced-resume-analyzer (Backend)

This guide explains how to connect your React frontend application with the Python backend for resume analysis.

## Prerequisites

- Node.js (v16 or higher)
- Python (v3.8 or higher)
- Both repositories cloned locally

## Backend Setup (advanced-resume-analyzer)

### 1. Clone the Backend Repository
```bash
git clone https://github.com/your-username/advanced-resume-analyzer.git
cd advanced-resume-analyzer
```

### 2. Install Backend Dependencies
```bash
pip install -r requirements.txt
```

### 3. Backend Configuration
Create a `.env` file in the backend directory:
```env
# Backend Configuration
PORT=8000
DEBUG=True
CORS_ORIGINS=http://localhost:5173,http://localhost:3000
UPLOAD_FOLDER=uploads
MAX_FILE_SIZE=5242880  # 5MB
ALLOWED_EXTENSIONS=pdf,docx
```

### 4. Expected Backend API Endpoints

Your backend should implement these endpoints:

```python
# Health Check
GET /api/v1/health
Response: {"success": true, "data": {"status": "healthy", "timestamp": "2024-01-01T00:00:00Z"}}

# Resume Analysis
POST /api/v1/analyze
Body: FormData with 'job_description' (text) and 'resume' (file)
Response: {
  "success": true,
  "data": {
    "atsScore": 72,
    "matchPercentage": 68,
    "missingKeywords": ["Python", "Machine Learning"],
    "strengths": ["Communication", "Leadership"],
    "recommendations": ["Add Python skills", "Include metrics"]
  }
}

# File Upload (Optional)
POST /api/v1/upload
Body: FormData with 'file'
Response: {"success": true, "data": {"fileId": "uuid", "fileName": "resume.pdf"}}

# Analysis History (Optional)
GET /api/v1/history
Response: {"success": true, "data": []}
```

### 5. CORS Configuration
Ensure your backend allows requests from the frontend:

```python
# For FastAPI
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# For Flask
from flask_cors import CORS
CORS(app, origins=["http://localhost:5173", "http://localhost:3000"])
```

### 6. Start the Backend Server
```bash
# For FastAPI
uvicorn main:app --host 0.0.0.0 --port 8000 --reload

# For Flask
python app.py
```

## Frontend Setup (carrer-edge-seekar)

### 1. Environment Configuration
The frontend is already configured. Update `.env` if needed:
```env
VITE_API_URL=http://localhost:8000
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Start the Frontend Development Server
```bash
npm run dev
```

## Testing the Connection

1. **Start Backend**: Make sure your backend is running on `http://localhost:8000`
2. **Start Frontend**: Run the frontend on `http://localhost:5173`
3. **Check Connection**: 
   - Visit `http://localhost:5173/cv-analysis`
   - Look for the "Backend Status: Connected" message
   - Upload a resume and job description to test the analysis

## Troubleshooting

### Backend Not Connecting
- Check if backend is running: `curl http://localhost:8000/api/v1/health`
- Verify CORS configuration
- Check console for network errors

### File Upload Issues
- Ensure backend accepts `multipart/form-data`
- Check file size limits (default: 5MB)
- Verify file type restrictions (PDF, DOCX)

### API Response Format
Ensure your backend returns responses in this format:
```json
{
  "success": boolean,
  "data": any,
  "message": string (optional),
  "error": string (optional)
}
```

## Sample Backend Implementation

Here's a minimal FastAPI backend structure:

```python
from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/v1/health")
async def health_check():
    return {
        "success": True,
        "data": {
            "status": "healthy",
            "timestamp": "2024-01-01T00:00:00Z"
        }
    }

@app.post("/api/v1/analyze")
async def analyze_resume(
    job_description: str = Form(...),
    resume: UploadFile = File(...)
):
    # Your resume analysis logic here
    result = {
        "atsScore": 75,
        "matchPercentage": 70,
        "missingKeywords": ["Python", "Machine Learning"],
        "strengths": ["Communication skills", "Leadership"],
        "recommendations": ["Add technical skills", "Include metrics"]
    }
    
    return {"success": True, "data": result}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

## Next Steps

1. Implement the backend endpoints according to the API specification
2. Add proper error handling and validation
3. Implement file storage and management
4. Add authentication if needed
5. Deploy both frontend and backend for production use

## Production Deployment

For production:
1. Update API URLs in `.env` to production backend URL
2. Configure proper CORS for production domains
3. Set up HTTPS for both frontend and backend
4. Implement proper authentication and authorization
5. Add rate limiting and security headers