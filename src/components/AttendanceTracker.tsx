import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge-custom"
import { Progress } from "@/components/ui/progress"
import { Camera, Eye, Mic, User, CheckCircle } from "lucide-react"

export const AttendanceTracker = () => {
  const [isTracking, setIsTracking] = useState(false)
  const [recognitionSteps, setRecognitionSteps] = useState({
    face: false,
    eye: false,
    voice: false
  })

  const startAttendance = () => {
    setIsTracking(true)
    // Simulate recognition process
    setTimeout(() => setRecognitionSteps(prev => ({ ...prev, face: true })), 1000)
    setTimeout(() => setRecognitionSteps(prev => ({ ...prev, eye: true })), 2000)
    setTimeout(() => setRecognitionSteps(prev => ({ ...prev, voice: true })), 3000)
    setTimeout(() => setIsTracking(false), 4000)
  }

  const progress = Object.values(recognitionSteps).filter(Boolean).length * 33.33

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <User className="w-5 h-5" />
          Smart Attendance
        </CardTitle>
        <CardDescription>
          Multi-modal recognition for secure attendance tracking
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4" />
              <span className="text-sm">Face Recognition</span>
            </div>
            {recognitionSteps.face ? (
              <CheckCircle className="w-4 h-4 text-success" />
            ) : (
              <div className="w-4 h-4 border-2 border-muted rounded-full" />
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span className="text-sm">Eye Tracking</span>
            </div>
            {recognitionSteps.eye ? (
              <CheckCircle className="w-4 h-4 text-success" />
            ) : (
              <div className="w-4 h-4 border-2 border-muted rounded-full" />
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mic className="w-4 h-4" />
              <span className="text-sm">Voice Recognition</span>
            </div>
            {recognitionSteps.voice ? (
              <CheckCircle className="w-4 h-4 text-success" />
            ) : (
              <div className="w-4 h-4 border-2 border-muted rounded-full" />
            )}
          </div>
        </div>

        {isTracking && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Recognition Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        <div className="flex gap-2">
          <Button 
            variant={isTracking ? "ai" : "learning"} 
            onClick={startAttendance} 
            disabled={isTracking}
            className="flex-1"
          >
            {isTracking ? "Scanning..." : "Mark Attendance"}
          </Button>
        </div>

        {Object.values(recognitionSteps).every(Boolean) && (
          <div className="text-center">
            <Badge variant="achievement" className="animate-bounce-in">
              ✨ Attendance Confirmed!
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  )
}