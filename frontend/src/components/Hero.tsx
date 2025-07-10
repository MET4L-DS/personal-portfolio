import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Code, Database, Cloud } from "lucide-react";

export function Hero() {
	return (
		<section className="min-h-screen flex items-center justify-center pt-16 px-4">
			<div className="container mx-auto text-center">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="space-y-6"
				>
					<motion.h1
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.2, duration: 0.8 }}
						className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
					>
						Ayanshu Dev Sikdar
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						className="text-xl md:text-2xl text-muted-foreground"
					>
						Full-Stack MERN Developer & MCA Student
					</motion.p>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.8 }}
						className="text-lg max-w-2xl mx-auto text-muted-foreground"
					>
						Passionate about crafting end-to-end web solutions with
						React, Node.js, and modern technologies. Building
						meaningful, user-facing products that make a difference.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8, duration: 0.8 }}
						className="flex flex-wrap justify-center gap-4 mt-8"
					>
						<div className="flex items-center space-x-2 px-4 py-2 bg-muted rounded-full">
							<Code className="h-5 w-5 text-primary" />
							<span>React & Node.js</span>
						</div>
						<div className="flex items-center space-x-2 px-4 py-2 bg-muted rounded-full">
							<Database className="h-5 w-5 text-primary" />
							<span>MongoDB & Firebase</span>
						</div>
						<div className="flex items-center space-x-2 px-4 py-2 bg-muted rounded-full">
							<Cloud className="h-5 w-5 text-primary" />
							<span>GCP & Cloud Deploy</span>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1, duration: 0.8 }}
						className="flex justify-center space-x-4 mt-8"
					>
						<Button size="lg" asChild>
							<a href="#projects">View My Work</a>
						</Button>
						<Button size="lg" variant="outline" asChild>
							<a href="#contact">Get In Touch</a>
						</Button>
					</motion.div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5, duration: 0.8 }}
					className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
				>
					<motion.div
						animate={{ y: [0, -10, 0] }}
						transition={{ repeat: Infinity, duration: 2 }}
					>
						<ChevronDown className="h-6 w-6 text-muted-foreground" />
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
