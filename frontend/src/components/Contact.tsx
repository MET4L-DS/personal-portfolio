import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	Mail,
	Phone,
	MapPin,
	Github,
	Linkedin,
	Send,
	Users,
	Share2,
} from "lucide-react";

export function Contact() {
	const fadeInVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	const contactInfo = [
		{
			icon: Mail,
			label: "Email",
			value: "ayanshu.dev@example.com",
			href: "mailto:ayanshu.dev@example.com",
		},
		{
			icon: Phone,
			label: "Phone",
			value: "+91 XXXXX XXXXX",
			href: "tel:+91XXXXXXXXX",
		},
		{
			icon: MapPin,
			label: "Location",
			value: "Tezpur, Assam, India",
			href: "#",
		},
	];

	const socialLinks = [
		{
			icon: Github,
			label: "GitHub",
			href: "https://github.com/MET4L-DS",
			color: "hover:text-gray-600",
		},
		{
			icon: Linkedin,
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/ayanshu-dev-sikdar-117792249/",
			color: "hover:text-blue-600",
		},
		{
			icon: Mail,
			label: "Email",
			href: "mailto:ayanshu.dev@example.com",
			color: "hover:text-green-600",
		},
	];

	return (
		<section
			id="contact"
			className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden"
		>
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-1/3 right-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-green-500/5 rounded-full blur-3xl animate-pulse" />
				<div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />

				{/* Floating connection lines */}
				{[...Array(8)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute w-px h-12 bg-gradient-to-b from-primary/20 to-transparent"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
						}}
						animate={{
							scaleY: [0, 1, 0],
							opacity: [0.2, 1, 0.2],
						}}
						transition={{
							duration: 2 + Math.random() * 3,
							repeat: Infinity,
							delay: i * 0.5,
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
						className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent"
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
						Get In Touch
					</motion.h2>
					<motion.p
						className="text-muted-foreground max-w-2xl mx-auto text-lg"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
					>
						Ready to bring this blend of hands-on experience and
						passion for full-stack development to your team. Let's
						discuss how I can contribute to meaningful, user-facing
						products.
					</motion.p>
				</motion.div>

				<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
					{/* Contact Information */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						variants={fadeInVariants}
						className="space-y-8"
					>
						<motion.div
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.2 }}
						>
							<Card className="p-6 bg-background/80 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
								<div className="flex items-center gap-4 mb-6">
									<div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center">
										<Users className="h-6 w-6 text-white" />
									</div>
									<div>
										<h3 className="text-2xl font-semibold">
											Let's Connect
										</h3>
										<p className="text-muted-foreground">
											Ready to collaborate
										</p>
									</div>
								</div>
								<p className="text-muted-foreground leading-relaxed">
									I'm always excited to discuss new
									opportunities, interesting projects, or just
									chat about technology and development. Feel
									free to reach out through any of the
									channels below.
								</p>
							</Card>
						</motion.div>

						<div className="space-y-4">
							{contactInfo.map((info, index) => (
								<motion.div
									key={info.label}
									initial={{ opacity: 0, x: -30 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.6,
										delay: index * 0.1,
									}}
									whileHover={{ x: 5 }}
								>
									<Card className="hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm border-border/50 group">
										<CardContent className="p-4">
											<a
												href={info.href}
												className="flex items-center space-x-4 group"
											>
												<motion.div
													className="p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-200"
													whileHover={{ scale: 1.1 }}
												>
													<info.icon className="h-5 w-5 text-primary" />
												</motion.div>
												<div>
													<p className="font-medium group-hover:text-primary transition-colors">
														{info.label}
													</p>
													<p className="text-muted-foreground">
														{info.value}
													</p>
												</div>
											</a>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</div>

						<motion.div
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.2 }}
						>
							<Card className="p-6 bg-background/80 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
								<div className="flex items-center gap-4 mb-6">
									<div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
										<Share2 className="h-6 w-6 text-white" />
									</div>
									<div>
										<h4 className="text-lg font-semibold">
											Follow Me
										</h4>
										<p className="text-muted-foreground">
											Stay connected
										</p>
									</div>
								</div>
								<div className="grid grid-cols-2 gap-3">
									{socialLinks.map((social, index) => (
										<motion.a
											key={social.label}
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.6,
												delay: index * 0.1,
											}}
											whileHover={{ y: -2, scale: 1.05 }}
											className={`p-3 bg-muted rounded-lg transition-all duration-300 ${social.color} hover:shadow-md`}
										>
											<social.icon className="h-5 w-5" />
										</motion.a>
									))}
								</div>
							</Card>
						</motion.div>
					</motion.div>

					{/* Call to Action Card */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.4 }}
						variants={fadeInVariants}
					>
						<motion.div
							whileHover={{ scale: 1.01 }}
							transition={{ duration: 0.2 }}
						>
							<Card className="h-full bg-background/80 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
								<CardContent className="p-8 h-full flex flex-col justify-center">
									<div className="text-center space-y-6">
										<motion.div
											className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center"
											whileHover={{
												scale: 1.1,
												rotate: 360,
												transition: { duration: 0.8 },
											}}
										>
											<Send className="h-8 w-8 text-white" />
										</motion.div>

										<div>
											<h3 className="text-2xl font-bold mb-4">
												Ready to Collaborate?
											</h3>
											<p className="text-muted-foreground leading-relaxed mb-8">
												I'm actively seeking
												opportunities where I can
												contribute to innovative
												projects, work with talented
												teams, and continue growing as a
												full-stack developer. Let's
												build something amazing
												together!
											</p>
										</div>

										<div className="space-y-4">
											<motion.div
												whileHover={{ scale: 1.05 }}
												transition={{ duration: 0.2 }}
											>
												<Button
													size="lg"
													className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
													asChild
												>
													<a href="mailto:ayanshu.dev@example.com">
														<Mail className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-200" />
														Send Me an Email
													</a>
												</Button>
											</motion.div>
											<motion.div
												whileHover={{ scale: 1.05 }}
												transition={{ duration: 0.2 }}
											>
												<Button
													size="lg"
													variant="outline"
													className="w-full bg-background/50 hover:bg-muted/50 border-border/50 hover:border-primary/50 group"
													asChild
												>
													<a
														href="https://www.linkedin.com/in/ayanshu-dev-sikdar-117792249/"
														target="_blank"
														rel="noopener noreferrer"
													>
														<Linkedin className="h-5 w-5 mr-2 group-hover:text-blue-600 transition-colors duration-200" />
														Connect on LinkedIn
													</a>
												</Button>
											</motion.div>
										</div>

										<div className="pt-6 border-t border-border/50">
											<motion.p
												className="text-sm text-muted-foreground"
												initial={{ opacity: 0, y: 10 }}
												whileInView={{
													opacity: 1,
													y: 0,
												}}
												viewport={{ once: true }}
												transition={{ delay: 0.8 }}
											>
												<strong className="text-primary">
													Current Status:
												</strong>{" "}
												Open to part-time opportunities
												and exciting freelance projects
											</motion.p>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					</motion.div>
				</div>

				{/* Footer */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.6 }}
					variants={fadeInVariants}
					className="text-center mt-16 pt-8 border-t border-border/50"
				>
					<motion.p
						className="text-muted-foreground"
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.2 }}
					>
						© 2025 Ayanshu Dev Sikdar. Built with React, TypeScript,
						TailwindCSS, and Framer Motion.
					</motion.p>
				</motion.div>
			</div>
		</section>
	);
}
