import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";

function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
          <Route exact path="/sobriety-counter/" element={<Index />} />
      </Routes>
    </Router>

  );
}

export default App;
