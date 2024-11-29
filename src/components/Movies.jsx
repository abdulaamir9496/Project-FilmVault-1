import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";
import PropTypes from "prop-types";

const Movies = ({ handleAddToWatchList, handleRemoveFromWatchList, watchList }) => {
    const [movies, setMovies] = useState([]);
    const [pageNo, setPageNo] = useState(1);

  // Method to go to the previous page
    const handlePrev = () => {
        if (pageNo > 1) {
            setPageNo(pageNo - 1);
        }
    };

  // Method to go to the next page
    const handleNext = () => {
        setPageNo(pageNo + 1);
    };

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/popular?api_key=41c8ad6df5886d1d123172371597a068&language=en-US&page=${pageNo}`
            )
            .then(function (res) {
                setMovies(res.data.results);
            });
    }, [pageNo]); // Fetch new data whenever pageNo changes

    return (
    <>
        <div className="p-4">
        <div className="text-2xl m-5 font-bold text-center ">Trending Movies</div>
        <div className="flex flex-row flex-wrap justify-evenly">
            {movies.map((movieObj) => {
                return (
                    <MovieCard
                        key={movieObj.id}
                        movieObj={movieObj}
                        poster_path={movieObj.poster_path}
                        name={movieObj.original_title}
                        handleAddToWatchList={handleAddToWatchList}
                        handleRemoveFromWatchList={handleRemoveFromWatchList}
                        watchList={watchList}
                    />
                );
            })}
        </div>

        {/* Pass the correct props to Pagination */}
        <Pagination
            pageNo={pageNo}
            handlePrev={handlePrev}
            handleNext={handleNext}
        />
        </div>
    </>
    );
};

export default Movies;

Movies.propTypes = {
    handleAddToWatchList: PropTypes.func.isRequired,
    handleRemoveFromWatchList: PropTypes.func.isRequired,
    watchList: PropTypes.array.isRequired,
};
