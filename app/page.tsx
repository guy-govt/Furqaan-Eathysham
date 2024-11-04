import React from 'react';
import { Calendar, Mail, Github, Linkedin, Download } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Portfolio = () => {
  // Two-color theme
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Developed a full-featured e-commerce platform using React and Node.js, with user authentication, product listings, shopping carts, and payment processing.",
      tech: ["React", "Node.js", "AWS", "MongoDB"],
      github: "github.com/furqaan-eathysham/ecommerce"
    },
    {
      title: "Task Management Application",
      description: "Built a task management app using Angular and Django, allowing users to manage projects, assign tasks, and track progress.",
      tech: ["Angular", "Django", "PostgreSQL"],
      github: "github.com/furqaan-eathysham/taskmanager"
    },
    {
      title: "Chatbot Integration",
      description: "Developed and integrated a chatbot for customer service using Python and NLP, reducing response times by automating 70% of user queries.",
      tech: ["Python", "NLP", "AWS"],
      github: "github.com/furqaan-eathysham/chatbot"
    }
  ];

  const experience = [
    {
      role: "Senior Software Developer",
      company: "Tech Innovations Inc.",
      period: "2019 - Present",
      location: "San Francisco"
    },
    {
      role: "Software Developer",
      company: "Creative Solutions LLC",
      period: "2015 - 2019",
      location: "San Francisco"
    },
    {
      role: "Junior Software Developer",
      company: "Innovate Systems",
      period: "2013 - 2015",
      location: "San Francisco"
    }
  ];

  const skills = [
    { name: "Python", proficiency: 90 },
    { name: "JavaScript", proficiency: 90 },
    { name: "React", proficiency: 80 },
    { name: "Node.js", proficiency: 80 },
    { name: "AWS", proficiency: 70 },
    { name: "Docker", proficiency: 70 },
    { name: "Git", proficiency: 95 },
    { name: "TypeScript", proficiency: 80 }
  ];

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-32 w-32 mb-6">
              <AvatarFallback className="bg-indigo-700">FE</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl font-bold mb-4">Furqaan Eathysham</h1>
            <p className="text-xl mb-6">Software Developer</p>
            <p className="text-lg mb-8 max-w-2xl">
              Creating scalable software solutions for modern challenges
            </p>
            <div className="flex gap-4">
              <Button variant="secondary" className="gap-2">
                <Download size={16} />
                Download Resume
              </Button>
              <Button variant="outline" className="gap-2 bg-transparent text-white border-white hover:bg-white hover:text-indigo-600">
                <Mail size={16} />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto text-gray-600">
          <p className="mb-6">
            I am a passionate software developer with 8 years of experience in creating innovative solutions for real-world problems. 
            My expertise includes full-stack development, cloud services, and mentoring junior developers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {skills.map((skill) => (
              <div key={skill.name} className="w-full">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-600">{skill.proficiency}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-indigo-600 h-4 rounded-full"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.title}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Github size={16} />
                    View Code
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experience.map((exp) => (
            <Card key={exp.role} className="mb-6">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{exp.role}</CardTitle>
                    <CardDescription>{exp.company}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Calendar size={14} />
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="flex justify-center gap-6">
            <Button variant="outline" className="gap-2 bg-transparent text-white border-white hover:bg-white hover:text-indigo-600">
              <Mail size={16} />
              Email Me
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent text-white border-white hover:bg-white hover:text-indigo-600">
              <Linkedin size={16} />
              LinkedIn
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent text-white border-white hover:bg-white hover:text-indigo-600">
              <Github size={16} />
              GitHub
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 Furqaan Eathysham. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
