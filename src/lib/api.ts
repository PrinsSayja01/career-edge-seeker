const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1';

export interface AnalysisRequest {
  jobDescription: string;
  resumeFile: File;
}

export interface AnalysisResult {
  atsScore: number;
  matchPercentage: number;
  missingKeywords: string[];
  strengths: string[];
  recommendations: string[];
  detailedAnalysis?: {
    skillsMatch: string[];
    experienceMatch: string[];
    educationMatch: string[];
    improvementAreas: string[];
  };
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

class ApiService {
  private baseURL: string;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseURL}${endpoint}`;
      
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw new Error(`API request failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async analyzeResume(request: AnalysisRequest): Promise<ApiResponse<AnalysisResult>> {
    const formData = new FormData();
    formData.append('job_description', request.jobDescription);
    formData.append('resume', request.resumeFile);

    return this.makeRequest<AnalysisResult>('/analyze', {
      method: 'POST',
      body: formData,
    });
  }

  async uploadResume(file: File): Promise<ApiResponse<{ fileId: string; fileName: string }>> {
    const formData = new FormData();
    formData.append('file', file);

    return this.makeRequest<{ fileId: string; fileName: string }>('/upload', {
      method: 'POST',
      body: formData,
    });
  }

  async getAnalysisHistory(): Promise<ApiResponse<any[]>> {
    return this.makeRequest<any[]>('/history', {
      method: 'GET',
    });
  }

  async healthCheck(): Promise<ApiResponse<{ status: string; timestamp: string }>> {
    return this.makeRequest<{ status: string; timestamp: string }>('/health', {
      method: 'GET',
    });
  }
}

export const apiService = new ApiService();

// Utility functions for common API operations
export const resumeAnalysisAPI = {
  analyze: (jobDescription: string, resumeFile: File) => 
    apiService.analyzeResume({ jobDescription, resumeFile }),
  
  upload: (file: File) => 
    apiService.uploadResume(file),
  
  getHistory: () => 
    apiService.getAnalysisHistory(),
  
  checkHealth: () => 
    apiService.healthCheck(),
};

export default apiService;