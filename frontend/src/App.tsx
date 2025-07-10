import {
	Hero,
	About,
	Projects,
	Experience,
	Certifications,
	Contact,
	Navigation,
} from "./components";

function App() {
	return (
		<div className="min-h-screen bg-background">
			<Navigation />
			<main className="px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
				<Hero />
				<About />
				<Projects />
				<Experience />
				<Certifications />
				<Contact />
			</main>
		</div>
	);
}

export default App;
