import { GraduationCap, Briefcase, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function EducationSection() {
  const education = [
    {
      degree: "B.Tech, Computer Science & Engineering",
      institution: "Assam Downtown University",
      location: "Guwahati, Assam",
      period: "2022 - 2026",
      status: "Currently Pursuing",
    },
    {
      degree: "Senior Secondary (XII), CBSE Science",
      institution: "Kendriya Vidyalaya NIT Silchar",
      location: "Silchar, Assam",
      period: "2021",
      status: "Completed",
    },
  ];

  const experience = [
    {
      title: "Web Development Internship",
      company: "Myjobgrow",
      location: "Virtual",
      period: "July 2024 - November 2024",
      description: [
        "Developed and maintained web applications using HTML, CSS, and JavaScript",
        "Worked on front-end development with React and Angular frameworks",
        "Enhanced cross-browser compatibility and user experience",
        "Collaborated with development team on project goals and technical requirements",
      ],
    },
  ];

  const certifications = [
    {
      name: "Data Analytics Job Simulation",
      issuer: "Virtual Platform",
      date: "June 2025",
    },
    {
      name: "Course On Computer Concepts (CCC)",
      issuer: "NIELIT",
      date: "August 2019",
    },
  ];

  return (
    <section id="education" className="py-20 bg-muted theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Education & Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey and professional experience in computer science and web development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-card">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-primary font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground text-sm mb-2">
                      {edu.location} • {edu.period}
                    </p>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {edu.status}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-primary" />
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} className="bg-card">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {exp.title}
                    </h4>
                    <p className="text-primary font-medium mb-1">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4">
                      {exp.location} • {exp.period}
                    </p>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-primary font-medium mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {cert.date}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}