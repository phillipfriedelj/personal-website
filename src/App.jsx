import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import KeyFacts from "./components/KeyFacts";

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
