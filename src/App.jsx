import LogoSection from "./Components/LogoSection";
import Navbar from "./Components/Navbar";
import FeatureCards from "./Sections/FeatureCards";
import Hero from "./Sections/Hero";
import ShowcaseSection from "./Sections/ShowcaseSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
    </>
  );
};

export default App;
