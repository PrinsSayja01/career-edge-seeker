
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Upload, FileText, CheckCircle, AlertCircle, TrendingUp, Wifi, WifiOff } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Header from "@/components/Header";
import { useResumeAnalysis } from "@/hooks/useResumeAnalysis";
import { toast } from "sonner";
import { getUserFriendlyErrorMessage } from "@/lib/errorHandler";
import BackendStatus from "@/components/BackendStatus";

const CVAnalysis = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  
  const resumeAnalysis = useResumeAnalysis();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && (file.type === "application/pdf" || file.name.endsWith('.docx'))) {
      setUploadedFile(file);
    }
  };

  const handleAnalyze = async () => {
    if (!jobDescription.trim() || !uploadedFile) {
      toast.error("Please provide both job description and resume file");
      return;
    }
    
    try {
      const result = await resumeAnalysis.mutateAsync({
        jobDescription,
        resumeFile: uploadedFile,
      });
      
      if (result.success) {
        toast.success("Analysis completed successfully!");
      } else {
        toast.error(result.error || "Analysis failed");
      }
    } catch (error) {
      console.error("Analysis error:", error);
      const errorMessage = getUserFriendlyErrorMessage(error);
      toast.error(errorMessage);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-display font-bold text-foreground mb-4">
              CV Analysis & ATS Score
            </h1>
            <p className="text-xl text-muted-foreground">
              Upload your CV and job description to get personalized feedback and missing key points
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Job Description Input */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Job Description
                </CardTitle>
                <CardDescription>
                  Paste the job description you're applying for
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Label htmlFor="job-description">Job Description</Label>
                <Textarea
                  id="job-description"
                  placeholder="Paste the complete job description here..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="min-h-[200px] mt-2"
                />
              </CardContent>
            </Card>

            {/* Resume Upload */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload Resume
                </CardTitle>
                <CardDescription>
                  Upload your CV/Resume (PDF or DOCX format)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <Label htmlFor="resume-upload" className="cursor-pointer">
                    <span className="text-sm font-medium text-foreground">
                      Click to upload or drag and drop
                    </span>
                    <Input
                      id="resume-upload"
                      type="file"
                      accept=".pdf,.docx"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </Label>
                  <p className="text-xs text-muted-foreground mt-2">
                    PDF or DOCX (max 5MB)
                  </p>
                  
                  {uploadedFile && (
                    <div className="mt-4 p-3 bg-accent rounded-lg">
                      <p className="text-sm font-medium text-accent-foreground">
                        {uploadedFile.name}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Analyze Button */}
          <div className="text-center mb-8">
            <Button
              onClick={handleAnalyze}
              disabled={!jobDescription.trim() || !uploadedFile || resumeAnalysis.isPending}
              size="lg"
              variant="gradient"
              className="px-8"
            >
              {resumeAnalysis.isPending ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Analyzing...
                </div>
              ) : (
                <div className="flex items-center">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Analyze CV
                </div>
              )}
            </Button>
          </div>

          {/* Backend Status */}
          <BackendStatus className="mb-6" />

          {/* Analysis Results */}
          {resumeAnalysis.data?.success && resumeAnalysis.data.data && (
            <div className="space-y-6">
              {/* ATS Score Card */}
              <Card>
                <CardHeader>
                  <CardTitle>ATS Score & Match Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <div className="w-24 h-24 rounded-full border-8 border-muted flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary">
                            {resumeAnalysis.data.data.atsScore}
                          </span>
                        </div>
                      </div>
                      <h3 className="font-semibold text-lg">ATS Score</h3>
                      <p className="text-muted-foreground">Out of 100</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <div className="w-24 h-24 rounded-full border-8 border-accent flex items-center justify-center">
                          <span className="text-2xl font-bold text-accent-foreground">
                            {resumeAnalysis.data.data.matchPercentage}%
                          </span>
                        </div>
                      </div>
                      <h3 className="font-semibold text-lg">Match Rate</h3>
                      <p className="text-muted-foreground">Job Description</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Missing Keywords */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-warning" />
                    Missing Keywords
                  </CardTitle>
                  <CardDescription>
                    Important keywords from the job description that are missing from your CV
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {resumeAnalysis.data.data.missingKeywords.map((keyword: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-warning/10 text-warning border border-warning/20 rounded-full text-sm"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Strengths */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    Your Strengths
                  </CardTitle>
                  <CardDescription>
                    Skills and experiences that match well with the job requirements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {resumeAnalysis.data.data.strengths.map((strength: string, index: number) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle>Recommendations for Improvement</CardTitle>
                  <CardDescription>
                    Actionable suggestions to improve your CV's ATS score
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {resumeAnalysis.data.data.recommendations.map((rec: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Alert>
                <TrendingUp className="h-4 w-4" />
                <AlertDescription>
                  <strong>Pro Tip:</strong> Incorporate the missing keywords naturally into your experience descriptions and skills section to improve your ATS score.
                </AlertDescription>
              </Alert>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CVAnalysis;
