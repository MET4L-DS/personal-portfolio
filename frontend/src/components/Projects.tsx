import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Github,
	ExternalLink,
	Brain,
	MessageCircle,
	Activity,
	User,
} from "lucide-react";

export function Projects() {
	const fadeInVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	const projects = [
		{
			title: "Pharmacy Management System",
			description:
				"A comprehensive web-based pharmacy management system designed for medical stores in India. Built as part of MCA coursework, it provides complete inventory management, billing, medicine tracking, and customer service automation with real-time stock monitoring and expiry alerts.",
			icon: Activity,
			technologies: [
				"React.js",
				"TypeScript",
				"Django",
				"MySQL",
				"TailwindCSS",
				"ShadCN UI",
				"Vite",
				"Django REST Framework",
			],
			features: [
				"Complete inventory management with batch tracking",
				"Real-time stock monitoring with low stock alerts",
				"Medicine search with API integration for suggestions",
				"Responsive design with dark/light theme support",
				"GST & HSN code support for Indian tax compliance",
				"Interactive dashboard with analytics and insights",
			],
			githubUrl: "https://github.com/berealatul/projectDBMS",
			liveUrl: "#",
			color: "from-green-500 to-blue-500",
		},
		{
			title: "LawGPT",
			description:
				"A responsive legal-advice platform built with React, LangChain.js, FAISS for RAG, Firebase authentication, and GCP deployment. Provides accurate and contextually relevant legal guidance based on Indian laws and Bharatiya Nyaya Sanhita (BNS).",
			icon: Brain,
			technologies: [
				"React.js",
				"LangChain.js",
				"FAISS",
				"Firebase",
				"TailwindCSS",
				"GCP",
			],
			features: [
				"Retrieval-Augmented Generation (RAG) implementation",
				"Real-time legal advice based on Indian laws",
				"Secure Firebase authentication",
				"Responsive design with TailwindCSS",
				"Deployed on Google Cloud Platform",
			],
			githubUrl: "https://github.com/MET4L-DS/AskMe",
			liveUrl: "https://law-gpt.netlify.app/",
			color: "from-blue-500 to-cyan-500",
		},
		{
			title: "Kanha-GPT",
			description:
				"A conversational web app built on Bhagavad Gita insights using React.js and Node.js, enabling seamless user interaction with Lord Krishna's wisdom through an engaging chat interface.",
			icon: MessageCircle,
			technologies: ["React.js", "Node.js", "Express.js", "CSS", "GCP"],
			features: [
				"Interactive chat with Bhagavad Gita wisdom",
				"Dynamic content rendering",
				"Smooth user experience",
				"Efficient server-side communication",
				"Visually appealing design",
			],
			githubUrl: "https://github.com/POBOROJO/Kanha-GPT",
			liveUrl: "https://kanha-gpt.netlify.app/",
			color: "from-orange-500 to-red-500",
		},
		{
			title: "Personal Portfolio Website",
			description:
				"A modern, responsive personal portfolio website showcasing my journey as a full-stack MERN developer and MCA student. Built with React, TypeScript, and modern web technologies to demonstrate my skills, projects, and professional experience with smooth animations and dark/light theme support.",
			icon: User,
			technologies: [
				"React.js",
				"TypeScript",
				"Vite",
				"TailwindCSS",
				"ShadCN UI",
				"Framer Motion",
				"Lucide React",
				"ESLint",
			],
			features: [
				"Responsive design with mobile-first approach",
				"Dark/light theme toggle with system preference detection",
				"Smooth animations powered by Framer Motion",
				"Modern UI with ShadCN components and glassmorphism effects",
				"Component-based architecture with TypeScript",
				"SEO-ready with semantic HTML structure",
			],
			githubUrl: "https://github.com/MET4L-DS/personal-portfolio",
			liveUrl: "https://ayanshu.vercel.app/",
			color: "from-indigo-500 to-purple-500",
		},
	];

	return (
		<section id="projects" className="py-20 px-4 bg-muted/30">
			<div className="container mx-auto">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					variants={fadeInVariants}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Featured Projects
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						A showcase of full-stack applications demonstrating my
						expertise in modern web technologies
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8 max-w-7xl mx-auto">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							variants={fadeInVariants}
							whileHover={{ y: -5 }}
							className="h-full"
						>
							<Card className="h-full flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300">
								<CardHeader className="pb-4">
									<div className="flex items-center space-x-3 mb-3">
										<div
											className={`p-2 rounded-lg bg-gradient-to-r ${project.color} text-white`}
										>
											<project.icon className="h-6 w-6" />
										</div>
										<CardTitle className="text-xl">
											{project.title}
										</CardTitle>
									</div>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{project.description}
									</p>
								</CardHeader>

								<CardContent className="flex-1 flex flex-col space-y-4">
									<div>
										<h4 className="font-semibold mb-2 text-sm">
											Key Features:
										</h4>
										<ul className="text-sm text-muted-foreground space-y-1">
											{project.features.map(
												(feature, idx) => (
													<li
														key={idx}
														className="flex items-start space-x-2"
													>
														<span className="text-primary mt-1">
															•
														</span>
														<span>{feature}</span>
													</li>
												)
											)}
										</ul>
									</div>

									<div>
										<h4 className="font-semibold mb-2 text-sm">
											Technologies:
										</h4>
										<div className="flex flex-wrap gap-1">
											{project.technologies.map(
												(tech) => (
													<Badge
														key={tech}
														variant="outline"
														className="text-xs"
													>
														{tech}
													</Badge>
												)
											)}
										</div>
									</div>

									<div className="flex space-x-2 pt-4 mt-auto">
										<Button
											size="sm"
											variant="outline"
											className="flex-1"
											asChild
										>
											<a
												href={project.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
											>
												<Github className="h-4 w-4 mr-2" />
												Code
											</a>
										</Button>
										<Button
											size="sm"
											className="flex-1"
											asChild
										>
											<a
												href={project.liveUrl}
												target="_blank"
												rel="noopener noreferrer"
											>
												<ExternalLink className="h-4 w-4 mr-2" />
												Live Demo
											</a>
										</Button>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.8 }}
					variants={fadeInVariants}
					className="text-center mt-12"
				>
					<p className="text-muted-foreground mb-6">
						Want to see more of my work?
					</p>
					<Button variant="outline" size="lg" asChild>
						<a
							href="https://github.com/MET4L-DS"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Github className="h-5 w-5 mr-2" />
							View All Projects on GitHub
						</a>
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
