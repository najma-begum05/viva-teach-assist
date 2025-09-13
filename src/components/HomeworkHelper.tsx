import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge-custom"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Target, Lightbulb, CheckCircle } from "lucide-react"

interface Task {
  id: number
  title: string
  description: string
  completed: boolean
  hint?: string
}

export const HomeworkHelper = () => {
  const [currentTask, setCurrentTask] = useState<Task | null>(null)
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Read Chapter 5",
      description: "Read about photosynthesis in plants",
      completed: false,
      hint: "Focus on how plants convert sunlight into energy"
    },
    {
      id: 2,
      title: "Answer Questions 1-3",
      description: "Write detailed answers about plant biology",
      completed: false,
      hint: "Think about the role of chlorophyll"
    },
    {
      id: 3,
      title: "Create Diagram",
      description: "Draw and label a plant cell",
      completed: false,
      hint: "Remember to include organelles like chloroplasts"
    }
  ])

  const startHomework = () => {
    setCurrentTask(tasks.find(task => !task.completed) || null)
  }

  const completeTask = () => {
    if (currentTask) {
      setTasks(prev => prev.map(task => 
        task.id === currentTask.id ? { ...task, completed: true } : task
      ))
      const nextTask = tasks.find(task => !task.completed && task.id !== currentTask.id)
      setCurrentTask(nextTask || null)
    }
  }

  const completedTasks = tasks.filter(task => task.completed).length
  const progress = (completedTasks / tasks.length) * 100

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <BookOpen className="w-5 h-5" />
          Smart Homework Helper
        </CardTitle>
        <CardDescription>
          AI-powered task breakdown with helpful hints
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Overall Progress</span>
            <span>{completedTasks}/{tasks.length} tasks</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {!currentTask ? (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-learning flex items-center justify-center">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold">Ready to start?</h3>
              <p className="text-sm text-muted-foreground">
                I'll break down your homework into manageable steps
              </p>
            </div>
            <Button variant="learning" onClick={startHomework}>
              Start Homework
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="p-4 bg-gradient-learning rounded-lg text-primary-foreground">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4" />
                <span className="font-semibold">Current Task</span>
              </div>
              <h3 className="font-bold">{currentTask.title}</h3>
              <p className="text-sm opacity-90">{currentTask.description}</p>
            </div>

            {currentTask.hint && (
              <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Lightbulb className="w-4 h-4 text-warning" />
                  <span className="text-sm font-semibold text-warning">AI Hint</span>
                </div>
                <p className="text-sm text-muted-foreground">{currentTask.hint}</p>
              </div>
            )}

            <Button variant="success" onClick={completeTask} className="w-full">
              <CheckCircle className="w-4 h-4 mr-2" />
              Mark Complete
            </Button>
          </div>
        )}

        {completedTasks === tasks.length && (
          <div className="text-center">
            <Badge variant="achievement" className="animate-bounce-in">
              🎉 All Tasks Complete!
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  )
}