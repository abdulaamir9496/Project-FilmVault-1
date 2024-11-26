import "./App.css";
import Navbar from "./components/Navbar"
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
// import { useState } from "react";


function App() {

  // let [watchlist, setWatchlist] = useState([])


  // let handleAddtoWatchlist = (movieObj) => {
  //   let newWatchList = [...watchlist, movieObj]
  //   setWatchlist(newWatchList)  
  //   console.log(newWatchList)
  // }

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


//API KEY:
//https://api.themoviedb.org/3/movie/popular?api_key=41c8ad6df5886d1d123172371597a068&language=en-US&page=1
