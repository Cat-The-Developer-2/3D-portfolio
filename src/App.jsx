import LogoSection from "./Components/LogoSection";
import Navbar from "./Components/Navbar";
import ExperienceSection from "./Sections/ExperienceSection";
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
      <ExperienceSection />
    </>
  );
};

export default App;
