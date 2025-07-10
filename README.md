# Career Edge Seekar - Resume Analysis Frontend

A modern React application for analyzing resumes and CVs against job descriptions, providing ATS scores and improvement recommendations.

## 🚀 Quick Start

### One-Command Setup
```bash
npm run setup
```

### Manual Setup
1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment**
   ```bash
   cp .env.example .env
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

## 🔧 Backend Integration

This frontend connects to the `advanced-resume-analyzer` backend. For complete setup instructions, see [backend-integration.md](./backend-integration.md).

### Quick Backend Setup
1. Clone the backend repository to the parent directory:
   ```bash
   git clone https://github.com/your-username/advanced-resume-analyzer.git ../advanced-resume-analyzer
   ```

2. Run the setup script:
   ```bash
   npm run setup
   ```

3. Start both services:
   ```bash
   # Terminal 1 - Backend
   cd ../advanced-resume-analyzer
   source venv/bin/activate
   uvicorn main:app --host 0.0.0.0 --port 8000 --reload

   # Terminal 2 - Frontend
   npm run dev
   ```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run setup` - Automated setup for both frontend and backend
- `npm run check-backend` - Test backend connection
- `npm run start:full` - Start with backend health check

## 🌟 Features

- **CV Analysis**: Upload resume and job description for automated analysis
- **ATS Scoring**: Get ATS compatibility scores and recommendations
- **Missing Keywords**: Identify important keywords missing from your CV
- **Strengths Analysis**: Highlight matching skills and experiences
- **Improvement Suggestions**: Get actionable recommendations
- **Real-time Backend Status**: Monitor connection to analysis backend
- **Modern UI**: Built with shadcn/ui and Tailwind CSS

## 🏗️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: React Query (@tanstack/react-query)
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Notifications**: Sonner

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   └── BackendStatus.tsx # Backend connection indicator
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── CVAnalysis.tsx  # Main CV analysis page
│   └── NotFound.tsx    # 404 page
├── lib/                # Utility libraries
│   ├── api.ts          # API service configuration
│   ├── utils.ts        # General utilities
│   └── errorHandler.ts # Error handling utilities
├── hooks/              # Custom React hooks
│   └── useResumeAnalysis.ts # Resume analysis state management
└── utils/              # Additional utilities
    └── testConnection.ts # Backend connection testing
```

## 🔗 API Integration

The application connects to the backend through these endpoints:

- `GET /api/v1/health` - Backend health check
- `POST /api/v1/analyze` - Resume analysis
- `POST /api/v1/upload` - File upload (optional)
- `GET /api/v1/history` - Analysis history (optional)

## 🐛 Troubleshooting

### Backend Not Connecting
1. Check if backend is running: `npm run check-backend`
2. Ensure backend is on port 8000
3. Verify CORS configuration in backend
4. Check browser console for errors

### Common Issues
- **File Upload Errors**: Ensure files are PDF or DOCX format, under 5MB
- **CORS Errors**: Backend must allow requests from `http://localhost:5173`
- **Network Errors**: Check that backend server is running and accessible

## 📖 Documentation

- [Backend Integration Guide](./backend-integration.md) - Detailed setup instructions
- [API Documentation](./backend-integration.md#expected-backend-api-endpoints) - Backend API specification

## 🚀 Deployment

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm run preview
```

### Environment Variables
```env
VITE_API_URL=http://localhost:8000
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

For production, update these URLs to point to your deployed backend.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the integration
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
