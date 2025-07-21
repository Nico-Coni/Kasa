import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import '../../styles/RentalRating.css';

export function RentalRating({ rating }) {
    const stars = Array.from({ length: 5 }, (_, index) => {
        return (
            <span key={index} className={`star ${index < rating ? 'rated' : ''}`}>
                <FontAwesomeIcon icon={faStar} />
            </span>
        );
    });

    return (
        <div className="rental-rating">
            {stars}
        </div>
    );
}