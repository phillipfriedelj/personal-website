import Navbar from "./sections/Navbar";
import Banner from "./sections/Banner";
import KeyFacts from "./sections/KeyFacts";

function App() {
	return (
		<div className="w-screen bg-red-300">
			<div className="h-screen max-h-screen overflow-hidden">
				<Navbar />
				<Banner />
			</div>
			<KeyFacts />
			<div className="h-screen">

			</div>
		</div>
	);
}

export default App;
