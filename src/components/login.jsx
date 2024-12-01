import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Package, Users, Bell, Mail, Lock, ChevronRight } from 'lucide-react'
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import { Checkbox } from "./checkbox"
import { MessageSquare } from 'lucide-react';
import { BarChart2 } from 'lucide-react';

import { OnboardingSlide } from "./OnboardingSlide"
import logo from '../assets/logoo.png';



const slides = [
  {
    icon: Users,
    title: "Service Communautaire",
    description: "Rejoignez notre communauté grandissante et bénéficiez d'une expérience postale collaborative et moderne.",
  },
  {
    icon: MessageSquare,
    title: "Feedback Immédiat",
    description: "Permet de suivre l'engagement des clients et associer chaque action à un employé.",
  },
  {
    icon: BarChart2,
    title: "Satisfaction Client",
    description: "Permet de surveiller la satisfaction des clients en temps réel.",
  },
]

export default function LoginPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Logique de connexion à implémenter
    console.log("Tentative de connexion avec:", email, password)
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left Side - Onboarding */}
      <div className="relative hidden overflow-hidden bg-[#003DA5] lg:block">
        {/* Animated Background */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0"
        >
          <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-yellow-400 opacity-20 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-blue-400 opacity-20 blur-3xl" />
        </motion.div>

        {/* Slides Container */}
        <div className="relative flex h-[calc(100vh-8rem)] flex-col justify-center">
          {slides.map((slide, index) => (
            <OnboardingSlide key={index} {...slide} isActive={currentSlide === index} />
          ))}

          {/* Slide Navigation */}
          <div className="absolute bottom-12 left-0 right-0 flex justify-center space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="group relative p-2"
              >
                <div className="absolute inset-0 rounded-full bg-yellow-400/20 scale-0 transition-transform duration-300 group-hover:scale-100" />
                <div
                  className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                    currentSlide === index ? "bg-yellow-400" : "bg-white/50 hover:bg-white/70"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex items-center justify-center p-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="text-center">
            <img src={logo} alt="Algérie Poste" className="h-25 w-auto mx-auto mb-8" />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Bienvenue</h2>
            <p className="mt-2 text-gray-600">
              Connectez-vous à votre espace administrateur
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Adresse e-mail</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@algerieposte.dz"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm leading-none">
                  Se souvenir de moi
                </Label>
              </div>
              <Button variant="link" className="text-sm text-[#003DA5] hover:text-[#002d7a]">
                Mot de passe oublié?
              </Button>
            </div>

            <Button type="submit" className="w-full bg-[#003DA5] hover:bg-[#002d7a]">
              <span>Se connecter</span>
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Plateforme sécurisée
                </span>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

