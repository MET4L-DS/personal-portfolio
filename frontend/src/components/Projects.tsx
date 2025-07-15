import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Brain, MessageCircle } from "lucide-react";

export function Projects() {
	const fadeInVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	const projects = [
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
			githubUrl: "#",
			liveUrl: "#",
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
			githubUrl: "#",
			liveUrl: "#",
			color: "from-orange-500 to-red-500",
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

				<div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
