import "./App.scss";
import About from "./components/about/About";
import Courses from "./components/courses/Courses";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Courses />
      <Footer />
    </>
  );
}

export default App;
