import { useParams } from "react-router-dom";
import data from '../../data/data.json';

export function Single() {
    const Rentals = data.Rentals;
    const { id } = useParams()
    const rental = Rentals.find(rental => rental.id === id);
    return (
        <div>
            <h1>Single Page {rental.title}</h1>
            <p>This is a single page component.</p>
        </div>
    );
}