import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

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
			href: "https://linkedin.com",
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
		<section id="contact" className="py-20 px-4">
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
						Get In Touch
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Ready to bring this blend of hands-on experience and
						passion for full-stack development to your team. Let's
						discuss how I can contribute to meaningful, user-facing
						products.
					</p>
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
						<div>
							<h3 className="text-2xl font-semibold mb-6">
								Let's Connect
							</h3>
							<p className="text-muted-foreground mb-8 leading-relaxed">
								I'm always excited to discuss new opportunities,
								interesting projects, or just chat about
								technology and development. Feel free to reach
								out through any of the channels below.
							</p>
						</div>

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
								>
									<Card className="hover:shadow-md transition-shadow duration-300">
										<CardContent className="p-4">
											<a
												href={info.href}
												className="flex items-center space-x-4 group"
											>
												<div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
													<info.icon className="h-5 w-5 text-primary" />
												</div>
												<div>
													<p className="font-medium">
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

						<div>
							<h4 className="text-lg font-semibold mb-4">
								Follow Me
							</h4>
							<div className="flex space-x-4">
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
										whileHover={{ y: -2 }}
										className={`p-3 bg-muted rounded-lg transition-all duration-300 ${social.color}`}
									>
										<social.icon className="h-5 w-5" />
									</motion.a>
								))}
							</div>
						</div>
					</motion.div>

					{/* Call to Action Card */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.4 }}
						variants={fadeInVariants}
					>
						<Card className="h-full">
							<CardContent className="p-8 h-full flex flex-col justify-center">
								<div className="text-center space-y-6">
									<div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center">
										<Send className="h-8 w-8 text-white" />
									</div>

									<div>
										<h3 className="text-2xl font-bold mb-4">
											Ready to Collaborate?
										</h3>
										<p className="text-muted-foreground leading-relaxed mb-8">
											I'm actively seeking opportunities
											where I can contribute to innovative
											projects, work with talented teams,
											and continue growing as a full-stack
											developer. Let's build something
											amazing together!
										</p>
									</div>

									<div className="space-y-4">
										<Button
											size="lg"
											className="w-full"
											asChild
										>
											<a href="mailto:ayanshu.dev@example.com">
												<Mail className="h-5 w-5 mr-2" />
												Send Me an Email
											</a>
										</Button>
										<Button
											size="lg"
											variant="outline"
											className="w-full"
											asChild
										>
											<a
												href="https://linkedin.com"
												target="_blank"
												rel="noopener noreferrer"
											>
												<Linkedin className="h-5 w-5 mr-2" />
												Connect on LinkedIn
											</a>
										</Button>
									</div>

									<div className="pt-6 border-t">
										<p className="text-sm text-muted-foreground">
											<strong>Current Status:</strong>{" "}
											Open to full-time opportunities and
											exciting freelance projects
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>

				{/* Footer */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.6 }}
					variants={fadeInVariants}
					className="text-center mt-16 pt-8 border-t"
				>
					<p className="text-muted-foreground">
						© 2025 Ayanshu Dev Sikdar. Built with React, TypeScript,
						TailwindCSS, and Framer Motion.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
