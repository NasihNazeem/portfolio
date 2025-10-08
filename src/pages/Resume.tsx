import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <div className="container py-12">
      <div className="flex justify-between items-start mb-8">
        <h1 className="page-heading mb-0">Resume</h1>
        <Button asChild className="flex items-center gap-2">
          <a
            href="/Resume_NasihMohamedNazeem.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="h-4 w-4" />
            View PDF
          </a>
        </Button>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Nasih Mohamed Nazeem</h2>
        <p className="text-xl text-muted-foreground mb-6">Software Engineer</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Contact Information</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li>Email: nasihnazeem@gmail.com</li>
              <li>Phone: (403) 700-7883</li>
              <li>Location: Calgary, Canada</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Professional Profiles</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li>GitHub: github.com/NasihNazeem</li>
              <li>LinkedIn: linkedin.com/in/nasihnazeem</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="section-heading">Professional Summary</h2>
        <p className="text-muted-foreground">
          Software Engineer with 3 years of experience in full-stack development
          and architectural design. Deep understanding in React, React Native,
          Java, Python, and SQL. A lifelong learner passionate about building
          mobile apps and websites.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="section-heading">Work Experience</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <CardTitle>CoFounder and Software Engineer</CardTitle>
                  <CardDescription className="mt-2">Rookies</CardDescription>
                </div>
                <CardDescription className="mt-2 md:mt-0">
                  March 2025 - Present
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  Composed a cross-platform fantasy sports app with React
                  Native, Tailwind, and Firebase, featuring real-time player
                  data and gameplay.
                </li>
                <li>
                  Integrated an API sync with Firestore and Google Cloud
                  Functions to provide continuous data updates and responsive
                  app performance.
                </li>
                <li>
                  Developed custom algorithmic systems (Elo matchmaking)
                  demonstrating ability to create complex, performant solutions
                  for enterprise-scale user engagement.
                </li>
                <li>
                  Built production-grade caching layer using Redis, reducing API
                  response times by 65% and enabling real-time data
                  synchronization across distributed systems.
                </li>
                <li>
                  Designed full app and cloud infrastructure and implemented
                  CI/CD using Expo Application Services for scalable, automated
                  deployment.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <CardTitle>Software Engineering Intern</CardTitle>
                  <CardDescription className="mt-2">
                    Publicis Sapient
                  </CardDescription>
                </div>
                <CardDescription className="mt-2 md:mt-0">
                  June 2022 - August 2022
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
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
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="section-heading">Education</h2>
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <CardTitle>
                  Bachelor's Degree in Electrical Engineering (BSc)
                </CardTitle>
                <CardDescription className="mt-2">
                  University of Calgary
                </CardDescription>
              </div>
              <CardDescription className="mt-2 md:mt-0">
                September 2019 - November 2023
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Minor in Computer Engineering
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h2 className="section-heading">Projects</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <CardTitle>Chirp</CardTitle>
                  <CardDescription className="mt-2">
                    React, Redux, Node.js, PostgreSQL, Material UI, Render
                  </CardDescription>
                </div>
                <CardDescription className="mt-2 md:mt-0">
                  January 2023 - March 2025
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  Developed a scalable chat interface using React, TypeScript,
                  and Redux Toolkit, enabling real-time messaging.
                </li>
                <li>
                  Integrated user authentication via JWT session management,
                  securing access for over 100+ sessions during testing.
                </li>
                <li>
                  Engineered state management using Redux for messages, posts,
                  and user data, improving app performance by over 40%.
                </li>
                <li>
                  Collaborated on CI/CD automation using GitHub Actions,
                  reducing deployment time by 60% and streamlining testing
                  workflows during active development phases.
                </li>
                <li>
                  Deployed all infrastructure onto Render, hosting the Node.js
                  backend, React frontend and PostgreSQL database.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <CardTitle>Luuqad</CardTitle>
                  <CardDescription className="mt-2">
                    React Native, Node.js, Expo, PostgreSQL, TypeScript
                  </CardDescription>
                </div>
                <CardDescription className="mt-2 md:mt-0">
                  December 2023 - February 2025
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  Designed a full-stack ed-tech mobile application using React
                  Native, PostgreSQL, Node.js and Expo capable of handling more
                  than 100 active users.
                </li>
                <li>
                  Deployed GitHub Actions to handle unit testing, and all CI/CD
                  tooling for branch protection and quality code review.
                </li>
                <li>
                  Implemented secure user authentication with Google and Apple
                  sign-in, enabling seamless onboarding and protecting user
                  access.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="section-heading">Technical Skills</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">Languages</h3>
            <p className="text-muted-foreground">
              JavaScript / TypeScript, SQL, C / C++, Java, C#, Python, Rust
              (learning), HTML/CSS, Bash, PHP
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Frameworks</h3>
            <p className="text-muted-foreground">
              Spring Boot, .NET, React.js, React Native, Node.js, Angular,
              Vue.js, Redux, Mobx, Express.js, Google Cloud Functions,
              Hadoop/Apache Spark
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Databases</h3>
            <p className="text-muted-foreground">
              PostgreSQL, MySQL, Microsoft SQL Server, Firebase, MongoDB
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Tools</h3>
            <p className="text-muted-foreground">
              Amazon Web Services, Git, Jira/Atlassian, Docker, Postman, REST
              APIs, GraphQL, Jest, xUnit, JUnit, Microsoft Office
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Personal</h3>
            <p className="text-muted-foreground">
              Strong analytical and organizational abilities, proactive
              self-starter, creative problem solving approach, effective team
              collaborator
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="section-heading">Certifications</h2>
        <Card>
          <CardHeader>
            <CardTitle>
              IBM - Full Stack Software Developer Specialization
            </CardTitle>
            <CardDescription className="mt-2">
              November 2023 - April 2024
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Introduction to Cloud Computing</li>
              <li>Developing AI Applications with Python and Flask</li>
              <li>
                Introduction to Containers with Docker, Kubernetes, and
                OpenShift
              </li>
              <li>
                Application Development Using Microservices and Serverless
              </li>
              <li>Full Stack Application Development Capstone Project</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resume;
