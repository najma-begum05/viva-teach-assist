import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge-custom"
import { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  badge?: string
  badgeVariant?: "default" | "learning" | "achievement" | "success"
  buttonText: string
  buttonVariant?: "default" | "hero" | "learning" | "ai"
  onClick?: () => void
  className?: string
}

export const FeatureCard = ({
  title,
  description,
  icon: Icon,
  badge,
  badgeVariant = "default",
  buttonText,
  buttonVariant = "default",
  onClick,
  className = ""
}: FeatureCardProps) => {
  return (
    <Card className={`relative overflow-hidden group hover:shadow-medium transition-smooth ${className}`}>
      {badge && (
        <div className="absolute top-4 right-4 z-10">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <CardHeader className="space-y-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-learning flex items-center justify-center shadow-soft group-hover:scale-110 transition-bounce">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <CardTitle className="text-xl font-bold text-card-foreground">{title}</CardTitle>
          <CardDescription className="text-muted-foreground mt-2">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Button 
          variant={buttonVariant} 
          onClick={onClick} 
          className="w-full group-hover:scale-105 transition-bounce"
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  )
}