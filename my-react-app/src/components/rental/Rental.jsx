import { useParams } from "react-router-dom";
import data from '../../data/data.json';
import { Carousel } from './Carousel.jsx';
import '../../styles/Rental.sass';
import { RentalTags } from "./RentalTags.jsx";
import { RentalRating } from "./RentalRating.jsx";
import { Collapsible } from '../commun/Collapsible.jsx';

export function Single() {
    const Rentals = data.Rentals;
    const { id } = useParams()
    const rental = Rentals.find(rental => rental.id === id);

    return (
        <div className="rental-container">
            <Carousel
                picturesCount={rental.pictures.length}
                rental={rental}
            />
            <div className="rental-details">
                <div className="rental-name">
                    <h1 className="rental-title">{rental.title}</h1>
                    <p className="rental-location">{rental.location}</p>
                    <RentalTags tags={rental.tags} />
                </div>
                <div className="rental-host">
                    <div className="rental-host-details">
                        <p className="host-name">{rental.host.name}</p>
                        <img src={rental.host.picture} alt={rental.host.name} className="host-picture" />
                    </div>
                    <RentalRating rating={rental.rating} />
                </div>
            </div>
            <div className="rental-description">
                <Collapsible summary="Description">
                    <p>{rental.description}</p>
                </Collapsible>
                <Collapsible summary="Équipements">
                    <ul>
                        {rental.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </Collapsible>
            </div>
        </div>
    );
}