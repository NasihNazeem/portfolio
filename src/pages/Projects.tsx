import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: "rookies",
      title: "Rookies",
      description:
        "A cross-platform fantasy sports app with real-time player data, Elo matchmaking, and enterprise-scale performance optimizations.",
      image: "/rookies.svg",
      tags: [
        "React Native",
        "Firebase",
        "Redis",
        "Google Cloud Functions",
        "Expo",
      ],
    },
    {
      id: "chirp",
      title: "Chirp",
      description:
        "Chirp is a social media app project that platforms users to post, message, share content to their followers and others.",
      image: "/chirp.svg",
      tags: [
        "React with TypeScript",
        "Node.js",
        "Redux",
        "PostgreSQL",
        "Material UI",
      ],
    },
    {
      id: "luuqad",
      title: "Luuqad",
      description:
        "A full-stack ed-tech mobile application for language learning, featuring secure authentication and real-time user management.",
      image: "/luuqad.svg",
      tags: ["React Native", "Node.js", "Expo", "PostgreSQL", "TypeScript"],
    },
    {
      id: "pigeon",
      title: "Pigeon",
      description:
        "Pigeon is a personal expense management application that allows users to feel more in control of their money.",
      image: "/pigeon.svg",
      tags: [
        "React Native",
        "Expo",
        "Spring Boot (Java)",
        "GraphQL",
        "PostgreSQL",
      ],
    },
    {
      id: "manifest",
      title: "Manifest",
      description:
        "A mobile-first warehouse management app that digitizes shipment receiving with offline-first barcode scanning, discrepancy tracking, and cloud sync.",
      image: "/manifest.svg",
      tags: ["React Native", "Expo", "Redux", "Supabase", "Node.js", "Express"],
    },
    {
      id: "urlShortener",
      title: "URL Shortener",
      description:
        "A distributed URL shortening service with microservices architecture using Go backend with gRPC inter-service communication, Vue.js frontend, and real-time analytics tracking.",
      image: "/url-shortener.svg",
      tags: [
        "Golang/Go",
        "Vue.js",
        "gRPC",
        "Protocol Buffers",
        "Microservices",
        "REST API",
      ],
    },
  ];

  return (
    <div className="container py-12">
      <h1 className="page-heading">Projects</h1>

      <p className="max-w-3xl mb-10 text-muted-foreground">
        Here's a collection of projects I've worked on. I try to learn something
        new with every project!
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden flex flex-col">
            <div className="aspect-video bg-muted/50 flex-1">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="bg-secondary px-2 py-1 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-xs text-muted-foreground px-2 py-1">
                    +{project.tags.length - 3} more
                  </span>
                )}
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button asChild variant="outline" className="w-full">
                <Link to={`/projects/${project.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
