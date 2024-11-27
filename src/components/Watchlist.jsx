import PropTypes from "prop-types"

const Watchlist = ({watchlist}) => {
    return (
        <>

            <div className="flex justify-center flex-wrap m-4">
                <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-2 ">All Genre</div>
                <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-300 rounded-xl text-white font-bold mx-2">Action</div>
                <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-300 rounded-xl text-white font-bold mx-2">Comedy</div>
                <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-300 rounded-xl text-white font-bold mx-2">Crime</div>
                <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-300 rounded-xl text-white font-bold mx-2">Animation</div>
            </div>

            <div className="flex justify-center my-4">
                <input className="h-[3rem] w-[18rem] bg-gray-200 rounded-lg p-3 border-none my-8" type="text" placeholder="Search for Movies..."/>
            </div>

            <div className="border border-gray-200 m-8 overflow-hidden rounded-lg">
                <table className="w-full text-gray-600 text-center">
                    <thead className="border-b-4">
                        <tr>
                            <th>Name</th>
                            <th>Ratings</th>
                            <th>Popularity</th>
                            <th>Genre</th>
                            <th>Watched</th>
                        </tr>
                    </thead>

                    <tbody>
                        {watchlist.map((movieObj) => {
                            return <tr key={movieObj} className="border-b-2">
                                <td className="flex item-center px-6 py-4">
                                    <img className="h-[8rem] w-[6rem]" src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} alt="" />
                                    <div className="mx-10 justify-center">{movieObj.title}</div>
                                </td>

                                <td>{movieObj.vote_average}</td>
                                <td>{movieObj.popularity}</td>
                                <td>Action</td>
                                <td>Yes</td>

                                <td><button className="hover:bg-red-200 text-red-500 font-bold">Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </>        
    )
}

Watchlist.propTypes = {
    watchlist: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Watchlist

//https://www.movieposters.com/cdn/shop/files/captain-america-brave-new-world_vxepsisb_240x360_crop_center.progressive.jpg?v=1732042120