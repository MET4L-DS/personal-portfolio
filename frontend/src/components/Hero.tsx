import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Code, Database, Cloud } from "lucide-react";

export function Hero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/50 overflow-hidden">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 overflow-hidden">
				{[...Array(20)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute w-1 h-1 bg-primary/20 rounded-full"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
						}}
						animate={{
							scale: [0, 1, 0],
							opacity: [0, 1, 0],
						}}
						transition={{
							duration: 3,
							repeat: Infinity,
							delay: i * 0.2,
						}}
					/>
				))}
			</div>

			{/* Floating Code Icons */}
			<motion.div
				className="absolute top-20 left-10 text-primary/30"
				animate={{
					y: [-10, 10, -10],
					rotate: [0, 5, -5, 0],
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			>
				<Code size={24} />
			</motion.div>

			<motion.div
				className="absolute top-40 right-20 text-primary/30"
				animate={{
					y: [-10, 10, -10],
					rotate: [0, 5, -5, 0],
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1,
				}}
			>
				<Database size={28} />
			</motion.div>

			<motion.div
				className="absolute bottom-40 left-20 text-primary/30"
				animate={{
					y: [-10, 10, -10],
					rotate: [0, 5, -5, 0],
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 2,
				}}
			>
				<Cloud size={32} />
			</motion.div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
				<div className="max-w-4xl mx-auto">
					{/* Profile Picture Section */}
					<motion.div
						className="mb-8 flex justify-center"
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<div className="relative">
							<motion.div
								className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 opacity-75 blur-xl"
								animate={{
									scale: [1, 1.1, 1],
									opacity: [0.5, 0.8, 0.5],
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							/>
							<motion.img
								src="/profile-pic.jpg"
								alt="Ayanshu Dev Sikdar"
								className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/50 shadow-2xl"
								whileHover={{
									scale: 1.05,
									rotate: [0, -2, 2, 0],
									transition: { duration: 0.3 },
								}}
								animate={{
									boxShadow: [
										"0 0 20px rgba(59, 130, 246, 0.3)",
										"0 0 40px rgba(59, 130, 246, 0.6)",
										"0 0 20px rgba(59, 130, 246, 0.3)",
									],
								}}
								transition={{
									boxShadow: {
										duration: 2,
										repeat: Infinity,
										ease: "easeInOut",
									},
								}}
							/>
						</div>
					</motion.div>

					{/* Main Content */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className="mb-6"
					>
						<motion.h1
							className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.7 }}
						>
							Hi, I'm{" "}
							<motion.span
								className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
								animate={{
									backgroundPosition: [
										"0% 50%",
										"100% 50%",
										"0% 50%",
									],
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							>
								Ayanshu
							</motion.span>
						</motion.h1>
					</motion.div>

					<motion.p
						className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.9 }}
					>
						Full-Stack MERN Developer & MCA Student crafting
						innovative web experiences
					</motion.p>

					{/* Skills Tags */}
					<motion.div
						className="flex flex-wrap justify-center gap-3 mb-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.1 }}
					>
						{[
							{
								name: "React & Node.js",
								icon: <Code className="h-4 w-4" />,
							},
							{
								name: "MongoDB & Firebase",
								icon: <Database className="h-4 w-4" />,
							},
							{
								name: "GCP & Cloud Deploy",
								icon: <Cloud className="h-4 w-4" />,
							},
						].map((skill, index) => (
							<motion.div
								key={skill.name}
								className="flex items-center space-x-2 px-4 py-2 bg-muted/80 backdrop-blur-sm border border-primary/20 rounded-full text-sm font-medium"
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 1.3 + index * 0.1 }}
								whileHover={{
									scale: 1.05,
									backgroundColor: "rgba(59, 130, 246, 0.1)",
									borderColor: "rgba(59, 130, 246, 0.4)",
									transition: { duration: 0.2 },
								}}
							>
								<motion.div
									className="text-primary"
									animate={{ rotate: [0, 360] }}
									transition={{
										duration: 2,
										repeat: Infinity,
										ease: "linear",
									}}
								>
									{skill.icon}
								</motion.div>
								<span>{skill.name}</span>
							</motion.div>
						))}
					</motion.div>

					{/* CTA Buttons */}
					<motion.div
						className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.5 }}
					>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Button
								size="lg"
								className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg"
								onClick={() =>
									document
										.getElementById("projects")
										?.scrollIntoView({ behavior: "smooth" })
								}
							>
								View My Work
							</Button>
						</motion.div>

						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Button
								variant="outline"
								size="lg"
								className="border-primary/50 hover:bg-primary/10"
								onClick={() =>
									document
										.getElementById("contact")
										?.scrollIntoView({ behavior: "smooth" })
								}
							>
								Get In Touch
							</Button>
						</motion.div>
					</motion.div>

					{/* Scroll Indicator */}
					<motion.div
						className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 2 }}
					>
						<motion.div
							animate={{ y: [0, 10, 0] }}
							transition={{ duration: 2, repeat: Infinity }}
							className="cursor-pointer"
							onClick={() =>
								document
									.getElementById("about")
									?.scrollIntoView({ behavior: "smooth" })
							}
						>
							<ChevronDown className="w-6 h-6 text-muted-foreground" />
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
