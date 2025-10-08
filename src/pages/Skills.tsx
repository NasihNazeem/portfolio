import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Skills = () => {
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
    database: ["PostgreSQL", "MongoDB", "Firestore", "Redis", "SQL", "NoSQL"],
    devops: [
      "Git & GitHub",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Expo Application Services",
      "AWS",
      "Azure",
    ],
  };

  const softSkills = [
    "Communication",
    "Problem Solving",
    "Team Collaboration",
    "Time Management",
    "Adaptability",
    "Critical Thinking",
  ];

  return (
    <div className="container py-12">
      <h1 className="page-heading">Skills & Expertise</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
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

      <div>
        <h2 className="section-heading">Soft Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {softSkills.map((skill) => (
            <Card key={skill} className="border-2">
              <CardHeader className="py-4">
                <CardTitle className="text-lg">{skill}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="section-heading">Experience</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>CoFounder and Software Engineer</CardTitle>
              <CardDescription>Rookies | March 2025 - Present</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
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
              <CardTitle>Software Engineering Intern</CardTitle>
              <CardDescription>
                Publicis Sapient | June 2022 - August 2022
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
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

      <div className="mt-12">
        <h2 className="section-heading">Education</h2>
        <Card>
          <CardHeader>
            <CardTitle>
              Bachelor's Degree in Electrical Engineering (BSc)
            </CardTitle>
            <CardDescription>
              University of Calgary | September 2019 - November 2023
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>Minor in Computer Engineering</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <h2 className="section-heading">Certifications</h2>
        <Card>
          <CardHeader>
            <CardTitle>
              IBM - Full Stack Software Developer Specialization
            </CardTitle>
            <CardDescription>November 2023 - April 2024</CardDescription>
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

export default Skills;
