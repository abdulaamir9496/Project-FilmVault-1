import { useEffect, useState } from "react";
import genreids from "../Utility/Genre";
import PropTypes from "prop-types";                             

const WatchList = ({ watchList, setWatchList }) => {
    const [search, setSearch] = useState("");
    const [genreList, setGenreList] = useState(["All Genres"]);
    const [currGenre, setCurrGenre] = useState(["All Genres"]);

    let handleSearch = (e) => {
        setSearch(e.target.value);
    };

    let handleFilter = (genre) => {
        setCurrGenre(genre)
    }

    let sortIncreasing = () => {
        let sortedIncreasing = watchList.sort((movieA, movieB) => {
            return movieA.vote_average - movieB.vote_average;
        });
        setWatchList(...sortedIncreasing);
    };

    let sortDecreasing = () => {
        let sortedDecreasing = watchList.sort((movieA, movieB) => {
            return movieB.vote_average - movieA.vote_average;
        });
        setWatchList(...sortedDecreasing);
    };

    useEffect(() => {
        let temp = watchList.map((movieObj) => {
            return genreids[movieObj.genre_ids[0]];
        });
        setGenreList(["All Genres", ...temp]);
    }, [watchList]);

    return (
        <>
            <div className="flex justify-center flex-wrap m-4">
                {genreList.map((genre, index) => {
                    return (
                        <div 
                            onClick={() => handleFilter(genre)}
                            key={index} 
                            className="flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-2"
                        >
                            {genre}
                        </div>
                    );
                })}
            </div>

            <div className="flex justify-center my-4">
                <input
                    onChange={handleSearch}
                    value={search}
                    className="h-[3rem] w-[18rem] bg-gray-200 rounded-lg p-3 border-none my-8"
                    type="text"
                    placeholder="Search for Movies..."
                />
            </div>

            <div className="border border-gray-200 m-8 overflow-hidden rounded-lg">
                <table className="w-full text-gray-600 text-center">
                    <thead className="border-b-4">
                        <tr>
                            <th>Name</th>
                            <th className="flex justify-center">
                                <div onClick={sortIncreasing} className="p-2">
                                    <i className="fa-solid fa-arrow-up"></i>
                                </div>
                                <div className="p-2">Ratings</div>
                                <div onClick={sortDecreasing} className="p-2">
                                    <i className="fa-solid fa-arrow-down"></i>
                                </div>
                            </th>
                            <th>Popularity</th>
                            <th>Genre</th>
                            <th>Watched</th>
                        </tr>
                    </thead>

                    <tbody>
                    {watchList
                        .filter((movieObj) => {
                            return movieObj.title
                                .toLowerCase()
                                .includes(search.toLocaleLowerCase());
                        })
                        .map((movieObj) => (
                        <tr key={movieObj.id} className="border-b-2">
                            <td className="flex item-center px-6 py-4">
                                <img
                                    className="h-[8rem] w-[6rem]"
                                    src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                                    alt=""
                                />
                                <div className="mx-10 justify-center">{movieObj.title}</div>
                            </td>
                            <td>{movieObj.vote_average}</td>
                            <td>{movieObj.popularity}</td>
                            <td>{genreids[movieObj.genre_ids[0]]}</td>
                            <td>Yes</td>
                            <td>
                                <button className="hover:bg-red-200 text-red-500 font-bold">
                                    Delete
                                </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

WatchList.propTypes = {
    watchList: PropTypes.arrayOf(PropTypes.object).isRequired,
    setWatchList: PropTypes.func.isRequired,
};

export default WatchList;
