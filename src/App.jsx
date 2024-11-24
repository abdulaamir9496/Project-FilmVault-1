import "./App.css";
import Navbar from "./components/Navbar"
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* which should not move from the it's place even after routing to different pages */}
        {/* It should change to it's specific pages on clicked */}
        <Routes>
          <Route path="/" element={<><Banner /> <Movies /></>} />  
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
