import { useState } from "react"
import { cn } from "@/lib/utils"

const skills = [
    // Frontend
    { name: "HTML/CSS", level: 95, category: "Frontend" },
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "React", level: 95, category: "Frontend" },
    { name: "Tailwind CSS", level: 95, category: "Frontend" },
    { name: "Next.js", level: 95, category: "Frontend" },

    // Backend
    { name: "Java(Springboot)", level: 95, category: "Backend" },
    { name: "Node.js", level: 95, category: "Backend" },
    { name: "Express", level: 90, category: "Backend" },
    { name: "MongoDB", level: 95, category: "Backend" },
    { name: "PostgreSQL", level: 95, category: "Backend" },
    { name: "MySQL", level: 95, category: "Backend" },

    // Tools
    { name: "Git/GitHub", level: 95, category: "Tools" },
    { name: "Figma", level: 90, category: "Tools" },
    { name: "VS Code", level: 95, category: "Tools" },
    { name: "AWS", level: 95, category: "Tools" },
]

const catergories = ["all", "Frontend", "Backend", "Tools"];

export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    私<span className="text-primary">のスキル</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {catergories.map((catergory, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(catergory)}
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === catergory ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}>
                            {catergory}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skills, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skills.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: skills.level + "%" }} />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skills.level}%</span>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}