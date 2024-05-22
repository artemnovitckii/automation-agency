import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookConsultation from "./pages/BookConsultation";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route
          path="/free-automation-consultation"
          Component={BookConsultation}
        />
      </Routes>

      <ScrollToTop />
      <Footer />
    </Router>
  );
}

export default App;
