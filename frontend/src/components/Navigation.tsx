import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
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
			className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b"
		>
			<div className="container mx-auto px-4 py-3 flex justify-between items-center">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
					className="text-xl font-bold"
				>
					Ayanshu Dev Sikdar
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
							className="text-sm font-medium transition-colors hover:text-primary"
							onClick={() => setIsMenuOpen(false)}
						>
							{item.name}
						</motion.a>
					))}
				</div>

				{/* Desktop Social Links */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
					className="hidden md:flex items-center space-x-2"
				>
					<ThemeToggle />
					<Button size="sm" variant="ghost" asChild>
						<a
							href="https://github.com/MET4L-DS"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Github className="h-4 w-4" />
						</a>
					</Button>
					<Button size="sm" variant="ghost" asChild>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Linkedin className="h-4 w-4" />
						</a>
					</Button>
					<Button size="sm" variant="ghost" asChild>
						<a href="mailto:your.email@example.com">
							<Mail className="h-4 w-4" />
						</a>
					</Button>
				</motion.div>

				{/* Mobile Menu Button */}
				<div className="md:hidden flex items-center space-x-2">
					<ThemeToggle />
					<Button variant="ghost" size="sm" onClick={toggleMenu}>
						{isMenuOpen ? (
							<X className="h-5 w-5" />
						) : (
							<Menu className="h-5 w-5" />
						)}
					</Button>
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
				className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-t"
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

					<div className="flex space-x-4 pt-4 border-t">
						<Button size="sm" variant="ghost" asChild>
							<a
								href="https://github.com/MET4L-DS"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Github className="h-4 w-4" />
							</a>
						</Button>
						<Button size="sm" variant="ghost" asChild>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Linkedin className="h-4 w-4" />
							</a>
						</Button>
						<Button size="sm" variant="ghost" asChild>
							<a href="mailto:your.email@example.com">
								<Mail className="h-4 w-4" />
							</a>
						</Button>
					</div>
				</div>
			</motion.div>
		</motion.nav>
	);
}
