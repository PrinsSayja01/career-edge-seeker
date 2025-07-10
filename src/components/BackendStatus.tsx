import { Alert, AlertDescription } from "@/components/ui/alert";
import { Wifi, WifiOff, AlertTriangle } from "lucide-react";
import { useBackendHealth } from "@/hooks/useResumeAnalysis";

interface BackendStatusProps {
  className?: string;
  showWhenConnected?: boolean;
}

const BackendStatus = ({ className = "", showWhenConnected = true }: BackendStatusProps) => {
  const { data: healthData, error, isLoading } = useBackendHealth();

  // Don't show anything while loading
  if (isLoading) return null;

  // Don't show when connected unless explicitly requested
  if (healthData?.success && !showWhenConnected) return null;

  return (
    <div className={className}>
      <Alert className={healthData?.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}>
        {healthData?.success ? (
          <Wifi className="h-4 w-4 text-green-600" />
        ) : error ? (
          <WifiOff className="h-4 w-4 text-red-600" />
        ) : (
          <AlertTriangle className="h-4 w-4 text-yellow-600" />
        )}
        <AlertDescription>
          <span className="font-medium">Backend Status: </span>
          {healthData?.success ? (
            <span className="text-green-700">Connected</span>
          ) : (
            <span className="text-red-700">
              Disconnected - Please ensure the backend server is running on port 8000
            </span>
          )}
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default BackendStatus;