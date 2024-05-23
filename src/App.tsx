import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import BookConsultation from "./pages/BookConsultation";
import Home from "./pages/Home";
import ClientPage from "./pages/ClientPage";


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
        <Route path="clients/:clientName" Component={ClientPage} />
      </Routes>

      <ScrollToTop />
      <Footer />
    </Router>
  );
}

export default App;
