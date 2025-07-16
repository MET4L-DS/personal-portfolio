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
		<section
			id="certifications"
			className="py-20 px-4 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden"
		>
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-1/4 left-1/4 w-36 h-36 bg-primary/5 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
				<div className="absolute top-1/2 right-1/3 w-20 h-20 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />

				{/* Floating achievement icons */}
				{[...Array(10)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute w-1 h-1 bg-primary/30 rounded-full"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
						}}
						animate={{
							scale: [0, 1.5, 0],
							opacity: [0.3, 1, 0.3],
						}}
						transition={{
							duration: 3 + Math.random() * 2,
							repeat: Infinity,
							delay: i * 0.4,
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
						Certifications
					</motion.h2>
					<motion.p
						className="text-muted-foreground max-w-2xl mx-auto text-lg"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						Professional certifications that validate my technical
						expertise and commitment to continuous learning
					</motion.p>
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
							whileHover={{
								y: -10,
								scale: 1.02,
								transition: { duration: 0.3 },
							}}
							className="h-full"
						>
							<Card className="h-full flex flex-col overflow-hidden group hover:shadow-2xl transition-all duration-500 bg-background/80 backdrop-blur-sm border-border/50">
								<CardHeader className="pb-4 relative">
									{/* Animated gradient overlay */}
									<div
										className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-5 group-hover:opacity-10 transition-all duration-300`}
									/>

									<div className="flex items-center justify-between mb-3 relative z-10">
										<motion.div
											className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} text-white shadow-lg`}
											whileHover={{
												scale: 1.1,
												rotate: 360,
												transition: { duration: 0.5 },
											}}
										>
											<Award className="h-5 w-5" />
										</motion.div>
										<motion.div
											initial={{ opacity: 0, scale: 0.8 }}
											whileInView={{
												opacity: 1,
												scale: 1,
											}}
											viewport={{ once: true }}
											transition={{
												delay: index * 0.1 + 0.2,
											}}
										>
											<Badge
												variant={
													cert.level ===
													"Intermediate"
														? "default"
														: "secondary"
												}
												className="text-xs font-medium"
											>
												{cert.level}
											</Badge>
										</motion.div>
									</div>
									<CardTitle className="text-lg leading-tight font-bold">
										{cert.title}
									</CardTitle>
									<div className="flex items-center space-x-2 text-sm text-muted-foreground">
										<CheckCircle className="h-4 w-4 text-green-500" />
										<span className="font-medium">
											{cert.provider}
										</span>
									</div>
								</CardHeader>

								<CardContent className="flex-1 pt-0 relative z-10">
									<div>
										<h4 className="font-semibold mb-4 text-sm flex items-center gap-2">
											<div className="w-2 h-2 bg-primary rounded-full" />
											Key Skills Covered:
										</h4>
										<div className="space-y-3">
											{cert.skills.map((skill, idx) => (
												<motion.div
													key={idx}
													className="flex items-center space-x-3"
													initial={{
														opacity: 0,
														x: -10,
													}}
													whileInView={{
														opacity: 1,
														x: 0,
													}}
													viewport={{ once: true }}
													transition={{
														delay: idx * 0.1,
													}}
												>
													<div
														className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${cert.color}`}
													></div>
													<span className="text-sm text-muted-foreground">
														{skill}
													</span>
												</motion.div>
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
					<motion.div
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.2 }}
					>
						<Card className="max-w-4xl mx-auto bg-background/80 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
							<CardContent className="p-8 text-center">
								<div className="flex items-center justify-center gap-3 mb-6">
									<div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
										<Award className="h-5 w-5 text-white" />
									</div>
									<h3 className="text-xl font-semibold">
										Continuous Learning Philosophy
									</h3>
								</div>
								<p className="text-muted-foreground leading-relaxed mb-6">
									These certifications represent my commitment
									to staying current with modern web
									development technologies and best practices.
									I believe in validating theoretical
									knowledge with practical skills, and these
									HackerRank certifications have helped me
									reinforce my JavaScript foundation and
									expand my expertise across the full-stack
									development ecosystem.
								</p>
								<div className="flex flex-wrap justify-center gap-3">
									{[
										"Self-Taught Developer",
										"Continuous Learner",
										"Practical Application",
										"Industry Standards",
									].map((badge, idx) => (
										<motion.div
											key={badge}
											initial={{ opacity: 0, scale: 0.8 }}
											whileInView={{
												opacity: 1,
												scale: 1,
											}}
											viewport={{ once: true }}
											transition={{ delay: idx * 0.1 }}
											whileHover={{
												scale: 1.05,
												transition: { duration: 0.2 },
											}}
										>
											<Badge
												variant="outline"
												className="bg-muted/50 hover:bg-primary/20 transition-all duration-200"
											>
												{badge}
											</Badge>
										</motion.div>
									))}
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
