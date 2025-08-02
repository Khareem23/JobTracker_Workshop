import "./App.css";
import Nav from "./components/layout/nav";
import Hero from "./components/page-components/hero";

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
        {/*Testimonials*/}
        {/*How it works*/}
        {/*Pricing*/}
        {/*Call to action*/}
        {/*Footer*/}
      </main>
    </div>
  );
}

export default App;
