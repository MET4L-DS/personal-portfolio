import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
	Building,
	Calendar,
	ExternalLink,
	Github,
	Briefcase,
	CheckCircle,
	Target,
	GraduationCap,
} from "lucide-react";

export function Experience() {
	const fadeInVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	const experiences = [
		{
			title: "Sankalp Event/School Management & CMS",
			company: "Freelance Project",
			location: "Remote",
			period: "Jun 2025 - Jul 2025",
			type: "Freelance",
			description:
				"This freelance project for the client Sankalp involved delivering a full-stack event and school management CMS built with React.js, TypeScript, Tailwind CSS (glassmorphism), Express.js, and MongoDB. The solution features an intuitive admin panel for managing events, registrations, galleries, and content, with dynamic workflows including EmailJS-powered contact forms, Cloudinary image uploads, and PDF generation. Secure JWT-protected RESTful APIs support robust CRUD operations and seamless React-backend integration. The product was delivered successfully, with post-delivery support provided to ensure smooth operation.",
			achievements: [
				"Built a responsive React frontend with stunning glassmorphism design",
				"Implemented dedicated registration pages with EmailJS-powered contact routing",
				"Developed Express/MongoDB backend for events, student/candidate registrations, galleries, services and content management",
				"Created secure JWT-protected Express routes with full CRUD operations",
				"Integrated Cloudinary image uploads and react-pdf-based PDF generation/preview",
				"Delivered robust error handling and data validation with Multer file-upload support",
			],
			technologies: [
				"React.js",
				"TypeScript",
				"Tailwind CSS",
				"Express.js",
				"MongoDB",
				"Cloudinary",
				"JWT",
				"EmailJS",
				"react-pdf",
				"Multer",
			],
			color: "from-purple-500 to-pink-500",
			icon: Briefcase,
		},
		{
			title: "WebMaster Team - TechXetra",
			company: "Tezpur University, Assam",
			location: "On-site",
			period: "Sep 2024 - Nov 2024",
			type: "Part-time",
			description:
				"Member of TechXetra's \"WebMaster\" team, responsible for designing, developing, and maintaining the official website for Tezpur University's premier technical fest, organized by the School of Engineering.",
			achievements: [
				"Designed and developed the official fest website",
				"Built responsive admin dashboards for content management",
				"Implemented dynamic data displays for real-time updates",
				"Collaborated with team members for smooth feature rollouts",
			],
			technologies: [
				"React.js",
				"Node.js",
				"Express.js",
				"MongoDB",
				"TailwindCSS",
				"Git",
			],
			color: "from-blue-500 to-purple-600",
			icon: Building,
		},
	];

	return (
		<section
			id="experience"
			className="py-20 px-4 relative overflow-hidden"
		>
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse" />
				<div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-secondary/5 rounded-full blur-2xl animate-pulse" />
				<div className="absolute top-1/2 left-1/4 w-20 h-20 bg-purple-500/5 rounded-full blur-2xl animate-pulse" />

				{/* Floating particles */}
				{[...Array(12)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute w-1 h-1 bg-primary/20 rounded-full"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
						}}
						animate={{
							y: [-15, 15, -15],
							opacity: [0.3, 1, 0.3],
						}}
						transition={{
							duration: 4 + Math.random() * 2,
							repeat: Infinity,
							delay: i * 0.3,
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
						Experience
					</motion.h2>
					<motion.p
						className="text-muted-foreground max-w-2xl mx-auto text-lg"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						My professional journey and contributions to real-world
						projects
					</motion.p>
				</motion.div>

				<div className="space-y-8 max-w-4xl mx-auto">
					{experiences.map((exp, index) => (
						<motion.div
							key={exp.title}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							variants={fadeInVariants}
							whileHover={{
								y: -5,
								transition: { duration: 0.3 },
							}}
						>
							<Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 bg-background/80 backdrop-blur-sm border-border/50">
								<CardHeader
									className={`bg-gradient-to-r ${exp.color} text-white relative py-3 overflow-hidden`}
								>
									{/* Animated gradient overlay */}
									<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />

									<div className="flex items-start justify-between relative z-10">
										<div className="space-y-3">
											<CardTitle className="text-xl flex items-center space-x-3">
												<motion.div
													className="p-2 bg-white/20 rounded-lg"
													whileHover={{
														scale: 1.1,
														rotate: 360,
														transition: {
															duration: 0.5,
														},
													}}
												>
													<exp.icon className="h-5 w-5" />
												</motion.div>
												<span>{exp.title}</span>
											</CardTitle>
											<p className="text-white/90 font-medium text-lg">
												{exp.company}
											</p>
											<div className="flex items-center space-x-4 text-sm text-white/80">
												<div className="flex items-center space-x-2">
													<Calendar className="h-4 w-4" />
													<span>{exp.period}</span>
												</div>
												<Badge
													variant="secondary"
													className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all"
												>
													{exp.type} · {exp.location}
												</Badge>
											</div>
										</div>
									</div>
								</CardHeader>

								<CardContent className="p-8">
									<div className="space-y-8">
										<motion.div
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ delay: 0.2 }}
										>
											<div className="flex items-center gap-3 mb-4">
												<div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
													<Briefcase className="h-4 w-4 text-white" />
												</div>
												<h3 className="text-lg font-semibold">
													Project Overview
												</h3>
											</div>
											<p className="text-muted-foreground leading-relaxed">
												{exp.description}
											</p>
										</motion.div>

										<Separator className="bg-border/50" />

										<motion.div
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ delay: 0.4 }}
										>
											<div className="flex items-center gap-3 mb-4">
												<div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
													<CheckCircle className="h-4 w-4 text-white" />
												</div>
												<h3 className="text-lg font-semibold">
													Key Achievements
												</h3>
											</div>
											<div className="grid md:grid-cols-2 gap-4">
												{exp.achievements.map(
													(achievement, idx) => (
														<motion.div
															key={idx}
															className="flex items-start space-x-3"
															initial={{
																opacity: 0,
																x: -20,
															}}
															whileInView={{
																opacity: 1,
																x: 0,
															}}
															viewport={{
																once: true,
															}}
															transition={{
																delay:
																	idx * 0.1,
															}}
														>
															<div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
															<p className="text-sm text-muted-foreground">
																{achievement}
															</p>
														</motion.div>
													)
												)}
											</div>
										</motion.div>

										<Separator className="bg-border/50" />

										<motion.div
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ delay: 0.6 }}
										>
											<div className="flex items-center gap-3 mb-4">
												<div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
													<Building className="h-4 w-4 text-white" />
												</div>
												<h3 className="text-lg font-semibold">
													Technologies Used
												</h3>
											</div>
											<div className="flex flex-wrap gap-2">
												{exp.technologies.map(
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
																delay:
																	idx * 0.05,
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
																className="bg-muted/50 hover:bg-primary/20 transition-all duration-200"
															>
																{tech}
															</Badge>
														</motion.div>
													)
												)}
											</div>
										</motion.div>

										{exp.title ===
											"WebMaster Team - TechXetra" && (
											<>
												<Separator className="bg-border/50" />
												<motion.div
													initial={{
														opacity: 0,
														y: 20,
													}}
													whileInView={{
														opacity: 1,
														y: 0,
													}}
													viewport={{ once: true }}
													transition={{ delay: 0.8 }}
												>
													<div className="flex items-center gap-3 mb-4">
														<div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
															<Target className="h-4 w-4 text-white" />
														</div>
														<h3 className="text-lg font-semibold">
															Impact
														</h3>
													</div>
													<p className="text-muted-foreground leading-relaxed">
														Successfully delivered a
														professional website
														that served as the
														primary digital presence
														for one of Tezpur
														University's most
														significant technical
														events, ensuring smooth
														user experience for
														thousands of
														participants and
														visitors.
													</p>
												</motion.div>
											</>
										)}

										<div className="flex space-x-4 pt-4">
											<motion.div
												className="flex-1"
												whileHover={{ scale: 1.02 }}
												whileTap={{ scale: 0.98 }}
											>
												<Button
													variant="outline"
													className="w-full hover:bg-primary/10 transition-all duration-200"
													asChild
												>
													<a
														href="#"
														target="_blank"
														rel="noopener noreferrer"
													>
														<Github className="h-4 w-4 mr-2" />
														View Code
													</a>
												</Button>
											</motion.div>
											<motion.div
												className="flex-1"
												whileHover={{ scale: 1.02 }}
												whileTap={{ scale: 0.98 }}
											>
												<Button
													className={`w-full bg-gradient-to-r ${exp.color} hover:opacity-90 transition-all duration-200`}
													asChild
												>
													<a
														href="#"
														target="_blank"
														rel="noopener noreferrer"
													>
														<ExternalLink className="h-4 w-4 mr-2" />
														{exp.title ===
														"Sankalp Event/School Management & CMS"
															? "View Project"
															: "Visit Website"}
													</a>
												</Button>
											</motion.div>
										</div>
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
					transition={{ duration: 0.8, delay: 0.4 }}
					variants={fadeInVariants}
					className="text-center mt-16"
				>
					<motion.div
						className="max-w-2xl mx-auto"
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.2 }}
					>
						<Card className="bg-background/80 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
							<CardContent className="p-8">
								<div className="flex items-center justify-center gap-3 mb-6">
									<div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
										<GraduationCap className="h-5 w-5 text-white" />
									</div>
									<h3 className="text-xl font-semibold">
										What I Learned
									</h3>
								</div>
								<p className="text-muted-foreground leading-relaxed">
									This experience taught me the importance of
									team collaboration, project management in a
									real-world setting, and how to deliver
									high-quality web solutions under tight
									deadlines. Working with the TechXetra team
									enhanced my skills in full-stack development
									and gave me valuable insights into building
									scalable, maintainable web applications for
									large-scale events.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
