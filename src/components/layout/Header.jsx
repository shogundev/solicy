import PropTypes from "prop-types";
import Card from "../Card";

const Header = ({ generateRandomNumber, sortNumbers, isSorted }) => {
    return (
        <header className="border-b border-black p-4" id="header">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2"
                    onClick={generateRandomNumber}>Add Card</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2
                                disabled:bg-gray-200"
                    onClick={sortNumbers} disabled={isSorted}>
                Sort Cards
            </button>
        </header>
    );
};

Card.propTypes = {
    sortNumbers: PropTypes.func.isRequired,
    generateRandomNumber: PropTypes.func.isRequired,
    isSorted: PropTypes.bool.isRequired
}
export default Header