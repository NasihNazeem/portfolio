import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const ProjectDetail = () => {
  const { projectId } = useParams();

  const projects = {
    rookies: {
      title: "Rookies",
      subtitle: "Cross-Platform Fantasy Sports App",
      description:
        "Rookies is a cross-platform fantasy sports application that provides real-time player data and engaging gameplay. The app features sophisticated matchmaking algorithms and enterprise-scale performance optimizations to deliver a seamless user experience.",
      image: "/rookies.svg",
      tags: [
        "React Native",
        "Tailwind",
        "Firebase",
        "Redis",
        "Google Cloud Functions",
        "Expo",
      ],
      liveUrl: "https://github.com/Rookies-Fantasy/rookies-fantasy",
      githubUrl: "https://github.com/Rookies-Fantasy/rookies-fantasy",
      features: [
        "Real-time player data and gameplay",
        "Custom Elo matchmaking algorithm",
        "Caching layer with Redis",
        "API sync with Firestore for continuous data updates",
        "Cross-platform support (iOS & Android)",
        "Real-time data synchronization across distributed systems",
      ],
      challenges:
        "The main challenge was achieving real-time data synchronization across distributed systems while maintaining high performance. We implemented a production-grade caching layer using Redis and optimized API integration with Firestore to reduce response times.",
      contributions:
        "As one of the core engineers, I composed the entire cross-platform app using React Native, Tailwind, and Firebase. I integrated API sync with Firestore and Firebase Functions, developed custom Elo matchmaking algorithms, built a Redis caching layer to handle constant fetching, and designed the full app and cloud infrastructure with CI/CD using Expo Application Services.",
      technologies: {
        frontend: ["React Native", "Tailwind CSS", "Expo"],
        backend: ["Firebase", "Firestore", "Google Cloud Functions", "Redis"],
        deployment: ["Expo Application Services (EAS)", "CI/CD"],
      },
    },
    chirp: {
      title: "Chirp ",
      subtitle: "Full-Stack Social Networking Platform",
      description:
        "Chirp is a social media app project that will allow users to share content for their followers to see. Users will be able to like, comment on, and repost other people's posts. Users can also interact with each other by a direct messaging system.",
      image: "/chirp-timeline.png",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe API"],
      liveUrl: "https://github.com/Project-Chirp",
      githubUrl: "https://github.com/Project-Chirp",
      features: [
        "User authentication and session management",
        "Create, like, and delete posts",
        "Infinite scrolling feed of posts",
        "Follow and unfollow other users",
        "User profile pages with follower stats and post history",
        "Toast notifications for user actions",
      ],
      challenges:
        "One of the main challenges was balancing complex, performant queries on simple tables versus a more normalized database with simpler queries. We carefully evaluated the tradeoffs between query complexity and schema flexibility to ensure scalability without sacrificing speed.",
      contributions:
        "Built a scalable real-time chat interface with React, TypeScript, and Redux Toolkit, secured over 100+ sessions using JWT, optimized performance by 40% with modular state slices, and reduced deployment time by 60% through CI/CD automation with GitHub Actions.",
      technologies: {
        frontend: [
          "React",
          "Redux Toolkit",
          "Material UI",
          "Tanstack Query",
          "Vite",
          "React Hook Form",
          "Auth0",
        ],
        backend: [
          "Node.js",
          "Express",
          "PostgreSQL",
          "JWT Authentication",
          "Axios",
        ],
        deployment: ["Render", "GitHub Actions"],
      },
    },
    luuqad: {
      title: "Luuqad",
      subtitle: "Ed-Tech Language Learning App",
      description:
        "Luuqad is a full-stack ed-tech mobile application designed for language learning. Built with React Native, PostgreSQL, Node.js and Expo, the app is capable of handling more than 100 active users with secure authentication and seamless onboarding.",
      image: "/luuqad.svg",
      tags: [
        "React Native",
        "Node.js",
        "Expo",
        "PostgreSQL",
        "TypeScript",
        "GitHub Actions",
      ],
      liveUrl: "https://github.com/luuqad-app",
      githubUrl: "https://github.com/luuqad-app",
      features: [
        "Secure user authentication with Google and Apple sign-in",
        "Full-stack mobile application architecture",
        "Real-time user management for 100+ active users",
        "Cross-platform support (iOS & Android)",
        "Seamless onboarding experience",
        "Protected user access and data security",
      ],
      challenges:
        "The main challenge was implementing secure authentication flows for both Google and Apple sign-in while ensuring seamless onboarding. We had to carefully manage user sessions and protect user data across different authentication providers, maintaining a consistent experience regardless of the sign-in method chosen.",
      contributions:
        "I designed the full-stack ed-tech mobile application architecture using React Native, PostgreSQL, Node.js and Expo. I deployed GitHub Actions to handle unit testing and all CI/CD tooling for branch protection and quality code review. Additionally, I implemented secure user authentication with Google and Apple sign-in, enabling seamless onboarding and protecting user access.",
      technologies: {
        frontend: ["React Native", "Expo", "TypeScript"],
        backend: ["Node.js", "PostgreSQL"],
        deployment: ["GitHub Actions", "CI/CD"],
      },
    },
    pigeon: {
      title: "Pigeon",
      subtitle: "Expense Management App",
      description:
        "Pigeon is a personal expense management application that allows users to feel more in control of their money. ",
      image: "/pigeon-example.png",
      tags: [
        "React Native",
        "Expo",
        "PostgreSQL",
        "GraphQL",
        "Spring Boot",
        "Java",
        "Docker Compose",
        "Apollo",
        "Azure",
        "Caddy",
      ],
      liveUrl: "https://github.com/ps-toronto-team-4",
      githubUrl: "https://github.com/ps-toronto-team-4",
      features: [
        "Adding and categorizing expenses",
        "Modifying expense details",
        "View and filter expenses",
        "Add a budget to a category",
        "Modifying budget details",
        "Summarizing expenses over time",
        "Comparing expenses vs budgets",
        "Providing insights on spending behaviour",
      ],
      challenges:
        "Ngrok is challenging on the frontend because its dynamic URLs require frequent updates, so it should be handled by using environment variables or automation scripts to keep API endpoints in sync during development.",
      contributions:
        "I designed the user authentication flow for user signups using JWT Authentication. Additionally, I worked on the expense reporting product requirements where users can anaylze how they spent their money previously along with providing insights on how they are doing.",
      technologies: {
        frontend: ["React Native", "Expo", "Victory Chart", "CSS"],
        backend: ["Spring Boot", "Java", "PostgreSQL", "GraphQL", "Apollo"],
        deployment: ["Azure", "Docker Compose", "GitHub Actions", "Caddy"],
      },
    },
  };

  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="container py-12 text-center">
        <h1 className="page-heading">Project Not Found</h1>
        <p className="mb-8">
          Sorry, the project you're looking for doesn't exist.
        </p>
        <Button asChild>
          <Link to="/projects">Back to Projects</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="mb-8">
        <Button variant="ghost" asChild className="px-0 mb-4">
          <Link to="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
        <h1 className="page-heading mb-2">{project.title}</h1>
        <p className="text-xl text-muted-foreground">{project.subtitle}</p>
      </div>

      {/* Project Image */}
      <div className="rounded-lg overflow-hidden bg-muted/50 mb-8">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Project Links */}
      <div className="flex flex-wrap gap-4 mb-8">
        {project?.liveUrl && (
          <Button asChild>
            <a
              href={project?.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}

        {project.githubUrl && (
          <Button variant="outline" asChild>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View Source
            </a>
          </Button>
        )}
      </div>

      {/* Project Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-secondary px-3 py-1 text-sm rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Project Description */}
      <div className="mb-8">
        <h2 className="section-heading">Overview</h2>
        <p className="text-muted-foreground">{project.description}</p>
      </div>

      {/* Project Features */}
      <div className="mb-8">
        <h2 className="section-heading">Key Features</h2>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Project Challenges */}
      <div className="mb-8">
        <h2 className="section-heading">Challenges & Solutions</h2>
        <p className="text-muted-foreground">{project.challenges}</p>
      </div>

      {/* Project Contributions */}
      <div className="mb-8">
        <h2 className="section-heading">My Contributions</h2>
        <p className="text-muted-foreground">{project.contributions}</p>
      </div>

      {/* Project Technologies */}
      <div>
        <h2 className="section-heading">Technologies Used</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium mb-2">Frontend</h3>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              {project.technologies.frontend.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-2">Backend</h3>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              {project.technologies.backend.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-2">Deployment</h3>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              {project.technologies.deployment.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
