import Experience from "./experience";
import Footer from "./footer";
import Header from "./header";
import Hero from "./hero";
import Projects from "./projects";
import Tools from "./tools";

const App = () => {
  return (
    <div className="relative">
        <Header />
        <Hero />
        <div className="absolute w-full">
          <Projects />
          <Experience />
          <Tools />
          <Footer />
        </div>
    </div>    
  );
}

export default App;
