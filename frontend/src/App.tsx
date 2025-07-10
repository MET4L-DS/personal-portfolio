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
			<main>
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
