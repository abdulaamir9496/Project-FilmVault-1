import MovieCard from "./MovieCard"

const Movies = () => {
    return (
        <>
            <div className="p-5">
                <div className="text-2xl m-5 font-bold text-center ">
                    Trending Movies
                </div>

                <div className="flex flex-row flex-wrap justify-around space-x-5 space-y-8">
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </div>
        </>
    )
}

export default Movies
