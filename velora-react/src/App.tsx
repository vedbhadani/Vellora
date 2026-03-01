import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Subtle film grain texture */}
      <div className="noise-overlay" />

      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <Portfolio />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
