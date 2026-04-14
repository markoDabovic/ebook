import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
import About from "./components/About";

export default function App() {
  return (
    <div className="bg-pink-300 text-white">
      {/* <Navbar /> */}

      <Hero />

      <Product />

      <About />
    </div>
  );
}
