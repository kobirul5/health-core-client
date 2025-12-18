"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Sparkles, Video, ArrowRight, Stethoscope } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
    const [symptoms, setSymptoms] = useState("")
    const [isSearching, setIsSearching] = useState(false)

    const handleFindDoctor = () => {
        if (!symptoms.trim()) return
        setIsSearching(true)
        // Simulate AI search
        setTimeout(() => {
            setIsSearching(false)
            // Here you would navigate to results or show matched doctors
            console.log("[v0] Searching for doctors based on symptoms:", symptoms)
        }, 1500)
    }

    return (

        <div className=" w-full relative">
  {/* Dual Gradient Overlay (Top) Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 0% 20%, oklch(54.6% 0.245 262.881), transparent),
        radial-gradient(circle 500px at 100% 0%, oklch(54.6% 0.245 262.881), transparent)
      `,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    }}
  />
     {/* Your Content/Components */}

            {/* Your Content/Components */}
            <section className="relative flex items-center justify-center overflow-hidden ">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-accent/10 via-background to-background" />

                <div className="container relative z-10 px-4 pt-18 md:py-16">
                    <div className="mx-auto container">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Column - Content */}
                            <div>
                                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm backdrop-blur-sm">
                                    <Sparkles className="size-4 text-accent" />
                                    <span className="text-muted-foreground">AI-powered healthcare platform</span>
                                </div>

                                <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
                                    Find the Right Doctor with AI — Anytime, Anywhere
                                </h1>

                                <p className="mb-8 max-w-xl text-base text-pretty text-muted-foreground sm:text-lg md:text-xl leading-relaxed">
                                    Connect with trusted, licensed doctors online using our AI-powered matching system. Get expert medical
                                    advice, video consultations, and prescriptions from the comfort of your home.
                                </p>

                                <div className="flex flex-col items-start gap-4 sm:flex-row">
                                    <Button
                                        size="lg"
                                        className="h-12 px-8 text-base font-medium shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
                                    >
                                        Find a Doctor Now
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="h-12 px-8 text-base font-medium border-border/50 backdrop-blur-sm bg-transparent w-full sm:w-auto"
                                    >
                                        <Video className="mr-2 size-5" />
                                        Book Online Consultation
                                    </Button>
                                </div>
                            </div>

                            {/* Right Column - Symptom Input */}
                            <div>
                                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 shadow-xl">
                                    <div className="mb-4 flex items-center gap-2">
                                        <div className="flex size-10 items-center justify-center rounded-lg bg-accent/10">
                                            <Stethoscope className="size-5 text-accent" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">Describe Your Symptoms</h3>
                                            <p className="text-sm text-muted-foreground">AI will match you with the right specialist</p>
                                        </div>
                                    </div>

                                    <Textarea
                                        placeholder="e.g., I have a persistent headache and feel dizzy..."
                                        value={symptoms}
                                        onChange={(e) => setSymptoms(e.target.value)}
                                        className="min-h-40 mb-4 resize-none bg-background/50 border-border/50"
                                    />

                                    <Button
                                        onClick={handleFindDoctor}
                                        disabled={!symptoms.trim() || isSearching}
                                        className="w-full h-11 text-base font-medium"
                                        size="lg"
                                    >
                                        {isSearching ? (
                                            <>
                                                <div className="mr-2 size-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                                                Finding Doctors...
                                            </>
                                        ) : (
                                            <>
                                                Find Matching Doctors
                                                <ArrowRight className="ml-2 size-5" />
                                            </>
                                        )}
                                    </Button>

                                    <p className="mt-4 text-xs text-center text-muted-foreground">
                                        Your symptoms are confidential and HIPAA compliant
                                    </p>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
            </section>
        </div>
    )
}
