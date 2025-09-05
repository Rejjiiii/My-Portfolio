import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        tittle: "Sas Landing Page",
        description: "Project testing",
        image: "/projects/ADMIN.jpg",
        tags: ["React", "Tailwind", "Supabase"],
        demoUrl: "#",
        githubUrl: "#"

    },
    {
        id: 2,
        tittle: "Sas Landing Page",
        description: "Project testing",
        image: "/projects/ADMIN.jpg",
        tags: ["React", "Tailwind", "Supabase"],
        demoUrl: "#",
        githubUrl: "#"

    },
    {
        id: 3,
        tittle: "Sas Landing Page",
        description: "Project testing",
        image: "/projects/ADMIN.jpg",
        tags: ["React", "Tailwind", "Supabase"],
        demoUrl: "#",
        githubUrl: "#"

    },
    {
        id: 4,
        tittle: "Sas Landing Page",
        description: "Project testing",
        image: "/projects/ADMIN.jpg",
        tags: ["React", "Tailwind", "Supabase"],
        demoUrl: "#",
        githubUrl: "#"

    },
    {
        id: 5,
        tittle: "Sas Landing Page",
        description: "Project testing",
        image: "/projects/ADMIN.jpg",
        tags: ["React", "Tailwind", "Supabase"],
        demoUrl: "#",
        githubUrl: "#"

    },
    {
        id: 6,
        tittle: "Sas Landing Page",
        description: "Project testing",
        image: "/projects/ADMIN.jpg",
        tags: ["React", "Tailwind", "Supabase"],
        demoUrl: "#",
        githubUrl: "#"

    },
]
export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-4 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    注目 <span className="text-primary">プロジェクト</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    こちらは私の最近のプロジェクトの一部です。
                    それぞれのプロジェクトは、細部へのこだわり、パフォーマンス、そしてユーザー体験に配慮して丁寧に制作しました。
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((projects, key) => (
                        <div key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={projects.image} alt={projects.tittle} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {projects.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1">
                                    {projects.tittle}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {projects.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={projects.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href={projects.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/Rejjiiii">
                        GitHubを見る <ArrowRight size={16} />
                    </a>

                </div>
            </div>
        </section>
    )
}