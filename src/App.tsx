import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import BookConsultation from "./pages/BookConsultation";
import Home from "./pages/Home";

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
