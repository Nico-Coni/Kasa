import { useEffect, useState } from 'react';
import '../../styles/Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export function Carousel({ picturesCount, rental }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const index = currentIndex % picturesCount;
    const [isFading, setIsFading] = useState(false);
    const [displayedIndex, setDisplayedIndex] = useState(0);

    // Precharge les images pour éviter le changement de taille lors du chargement
    useEffect(() => {
        rental.pictures.forEach((src) => {
            const img = new Image();
            img.src = src;
        })
    })

    // Utiliser % pour éviter les erreurs d'index
    // et pour permettre le passage de la dernière à la première image
    function next() {
        // setCurrentIndex((prevIndex) => (prevIndex + 1) % picturesCount
        // );
        setIsFading(true);
        setTimeout(() => {
            setDisplayedIndex((currentIndex + 1) % picturesCount);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % picturesCount);
            setIsFading(false);
        }, 300); // durée de la transition (en ms)
    }

    function prev() {
        // setCurrentIndex((prevIndex) => (prevIndex - 1 + picturesCount) % picturesCount);
        setIsFading(true);
        setTimeout(() => {
            setDisplayedIndex((currentIndex - 1 + picturesCount) % picturesCount);
            setCurrentIndex((prevIndex) => (prevIndex - 1 + picturesCount) % picturesCount);
            setIsFading(false);
        }, 300);
    }

    return (
        <div className='carousel-container'>
            <button onClick={prev} className='carousel-button left'><FontAwesomeIcon icon={faChevronLeft} /></button>
            <div className="carousel">
                <div className="carousel-item">
                    <img src={rental.pictures[displayedIndex]} key={index} alt={rental.title} className={`img-carousel ${isFading ? 'fade' : ''}`} />
                </div>
            </div>
            <button onClick={next} className='carousel-button right'><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
    );
}