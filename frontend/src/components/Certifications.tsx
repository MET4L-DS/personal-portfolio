import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle } from "lucide-react";

export function Certifications() {
	const fadeInVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	const certifications = [
		{
			title: "JavaScript (Intermediate)",
			provider: "HackerRank",
			level: "Intermediate",
			color: "from-yellow-400 to-orange-500",
			skills: [
				"ES6+",
				"Async/Await",
				"DOM Manipulation",
				"Event Handling",
			],
		},
		{
			title: "Node.js (Basic)",
			provider: "HackerRank",
			level: "Basic",
			color: "from-green-400 to-blue-500",
			skills: ["Express.js", "NPM", "File System", "HTTP Modules"],
		},
		{
			title: "React (Basic)",
			provider: "HackerRank",
			level: "Basic",
			color: "from-blue-400 to-purple-500",
			skills: [
				"Components",
				"State Management",
				"Props",
				"Event Handlers",
			],
		},
		{
			title: "REST API (Intermediate)",
			provider: "HackerRank",
			level: "Intermediate",
			color: "from-purple-400 to-pink-500",
			skills: [
				"HTTP Methods",
				"API Design",
				"Authentication",
				"Error Handling",
			],
		},
		{
			title: "CSS (Basic)",
			provider: "HackerRank",
			level: "Basic",
			color: "from-pink-400 to-red-500",
			skills: ["Flexbox", "Grid", "Responsive Design", "Animations"],
		},
		{
			title: "Java (Basic)",
			provider: "HackerRank",
			level: "Basic",
			color: "from-red-400 to-yellow-500",
			skills: [
				"OOP Concepts",
				"Collections",
				"Exception Handling",
				"Multithreading",
			],
		},
		{
			title: "JavaScript (Basic)",
			provider: "HackerRank",
			level: "Basic",
			color: "from-indigo-400 to-purple-500",
			skills: ["Variables", "Functions", "Objects", "Arrays"],
		},
	];

	return (
		<section id="certifications" className="py-20 px-4 bg-muted/30">
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
						Certifications
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Professional certifications that validate my technical
						expertise and commitment to continuous learning
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{certifications.map((cert, index) => (
						<motion.div
							key={cert.title}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: index * 0.1 }}
							variants={fadeInVariants}
							whileHover={{ y: -5, scale: 1.02 }}
							className="h-full"
						>
							<Card className="h-full flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300">
								<CardHeader className="pb-4">
									<div className="flex items-center justify-between mb-2">
										<div
											className={`p-2 rounded-lg bg-gradient-to-r ${cert.color} text-white`}
										>
											<Award className="h-5 w-5" />
										</div>
										<Badge
											variant={
												cert.level === "Intermediate"
													? "default"
													: "secondary"
											}
											className="text-xs"
										>
											{cert.level}
										</Badge>
									</div>
									<CardTitle className="text-lg leading-tight">
										{cert.title}
									</CardTitle>
									<div className="flex items-center space-x-2 text-sm text-muted-foreground">
										<CheckCircle className="h-4 w-4 text-green-500" />
										<span>{cert.provider}</span>
									</div>
								</CardHeader>

								<CardContent className="flex-1 pt-0">
									<div>
										<h4 className="font-semibold mb-3 text-sm">
											Key Skills Covered:
										</h4>
										<div className="space-y-2">
											{cert.skills.map((skill, idx) => (
												<div
													key={idx}
													className="flex items-center space-x-2"
												>
													<div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
													<span className="text-sm text-muted-foreground">
														{skill}
													</span>
												</div>
											))}
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
					transition={{ duration: 0.8, delay: 0.8 }}
					variants={fadeInVariants}
					className="mt-16"
				>
					<Card className="max-w-4xl mx-auto">
						<CardContent className="p-8 text-center">
							<h3 className="text-xl font-semibold mb-4">
								Continuous Learning Philosophy
							</h3>
							<p className="text-muted-foreground leading-relaxed mb-6">
								These certifications represent my commitment to
								staying current with modern web development
								technologies and best practices. I believe in
								validating theoretical knowledge with practical
								skills, and these HackerRank certifications have
								helped me reinforce my JavaScript foundation and
								expand my expertise across the full-stack
								development ecosystem.
							</p>
							<div className="flex flex-wrap justify-center gap-2">
								<Badge variant="outline">
									Self-Taught Developer
								</Badge>
								<Badge variant="outline">
									Continuous Learner
								</Badge>
								<Badge variant="outline">
									Practical Application
								</Badge>
								<Badge variant="outline">
									Industry Standards
								</Badge>
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</section>
	);
}
