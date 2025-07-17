import RentalCard from './RentalCard.jsx';
import data from '../../data/data.json';
import { Link } from 'react-router-dom';
import '../../styles/Gallery.css';

export function RentalList() {
    const Rentals = data.Rentals;
    const First6 = Rentals.slice(0, 6);
    return (
        <div className='gallery'>
            <div className='rental-list'>
                {First6.map((rental) => (
                    <Link to={`/rental/${rental.id}`} key={rental.id}>
                        < RentalCard key={rental.id} rental={rental} />
                    </Link>
                ))}
            </div>
        </div>
    );
}