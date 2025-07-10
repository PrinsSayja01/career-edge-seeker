import { resumeAnalysisAPI } from '@/lib/api';

export interface ConnectionTestResult {
  backendReachable: boolean;
  healthCheck: boolean;
  apiEndpoints: {
    health: boolean;
    analyze: boolean;
    upload: boolean;
  };
  errorMessages: string[];
  suggestions: string[];
}

export const testBackendConnection = async (): Promise<ConnectionTestResult> => {
  const result: ConnectionTestResult = {
    backendReachable: false,
    healthCheck: false,
    apiEndpoints: {
      health: false,
      analyze: false,
      upload: false,
    },
    errorMessages: [],
    suggestions: [],
  };

  try {
    // Test health endpoint
    const healthResponse = await resumeAnalysisAPI.checkHealth();
    result.backendReachable = true;
    result.healthCheck = healthResponse.success;
    result.apiEndpoints.health = true;
  } catch (error: any) {
    result.backendReachable = false;
    result.errorMessages.push(`Health check failed: ${error.message}`);
    
    // Provide specific suggestions based on error type
    if (error.message.includes('fetch')) {
      result.suggestions.push('Backend server is not running. Start the backend with: npm run start:backend');
      result.suggestions.push('Check if backend is running on port 8000');
    } else if (error.message.includes('CORS')) {
      result.suggestions.push('CORS issue detected. Check backend CORS configuration');
    }
  }

  // Test analyze endpoint (without actually sending a file)
  try {
    // This will likely fail with validation error, but confirms endpoint exists
    await fetch(`${import.meta.env.VITE_API_BASE_URL}/analyze`, {
      method: 'OPTIONS', // OPTIONS request to check if endpoint exists
    });
    result.apiEndpoints.analyze = true;
  } catch (error) {
    result.apiEndpoints.analyze = false;
  }

  // Test upload endpoint
  try {
    await fetch(`${import.meta.env.VITE_API_BASE_URL}/upload`, {
      method: 'OPTIONS',
    });
    result.apiEndpoints.upload = true;
  } catch (error) {
    result.apiEndpoints.upload = false;
  }

  // Add general suggestions if there are issues
  if (!result.backendReachable) {
    result.suggestions.push('Run the setup script: npm run setup');
    result.suggestions.push('Check the backend-integration.md file for detailed setup instructions');
  }

  return result;
};

export const logConnectionTest = async () => {
  console.log('🔍 Testing backend connection...');
  const result = await testBackendConnection();
  
  console.log('Connection Test Results:', {
    '🌐 Backend Reachable': result.backendReachable ? '✅' : '❌',
    '❤️ Health Check': result.healthCheck ? '✅' : '❌',
    '📊 Analyze Endpoint': result.apiEndpoints.analyze ? '✅' : '❌',
    '📁 Upload Endpoint': result.apiEndpoints.upload ? '✅' : '❌',
  });

  if (result.errorMessages.length > 0) {
    console.error('❌ Errors:', result.errorMessages);
  }

  if (result.suggestions.length > 0) {
    console.warn('💡 Suggestions:', result.suggestions);
  }

  return result;
};