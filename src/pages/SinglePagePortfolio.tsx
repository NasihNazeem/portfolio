import { Github, Linkedin, ExternalLink, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SinglePagePortfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigation = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      id: "rookies",
      title: "Rookies",
      description:
        "Cross-platform fantasy sports app with real-time player data and Elo matchmaking",
      tags: ["React Native", "Firebase", "Redis"],
      year: "2025",
      logo: "/rookies.svg",
      url: "https://github.com/Rookies-Fantasy/rookies-fantasy",
    },
    {
      id: "manifest",
      title: "Manifest",
      description:
        "Warehouse receiving management app with offline-first architecture",
      tags: ["React Native", "Node.js", "Supabase"],
      year: "2025",
      logo: "/manifest.svg",
      url: "https://github.com/NasihNazeem/manifest",
    },
    {
      id: "chirp",
      title: "Chirp",
      description:
        "Full-stack social networking platform with real-time features",
      tags: ["React", "Node.js", "PostgreSQL"],
      year: "2024",
      logo: "/chirp.svg",
      url: "https://github.com/Project-Chirp",
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Cursor spotlight effect - hidden on mobile */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 hidden lg:block"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 100, 70, 0.25), transparent 80%)`,
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row">
          {/* Fixed Left Sidebar */}
          <aside className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-screen py-12 px-4 sm:px-8 lg:p-16 flex flex-col justify-between lg:min-h-screen">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                <a
                  href="/"
                  className="hover:text-muted-foreground transition-colors"
                >
                  Nasih Nazeem
                </a>
              </h1>
              <h2 className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-4">
                Full-Stack Engineer
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-sm">
                Building impactful applications with exceptional user
                experiences.
              </p>

              {/* Navigation */}
              <nav className="hidden lg:block space-y-4 mb-8 lg:mb-12">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block text-left text-sm uppercase tracking-widest transition-colors ${
                      activeSection === item.id
                        ? "text-foreground opacity-100"
                        : "text-muted-foreground opacity-50 hover:opacity-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Footer with social links */}
            <footer className="flex gap-4 sm:gap-6 mt-8 lg:mt-12">
              <a
                href="https://github.com/NasihNazeem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/nasih-nazeem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="tel:+14037007883"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="mailto:nasihnazeem@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </footer>
          </aside>

          {/* Right Content Area */}
          <div className="w-full lg:w-1/2 lg:ml-auto py-8 px-4 sm:px-8 lg:p-16 space-y-16 lg:space-y-24">
            {/* About Section */}
            <section id="about" className="scroll-mt-16">
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 lg:hidden">
                About
              </h2>
              <div className="lg:p-6">
                <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                  <p>
                    I'm a passionate Software Engineer with a background in
                    Electrical Engineering and a strong focus on full-stack
                    application development. From building real-time mobile apps
                    with React Native and Firebase to designing scalable backend
                    systems with Node.js and PostgreSQL, I thrive on turning
                    complex problems into elegant, user-focused solutions.
                  </p>
                  <p>
                    My experience spans across mobile and web development, where
                    I've shipped production apps used by hundreds of users. I'm
                    particularly interested in performance optimization,
                    real-time systems, and creating delightful user experiences.
                  </p>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="scroll-mt-16">
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 lg:hidden">
                Experience
              </h2>
              <div className="space-y-6 group/experience">
                <a
                  href="https://rookiesfantasy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group/card transition-opacity duration-300 group-hover/experience:opacity-50 hover:!opacity-100"
                >
                  <Card className="group bg-transparent border-transparent hover:bg-card hover:border-border hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer hover:rotate-1">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">
                          Rookies
                        </span>
                        <span className="text-sm text-muted-foreground">
                          March 2025 — Present
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CardTitle className="group-hover:text-primary transition-colors">
                          CoFounder and Software Engineer
                        </CardTitle>
                        <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">
                        Built a cross-platform fantasy sports app with React
                        Native and Firebase, featuring real-time player data,
                        custom Elo matchmaking, and a Redis caching layer that
                        reduced API response times by 65%.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                          React Native
                        </span>
                        <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                          Firebase
                        </span>
                        <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                          Redis
                        </span>
                        <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                          Google Cloud Functions
                        </span>
                        <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                          Expo
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </a>

                <a
                  href="https://www.publicissapient.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group/card transition-opacity duration-300 group-hover/experience:opacity-50 hover:!opacity-100"
                >
                  <Card className="group bg-transparent border-transparent hover:bg-card hover:border-border hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer hover:rotate-1">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">
                          Publicis Sapient
                        </span>
                        <span className="text-sm text-muted-foreground">
                          June 2022 — August 2022
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CardTitle className="group-hover:text-primary transition-colors">
                          Software Engineering Intern
                        </CardTitle>
                        <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">
                        Developed a financial mobile app using Spring Boot,
                        React Native, and GraphQL, optimizing API response times
                        by 37% and delivering an award-winning hackathon
                        solution with 93% client satisfaction.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                          Spring Boot
                        </span>
                        <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                          React Native
                        </span>
                        <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                          PostgreSQL
                        </span>
                        <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                          GraphQL
                        </span>
                        <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                          Expo
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="scroll-mt-16">
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 lg:hidden">
                Projects
              </h2>
              <div className="space-y-6 group/projects">
                {projects.map((project) => (
                  <a
                    key={project.id}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group/card transition-opacity duration-300 group-hover/projects:opacity-50 hover:!opacity-100"
                  >
                    <Card className="group bg-transparent border-transparent hover:bg-card hover:border-border hover:scale-105 transition-all duration-300 relative overflow-hidden cursor-pointer hover:shadow-[0_0_15px_rgba(27,30,34,0.5)] hover:rotate-1">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <CardTitle className="group-hover:text-primary transition-colors">
                                {project.title}
                              </CardTitle>
                              <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <CardDescription className="mt-2">
                              {project.description}
                            </CardDescription>
                          </div>
                          <span className="text-xs text-muted-foreground ml-4">
                            {project.year}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="relative">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-secondary px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        {/* Circular logo aligned with bottom of tech tags */}
                        <div className="absolute bottom-0 right-0 size-10 rounded-full m-3 flex items-center justify-center overflow-hidden transition-all duration-300">
                          <img
                            src={project.logo}
                            alt={`${project.title} logo`}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePagePortfolio;
