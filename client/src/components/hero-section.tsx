import { ArrowRight, Mail, Github, Linkedin, Twitter, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const roles = [
    "Full Stack Developer",
    "React Specialist",
    "Node.js Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-violet-50 dark:from-background dark:to-muted">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-400/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Interactive cursor follower */}
      <div
        className="absolute w-4 h-4 bg-blue-500/20 rounded-full pointer-events-none z-10 transition-all duration-75 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: "scale(1)",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <Sparkles className="w-3 h-3 text-blue-400" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className={`space-y-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium backdrop-blur-sm">
            <Code className="w-4 h-4 animate-pulse" />
            Available for new opportunities
          </div>

          <div>
            <p className="text-primary font-medium text-lg mb-2 animate-fadeInUp">Hello, I'm</p>
            <h1 className="text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-fadeInUp delay-100">
              Binit <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-gradient">Deb</span>
            </h1>
            <div className="text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6 h-16 flex items-center justify-center">
              <span key={currentRole} className="inline-block animate-slideUp">
                {roles[currentRole]}
              </span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-300">
            Analytical computer science student with hands-on experience in web development.
            Skilled in React, Node.js, Next.js, and AI integration. Currently pursuing B.Tech in CSE
            with a passion for creating innovative web solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fadeInUp delay-500">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-2 hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-8 animate-fadeInUp delay-700">
            <a href="https://github.com/WOLF1X" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <Github className="h-7 w-7 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/binit-d-106abb136/" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <Linkedin className="h-7 w-7 text-blue-600 group-hover:text-blue-700 transition-colors" />
            </a>
            <a href="https://twitter.com/binit_deb7" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <Twitter className="h-7 w-7 text-sky-500 group-hover:text-sky-600 transition-colors" />
            </a>
            <a href="mailto:binitdeb5396@gmail.com" className="group p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <Mail className="h-7 w-7 text-green-600 group-hover:text-green-700 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
