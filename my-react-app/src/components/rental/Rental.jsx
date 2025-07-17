import { useParams } from "react-router-dom";
import data from '../../data/data.json';
import { Carousel } from './Carousel.jsx';
import '../../styles/Rental.css';

export function Single() {
    const Rentals = data.Rentals;
    const { id } = useParams()
    const rental = Rentals.find(rental => rental.id === id);

    return (
        <div className="rental-container">
            <Carousel
                items={rental.pictures}
                renderItem={(picture, index) => (
                    <img src={picture} key={index} alt={rental.title} className="img-carousel active" />
                )
                }
            />
            <div className="rental-details">
                <div className="rental-name">
                    <h1 className="rental-title">{rental.title}</h1>
                    <p className="rental-location">{rental.location}</p>
                    <p>{rental.tag}</p>
                </div>
                <div className="rental-host">
                    <p className="host-name">{rental.host.name}</p>
                    <img src={rental.host.picture} alt={rental.host.name} className="host-picture" />
                    <p>{rental.rating}</p>
                </div>
            </div>
        </div>
    );
}