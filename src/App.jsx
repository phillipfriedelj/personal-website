import Navbar from "./sections/Navbar";
import Banner from "./sections/Banner";
import KeyFacts from "./sections/KeyFacts";
import Footer from "./sections/Footer";
import Divider from "./components/separators/Divider";
import DividerDecoration from "./components/separators/DividerDecoration";

function App() {
	return (
		<div className="w-full">
			<div className="h-screen max-h-screen flex flex-col bg-noise-gradient">
				<Navbar />
				<Banner />
				<DividerDecoration />
			</div>
			<KeyFacts />
			<Divider />
			<Footer />
		</div>
	);
}

export default App;
