import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Menu, X, Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";

export function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ name: "About", href: "#about" },
		{ name: "Projects", href: "#projects" },
		{ name: "Experience", href: "#experience" },
		{ name: "Certifications", href: "#certifications" },
		{ name: "Contact", href: "#contact" },
	];

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<motion.nav
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8 }}
			className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg"
		>
			{/* Animated background gradient */}
			<div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />

			<div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.2 }}
					className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
				>
					<motion.span
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
						Ayanshu Dev Sikdar
					</motion.span>
				</motion.div>

				{/* Desktop Navigation */}
				<div className="hidden md:flex space-x-8">
					{navItems.map((item, index) => (
						<motion.a
							key={item.name}
							href={item.href}
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1 * index + 0.3 }}
							className="relative text-sm font-medium transition-all duration-300 hover:text-primary group"
							onClick={() => setIsMenuOpen(false)}
						>
							{item.name}
							<motion.div
								className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-600 transition-all duration-300 group-hover:w-full"
								whileHover={{ width: "100%" }}
							/>
						</motion.a>
					))}
				</div>

				{/* Desktop Social Links */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.5 }}
					className="hidden md:flex items-center space-x-2"
				>
					<ThemeToggle />
					<motion.div
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<Button
							size="sm"
							variant="ghost"
							className="hover:bg-primary/10"
							asChild
						>
							<a
								href="https://github.com/MET4L-DS"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Github className="h-4 w-4" />
							</a>
						</Button>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<Button
							size="sm"
							variant="ghost"
							className="hover:bg-primary/10"
							asChild
						>
							<a
								href="https://www.linkedin.com/in/ayanshu-dev-sikdar-117792249/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Linkedin className="h-4 w-4" />
							</a>
						</Button>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<Button
							size="sm"
							variant="ghost"
							className="hover:bg-primary/10"
							asChild
						>
							<a href="mailto:your.email@example.com">
								<Mail className="h-4 w-4" />
							</a>
						</Button>
					</motion.div>
				</motion.div>

				{/* Mobile Menu Button */}
				<div className="md:hidden flex items-center space-x-2">
					<ThemeToggle />
					<motion.div
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<Button variant="ghost" size="sm" onClick={toggleMenu}>
							{isMenuOpen ? (
								<X className="h-5 w-5" />
							) : (
								<Menu className="h-5 w-5" />
							)}
						</Button>
					</motion.div>
				</div>
			</div>

			{/* Mobile Menu */}
			<motion.div
				initial={false}
				animate={isMenuOpen ? "open" : "closed"}
				variants={{
					open: { opacity: 1, height: "auto" },
					closed: { opacity: 0, height: 0 },
				}}
				transition={{ duration: 0.3 }}
				className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-t border-border/50"
			>
				<div className="container mx-auto px-4 py-4 space-y-4">
					{navItems.map((item, index) => (
						<motion.a
							key={item.name}
							href={item.href}
							initial={{ opacity: 0, x: -20 }}
							animate={
								isMenuOpen
									? { opacity: 1, x: 0 }
									: { opacity: 0, x: -20 }
							}
							transition={{ delay: index * 0.1 }}
							className="block text-sm font-medium transition-colors hover:text-primary py-2"
							onClick={() => setIsMenuOpen(false)}
						>
							{item.name}
						</motion.a>
					))}

					<div className="flex space-x-4 pt-4 border-t border-border/50">
						<motion.div
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<Button size="sm" variant="ghost" asChild>
								<a
									href="https://github.com/MET4L-DS"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="h-4 w-4" />
								</a>
							</Button>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<Button size="sm" variant="ghost" asChild>
								<a
									href="https://www.linkedin.com/in/ayanshu-dev-sikdar-117792249/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Linkedin className="h-4 w-4" />
								</a>
							</Button>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<Button size="sm" variant="ghost" asChild>
								<a href="mailto:your.email@example.com">
									<Mail className="h-4 w-4" />
								</a>
							</Button>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</motion.nav>
	);
}
