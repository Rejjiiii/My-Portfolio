// import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/sections/HeroSection"
import { AboutSection } from "../components/sections/AboutSection"
import { SkillsSection } from "../components/sections/SkillsSection"
import { ProjectsSection } from "../components/sections/ProjectsSection"
import { ContactSection } from "../components/sections/ContactSection"

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      {/* <ThemeToggle /> */}

      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
    </div>
  )
}
