import { motion, useScroll, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect, useRef } from "react";

export function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("about");
	const navRef = useRef<HTMLDivElement>(null);
	const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });

	// Scroll progress tracking
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	// Add a subtle pulse animation to the progress bar
	const progressGlow = useSpring(scrollYProgress, {
		stiffness: 200,
		damping: 25,
		restDelta: 0.001,
	});

	const navItems = [
		{ name: "About", href: "#about", id: "about" },
		{ name: "Projects", href: "#projects", id: "projects" },
		{ name: "Experience", href: "#experience", id: "experience" },
		{
			name: "Certifications",
			href: "#certifications",
			id: "certifications",
		},
		{ name: "Contact", href: "#contact", id: "contact" },
	];

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	// Intersection Observer to track active section
	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: "-20% 0px -80% 0px",
			threshold: 0,
		};

		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		};

		const observer = new IntersectionObserver(
			observerCallback,
			observerOptions
		);

		// Observe all sections
		navItems.forEach((item) => {
			const section = document.getElementById(item.id);
			if (section) {
				observer.observe(section);
			}
		});

		return () => observer.disconnect();
	}, []);

	// Update underline position when active section changes
	useEffect(() => {
		if (navRef.current) {
			const activeNavItem = navRef.current.querySelector(
				`[data-section="${activeSection}"]`
			) as HTMLElement;
			if (activeNavItem) {
				const navContainer = navRef.current;
				const containerRect = navContainer.getBoundingClientRect();
				const activeRect = activeNavItem.getBoundingClientRect();

				setUnderlineStyle({
					width: activeRect.width,
					left: activeRect.left - containerRect.left,
				});
			}
		}
	}, [activeSection]);

	return (
		<motion.nav
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8 }}
			className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg"
		>
			{/* Scroll Progress Bar */}
			<motion.div
				className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 origin-left shadow-lg"
				style={{ scaleX }}
			/>

			{/* Glowing effect for progress bar */}
			<motion.div
				className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-purple-500/50 to-pink-500/50 origin-left blur-sm"
				style={{
					scaleX: progressGlow,
					opacity: scrollYProgress,
				}}
			/>

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
				<div className="hidden md:flex relative" ref={navRef}>
					<div className="flex space-x-8">
						{navItems.map((item, index) => (
							<motion.a
								key={item.name}
								href={item.href}
								data-section={item.id}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 * index + 0.3 }}
								className={`relative text-sm font-medium transition-all duration-300 py-2 ${
									activeSection === item.id
										? "text-primary"
										: "text-foreground hover:text-primary"
								}`}
								onClick={() => setIsMenuOpen(false)}
							>
								{item.name}
							</motion.a>
						))}
					</div>

					{/* Sliding underline */}
					<motion.div
						className="absolute bottom-0 h-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full"
						initial={false}
						animate={{
							width: underlineStyle.width,
							x: underlineStyle.left,
						}}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 30,
						}}
					/>
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
							className={`block text-sm font-medium transition-colors py-2 ${
								activeSection === item.id
									? "text-primary border-l-2 border-primary pl-4"
									: "text-foreground hover:text-primary"
							}`}
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
