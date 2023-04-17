import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Services from "./components/Service/Services";
import './App.scss';

function App() {
  return (
    <div className="container">

      <Header />

      <div className="banner">
        <ProfComponent />
      </div>

      <Services />

      <div className="lightColor">
        <Skills />
      </div>

      <Projects />

      <div className="lightColor">
        <Footer />
      </div>

    </div>
  );
}

export default App;
