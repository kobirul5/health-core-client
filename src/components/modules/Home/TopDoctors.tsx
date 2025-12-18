import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Video, MessageSquare } from "lucide-react"
import Image from "next/image"

const topDoctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    rating: 4.9,
    reviews: 245,
    experience: "15 years",
    image: "/assets/professional-female-doctor.png",
    availability: "Available Now",
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    rating: 4.8,
    reviews: 189,
    experience: "12 years",
    image: "/assets/professional-male-doctor.png",
    availability: "Available Today",
  },
  {
    name: "Dr. Emily Williams",
    specialty: "Pediatrics",
    rating: 5.0,
    reviews: 312,
    experience: "18 years",
    image: "/assets/professional-female-pediatrician.png",
    availability: "Available Now",
  },
  {
    name: "Dr. David Martinez",
    specialty: "Orthopedics",
    rating: 4.9,
    reviews: 276,
    experience: "20 years",
    image: "/assets/professional-male-orthopedic-doctor.jpg",
    availability: "Available Tomorrow",
  },
]

export function TopDoctors() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-balance">Our Top Doctors</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Meet our highly rated and experienced doctors ready to provide you with the best care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topDoctors.map((doctor) => (
            <Card
              key={doctor.name}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 bg-card"
            >
              <div className="relative h-48 w-full bg-muted">
                <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
                <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                  {doctor.availability}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg mb-1">{doctor.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{doctor.specialty}</p>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-sm">{doctor.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({doctor.reviews} reviews)</span>
                </div>

                <p className="text-sm text-muted-foreground mb-4">Experience: {doctor.experience}</p>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 gap-2">
                    <Video className="w-4 h-4" />
                    Video
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent">
                    <MessageSquare className="w-4 h-4" />
                    Chat
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button size="lg" variant="outline">
            View All Doctors
          </Button>
        </div>
      </div>
    </section>
  )
}
