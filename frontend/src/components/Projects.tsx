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
		<section
			id="projects"
			className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden"
		>
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-1/4 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
				<div className="absolute top-1/2 right-1/3 w-24 h-24 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />

				{/* Floating particles */}
				{[...Array(15)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute w-1 h-1 bg-primary/20 rounded-full"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
						}}
						animate={{
							y: [-20, 20, -20],
							opacity: [0.3, 1, 0.3],
						}}
						transition={{
							duration: 3 + Math.random() * 2,
							repeat: Infinity,
							delay: i * 0.2,
						}}
					/>
				))}
			</div>

			<div className="container mx-auto relative z-10">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					variants={fadeInVariants}
					className="text-center mb-16"
				>
					<motion.h2
						className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
						animate={{
							backgroundPosition: [
								"0% 50%",
								"100% 50%",
								"0% 50%",
							],
						}}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					>
						Featured Projects
					</motion.h2>
					<motion.p
						className="text-muted-foreground max-w-2xl mx-auto text-lg"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						A showcase of full-stack applications demonstrating my
						expertise in modern web technologies
					</motion.p>
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
							whileHover={{
								y: -10,
								transition: { duration: 0.3 },
							}}
							className="h-full"
						>
							<Card className="h-full flex flex-col overflow-hidden group hover:shadow-2xl transition-all duration-500 bg-background/80 backdrop-blur-sm border-border/50">
								{/* Card Header with animated gradient */}
								<div className="relative py-3">
									<div
										className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-10 group-hover:opacity-20 transition-all duration-300`}
									/>
									<CardHeader className="pb-4 relative z-10">
										<div className="flex items-center space-x-3 mb-3">
											<motion.div
												className={`p-3 rounded-xl bg-gradient-to-r ${project.color} text-white shadow-lg`}
												whileHover={{
													scale: 1.1,
													rotate: 360,
													transition: {
														duration: 0.5,
													},
												}}
											>
												<project.icon className="h-6 w-6" />
											</motion.div>
											<CardTitle className="text-xl font-bold">
												{project.title}
											</CardTitle>
										</div>
										<p className="text-muted-foreground text-sm leading-relaxed">
											{project.description}
										</p>
									</CardHeader>
								</div>

								<CardContent className="flex-1 flex flex-col space-y-6 p-6">
									<div>
										<h4 className="font-semibold mb-3 text-sm flex items-center gap-2">
											<div className="w-2 h-2 bg-primary rounded-full" />
											Key Features:
										</h4>
										<ul className="text-sm text-muted-foreground space-y-2">
											{project.features.map(
												(feature, idx) => (
													<motion.li
														key={idx}
														className="flex items-start space-x-2"
														initial={{
															opacity: 0,
															x: -10,
														}}
														whileInView={{
															opacity: 1,
															x: 0,
														}}
														viewport={{
															once: true,
														}}
														transition={{
															delay: idx * 0.1,
														}}
													>
														<span className="text-primary mt-1 text-xs">
															▶
														</span>
														<span>{feature}</span>
													</motion.li>
												)
											)}
										</ul>
									</div>

									<div>
										<h4 className="font-semibold mb-3 text-sm flex items-center gap-2">
											<div className="w-2 h-2 bg-secondary rounded-full" />
											Technologies:
										</h4>
										<div className="flex flex-wrap gap-2">
											{project.technologies.map(
												(tech, idx) => (
													<motion.div
														key={tech}
														initial={{
															opacity: 0,
															scale: 0.8,
														}}
														whileInView={{
															opacity: 1,
															scale: 1,
														}}
														viewport={{
															once: true,
														}}
														transition={{
															delay: idx * 0.05,
														}}
														whileHover={{
															scale: 1.05,
															transition: {
																duration: 0.2,
															},
														}}
													>
														<Badge
															variant="outline"
															className="text-xs bg-muted/50 hover:bg-primary/20 transition-all duration-200"
														>
															{tech}
														</Badge>
													</motion.div>
												)
											)}
										</div>
									</div>

									<div className="flex space-x-3 pt-4 mt-auto">
										<motion.div
											className="flex-1"
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
										>
											<Button
												size="sm"
												variant="outline"
												className="w-full hover:bg-primary/10 transition-all duration-200"
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
										</motion.div>
										<motion.div
											className="flex-1"
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
										>
											<Button
												size="sm"
												className={`w-full bg-gradient-to-r ${project.color} hover:opacity-90 transition-all duration-200`}
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
										</motion.div>
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
					className="text-center mt-16"
				>
					<motion.p
						className="text-muted-foreground mb-6 text-lg"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						Want to see more of my work?
					</motion.p>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Button
							variant="outline"
							size="lg"
							className="bg-background/80 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300"
							asChild
						>
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
				</motion.div>
			</div>
		</section>
	);
}
