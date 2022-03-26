import { About, Footer, Navbar, GetStarted, Hero, HowItWorks, PhotosAndPatterns, Superhero, WhyCasecraft } from "./components";

const App = () => {
  return ( 
    <div className="min-h-screen bg-[#F6F6F9] font-body overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Superhero />
      <PhotosAndPatterns />
      <WhyCasecraft />
      <HowItWorks />
      <GetStarted />
      <Footer />
    </div>    
  );
}

export default App;