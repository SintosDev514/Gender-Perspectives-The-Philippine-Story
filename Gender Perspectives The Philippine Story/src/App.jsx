import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import PreColonial from "./Pages/PreColonial";
import SpanishAmerican from "./Pages/SpanishAmerican";
import PostWarToModern from "./Pages/PostWarToModern";
import ContemporaryIssues from "./Pages/ContemporaryIssues";
import Resources from "./Pages/Resources";

// Import other pages if you have them
//
// import Colonial from "./Pages/Colonial";
// import Modern from "./Pages/Modern";

import "./assets/Style/App.css";

function App() {
  return (
    <Router>
      <Nav />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/precol" element={<PreColonial />}></Route>
        <Route path="/colonial" element={<SpanishAmerican />}></Route>
        <Route path="/modern" element={<PostWarToModern />}></Route>
        <Route path="contemporary" element={<ContemporaryIssues />}></Route>
        <Route path="resources" element={<Resources />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
