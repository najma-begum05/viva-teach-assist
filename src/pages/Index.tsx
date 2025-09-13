import { useState } from "react"
import { FeatureCard } from "@/components/FeatureCard"
import { AttendanceTracker } from "@/components/AttendanceTracker"
import { HomeworkHelper } from "@/components/HomeworkHelper"
import { LearningBuddy } from "@/components/LearningBuddy"
import { Badge } from "@/components/ui/badge-custom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, BookOpen, MessageCircle, Trophy, Users, TrendingUp } from "lucide-react"
import heroImage from "@/assets/hero-education.jpg"

type ActiveView = 'dashboard' | 'attendance' | 'homework' | 'chat'

const Index = () => {
  const [activeView, setActiveView] = useState<ActiveView>('dashboard')

  const stats = [
    { label: "Today's Attendance", value: "95%", icon: Users, color: "text-success" },
    { label: "Active Students", value: "1,247", icon: TrendingUp, color: "text-primary" },
    { label: "Badges Earned", value: "348", icon: Trophy, color: "text-warning" }
  ]

  if (activeView === 'attendance') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-primary-light/10 to-secondary/10 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Button 
              variant="ghost" 
              onClick={() => setActiveView('dashboard')}
              className="mb-4"
            >
              ← Back to Dashboard
            </Button>
            <h1 className="text-3xl font-bold text-foreground">Smart Attendance System</h1>
          </div>
          <div className="flex justify-center">
            <AttendanceTracker />
          </div>
        </div>
      </div>
    )
  }

  if (activeView === 'homework') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-primary-light/10 to-secondary/10 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Button 
              variant="ghost" 
              onClick={() => setActiveView('dashboard')}
              className="mb-4"
            >
              ← Back to Dashboard
            </Button>
            <h1 className="text-3xl font-bold text-foreground">Homework Assistant</h1>
          </div>
          <div className="flex justify-center">
            <HomeworkHelper />
          </div>
        </div>
      </div>
    )
  }

  if (activeView === 'chat') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-primary-light/10 to-secondary/10 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Button 
              variant="ghost" 
              onClick={() => setActiveView('dashboard')}
              className="mb-4"
            >
              ← Back to Dashboard
            </Button>
            <h1 className="text-3xl font-bold text-foreground">AI Learning Buddy</h1>
          </div>
          <div className="flex justify-center">
            <LearningBuddy />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-light/10 to-secondary/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="learning" className="animate-bounce-in">
                  🚀 Next-Gen Education Platform
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Smart Curriculum &
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> AI-Powered</span> Learning
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Revolutionary attendance tracking, intelligent homework assistance, and multilingual AI tutoring in one powerful platform.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" onClick={() => setActiveView('attendance')}>
                  Try Smart Attendance
                </Button>
                <Button variant="ai" size="lg" onClick={() => setActiveView('chat')}>
                  Chat with AI Buddy
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center shadow-soft">
                    <CardContent className="p-4">
                      <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-2xl"></div>
              <img 
                src={heroImage} 
                alt="Smart Education Platform" 
                className="relative rounded-2xl shadow-primary w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Intelligent Learning Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of education with AI-powered tools designed to enhance learning and engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Smart Attendance"
              description="Multi-modal biometric recognition with face, eye, and voice detection for secure attendance tracking."
              icon={Camera}
              badge="AI-Powered"
              badgeVariant="learning"
              buttonText="Start Tracking"
              buttonVariant="learning"
              onClick={() => setActiveView('attendance')}
            />

            <FeatureCard
              title="Homework Helper"
              description="AI breaks down complex tasks into manageable steps with intelligent hints and guidance."
              icon={BookOpen}
              badge="Smart AI"
              badgeVariant="achievement"
              buttonText="Get Help"
              buttonVariant="ai"
              onClick={() => setActiveView('homework')}
            />

            <FeatureCard
              title="Learning Buddy"
              description="Multilingual AI chatbot that explains concepts, answers questions, and supports voice interaction."
              icon={MessageCircle}
              badge="Voice Ready"
              badgeVariant="success"
              buttonText="Start Chat"
              buttonVariant="hero"
              onClick={() => setActiveView('chat')}
            />
          </div>
        </div>
      </section>

      {/* Participation Badges Section */}
      <section className="py-20 px-4 bg-gradient-learning/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Earn Participation Badges
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="achievement" className="text-base px-4 py-2">
              🎯 Active Listener
            </Badge>
            <Badge variant="learning" className="text-base px-4 py-2">
              🤔 Question Asker
            </Badge>
            <Badge variant="success" className="text-base px-4 py-2">
              💡 Creative Thinker
            </Badge>
            <Badge variant="warning" className="text-base px-4 py-2">
              🌟 Top Performer
            </Badge>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Index