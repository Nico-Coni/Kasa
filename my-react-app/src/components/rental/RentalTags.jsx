import '../../styles/RentalTags.css';

export function RentalTags({ tags }) {
    return (
        <div className="rental-tags">
            {tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
            ))}
        </div>
    );
}