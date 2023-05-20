import PropTypes from "prop-types";

const Card = ({ number, onDelete }) => {
    const handleDelete = () => {
        onDelete(number);
    };

    return (
    <div className="w-48 h-32 md:w-64 md:h-48 bg-gray-50 rounded-lg flex flex-col
             justify-center items-center relative mx-auto my-2">
        <span className="text-4xl font-bold">{number}</span>
        <button className="absolute top-2 right-2 p-2" onClick={handleDelete}>
            &#x2716;
        </button>
    </div>
    );
}

Card.propTypes = {
    number: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default Card