import { Github, Linkedin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SinglePagePortfolio = () => {
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
    },
    {
      id: "manifest",
      title: "Manifest",
      description:
        "Warehouse receiving management app with offline-first architecture",
      tags: ["React Native", "Node.js", "Supabase"],
      year: "2025",
      logo: "/manifest.svg",
    },
    {
      id: "chirp",
      title: "Chirp",
      description:
        "Full-stack social networking platform with real-time features",
      tags: ["React", "Node.js", "PostgreSQL"],
      year: "2024",
      logo: "/chirp.svg",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex">
          {/* Fixed Left Sidebar */}
          <aside className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-screen p-8 lg:p-16 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                Nasih Nazeem
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground mb-4">
                Full-Stack Engineer
              </h2>
              <p className="text-muted-foreground mb-8 max-w-sm">
                Building impactful applications with exceptional user
                experiences.
              </p>

              {/* Navigation */}
              <nav className="hidden lg:block space-y-4 mb-12">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-left text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Footer with social links */}
            <footer className="flex gap-6 mt-12">
              <a
                href="https://github.com/NasihNazeem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/nasih-nazeem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </footer>
          </aside>

          {/* Right Content Area */}
          <div className="w-full lg:w-1/2 lg:ml-auto p-8 lg:p-16 space-y-24">
            {/* About Section */}
            <section id="about" className="scroll-mt-16">
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 lg:hidden">
                About
              </h2>
              <div className="space-y-4 text-muted-foreground">
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
                  particularly interested in performance optimization, real-time
                  systems, and creating delightful user experiences.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="scroll-mt-16">
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 lg:hidden">
                Experience
              </h2>
              <div className="space-y-12">
                <div className="group">
                  <div className="text-xs text-muted-foreground mb-2">
                    March 2025 — Present
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    CoFounder and Software Engineer · Rookies
                  </h3>
                  <ul className="text-muted-foreground text-sm mb-3 space-y-2 list-disc list-inside">
                    <li>
                      Composed a cross-platform end-to-end fantasy sports app
                      with React Native, Tailwind ensuring responsive design,
                      and Firebase, featuring real-time player data and
                      gameplay.
                    </li>
                    <li>
                      Integrated an API sync with Firestore and Google Cloud
                      Functions to provide continuous data updates and
                      responsive app performance.
                    </li>
                    <li>
                      Developed custom algorithmic systems (Elo matchmaking)
                      demonstrating ability to create complex, performant
                      solutions for enterprise-scale user engagement.
                    </li>
                    <li>
                      Built production-grade caching layer using Redis, reducing
                      API response times by 65% and enabling real-time data
                      synchronization across distributed systems.
                    </li>
                    <li>
                      Designed full app and cloud infrastructure and implemented
                      CI/CD using Expo Application Services for scalable,
                      automated deployment.
                    </li>
                  </ul>
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
                </div>

                <div className="group">
                  <div className="text-xs text-muted-foreground mb-2">
                    June 2022 — August 2022
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    Software Engineering Intern · Publicis Sapient
                  </h3>
                  <ul className="text-muted-foreground text-sm mb-3 space-y-2 list-disc list-inside">
                    <li>
                      Developed a financial mobile application using Spring Boot
                      microservices, React Native, PostgreSQL, and GraphQL.
                    </li>
                    <li>
                      Engineered the development environment using the Expo
                      application to handle developing Android and iOS.
                    </li>
                    <li>
                      Optimized API response time by 37% through GraphQL
                      integration, enhancing database querying and application
                      performance.
                    </li>
                    <li>
                      Delivered a award-winning solution in a company hackathon,
                      achieving a 93% client satisfaction score.
                    </li>
                  </ul>
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
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="scroll-mt-16">
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 lg:hidden">
                Projects
              </h2>
              <div className="space-y-6">
                {projects.map((project) => (
                  <Card
                    key={project.id}
                    className="group hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="mt-2">
                            {project.description}
                          </CardDescription>
                        </div>
                        <span className="text-xs text-muted-foreground">
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
                      <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full p-3 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:-rotate-12">
                        <img
                          src={project.logo}
                          alt={`${project.title} logo`}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </CardContent>
                  </Card>
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
