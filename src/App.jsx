import "./App.css";
import Navbar from "./components/Navbar"
import Movies from "./components/Movies";
import WatchList from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";


function App() {

  //Prop drilling (drilling from each and every component). 
  // There is something better then this to use which is called as ContextAPI. 
  // By using Context API, we can get rid of prop drilling. 
  // In Context API we don't need to worry about drilling properties and methods from each and every component one by one.
  let [watchList, setWatchList] = useState([])

  let handleAddToWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj]
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList))
    setWatchList(newWatchList)  
    // console.log(newWatchList)
  }

  let handleRemoveFromWatchList = (movieObj) => {
    let filterWatchList = watchList.filter((movie) => {
      return movie.id !== movieObj.id 
    })
    setWatchList(filterWatchList)
    localStorage.setItem('moviesApp', JSON.stringify(filterWatchList))
    // console.log(filterWatchList)
  }

  //This use effect will look at the local storage, if there is something in the local storage, 
  //then it will pickup all the data from the local storage and it will populate the watchlist. 
  //Whenever you will refresh, your array will not get empty. Now you will have the array again.
  //local storage will not remove your data even if you will refresh the page.
  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage) {
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* which should not move from the it's place even after routing to different pages */}
        {/* It should change to it's specific pages on clicked */}
        <Routes>
          <Route path="/" element={
            <>
              <Banner /> 
              <Movies 
                watchList={watchList} 
                handleAddToWatchList={handleAddToWatchList} 
                handleRemoveFromWatchList={handleRemoveFromWatchList}
              />
            </>
          } />
          <Route 
            path="/watchlist" 
            element={
              <WatchList 
                watchList={watchList} 
                setWatchList={setWatchList} 
                handleAddToWatchList={handleAddToWatchList}
              />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


//API KEY:
//https://api.themoviedb.org/3/movie/popular?api_key=41c8ad6df5886d1d123172371597a068&language=en-US&page=1
