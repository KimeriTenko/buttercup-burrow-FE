import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Store from "./components/Store";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Gallery />
      <Store />
    </div>
  );
}

export default App;