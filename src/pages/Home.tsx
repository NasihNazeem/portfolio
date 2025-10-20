import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Download, FileText } from "lucide-react";

const Home = () => {
  const featuredProjects = [
    {
      id: "rookies",
      title: "Rookies",
      description:
        "A cross-platform fantasy sports app with real-time player data, Elo matchmaking, and enterprise-scale performance optimizations.",
      image: "/rookies.svg",
      tags: ["React Native", "Firebase", "Redis"],
    },
    {
      id: "chirp",
      title: "Chirp",
      description:
        "Flutter into digital conversation with this social networking platform.",
      image: "/chirp.svg",
      tags: ["React", "Node.js", "PostgreSQL"],
    },
    {
      id: "manifest",
      title: "Manifest",
      description:
        "A mobile-first warehouse management app that digitizes shipment receiving with offline-first barcode scanning, discrepancy tracking, and cloud sync.",
      image: "/manifest.svg",
      tags: ["React Native", "Node.js", "Supabase"],
    },
  ];

  const skillStacks = {
    frontend: [
      "React",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      "HTML & CSS",
      "Expo",
    ],
    backend: [
      "Node.js",
      "Express",
      "Spring Boot",
      "Java",
      "GraphQL",
      "REST APIs",
      "Firebase",
      "Google Cloud Functions",
    ],
    database: [
      "PostgreSQL",
      "MongoDB",
      "Firestore",
      "Supabase",
      "Redis",
      "SQL",
      "NoSQL",
    ],
    devops: [
      "Git & GitHub",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Expo Application Services",
      "AWS",
      "Azure",
      "TestFlight",
    ],
  };

  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="hero-heading mb-6">
              Hi, I'm <span className="text-primary">Nasih</span>
              .<br />
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              I'm a full-stack engineer obsessed with building impactful apps
              with user experiences key to the entire process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/projects">
                  View My Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <a
                  href="/Resume_NasihMohamedNazeem.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  View Resume
                </a>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary/50">
        <div className="container">
          <div className="mb-8">
            <h2 className="section-heading">Featured Projects</h2>
            <p className="text-muted-foreground">
              Check out some of my recent work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden flex flex-col h-full"
              >
                <div className="aspect-video bg-muted/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="flex-grow">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-secondary px-2 py-1 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/projects/${project.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="mb-8">
          <h2 className="section-heading">Skills & Expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Frontend Development</CardTitle>
              <CardDescription>
                Building responsive and interactive user interfaces
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillStacks.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary px-3 py-1 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Backend Development</CardTitle>
              <CardDescription>
                Creating scalable server-side applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillStacks.backend.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary px-3 py-1 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Database & Data Management</CardTitle>
              <CardDescription>
                Managing and optimizing data storage solutions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillStacks.database.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary px-3 py-1 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>DevOps & Tools</CardTitle>
              <CardDescription>
                Deployment, automation, and infrastructure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillStacks.devops.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary px-3 py-1 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container py-20 bg-secondary/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading">About Me</h2>
          <p className="mb-6 text-muted-foreground">
            I'm a passionate Software Engineer with a background in Electrical
            Engineering and a strong focus on full-stack application
            development. From building real-time mobile apps with React Native
            and Firebase to designing scalable backend systems with Node.js and
            PostgreSQL, I thrive on turning complex problems into elegant,
            user-focused solutions.
          </p>
          <Button asChild variant="outline">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
