import { useState } from "react";
import { ExternalLink, Eye, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "AI Fitness Tracker",
      description:
        "Developed a Next.js web application leveraging AI to provide personalized fitness recommendations and track user progress. Features exercise guidance, workout planning, and performance analysis with data visualization dashboards.",
      image:
        "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["Next.js", "Google AI Studio", "JavaScript", "ConvexDB"],
      category: ["web", "fullstack"],
      liveUrl: "https://fitness-ai-lyart.vercel.app/",
      githubUrl: "https://github.com/WOLF1X/ai-fitness-trainer",
    },
    {
      id: 2,
      title: "E-commerce Website",
      description:
        "Complete e-commerce application built with React, Node.js, Express, and MongoDB. Features product catalog browsing, secure authentication, shopping cart, payment processing, and automated inventory management.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      category: ["web", "fullstack"],
      liveUrl: "https://fullstack-ecommerce.netlify.app/",
      githubUrl: "#",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects = projects.filter((project) =>
    activeFilter === "all" ? true : project.category.includes(activeFilter)
  );

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      React: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "Node.js": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      MongoDB: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "Vue.js": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "D3.js": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      TypeScript: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
      "React Native": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      Firebase: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      Redux: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      AWS: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      Docker: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      PostgreSQL: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      Stripe: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      JWT: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
      "REST API": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
      AsyncStorage: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      Python: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      Redis: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      "Next.js": "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
      Prisma: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
      NextAuth: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      Express: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      MySQL: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      "Tailwind CSS": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
    };
    return colors[tech] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  };

  return (
    <section id="projects" className="py-20 bg-muted theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className="font-medium"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group relative bg-card overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-bounce-in border-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Removed GitHub code button here */}

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:scale-110 transition-all duration-200 backdrop-blur-sm"
                  >
                    <Eye className="h-5 w-5 text-blue-600" />
                  </a>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={`${getTechColor(tech)} transition-all duration-300 hover:scale-105 animate-fadeInUp`}
                      style={{
                        animationDelay: `${index * 0.2 + techIndex * 0.1}s`,
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-4 pt-2">
                  <Button
                    asChild
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  {/* Removed bottom "Code" button here */}
                </div>
              </CardContent>

              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
