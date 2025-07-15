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
		<section id="experience" className="py-20 px-4">
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
						Experience
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						My professional journey and contributions to real-world
						projects
					</p>
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
						>
							<Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
								<CardHeader
									className={`bg-gradient-to-r ${exp.color} text-white`}
								>
									<div className="flex items-start justify-between">
										<div className="space-y-2">
											<CardTitle className="text-xl flex items-center space-x-2">
												<exp.icon className="h-5 w-5" />
												<span>{exp.title}</span>
											</CardTitle>
											<p className="text-white/90">
												{exp.company}
											</p>
											<div className="flex items-center space-x-4 text-sm text-white/80">
												<div className="flex items-center space-x-1">
													<Calendar className="h-4 w-4" />
													<span>{exp.period}</span>
												</div>
												<Badge
													variant="secondary"
													className="bg-white/20 text-white border-white/30"
												>
													{exp.type} · {exp.location}
												</Badge>
											</div>
										</div>
									</div>
								</CardHeader>

								<CardContent className="p-8">
									<div className="space-y-6">
										<div>
											<h3 className="text-lg font-semibold mb-3">
												Project Overview
											</h3>
											<p className="text-muted-foreground leading-relaxed">
												{exp.description}
											</p>
										</div>

										<Separator />

										<div>
											<h3 className="text-lg font-semibold mb-4">
												Key Achievements
											</h3>
											<div className="grid md:grid-cols-2 gap-4">
												{exp.achievements.map(
													(achievement, idx) => (
														<div
															key={idx}
															className="flex items-start space-x-3"
														>
															<div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
															<p className="text-sm">
																{achievement}
															</p>
														</div>
													)
												)}
											</div>
										</div>

										<Separator />

										<div>
											<h3 className="text-lg font-semibold mb-3">
												Technologies Used
											</h3>
											<div className="flex flex-wrap gap-2">
												{exp.technologies.map(
													(tech) => (
														<Badge
															key={tech}
															variant="outline"
														>
															{tech}
														</Badge>
													)
												)}
											</div>
										</div>

										{exp.title ===
											"WebMaster Team - TechXetra" && (
											<>
												<Separator />
												<div>
													<h3 className="text-lg font-semibold mb-3">
														Impact
													</h3>
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
												</div>
											</>
										)}

										<div className="flex space-x-4 pt-4">
											<Button variant="outline" asChild>
												<a
													href="#"
													target="_blank"
													rel="noopener noreferrer"
												>
													<Github className="h-4 w-4 mr-2" />
													View Code
												</a>
											</Button>
											<Button asChild>
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
					className="text-center mt-12"
				>
					<div className="max-w-2xl mx-auto">
						<h3 className="text-xl font-semibold mb-4">
							What I Learned
						</h3>
						<p className="text-muted-foreground leading-relaxed">
							This experience taught me the importance of team
							collaboration, project management in a real-world
							setting, and how to deliver high-quality web
							solutions under tight deadlines. Working with the
							TechXetra team enhanced my skills in full-stack
							development and gave me valuable insights into
							building scalable, maintainable web applications for
							large-scale events.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
