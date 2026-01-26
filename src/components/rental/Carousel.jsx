import { useEffect, useState } from 'react';
import '../../styles/Carousel.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export function Carousel({ rental }) {
    const pictures = rental.pictures;
    const picturesCount = pictures.length;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const changeImage = (newIndex) => {
        if (!isVisible) return; // anti spam clic

        setIsVisible(false); // fade out

        setTimeout(() => {
            setCurrentIndex(newIndex);
            setIsVisible(true); // fade in
        }, 300);
    };

    const next = () => {
        changeImage((currentIndex + 1) % picturesCount);
    };

    const prev = () => {
        changeImage(
            (currentIndex - 1 + picturesCount) % picturesCount
        );
    };

    // Préchargement (1 seule fois)
    useEffect(() => {
        pictures.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, [pictures]);

    return (
        <div className="carousel-container">
            <button onClick={prev} className="carousel-button left">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <div className="carousel">
                <div className="carousel-item">
                    <img
                        src={pictures[currentIndex]}
                        alt={rental.title}
                        className={`img-carousel ${isVisible ? "show" : "hide"}`}
                    />
                </div>
            </div>

            <button onClick={next} className="carousel-button right">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
}