import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="container py-12">
      <h1 className="page-heading">Contact Me</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <CardTitle className="text-lg">Email</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <a
                  href="mailto:nasihnazeem@gmail.com"
                  className="hover:underline"
                >
                  nasihnazeem@gmail.com
                </a>
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <CardTitle className="text-lg">Phone</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <a href="tel:+14037007883" className="hover:underline">
                  (403) 700-7883
                </a>
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <CardTitle className="text-lg">Location</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>Calgary, AB, Canada</CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Message subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="section-heading">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">What services do you offer?</h3>
            <p className="text-muted-foreground mb-6">
              I offer end-to-end software development services including
              full-stack web and mobile application development, backend API
              development, database management, and DevOps deployment. I
              specialize in React, Node.js, React Native, and Firebase, and have
              experience with AWS, Docker, PostgreSQL, and more. Whether you're
              building a mobile app, a web platform, or need integration with
              cloud services, I can help bring your ideas to life.
            </p>

            <h3 className="font-semibold mb-2">
              What is your typical project timeline?
            </h3>
            <p className="text-muted-foreground">
              Project timelines vary depending on scope and complexity. For
              smaller projects or MVPs, I typically deliver within 2–4 weeks.
              More complex platforms involving full-stack development, user
              authentication, and CI/CD pipelines may take 1–3 months. I provide
              clear milestones and frequent updates to ensure transparency and
              timely delivery.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Are you available for freelance work?
            </h3>
            <p className="text-muted-foreground mb-6">
              Yes, I am currently open to freelance and contract opportunities.
              Whether you need a short-term contributor or a longer-term
              collaborator, I'm happy to explore how I can support your goals.
            </p>

            <h3 className="font-semibold mb-2">
              Do you offer ongoing maintenance services?
            </h3>
            <p className="text-muted-foreground">
              Absolutely. I offer ongoing support and maintenance services
              post-deployment, including bug fixes, performance optimization,
              feature enhancements, and regular updates. This ensures your
              application remains secure, fast, and aligned with evolving user
              needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
