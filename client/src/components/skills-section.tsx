import { useEffect, useRef, useState } from "react";
import { Sparkles, TrendingUp } from "lucide-react";

export function SkillsSection() {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: "Python", level: 90, color: "bg-yellow-600" },
    { name: "React / Next.js", level: 88, color: "bg-blue-600" },
    { name: "Node.js", level: 85, color: "bg-green-600" },
    { name: "JavaScript", level: 80, color: "bg-indigo-600" },
    { name: "HTML / CSS", level: 95, color: "bg-orange-600" },
    { name: "MySQL / DBMS", level: 78, color: "bg-purple-600" },
    { name: "Data Structures", level: 82, color: "bg-gray-600" },
    { name: "Data Analytics", level: 75, color: "bg-cyan-600" },
  ];

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "💚" },
    { name: "Next.js", icon: "🔺" },
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "💛" },
    { name: "HTML/CSS", icon: "🎨" },
    { name: "MySQL", icon: "🗄️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Git", icon: "📝" },
    { name: "MS Excel", icon: "📊" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            const skillBars = entry.target.querySelectorAll(".skill-bar");
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.classList.add("animate");
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-background theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency
            levels across various technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Technical skills visualization showing programming languages and development tools on multiple screens"
                className="relative rounded-xl shadow-2xl w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300"></div>
            </div>
          </div>

          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} ref={skillsRef}>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <h3 className="text-3xl font-bold text-foreground">
                Technical Proficiency
              </h3>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-item group relative p-4 rounded-lg bg-card/50 hover:bg-card transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-foreground font-semibold text-lg group-hover:text-blue-600 transition-colors">
                      {skill.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 ${hoveredSkill === index ? 'text-blue-600' : 'text-muted-foreground'} transition-colors`}>
                        {skill.level}%
                      </span>
                      {hoveredSkill === index && (
                        <Sparkles className="h-4 w-4 text-yellow-500 animate-pulse" />
                      )}
                    </div>
                  </div>
                  <div className="relative w-full bg-muted rounded-full h-4 overflow-hidden">
                    <div
                      className={`skill-bar ${skill.color} h-4 rounded-full relative overflow-hidden transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 150}ms`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                  
                  {/* Floating indicator */}
                  {hoveredSkill === index && (
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className={`mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Technology Stack
            </h3>
            <p className="text-lg text-muted-foreground">
              Tools and technologies I work with
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center space-y-3 p-6 bg-card rounded-xl hover:bg-card/80 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-2 cursor-pointer animate-bounce-in border border-border/50 hover:border-blue-500/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl group-hover:scale-125 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-sm font-semibold text-foreground text-center group-hover:text-blue-600 transition-colors">
                  {tech.name}
                </span>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
