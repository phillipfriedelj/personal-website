import Navbar from "./sections/Navbar";
import Banner from "./sections/Banner";
import KeyFacts from "./sections/KeyFacts";
import Divider from "./components/dividers/Divider";
import DividerDecoration from "./components/dividers/DividerDecoration";

function App() {
	return (
		<div className="w-full">
			<div className="max-h-screen flex flex-col">
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
