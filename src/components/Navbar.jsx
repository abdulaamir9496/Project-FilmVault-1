import { Link } from "react-router"
// for not re-loading complete browser to save that time and make it more efficient 
//we use Links which is from router-dom instead of using anchor tag

const Navbar = () => {
    return (
        <>
            <div className="flex border space-x-8 items-center pl-3 py-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                {/* instead of using anchor tags we will be using Link for better performance and efficient to save loading time */}
                <Link to="/" className="text-blue-400 text-3xl font-semibold">Movies</Link>
                <Link to="watchlist" className="text-blue-400 text-3xl font-semibold">Watchlist</Link>
            </div>
        </>
    )
}

export default Navbar
