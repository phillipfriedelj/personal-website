import Navbar from "./sections/Navbar";
import Banner from "./sections/Banner";
import KeyFacts from "./sections/KeyFacts";
import Divider from "./components/Dividers/Divider";
import DividerDecoration from "./components/Dividers/DividerDecoration";

function App() {
	return (
		<div className="w-full">
			<div className="lg:h-screen max-h-screen flex flex-col">
				<Navbar />
				<Banner />
			</div>
			<DividerDecoration />
			<KeyFacts />
			<Divider />
			<div className="h-screen">

			</div>
		</div>
	);
}

export default App;
