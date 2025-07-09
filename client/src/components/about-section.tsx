import { CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-background theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer with expertise in modern web technologies and
            a commitment to creating exceptional user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern developer workspace with multiple monitors and coding setup"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Computer Science student at Assam Downtown University with practical experience 
                in web development through internships and personal projects. I've worked on 
                AI-powered fitness applications, e-commerce platforms, and modern web solutions.
                My approach combines analytical thinking with creative problem-solving to build 
                applications that provide real value to users.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">
                What I Do
              </h4>
              <ul className="space-y-3">
                {[
                  "Frontend Development (React, Vue.js, TypeScript)",
                  "Backend Development (Node.js, Python, REST APIs)",
                  "Database Design (MongoDB, PostgreSQL, MySQL)",
                  "Cloud Services (AWS, Docker, CI/CD)",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
