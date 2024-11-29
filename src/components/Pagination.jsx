import PropTypes from "prop-types";

const Pagination = ({ handlePrev, handleNext, pageNo }) => {
    return (
        <div className="bg-gray-400 flex justify-center text-center p-4 mt-8">
        <div
          onClick={handlePrev} //invoke handlePrev
            className="px-8 hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
            <i className="fa-solid fa-arrow-left-long"></i>
        </div>
        <div className="font-bold">{pageNo}</div> {/*Display current page */}
        <div
          onClick={handleNext} //invoke handleNext
            className="px-8 hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
            <i className="fa-solid fa-arrow-right"></i>
        </div>
        </div>
    );
    };


Pagination.propTypes = {
    handlePrev: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
    pageNo: PropTypes.number.isRequired
}


export default Pagination;
