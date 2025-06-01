import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Benefits from "./components/Benefits/Benefits";
import Projects from "./components/Projects/Projects";
import FAQ from "./components/FAQ/FAQ";
import Covers from "./components/Covers/Covers";
import Reviews from "./components/Reviews/Reviews";
import WorkTogether from "./components/WorkTogether/WorkTogether";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Benefits />
        {/* <Projects /> */}
        <FAQ />
        {/* <Covers /> */}
        {/* <Reviews /> */}
      </main>
      <WorkTogether />
    </>
  );
}

export default App;
