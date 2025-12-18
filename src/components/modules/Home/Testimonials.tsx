"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Patient",
        image: "/assets/professional-woman-smiling.png",
        rating: 5,
        text: "The AI matching system found me the perfect dermatologist in minutes. I had my video consultation the same day and received treatment advice immediately. This platform is a game-changer!",
        condition: "Skin Condition",
    },
    {
        name: "Michael Chen",
        role: "Patient",
        image: "/assets/professional-asian-man-smiling.jpg",
        rating: 5,
        text: "I was skeptical about online consultations, but the doctor was incredibly thorough and professional. Got my prescription within hours. Saved me a trip to the clinic!",
        condition: "Flu & Fever",
    },
    {
        name: "Emily Rodriguez",
        role: "Patient",
        image: "/assets/professional-hispanic-woman-smiling.jpg",
        rating: 5,
        text: "As a busy mom, being able to consult with a pediatrician at 10 PM was invaluable. The doctor was patient, knowledgeable, and put my mind at ease about my daughter's symptoms.",
        condition: "Pediatric Care",
    },
]

export function Testimonials() {
    return (
        <section className="py-20 px-4 bg-zinc-950">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Patients Say</h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Real experiences from real patients who found the care they needed through our platform
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-zinc-900 border-zinc-800 p-6 hover:border-blue-500/50 transition-colors">
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                                ))}
                            </div>

                            <p className="text-zinc-300 mb-6 leading-relaxed">{testimonial.text}</p>

                            <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
                                <img
                                    src={testimonial.image || "/placeholder.svg"}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-zinc-400">{testimonial.condition}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <div className="inline-flex items-center gap-2 text-zinc-400">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                            ))}
                        </div>
            <span>from over 10,000 patient reviews</span>                        <span>from over 10,000+ patient reviews</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
