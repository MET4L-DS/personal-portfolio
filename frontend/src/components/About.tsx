import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code2, Users, Target } from "lucide-react";

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
		<section id="about" className="py-20 px-4">
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
						About Me
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						A passionate full-stack developer with a strong
						foundation in modern web technologies
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.1 }}
						variants={fadeInVariants}
					>
						<Card className="text-center p-6 h-full">
							<CardContent className="space-y-4">
								<div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
									<GraduationCap className="h-6 w-6 text-primary" />
								</div>
								<h3 className="font-semibold">Education</h3>
								<p className="text-sm text-muted-foreground">
									MCA at Tezpur University
									<br />
									BSc IT from B. Borooah College
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						variants={fadeInVariants}
					>
						<Card className="text-center p-6 h-full">
							<CardContent className="space-y-4">
								<div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
									<Code2 className="h-6 w-6 text-primary" />
								</div>
								<h3 className="font-semibold">
									Specialization
								</h3>
								<p className="text-sm text-muted-foreground">
									Self-taught MERN Stack Developer
									<br />
									Full-Stack Web Applications
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.3 }}
						variants={fadeInVariants}
					>
						<Card className="text-center p-6 h-full">
							<CardContent className="space-y-4">
								<div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
									<Users className="h-6 w-6 text-primary" />
								</div>
								<h3 className="font-semibold">Collaboration</h3>
								<p className="text-sm text-muted-foreground">
									Team player with strong
									<br />
									communication and feedback skills
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.4 }}
						variants={fadeInVariants}
					>
						<Card className="text-center p-6 h-full">
							<CardContent className="space-y-4">
								<div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
									<Target className="h-6 w-6 text-primary" />
								</div>
								<h3 className="font-semibold">Passion</h3>
								<p className="text-sm text-muted-foreground">
									End-to-end development lifecycle
									<br />
									User-facing product creation
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.5 }}
					variants={fadeInVariants}
					className="space-y-6"
				>
					<Card>
						<CardContent className="p-8">
							<h3 className="text-xl font-semibold mb-4">
								My Journey
							</h3>
							<p className="text-muted-foreground leading-relaxed mb-6">
								I'm currently completing my MCA at Tezpur
								University after earning a BSc IT from B.
								Borooah College. As a self-taught MERN-stack
								developer, I've reinforced my JavaScript
								foundation with HackerRank certificates in Node,
								React, REST APIs, and more.
							</p>
							<p className="text-muted-foreground leading-relaxed">
								What really excites me is owning the end-to-end
								lifecycle—defining data models, crafting APIs,
								designing UI components, and finally watching
								users engage with what I've built. I'm
								organized, detail-oriented, and thrive in
								collaborative environments—always ready to ask
								questions, give and receive feedback, and adapt
								to new challenges.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardContent className="p-8">
							<h3 className="text-xl font-semibold mb-6">
								Technical Skills
							</h3>
							<div className="flex flex-wrap gap-2">
								{skills.map((skill, index) => (
									<motion.div
										key={skill}
										initial={{ opacity: 0, scale: 0.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.5,
											delay: index * 0.1,
										}}
									>
										<Badge
											variant="secondary"
											className="text-sm"
										>
											{skill}
										</Badge>
									</motion.div>
								))}
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</section>
	);
}
