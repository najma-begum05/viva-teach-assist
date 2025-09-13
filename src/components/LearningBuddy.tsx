import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge-custom"
import { MessageCircle, Send, Mic, Globe, Bot } from "lucide-react"

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

export const LearningBuddy = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your AI Learning Buddy. I can help explain lessons, answer questions, and even speak in different languages! What would you like to learn about today?",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("English")

  const languages = ["English", "Spanish", "French", "German", "Chinese"]

  const sendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's a great question! Let me explain that concept step by step...",
        "I understand you're curious about this topic. Here's what I know...",
        "Excellent! This is an important concept in your studies...",
        "Let me break this down into simpler parts for you..."
      ]
      
      const aiMessage: Message = {
        id: messages.length + 2,
        text: responses[Math.floor(Math.random() * responses.length)],
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
    }, 1000)

    setInputValue("")
  }

  const toggleVoice = () => {
    setIsVoiceEnabled(!isVoiceEnabled)
  }

  return (
    <Card className="w-full max-w-md mx-auto h-[500px] flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5" />
            AI Learning Buddy
          </div>
          <div className="flex gap-2">
            <Badge variant="learning" className="text-xs">
              <Globe className="w-3 h-3 mr-1" />
              {currentLanguage}
            </Badge>
            {isVoiceEnabled && (
              <Badge variant="success" className="text-xs animate-pulse-soft">
                <Mic className="w-3 h-3 mr-1" />
                Voice
              </Badge>
            )}
          </div>
        </CardTitle>
        <CardDescription>
          Your multilingual AI tutor, ready to help with any subject
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col gap-4">
        <div className="flex-1 space-y-3 overflow-y-auto max-h-[280px]">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  message.isUser
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleVoice}
              className={`transition-smooth ${isVoiceEnabled ? 'bg-success text-success-foreground' : ''}`}
            >
              <Mic className="w-4 h-4" />
            </Button>
            
            <select 
              value={currentLanguage}
              onChange={(e) => setCurrentLanguage(e.target.value)}
              className="px-3 py-1 text-sm border rounded-md bg-background"
            >
              {languages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything about your studies..."
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-1"
            />
            <Button variant="ai" onClick={sendMessage}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}