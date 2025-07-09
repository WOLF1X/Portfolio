import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const services = [
    "Web Development",
    "Mobile Apps",
    "Cloud Solutions",
    "Consulting",
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/WOLF1X", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/binit-d-106abb136/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/binit_deb7", label: "Twitter" },
    { icon: Mail, href: "mailto:binitdeb5396@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Binit Deb</h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 Binit Deb. All rights reserved. | Designed with ❤️ and
            modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
