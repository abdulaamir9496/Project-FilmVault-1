import PropTypes from 'prop-types'

const MovieCard = ({poster_path, name, handleAddtoWatchList}) => {
    return (
        <>
            <div className="h-[40vh] w-[150px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
                <div className='m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60'>
                    &#128525;
                </div>
                <div className="text-white text-xl w-full p-1 text-center bg-gray-900/60">{name}</div>
            </div>
        </>
    )
}

export default MovieCard

MovieCard.propTypes = {
    poster_path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

//`url(https://www.designmantic.com/blog/wp-content/uploads/2017/10/Harry-Potter.jpg)`