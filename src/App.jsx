// App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/header";
import Fleet from "./pages/fleet";
import Analytics from "./pages/analytics";
import Sustainability from "./pages/sustainability";


function App() {
  
  return (
     <div className="w-screen h-screen flex flex-col bg-gray-100">
    <Navbar /> 
    <Router>
      <Routes>
        <Route path="/" element={<Fleet />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/sustainability" element={<Sustainability />} />
      </Routes>
    </Router>
</div>
  );
}

export default App;
