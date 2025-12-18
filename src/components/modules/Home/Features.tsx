import { Bot, UserCheck, MessageSquare, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Bot,
    title: "AI-powered doctor recommendations",
    description:
      "Our intelligent matching system connects you with the perfect doctor based on your symptoms and medical history.",
  },
  {
    icon: UserCheck,
    title: "Verified & experienced doctors",
    description:
      "All our healthcare professionals are fully licensed, verified, and have years of experience in their specialties.",
  },
  {
    icon: MessageSquare,
    title: "Video & chat consultations",
    description: "Choose between secure video calls or text-based consultations based on your comfort and convenience.",
  },
  {
    icon: Clock,
    title: "24/7 online medical support",
    description:
      "Access healthcare whenever you need it. Our doctors are available around the clock for your medical needs.",
  },
]

export function Features() {
  return (
    <section className="pt-18 md:pt-16 mx-auto">
      <div className="container px-4">
        <div className="mx-auto container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
              Healthcare reimagined for the modern world
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed">
              Experience the future of healthcare with cutting-edge technology and compassionate care.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-accent/50 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-accent/10 p-3 transition-colors group-hover:bg-accent/20">
                    <feature.icon className="size-6 text-accent" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-balance">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{feature.description}</p>
                </CardContent>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
