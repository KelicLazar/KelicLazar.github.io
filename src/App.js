import React, { useState } from "react";
import "./App.scss";
import About from "./components/about/About";
import Courses from "./components/courses/Courses";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import CustomComp from "./CustomComp";
function App() {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <>
      {/* <CustomComp setShowMenu={setShowMenu} showMenu={showMenu} />
      <h2>{"" + showMenu}</h2> */}
      {/* <div
        class="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="small"
        data-theme="dark"
        data-type="horizontal"
        data-vanity="lazar-kelic-02261323b"
        data-version="v1"
      > */}
      {/* <a
          class="badge-base__link LI-simple-link"
          href="https://rs.linkedin.com/in/lazar-kelic-02261323b?trk=profile-badge"
        >
          Lazar Kelic
        </a> */}
      {/* </div> */}

      <Header />
      <About />
      <Projects />
      <Courses />
      <Footer />
    </>
  );
}

export default App;
