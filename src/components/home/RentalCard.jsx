import '../../styles/RentalCard.sass';
function RentalCard({ rental }) {
    return (
        <div className="rental-card">
            <img src={rental.cover} alt={rental.title} />
            <h2>{rental.title}</h2>
        </div>
    );
}
export default RentalCard;