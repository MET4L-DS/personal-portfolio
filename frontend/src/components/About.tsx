import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code2, Users, Target, Sparkles } from "lucide-react";

export function About() {
	const fadeInVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	const skills = [
		"JavaScript/TypeScript",
		"React.js",
		"Node.js",
		"Express.js",
		"MongoDB",
		"Firebase",
		"TailwindCSS",
		"Google Cloud Platform",
		"RESTful APIs",
		"JWT Authentication",
		"LangChain.js",
		"FAISS",
	];

	return (
		<section id="about" className="py-20 px-4 relative overflow-hidden">
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-pulse" />
				<div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/5 rounded-full blur-xl animate-pulse" />
				<div className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-500/5 rounded-full blur-xl animate-pulse" />
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
						About Me
					</motion.h2>
					<motion.p
						className="text-muted-foreground max-w-2xl mx-auto text-lg"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						A passionate full-stack developer with a strong
						foundation in modern web technologies
					</motion.p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
					{[
						{
							icon: GraduationCap,
							title: "Education",
							description:
								"MCA at Tezpur University\nBSc IT from B. Borooah College",
							color: "from-blue-500 to-cyan-500",
						},
						{
							icon: Code2,
							title: "Specialization",
							description:
								"Self-taught MERN Stack Developer\nFull-Stack Web Applications",
							color: "from-green-500 to-blue-500",
						},
						{
							icon: Users,
							title: "Collaboration",
							description:
								"Team player with strong\ncommunication and feedback skills",
							color: "from-purple-500 to-pink-500",
						},
						{
							icon: Target,
							title: "Passion",
							description:
								"End-to-end development lifecycle\nUser-facing product creation",
							color: "from-orange-500 to-red-500",
						},
					].map((item, index) => (
						<motion.div
							key={item.title}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: index * 0.1 }}
							variants={fadeInVariants}
							whileHover={{
								y: -5,
								transition: { duration: 0.2 },
							}}
						>
							<Card className="text-center p-6 h-full bg-background/80 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300 group">
								<CardContent className="space-y-4">
									<motion.div
										className={`mx-auto w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-lg`}
										whileHover={{
											scale: 1.1,
											rotate: 360,
											transition: { duration: 0.5 },
										}}
									>
										<item.icon className="h-8 w-8 text-white" />
									</motion.div>
									<h3 className="font-semibold text-lg">
										{item.title}
									</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{item.description
											.split("\n")
											.map((line, i) => (
												<span key={i}>
													{line}
													{i <
														item.description.split(
															"\n"
														).length -
															1 && <br />}
												</span>
											))}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.5 }}
					variants={fadeInVariants}
					className="space-y-6"
				>
					<motion.div
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.2 }}
					>
						<Card className="bg-background/80 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
							<CardContent className="p-8">
								<div className="flex items-center gap-3 mb-6">
									<div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
										<GraduationCap className="h-4 w-4 text-white" />
									</div>
									<h3 className="text-xl font-semibold">
										My Journey
									</h3>
								</div>
								<div className="space-y-4">
									<p className="text-muted-foreground leading-relaxed">
										I'm currently completing my MCA at
										Tezpur University after earning a BSc IT
										from B. Borooah College. As a
										self-taught MERN-stack developer, I've
										reinforced my JavaScript foundation with
										HackerRank certificates in Node, React,
										REST APIs, and more.
									</p>
									<p className="text-muted-foreground leading-relaxed">
										What really excites me is owning the
										end-to-end lifecycle—defining data
										models, crafting APIs, designing UI
										components, and finally watching users
										engage with what I've built. I'm
										organized, detail-oriented, and thrive
										in collaborative environments—always
										ready to ask questions, give and receive
										feedback, and adapt to new challenges.
									</p>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.2 }}
					>
						<Card className="bg-background/80 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
							<CardContent className="p-8">
								<div className="flex items-center gap-3 mb-6">
									<div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
										<Code2 className="h-4 w-4 text-white" />
									</div>
									<h3 className="text-xl font-semibold">
										Technical Skills
									</h3>
								</div>
								<div className="flex flex-wrap gap-2">
									{skills.map((skill, index) => (
										<motion.div
											key={skill}
											initial={{ opacity: 0, scale: 0.8 }}
											whileInView={{
												opacity: 1,
												scale: 1,
											}}
											viewport={{ once: true }}
											transition={{
												duration: 0.3,
												delay: index * 0.05,
											}}
											whileHover={{
												scale: 1.05,
												transition: { duration: 0.2 },
											}}
										>
											<Badge
												variant="secondary"
												className="text-sm bg-muted/80 hover:bg-primary/20 transition-all duration-200 cursor-pointer"
											>
												{skill}
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
