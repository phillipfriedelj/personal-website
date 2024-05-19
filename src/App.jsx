import Navbar from "./sections/Navbar";
import Banner from "./sections/Banner";
import KeyFacts from "./sections/KeyFacts";
import Footer from "./sections/Footer";
import Divider from "./components/dividers/Divider";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="w-full">
      <div className="md:h-screen flex flex-col">
        <Navbar />
        <Banner />
      </div>
      <KeyFacts />
      <Divider />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
