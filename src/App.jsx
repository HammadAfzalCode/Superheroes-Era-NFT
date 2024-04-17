import FAQsComponent from "./components/Faqs";
import { Featured } from "./components/Featured";
import { FeaturedCollection } from "./components/FeaturedCollection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Roadmap } from "./components/Roadmap";

function App() {
  return (
    <div>
      <Hero />
      <Featured />

      <Roadmap />
      <FeaturedCollection />
      <FAQsComponent />
      <Footer />
    </div>
  );
}

export default App;
