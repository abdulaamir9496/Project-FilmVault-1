import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import axios from "axios"
import Pagination from "./Pagination"
import PropTypes from "prop-types"

const Movies = ({handleAddtoWatchlist, handleRemoveFromWatchList, watchlist}) => {

    const [movies, setMovies] = useState([])
    const [pageNo, setPageNo] = useState(1)

    //create 2 methods:
    const handlePrev = () => {
        if(pageNo===1) {
            setPageNo(pageNo)
        }
        else {
            setPageNo(pageNo-1)
        }
    }

    const handleNext = () => {
        setPageNo(pageNo+1)
    }

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=41c8ad6df5886d1d123172371597a068&language=en-US&page=${pageNo}`)
            .then(function(res){
                console.log(res.data.results)
                setMovies(res.data.results)
            })
    }, [pageNo]);

    return (
        <>
            <div className="p-4">
                <div className="text-2xl m-5 font-bold text-center ">
                    Trending Movies
                </div>

                <div className="flex flex-row flex-wrap justify-evenly">
                    {movies.map((movieObj) => {
                        return <MovieCard 
                            key={movieObj.id} 
                            movieObj={movieObj} 
                            poster_path={movieObj.poster_path} 
                            name={movieObj.original_title} 
                            handleAddtoWatchlist={handleAddtoWatchlist} 
                            handleRemoveFromWatchList={handleRemoveFromWatchList} 
                            Watchlist={watchlist} />
                    })}
                </div>
                
                <Pagination  pageNo={pageNo} handlePrev={handlePrev} handleNext={handleNext}/>
            </div>
        </>
    )
}

export default Movies

Movies.propTypes = {
    handleAddtoWatchlist: PropTypes.func.isRequired,
    handleRemoveFromWatchList: PropTypes.func.isRequired,
    watchlist: PropTypes.array.isRequired
}

//https://api.themoviedb.org/3/movie/popular?api_key=41c8ad6df5886d1d123172371597a068&language=en-US&page=1
