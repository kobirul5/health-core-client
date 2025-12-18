import { Card } from "@/components/ui/card"
import { Stethoscope, Heart, Baby, Brain, Eye, Bone } from "lucide-react"

const specialists = [
  {
    icon: Heart,
    name: "Cardiology",
    description: "Heart and cardiovascular system specialists",
    doctorCount: "50+ Doctors",
  },
  {
    icon: Brain,
    name: "Neurology",
    description: "Brain and nervous system experts",
    doctorCount: "35+ Doctors",
  },
  {
    icon: Baby,
    name: "Pediatrics",
    description: "Child health and development care",
    doctorCount: "60+ Doctors",
  },
  {
    icon: Bone,
    name: "Orthopedics",
    description: "Bone, joint and muscle specialists",
    doctorCount: "45+ Doctors",
  },
  {
    icon: Eye,
    name: "Ophthalmology",
    description: "Eye care and vision specialists",
    doctorCount: "30+ Doctors",
  },
  {
    icon: Stethoscope,
    name: "General Medicine",
    description: "Primary care and general health",
    doctorCount: "80+ Doctors",
  },
]

export function Specialists() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-balance">Our Specialists</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Connect with expert doctors across various medical specialties for comprehensive healthcare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialists.map((specialist) => {
            const Icon = specialist.icon
            return (
              <Card
                key={specialist.name}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl mb-2">{specialist.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{specialist.description}</p>
                    <p className="text-sm font-medium text-primary">{specialist.doctorCount}</p>
                  </div>
                </div>
              </Card>            )
          })}
        </div>
      </div>
    </section>
  )
}
