import "./App.css";
import Nav from "./components/layout/nav";
import Features from "./components/page-components/features";
import Hero from "./components/page-components/hero";
import Testimonials from "./components/page-components/testimonials";

function App() {
  return (
    <div>
      {/*Nav*/}
      <Nav />
      <main>
        {/*Hero*/}
        <section className="relative">
          <Hero />
        </section>
        {/*Features*/}

        <section id="features">
          <Features />
        </section>
        {/*Testimonials*/}
        <section id="testimonials">
          <Testimonials />
        </section>
        {/*How it works*/}
        <section id="how-it-works">
          <h2 className="text-2xl font-bold">How it works</h2>
          <p className="mt-4">Learn how to use our product effectively.</p>
        </section>
        {/*Pricing*/}
        <section id="pricing">
          <h2 className="text-2xl font-bold">Pricing</h2>
          <p className="mt-4">Choose a plan that suits you.</p>
        </section>
        {/*Call to action*/}
        {/*Footer*/}
      </main>
    </div>
  );
}

export default App;
