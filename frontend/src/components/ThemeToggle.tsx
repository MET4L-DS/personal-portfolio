import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const theme = localStorage.getItem("theme");
		if (
			theme === "dark" ||
			(!theme &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			setIsDark(true);
			document.documentElement.classList.add("dark");
		} else {
			setIsDark(false);
			document.documentElement.classList.remove("dark");
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = !isDark;
		setIsDark(newTheme);

		if (newTheme) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.3 }}
		>
			<Button
				variant="ghost"
				size="sm"
				onClick={toggleTheme}
				className="relative overflow-hidden"
			>
				<motion.div
					initial={false}
					animate={{ rotate: isDark ? 180 : 0 }}
					transition={{ duration: 0.3 }}
				>
					{isDark ? (
						<Sun className="h-4 w-4" />
					) : (
						<Moon className="h-4 w-4" />
					)}
				</motion.div>
				<span className="sr-only">Toggle theme</span>
			</Button>
		</motion.div>
	);
}
