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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Features = () => {
  // Sample blog post data
  const posts = [
    {
      id: "mastering-react-hooks",
      title: "Mastering React Hooks: A Comprehensive Guide",
      excerpt:
        "Learn how to effectively use React Hooks to simplify your components and improve code reusability.",
      date: "May 15, 2023",
      category: "React",
      readTime: "8 min read",
      image: "/placeholder.svg",
    },
    {
      id: "typescript-best-practices",
      title: "TypeScript Best Practices for Large Scale Applications",
      excerpt:
        "Discover how to leverage TypeScript's features to build maintainable and scalable applications.",
      date: "April 3, 2023",
      category: "TypeScript",
      readTime: "12 min read",
      image: "/placeholder.svg",
    },
    {
      id: "css-grid-vs-flexbox",
      title: "CSS Grid vs Flexbox: When to Use Each",
      excerpt:
        "Understanding the strengths and weaknesses of CSS Grid and Flexbox for different layout requirements.",
      date: "March 22, 2023",
      category: "CSS",
      readTime: "6 min read",
      image: "/placeholder.svg",
    },
    {
      id: "optimizing-react-performance",
      title: "Optimizing React Performance: Tips and Tricks",
      excerpt:
        "Learn practical techniques to improve the performance of your React applications.",
      date: "February 14, 2023",
      category: "React",
      readTime: "10 min read",
      image: "/placeholder.svg",
    },
    {
      id: "node-js-authentication",
      title: "Building Secure Authentication in Node.js",
      excerpt:
        "A step-by-step guide to implementing secure authentication in your Node.js applications.",
      date: "January 30, 2023",
      category: "Node.js",
      readTime: "15 min read",
      image: "/placeholder.svg",
    },
    {
      id: "responsive-design-principles",
      title: "Core Principles of Responsive Design",
      excerpt:
        "Master the fundamental principles of building responsive websites that work on any device.",
      date: "December 12, 2022",
      category: "CSS",
      readTime: "7 min read",
      image: "/placeholder.svg",
    },
  ];

  const categories = ["All", "React", "TypeScript", "CSS", "Node.js"];

  const filterPostsByCategory = (category: string) => {
    if (category === "All") {
      return posts;
    }
    return posts.filter((post) => post.category === category);
  };

  return (
    <div className="container py-12">
      <h1 className="page-heading">Blog & Articles</h1>

      <p className="max-w-3xl mb-10 text-muted-foreground">
        I share my knowledge and experiences in software development. Here
        you'll find articles on web development, programming tips, and
        technology trends.
      </p>

      <Tabs defaultValue="All" className="mb-8">
        <TabsList>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {filterPostsByCategory(category).map((post) => (
                <Card key={post.id} className="flex flex-col">
                  <div className="aspect-video bg-muted/50">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2 text-sm">
                      <span className="text-muted-foreground">{post.date}</span>
                      <span className="bg-secondary px-2 py-1 rounded-full text-xs">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription>{post.readTime}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/blog/${post.id}`}>Read Article</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-16 bg-secondary/50 rounded-lg p-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Subscribe to My Newsletter
          </h2>
          <p className="mb-6 text-muted-foreground">
            Stay updated with the latest articles, tutorials, and insights on
            web development and software engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
