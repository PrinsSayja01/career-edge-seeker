import { useMutation, useQuery } from '@tanstack/react-query';
import { resumeAnalysisAPI, type AnalysisRequest, type AnalysisResult } from '@/lib/api';

export const useResumeAnalysis = () => {
  return useMutation({
    mutationFn: ({ jobDescription, resumeFile }: AnalysisRequest) => 
      resumeAnalysisAPI.analyze(jobDescription, resumeFile),
    onError: (error) => {
      console.error('Resume analysis failed:', error);
    },
  });
};

export const useResumeUpload = () => {
  return useMutation({
    mutationFn: (file: File) => resumeAnalysisAPI.upload(file),
    onError: (error) => {
      console.error('Resume upload failed:', error);
    },
  });
};

export const useAnalysisHistory = () => {
  return useQuery({
    queryKey: ['analysisHistory'],
    queryFn: () => resumeAnalysisAPI.getHistory(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useBackendHealth = () => {
  return useQuery({
    queryKey: ['backendHealth'],
    queryFn: () => resumeAnalysisAPI.checkHealth(),
    staleTime: 30 * 1000, // 30 seconds
    retry: 1,
  });
};